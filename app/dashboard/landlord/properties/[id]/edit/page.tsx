import { getPropertyById } from "@/app/(public)/_actions/property/getPropertyById";
import { handleUpdateProperty } from "@/app/dashboard/_actions/properties/updateProperty";
import UpdatePropertyForm from "@/app/dashboard/_components/property/UpdatePropertyForm";

import { getCategories } from "@/app/dashboard/admin/_actions/getCategories";


interface PageProps {
    params: Promise<{
        id: string;
    }>;
}


export default async function UpdatePropertyPage({
    params,
}: PageProps) {


    const { id } = await params;


    const [
        categories,
        property
    ] = await Promise.all([

        getCategories(),

        getPropertyById(id)

    ]);



    if (!property) {
        return (
            <div>
                Property not found
            </div>
        );
    }



    return (

        <div className="mx-auto px-4">


            <div className="mb-8 bg-primary p-8 text-primary-foreground shadow-xl">

                <h1 className="text-3xl font-extrabold tracking-tight">
                    Edit Property
                </h1>


                <p className="mt-2">
                    Update your property information and save changes.
                </p>


            </div>



            <UpdatePropertyForm

                categories={categories}

                property={property}

                onSubmitAction={handleUpdateProperty}

            />


        </div>

    );
}