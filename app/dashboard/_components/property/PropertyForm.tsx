"use client";

import React, {
    useCallback,
    useRef,
    useState,
    useTransition,
} from "react";

import {
    useForm,
    Controller
} from "react-hook-form";

import {
    zodResolver
} from "@hookform/resolvers/zod";

import {
    toast
} from "sonner";

import {
    uploadImages
} from "@/lib/uploadImage";


import {
    propertySchema,
    PropertyFormValues,
    CreatePropertyPayload,
} from "@/validations/properties.validation";
import { Button } from "@/components/ui/button";
import { Building2, CircleCheckBig, DollarSign, ImageIcon, LogIn, MapPin, Upload, X } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Attachment, AttachmentAction, AttachmentActions, AttachmentContent, AttachmentDescription, AttachmentGroup, AttachmentMedia, AttachmentTitle } from "@/components/ui/attachment";
import Image from "next/image";


const AVAILABLE_AMENITIES = [
    { id: "wifi", label: "Free Wi-Fi" },
    { id: "parking", label: "Parking Space" },
    { id: "gym", label: "Fitness Center" },
    { id: "pool", label: "Swimming Pool" },
    { id: "security", label: "24/7 Security" },
    { id: "lift", label: "Elevator/Lift" },
];


interface Category {
    id: string;
    name: string;
}


interface ImageFile extends File {
    preview?: string;
    id?: string;
}



interface PropertyFormProps {

    mode: "create" | "update";

    categories: Category[];

    propertyId?: string;

    defaultValues?: Partial<PropertyFormValues>;

    onSubmitAction: (
        data: CreatePropertyPayload
    ) => Promise<{
        success: boolean;
        message: string;
    }>;

}



export default function PropertyForm({

    mode,
    categories,

    defaultValues,

    onSubmitAction

}: PropertyFormProps) {


    const [isPending, startTransition] = useTransition();

    const [isUploading, setIsUploading] = useState(false);

    const [uploadProgress, setUploadProgress] = useState(0);


    const fileInputRef = useRef<HTMLInputElement>(null);



    const {
        register,
        handleSubmit,
        control,
        reset,
        setValue,
        formState: {
            errors
        }

    } = useForm<PropertyFormValues>({

        resolver: zodResolver(propertySchema) as any,

        defaultValues: {
            title: "",
            description: "",
            address: "",
            city: "",
            categoryId: "",
            rentAmount: 0,
            bedrooms: 1,
            bathrooms: 1,
            area: 0,
            amenities: [],
            images: [],

            ...defaultValues
        }

    });



    const [imageFiles, setImageFiles] = useState<ImageFile[]>([]);



    const handleFileSelect = useCallback(

        (e: React.ChangeEvent<HTMLInputElement>) => {


            const files = Array.from(
                e.target.files || []
            );


            if (!files.length) return;



            const validFiles = files.filter(
                (file) => {


                    const validType = [
                        "image/jpeg",
                        "image/png",
                        "image/webp",
                        "image/gif"
                    ].includes(file.type);


                    const validSize =
                        file.size <= 5 * 1024 * 1024;



                    if (!validType) {

                        toast.error(
                            `${file.name} invalid image`
                        );

                        return false;

                    }



                    if (!validSize) {

                        toast.error(
                            `${file.name} exceeds 5MB`
                        );

                        return false;

                    }


                    return true;


                });


            if (!validFiles.length) return;



            const previews = validFiles.map(
                (file) => {

                    const image = file as ImageFile;


                    image.preview =
                        URL.createObjectURL(file);


                    image.id =
                        crypto.randomUUID();


                    return image;

                });


            setImageFiles(
                prev => [
                    ...prev,
                    ...previews
                ]
            );


            if (fileInputRef.current) {

                fileInputRef.current.value = "";

            }



        },

        []);



    const removeImage = (index: number) => {


        const updated = [
            ...imageFiles
        ];


        const removed =
            updated[index];


        if (removed.preview) {

            URL.revokeObjectURL(
                removed.preview
            );

        }


        updated.splice(index, 1);


        setImageFiles(updated);


    };



    const submitHandler =
        handleSubmit((data) => {


            if (imageFiles.length === 0) {

                toast.error(
                    "Please upload at least one image"
                );

                return;

            }



            startTransition(async () => {


                try {


                    setIsUploading(true);


                    const uploaded =
                        await uploadImages(
                            imageFiles
                        );



                    const imageUrls =
                        uploaded.map(
                            (img) => img.secure_url
                        );



                    const payload: CreatePropertyPayload = {

                        title: data.title,

                        description: data.description,

                        address: data.address,

                        city: data.city,

                        categoryId: data.categoryId,


                        rentAmount: Number(data.rentAmount),

                        bedrooms: Number(data.bedrooms),

                        bathrooms: Number(data.bathrooms),

                        area: Number(data.area),


                        amenities: data.amenities,


                        images: imageUrls

                    };



                    const response =
                        await onSubmitAction(
                            payload
                        );



                    if (response.success) {

                        toast.success(
                            response.message
                        );


                        if (mode === "create") {

                            reset();

                            setImageFiles([]);

                        }


                    } else {

                        toast.error(
                            response.message
                        );

                    }



                } catch (error) {

                    toast.error(
                        "Something went wrong"
                    );


                } finally {


                    setIsUploading(false);

                }



            });


        });



    return (

        <form onSubmit={submitHandler} className="space-y-8">

            <div className="flex gap-6">
                <Card className="shadow-xs flex-1">
                    <CardHeader>
                        <div className="flex items-center gap-3">
                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                                <Building2 className="h-6 w-6" />
                            </div>
                            <div>
                                <CardTitle>Basic Information</CardTitle>
                                <CardDescription>Provide an attractive name and overview of your rental.</CardDescription>
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent className="space-y-5">
                        <Field>
                            <FieldLabel>Property Title</FieldLabel>
                            <Input {...register("title")} placeholder="Modern apartment with sea view" />
                            <FieldError>{errors.title?.message}</FieldError>
                        </Field>

                        <Field>
                            <FieldLabel>Description</FieldLabel>
                            <Textarea {...register("description")} placeholder="Describe your property in detail..." rows={4} />
                            <FieldError>{errors.description?.message}</FieldError>
                        </Field>
                    </CardContent>
                </Card>
                <Card className="shadow-xs flex-1">
                    <CardHeader>
                        <div className="flex items-center gap-3">
                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                                <MapPin className="h-6 w-6" />
                            </div>
                            <div>
                                <CardTitle>Location & Category</CardTitle>
                                <CardDescription>Help renters easily locate your rental spot.</CardDescription>
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent className="grid gap-5 md:grid-cols-2">
                        <div className="md:col-span-2">
                            <Field>
                                <FieldLabel>Full Address</FieldLabel>
                                <Input {...register("address")} placeholder="Road 11, House 234, Block D" />
                                <FieldError>{errors.address?.message}</FieldError>
                            </Field>
                        </div>

                        <Field>
                            <FieldLabel>City</FieldLabel>
                            <Input {...register("city")} placeholder="Dhaka" />
                            <FieldError>{errors.city?.message}</FieldError>
                        </Field>

                        <Field>
                            <FieldLabel>Category Type</FieldLabel>
                            <Controller
                                control={control}
                                name="categoryId"
                                render={({ field }) => (
                                    <Select
                                        value={field.value}
                                        onValueChange={field.onChange}
                                    >
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select Category" />
                                        </SelectTrigger>

                                        <SelectContent>
                                            {categories.map((category) => (
                                                <SelectItem
                                                    key={category.id}
                                                    value={category.id}
                                                >
                                                    {category.name}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                )}
                            />
                            <FieldError>{errors.categoryId?.message}</FieldError>
                        </Field>
                    </CardContent>
                </Card>
            </div>

            <div className="flex gap-6">
                <Card className="shadow-xs flex-1">
                    <CardHeader>
                        <div className="flex items-center gap-3">
                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                                <DollarSign className="h-6 w-6" />
                            </div>
                            <div>
                                <CardTitle>Pricing & Size Specs</CardTitle>
                                <CardDescription>Mention financial expectations and square footage parameters.</CardDescription>
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent className="grid gap-5 sm:grid-cols-2 md:grid-cols-4">
                        <div className="sm:col-span-2 md:col-span-2">
                            <Field>
                                <FieldLabel>Monthly Rent (BDT)</FieldLabel>
                                <div className="relative">
                                    <Input {...register("rentAmount")} type="number" placeholder="25000" className="pl-8" />
                                    <span className="absolute left-3 top-2.5 text-muted-foreground text-sm font-medium">৳</span>
                                </div>
                                <FieldError>{errors.rentAmount?.message}</FieldError>
                            </Field>
                        </div>

                        <div className="sm:col-span-2 md:col-span-2">
                            <Field>
                                <FieldLabel>Total Area (Sq Ft)</FieldLabel>
                                <div className="relative">
                                    <Input {...register("area")} type="number" placeholder="1450" className="pr-14" />
                                    <span className="absolute right-3 top-2.5 text-muted-foreground text-xs font-medium">sq ft</span>
                                </div>
                                <FieldError>{errors.area?.message}</FieldError>
                            </Field>
                        </div>
                        <div className="sm:col-span-2 md:col-span-2">
                            <Field >
                                <FieldLabel>Bedrooms</FieldLabel>
                                <Input {...register("bedrooms")} type="number" />
                                <FieldError>{errors.bedrooms?.message}</FieldError>
                            </Field>
                        </div>
                        <div className="sm:col-span-2 md:col-span-2">
                            <Field >
                                <FieldLabel>Bathrooms</FieldLabel>
                                <Input {...register("bathrooms")} type="number" />
                                <FieldError>{errors.bathrooms?.message}</FieldError>
                            </Field>
                        </div>
                    </CardContent>
                </Card>

                <Card className="shadow-xs flex-1">
                    <CardHeader>
                        <div className="flex items-center gap-3">
                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                                <CircleCheckBig className="h-6 w-6" />
                            </div>
                            <div>
                                <CardTitle>Amenities & Features</CardTitle>
                                <CardDescription>Select all structural or additional features your space provides.</CardDescription>
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <Controller
                            control={control}
                            name="amenities"
                            render={({ field }) => (
                                <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                                    {AVAILABLE_AMENITIES.map((amenity) => {
                                        const isChecked = field.value?.includes(amenity.id);
                                        return (
                                            <label
                                                key={amenity.id}
                                                className={`flex items-center space-x-3 border px-4 py-2 transition-all cursor-pointer ${isChecked ? "border-primary bg-primary/5" : "border-muted"
                                                    }`}
                                            >
                                                <Checkbox
                                                    id={amenity.id}
                                                    checked={isChecked}
                                                    onCheckedChange={(checked) => {
                                                        if (checked) {
                                                            field.onChange([...(field.value || []), amenity.id]);
                                                        } else {
                                                            field.onChange((field.value || []).filter((id) => id !== amenity.id));
                                                        }
                                                    }}
                                                />
                                                <span className="text-sm">{amenity.label}</span>
                                            </label>
                                        );
                                    })}
                                </div>
                            )}
                        />
                    </CardContent>
                </Card>
            </div>

            {/* Image Upload Section */}
            <Card className="shadow-xs">
                <CardHeader>
                    <div className="flex items-center gap-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                            <ImageIcon className="h-6 w-6" />
                        </div>
                        <div>
                            <CardTitle>Property Images</CardTitle>
                            <CardDescription>Upload up to 5 images of your property (JPEG, PNG, WebP)</CardDescription>
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="space-y-4">
                    <Field>
                        {/* Image Upload Area */}
                        <div
                            className="relative flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-muted-foreground/25 p-8 transition-colors hover:border-primary/50 hover:bg-primary/5"
                            onDragOver={(e) => {
                                e.preventDefault();
                                e.currentTarget.classList.add('border-primary', 'bg-primary/10');
                            }}
                            onDragLeave={(e) => {
                                e.preventDefault();
                                e.currentTarget.classList.remove('border-primary', 'bg-primary/10');
                            }}
                            onDrop={(e) => {
                                e.preventDefault();
                                e.currentTarget.classList.remove('border-primary', 'bg-primary/10');
                                const files = Array.from(e.dataTransfer.files);
                                if (files.length > 0) {
                                    handleFileSelect({ target: { files } } as any);
                                }
                            }}
                        >
                            <input
                                ref={fileInputRef}
                                type="file"
                                accept="image/jpeg,image/png,image/webp,image/gif"
                                multiple
                                className="absolute inset-0 opacity-0 cursor-pointer"
                                onChange={handleFileSelect}
                                disabled={imageFiles.length >= 5 || isPending}
                            />

                            <div className="flex flex-col items-center gap-2 text-center">
                                <div className="rounded-full bg-primary/10 p-4 text-primary">
                                    <Upload className="h-8 w-8" />
                                </div>
                                <div className="space-y-1">
                                    <p className="font-medium">
                                        {imageFiles.length === 0 ? "Drop your images here" : "Add more images"}
                                    </p>
                                    <p className="text-sm text-muted-foreground">
                                        {imageFiles.length === 0
                                            ? "or click to browse (JPG, PNG, WebP up to 5MB)"
                                            : `${imageFiles.length}/5 images uploaded`
                                        }
                                    </p>
                                </div>
                                {isUploading && (
                                    <div className="w-48 space-y-2">
                                        <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
                                            <div
                                                className="h-full bg-primary transition-all duration-300"
                                                style={{ width: `${uploadProgress}%` }}
                                            />
                                        </div>
                                        <p className="text-sm text-muted-foreground">
                                            Uploading... {Math.round(uploadProgress)}%
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>
                        <FieldError>{errors.images?.message}</FieldError>
                    </Field>

                    {/* Image Gallery */}
                    {imageFiles.length > 0 && (
                        <AttachmentGroup className="gap-2">
                            {imageFiles.map((file, index) => (
                                <Attachment
                                    key={file.id || index}
                                    state={isUploading ? "uploading" : "done"}
                                    className="relative"
                                >
                                    <AttachmentMedia variant="image">
                                        {file.preview ? (
                                            <Image
                                                src={file.preview}
                                                alt={`Property image ${index + 1}`}
                                                fill
                                                className="object-cover"
                                                unoptimized={!file.preview.startsWith('http')}
                                            />
                                        ) : (
                                            <ImageIcon className="size-6" />
                                        )}
                                    </AttachmentMedia>
                                    <AttachmentContent>
                                        <AttachmentTitle>{file.name}</AttachmentTitle>
                                        <AttachmentDescription>
                                            {(file.size / 1024 / 1024).toFixed(2)} MB
                                        </AttachmentDescription>
                                    </AttachmentContent>
                                    <AttachmentActions>
                                        <AttachmentAction
                                            variant="ghost"
                                            size="icon-xs"
                                            className="text-muted-foreground hover:text-destructive"
                                            onClick={() => removeImage(index)}
                                            type="button"
                                        >
                                            <X className="size-3" />
                                        </AttachmentAction>
                                    </AttachmentActions>
                                </Attachment>
                            ))}
                        </AttachmentGroup>
                    )}
                </CardContent>
            </Card>


            <div className="flex justify-center">
                <Button type="submit" disabled={isPending}>
                    <LogIn className="mr-2 h-4 w-4" />
                    {isPending
                        ? "Saving..."
                        : mode === "create"
                            ? "Create Property"
                            : "Update Property"
                    }
                </Button>
            </div>




        </form>


    );


}