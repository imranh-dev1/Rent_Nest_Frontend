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