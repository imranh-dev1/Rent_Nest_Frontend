export interface LoginPayload {
    email: string;
    password: string;
}

export interface ActionState {
    success: boolean;
    message: string;
    errors?: Record<string, string[]>;
}

export type LoginState = {
    success: boolean;
    message: string;
    errors?: {
        email?: string[];
        password?: string[];
    };
};

export interface RegisterState {
    success: boolean;
    message: string;
    errors?: {
        name?: string[];
        email?: string[];
        password?: string[];
        confirmPassword?: string[];
        role?: string[];
        profilePhoto?: string[];
    };
}

export interface IUser {
    id: string;
    name: string;
    email: string;
    phone: string | null;
    role: "ADMIN" | "LANDLORD" | "TENANT";
    status: "ACTIVE" | "BLOCKED";
    profileImg: string | null;
    createdAt: string;
    updatedAt: string;
}