"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
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
import { createCategory } from "../../_actions/createCategory";


export default function CreateCategoryDialog() {
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (
        values: CategoryFormValues
    ) => {
        try {
            setLoading(true);

            const res = await createCategory(values);

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
                <Button>
                    <Plus className="mr-2 h-4 w-4" />
                    Add Category
                </Button>
            </DialogTrigger>

            <DialogContent className="sm:max-w-lg">
                <DialogHeader>
                    <DialogTitle>
                        Create Category
                    </DialogTitle>

                    <DialogDescription>
                        Add a new property category.
                    </DialogDescription>
                </DialogHeader>

                <CategoryForm
                    loading={loading}
                    onSubmit={handleSubmit}
                />
            </DialogContent>
        </Dialog>
    );
}