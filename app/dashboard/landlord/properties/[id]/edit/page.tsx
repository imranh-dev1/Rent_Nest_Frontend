import PropertyForm from "../../../_components/createPropertyForm";

interface PageProps {
    params: Promise<{
        id: string;
    }>;
}

export default async function EditPropertyPage({
    params,
}: PageProps) {
    const { id } = await params;

    // const property = await getSingleProperty(id);

    return (
        <main className="space-y-8">
            <PropertyForm
                mode="edit"
            // defaultValues={property.data}
            />
        </main>
    );
}