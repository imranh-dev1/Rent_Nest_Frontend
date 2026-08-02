
import { z } from "zod";

export const propertySchema = z.object({
    title: z.string().min(5, "Title must be at least 5 characters long"),
    description: z.string().min(10, "Description must be at least 10 characters long"),
    address: z.string().min(5, "Address is required"),
    city: z.string().min(2, "City is required"),
    categoryId: z.string().min(1, "Please select a category"),
    rentAmount: z.coerce.number().min(1, "Rent amount must be greater than 0"),
    bedrooms: z.coerce.number().min(1, "Minimum 1 bedroom required"),
    bathrooms: z.coerce.number().min(1, "Minimum 1 bathroom required"),
    area: z.coerce.number().min(1, "Area square feet must be greater than 0"),
    amenities: z.array(z.string()).default([]),
    images: z.array(z.instanceof(File)).min(1, "At least one image is required").max(5, "Maximum 5 images allowed"),
});