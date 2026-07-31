import Hero from "../_components/properties/Hero";
import Toolbar from "../_components/properties/Tolbar";
import PropertyGrid from "../_components/properties/PropertyGrid";
import FilterSidebar from "../_components/properties/FilterSidebar";
import { getProperties } from "../_actions/property/getProperties";
import AppPagination from "@/components/shared/AppPagination";
import { PropertySearchParams } from "@/types/property";


interface PropertiesPageProps {
    searchParams: Promise<PropertySearchParams>;
}
export default async function PropertiesPage({
    searchParams,
}: PropertiesPageProps) {
    const params = await searchParams;

    const page = Number(params.page ?? 1);
    const limit = Number(params.limit ?? 9);

    const { data: properties, meta } = await getProperties({
        page: Number(params.page ?? 1),
        limit: Number(params.limit ?? 9),
        search: params.search,
        city: params.city,
        categoryId: params.categoryId,
        minPrice: params.minPrice ? Number(params.minPrice) : undefined,
        maxPrice: params.maxPrice ? Number(params.maxPrice) : undefined,
        availability: params.availability,
        sortBy: params.sortBy ?? "createdAt",
        sortOrder: (params.sortOrder as "asc" | "desc") ?? "desc",
    });

    // console.log(properties, meta)


    return (

        <main className="pb-20">
            <Hero />

            <section className="container mx-auto px-4 py-10">
                <div className="grid gap-8 lg:grid-cols-12">
                    {/* Sidebar */}

                    <aside className="hidden lg:col-span-3 lg:block">
                        <div className="sticky top-24">
                            <FilterSidebar />
                        </div>
                    </aside>

                    {/* Content */}

                    <div className="space-y-8 lg:col-span-9">
                        <Toolbar propertiesCount={meta.total} />

                        <PropertyGrid properties={properties} />

                        {meta.totalPage > 1 && (
                            <AppPagination currentPage={meta.page} totalPages={meta.totalPage} />
                        )}
                    </div>
                </div>
            </section>
        </main>
    );
}