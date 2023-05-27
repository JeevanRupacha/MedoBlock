import UserRole from "./UserRole.model";

export interface IUser {
    id: string;
    name: string;
    email: string;
    role: UserRole;
    imageUrl: string;
}