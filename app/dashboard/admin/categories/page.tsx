import { getCategories } from "../_actions/getCategories";
import CategoryTable from "../_components/categories/CategoryTable";
import CreateCategoryDialog from "../_components/categories/CreateCategoryDialog";


export default async function CategoriesPage() {
    const { data: categories } = await getCategories();

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold">
                        Categories
                    </h1>

                    <p className="text-muted-foreground">
                        Manage all property categories.
                    </p>
                </div>

                <CreateCategoryDialog />
            </div>

            <CategoryTable categories={categories} />
        </div>
    );
}