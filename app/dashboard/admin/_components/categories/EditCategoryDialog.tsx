"use client";

import { useState } from "react";
import { Pencil } from "lucide-react";
import { toast } from "sonner";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";

import CategoryForm, {
    CategoryFormValues,
} from "./CategoryForm"; 
import { updateCategory } from "../../_actions/updateCategory";

interface Props {
    category: {
        id: string;
        name: string;
        description: string;
    };
}

export default function EditCategoryDialog({
    category,
}: Props) {
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (
        values: CategoryFormValues
    ) => {
        try {
            setLoading(true);

            const res = await updateCategory(
                category.id,
                values
            );

            if (res.success) {
                toast.success(res.message);

                setOpen(false);
            } else {
                toast.error(res.message);
            }
        } catch (error) {
            console.error(error);

            toast.error("Something went wrong.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <Dialog
            open={open}
            onOpenChange={setOpen}
        >
            <DialogTrigger asChild>
                <Button
                    size="icon"
                    variant="outline"
                >
                    <Pencil className="h-4 w-4" />
                </Button>
            </DialogTrigger>

            <DialogContent className="sm:max-w-lg">
                <DialogHeader>
                    <DialogTitle>
                        Edit Category
                    </DialogTitle>

                    <DialogDescription>
                        Update category information.
                    </DialogDescription>
                </DialogHeader>

                <CategoryForm
                    loading={loading}
                    defaultValues={{
                        name: category.name,
                        description: category.description,
                    }}
                    onSubmit={handleSubmit}
                />
            </DialogContent>
        </Dialog>
    );
}