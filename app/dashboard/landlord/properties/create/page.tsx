
import { handleCreateProperty } from "@/app/dashboard/_actions/properties/createProperty";
import { CreatePropertyForm } from "../../_components/createPropertyForm";
import { getCategories } from "@/app/dashboard/admin/_actions/getCategories";

export default async function CreatePropertyPage() {

    const categories = await getCategories();
    return (
        <div className="mx-auto px-4">
            <div className="mb-8 bg-primary p-8 text-primary-foreground shadow-xl">
                <h1 className="text-3xl font-extrabold tracking-tight">List Your Property</h1>
                <p className="mt-2">
                    Fill in the sections below to upload your apartment or home for rent using shadcn design tokens.
                </p>
            </div>
            <CreatePropertyForm categories={categories} onSubmitAction={handleCreateProperty} />
        </div>
    );
}