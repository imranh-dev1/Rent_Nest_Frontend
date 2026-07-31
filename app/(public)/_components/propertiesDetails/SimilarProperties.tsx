
import PropertyCard from "@/components/property/PropertyCard";
import { getSimilarProperties } from "../../_actions/property/getSimilarProperties";


interface Props {
    categoryId: string;
    currentId: string;
}

export default async function SimilarProperties({
    categoryId,
    currentId,
}: Props) {
    const properties = await getSimilarProperties({
        categoryId,
        currentId,
    });

    if (!properties.length) return null;

    return (
        <section className="space-y-8">

            <div className="flex items-center justify-between">

                <div>

                    <h2 className="text-3xl font-bold">
                        Similar Properties
                    </h2>

                    <p className="text-muted-foreground">
                        Explore more properties you may like.
                    </p>

                </div>

            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

                {properties.slice(0, 3).map((property: any) => (
                    <PropertyCard
                        key={property.id}
                        property={property}
                    />
                ))}

            </div>

        </section>
    );
}