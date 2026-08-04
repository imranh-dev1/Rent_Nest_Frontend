"use client";

import { useState, useTransition } from "react";
import { Trash2, Loader2 } from "lucide-react";
import { toast } from "sonner";

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import { Button } from "@/components/ui/button";
import { deleteCategory } from "../../_actions/deleteCategory";

interface Props {
    id: string;
}

export default function DeleteCategoryButton({
    id,
}: Props) {
    const [open, setOpen] = useState(false);
    const [isPending, startTransition] = useTransition();
    const [loading, setLoading] = useState(false);

    const handleDelete = () => {
        setLoading(true);

        startTransition(async () => {
            try {
                const res = await deleteCategory(id);

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
        });
    };

    return (
        <AlertDialog
            open={open}
            onOpenChange={setOpen}
        >
            <AlertDialogTrigger asChild>
                <Button
                    size="icon"
                    variant="destructive"
                >
                    <Trash2 className="h-4 w-4" />
                </Button>
            </AlertDialogTrigger>

            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>
                        Delete Category
                    </AlertDialogTitle>

                    <AlertDialogDescription>
                        This action cannot be undone.
                        This will permanently delete this
                        category.
                    </AlertDialogDescription>
                </AlertDialogHeader>

                <AlertDialogFooter>
                    <AlertDialogCancel disabled={loading}>
                        Cancel
                    </AlertDialogCancel>

                    <AlertDialogAction
                        onClick={(e: any) => {
                            e.preventDefault();
                            handleDelete();
                        }}
                        disabled={loading || isPending}
                    >
                        {(loading || isPending) && (
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        )}

                        Delete
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}