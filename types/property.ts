export interface ICategory {
    id: string;
    name: string;
    description: string;
}

export interface ILandlord {
    id: string;
    name: string;
    email: string;
    phone: string | null;
    profileImg: string | null;
}

export interface IProperty {
    id: string;
    title: string;
    description: string;
    address: string;
    city: string;
    rentAmount: number;
    bedrooms: number;
    bathrooms: number;
    area: number;
    amenities: string[];
    images: string[];
    availability: "AVAILABLE" | "RENTED";
    landlordId: string;
    categoryId: string;
    createdAt: string;
    updatedAt: string;

    category: ICategory;
    landlord: ILandlord;
}

export interface PropertySearchParams {
    page?: string;
    limit?: string;
    search?: string;
    city?: string;
    categoryId?: string;
    minPrice?: string;
    maxPrice?: string;
    availability?: string;
    sortBy?: string;
    sortOrder?: string;
}

export interface GetPropertiesParams {
    page?: number;
    limit?: number;
    search?: string;
    city?: string;
    categoryId?: string;
    minPrice?: number;
    maxPrice?: number;
    availability?: string;
    sortBy?: string;
    sortOrder?: "asc" | "desc";
}