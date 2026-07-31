import { notFound } from "next/navigation";
import { getPropertyById } from "../../_actions/property/getPropertyById";
import PropertyHeader from "../../_components/propertiesDetails/PropertyHeader";
import PropertyDescription from "../../_components/propertiesDetails/PropertyDescription";
import PropertyAmenities from "../../_components/propertiesDetails/PropertyAmenities";
import PropertyDetails from "../../_components/propertiesDetails/PropertyDetails";
import PropertyMap from "../../_components/propertiesDetails/PropertyMap";
import LandlordCard from "../../_components/propertiesDetails/LandlordCard";
import RequestCard from "../../_components/propertiesDetails/RequestCard";
import SimilarProperties from "../../_components/propertiesDetails/SimilarProperties";
import PropertyGallery from "../../_components/propertiesDetails/PropertyGallery";

interface PageProps {
    params: Promise<{
        id: string;
    }>;
}

export default async function PropertyDetailsPage({
    params,
}: PageProps) {
    const { id } = await params;

    const property = await getPropertyById(id);

    if (!property) {
        notFound();
    }

    return (
        <main className="pb-20">
            <div className="container mx-auto space-y-10 px-4 py-10">

                <PropertyGallery property={property} />

                <PropertyHeader property={property} />

                <div className="grid gap-10 lg:grid-cols-12">

                    <div className="space-y-8 lg:col-span-8">

                        <PropertyDescription property={property} />

                        <PropertyAmenities property={property} />

                        <PropertyDetails property={property} />

                        <PropertyMap property={property} />

                        <LandlordCard property={property} />

                    </div>

                    <aside className="lg:col-span-4">

                        <div className="sticky top-24">

                            <RequestCard property={property} />

                        </div>

                    </aside>

                </div>

                <SimilarProperties
                    currentId={property.id}
                    categoryId={property.category.id}
                />

            </div>
        </main>
    );
}