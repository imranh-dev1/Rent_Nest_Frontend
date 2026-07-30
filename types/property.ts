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
