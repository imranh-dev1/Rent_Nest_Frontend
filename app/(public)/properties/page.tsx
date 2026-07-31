
import Hero from "../_components/properties/Hero";
import Toolbar from "../_components/properties/Tolbar";
import PropertyGrid from "../_components/properties/PropertyGrid";
import FilterSidebar from "../_components/properties/FilterSidebar";
import { getProperties } from "../_actions/property/getProperties";

export default async function PropertiesPage() {
    const properties = await getProperties();

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

                    <div className="lg:col-span-9 space-y-8">

                        <Toolbar propertiesCount={properties?.length} />

                        <PropertyGrid properties={properties} />

                    </div>

                </div>

            </section>

        </main>
    );
}