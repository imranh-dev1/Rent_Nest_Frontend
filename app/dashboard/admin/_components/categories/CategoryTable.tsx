"use client";

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

import { Badge } from "@/components/ui/badge";
import EditCategoryDialog from "./EditCategoryDialog";
import DeleteCategoryButton from "./DeleteCategoryButton";

interface Category {
    id: string;
    name: string;
    description: string;
    createdAt: string;
}

interface Props {
    categories: Category[];
}

export default function CategoryTable({
    categories,
}: Props) {
    return (
        <div className="overflow-hidden rounded-xl border bg-background shadow-sm p-4">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-16">
                            No
                        </TableHead>

                        <TableHead>
                            Name
                        </TableHead>

                        <TableHead>
                            Description
                        </TableHead>

                        <TableHead>
                            Status
                        </TableHead>

                        <TableHead>
                            Created At
                        </TableHead>

                        <TableHead className="text-right">
                            Actions
                        </TableHead>
                    </TableRow>
                </TableHeader>

                <TableBody>
                    {categories.length > 0 ? (
                        categories.map(
                            (category, index) => (
                                <TableRow key={category.id}>
                                    <TableCell>
                                        {index + 1}
                                    </TableCell>

                                    <TableCell className="font-medium">
                                        {category.name}
                                    </TableCell>

                                    <TableCell className="max-w-sm">
                                        <p className="line-clamp-2">
                                            {category.description}
                                        </p>
                                    </TableCell>

                                    <TableCell>
                                        <Badge className="bg-green-600 hover:bg-green-700">
                                            Active
                                        </Badge>
                                    </TableCell>

                                    <TableCell>
                                        {new Date(
                                            category.createdAt
                                        ).toLocaleDateString()}
                                    </TableCell>

                                    <TableCell>
                                        <div className="flex justify-end gap-2">
                                            <EditCategoryDialog
                                                category={
                                                    category
                                                }
                                            />

                                            <DeleteCategoryButton
                                                id={
                                                    category.id
                                                }
                                            />
                                        </div>
                                    </TableCell>
                                </TableRow>
                            )
                        )
                    ) : (
                        <TableRow>
                            <TableCell
                                colSpan={6}
                                className="h-32 text-center text-muted-foreground"
                            >
                                No categories found.
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </div>
    );
}