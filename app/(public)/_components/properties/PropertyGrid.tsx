import PropertyCard from "@/components/property/PropertyCard";
import { IProperty } from "@/types/property";

interface FeaturedProperties {
    properties: IProperty[];
}

export default function PropertyGrid({ properties }: FeaturedProperties) {

    return (
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {properties.map(property => (
                <PropertyCard key={property.id} property={property} />
            ))}
        </div>
    );
}