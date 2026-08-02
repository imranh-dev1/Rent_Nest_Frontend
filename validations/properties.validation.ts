import { z } from "zod";


export const createPropertyPayloadSchema = z.object({
    title: z.string(),
    description: z.string(),
    address: z.string(),
    city: z.string(),
    categoryId: z.string(),
    rentAmount: z.number(),
    bedrooms: z.number(),
    bathrooms: z.number(),
    area: z.number(),
    amenities: z.array(z.string()),

    images: z.array(z.string()),
});

export type CreatePropertyPayload =
    z.infer<typeof createPropertyPayloadSchema>;


export const propertySchema = z.object({

    title: z
        .string()
        .trim()
        .min(5, "Title must be at least 5 characters.")
        .max(100, "Title cannot exceed 100 characters."),

    description: z
        .string()
        .trim()
        .min(20, "Description must be at least 20 characters."),

    address: z
        .string()
        .trim()
        .min(5, "Address is required."),

    city: z
        .string()
        .trim()
        .min(2, "City is required."),

    categoryId: z
        .string()
        .uuid("Invalid category id."),

    rentAmount: z
        .coerce
        .number()
        .positive("Rent amount must be greater than 0."),

    bedrooms: z
        .coerce
        .number()
        .int()
        .min(1, "At least 1 bedroom is required."),

    bathrooms: z
        .coerce
        .number()
        .int()
        .min(1, "At least 1 bathroom is required."),

    area: z
        .coerce
        .number()
        .positive("Area must be greater than 0."),

    amenities: z
        .array(z.string().trim())
        .min(1, "At least one amenity is required."),

    // Backend expects URL string array
    images: z.array(z.string()).optional(),

});


export type PropertyFormValues = z.infer<typeof propertySchema>;