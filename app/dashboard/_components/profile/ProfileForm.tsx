"use client";

import { useState, useTransition } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

import { uploadImages } from "@/lib/uploadImage";

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardDescription,
} from "@/components/ui/card";

import {
    Field,
    FieldLabel,
    FieldError,
} from "@/components/ui/field";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import {
    User,
    Upload,
    Save,
} from "lucide-react";
import { profileSchema } from "@/validations/auth.validation";


interface ProfileFormProps {
    defaultValues: any;

    onSubmitAction: (
        data: any
    ) => Promise<{
        success: boolean;
        message: string;
    }>;
}

export default function ProfileForm({
    defaultValues,
    onSubmitAction,
}: any) {
    const [isPending, startTransition] = useTransition();

    const [preview, setPreview] = useState(
        defaultValues.profileImg || ""
    );

    const [imageFile, setImageFile] =
        useState<File | null>(null);

    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(profileSchema),
        defaultValues: {
            name: defaultValues?.name || "",
            email: defaultValues?.email || "",
            phone: defaultValues?.phone || "",
            profileImg: defaultValues?.profileImg || "",
            role: defaultValues?.role,
            status: defaultValues?.status,
        },
    });

    const handleImage = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        const file = e.target.files?.[0];

        if (!file) return;

        setImageFile(file);

        setPreview(URL.createObjectURL(file));

        // keep RHF value updated
        setValue("profileImg", URL.createObjectURL(file));
    };

    const submit = handleSubmit(
        async (data) => {
            console.log("VALID DATA");
            console.log(data);

            startTransition(async () => {
                try {
                    let imageUrl = data.profileImg;

                    if (imageFile) {
                        const uploaded = await uploadImages([imageFile]);
                        imageUrl = uploaded[0].secure_url;
                    }

                    const result = await onSubmitAction({
                        ...data,
                        profileImg: imageUrl,
                    });

                    if (result.success) {
                        toast.success(result.message);
                    } else {
                        toast.error(result.message);
                    }
                } catch (error) {
                    console.log(error);
                    toast.error("Something went wrong");
                }
            });
        },
        (errors) => {
            console.log("FORM ERRORS");
            console.log(errors);
        }
    );

    return (
        <form
            onSubmit={submit}
            className="max-w-4xl mx-auto"
        >
            <Card>
                <CardHeader>
                    <CardTitle>
                        Profile Information
                    </CardTitle>

                    <CardDescription>
                        Update your account details.
                    </CardDescription>
                </CardHeader>

                <CardContent className="space-y-6">

                    <div className="flex justify-center">
                        <label className="relative cursor-pointer">

                            <div className="relative h-32 w-32 overflow-hidden rounded-full border">

                                {preview ? (
                                    <Image
                                        src={preview}
                                        alt="Profile"
                                        fill
                                        className="object-cover"
                                    />
                                ) : (
                                    <div className="flex h-full w-full items-center justify-center bg-muted">
                                        <User className="h-12 w-12 text-muted-foreground" />
                                    </div>
                                )}
                            </div>

                            <input
                                hidden
                                type="file"
                                accept="image/*"
                                onChange={handleImage}
                            />

                            <div className="absolute bottom-1 right-1 rounded-full bg-primary p-2 text-white">
                                <Upload className="h-4 w-4" />
                            </div>
                        </label>
                    </div>

                    <Field>
                        <FieldLabel>Name</FieldLabel>
                        <Input {...register("name")} />
                        <FieldError>{errors.name?.message}</FieldError>
                    </Field>

                    <Field>
                        <FieldLabel>Email</FieldLabel>
                        <Input
                            readOnly
                            value={defaultValues.email}
                        />
                    </Field>

                    <Field>
                        <FieldLabel>Phone</FieldLabel>
                        <Input {...register("phone")} />
                        <FieldError>{errors?.phone?.message}</FieldError>
                    </Field>

                    <Field>
                        <FieldLabel>Role</FieldLabel>
                        <Input
                            readOnly
                            value={defaultValues.role}
                        />
                    </Field>

                    <Field>
                        <FieldLabel>Status</FieldLabel>
                        <Input
                            readOnly
                            value={defaultValues.status}
                        />
                    </Field>

                    <Button type="submit"
                        className="w-full"
                        disabled={isPending}
                    >
                        <Save className="mr-2 h-4 w-4" />

                        {isPending
                            ? "Saving..."
                            : "Save Changes"}
                    </Button>
                </CardContent>
            </Card>
        </form>
    );
}