"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const categorySchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    description: z.string().min(5, "Description must be at least 5 characters"),
});

export type CategoryFormValues = z.infer<typeof categorySchema>;

interface Props {
    defaultValues?: CategoryFormValues;
    loading?: boolean;
    onSubmit: (values: CategoryFormValues) => void;
}

export default function CategoryForm({
    defaultValues,
    loading,
    onSubmit,
}: Props) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<CategoryFormValues>({
        resolver: zodResolver(categorySchema),
        defaultValues: defaultValues ?? {
            name: "",
            description: "",
        },
    });

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-5"
        >
            <div className="space-y-2">
                <label className="text-sm font-medium">
                    Category Name
                </label>

                <Input
                    placeholder="Apartment"
                    {...register("name")}
                />

                {errors.name && (
                    <p className="text-sm text-red-500">
                        {errors.name.message}
                    </p>
                )}
            </div>

            <div className="space-y-2">
                <label className="text-sm font-medium">
                    Description
                </label>

                <Textarea
                    rows={4}
                    placeholder="Write category description..."
                    {...register("description")}
                />

                {errors.description && (
                    <p className="text-sm text-red-500">
                        {errors.description.message}
                    </p>
                )}
            </div>

            <Button
                type="submit"
                className="w-full"
                disabled={loading}
            >
                {loading && (
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                )}

                Save Category
            </Button>
        </form>
    );
}