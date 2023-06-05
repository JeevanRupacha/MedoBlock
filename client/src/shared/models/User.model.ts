import UserRole from "./UserRole.model";

export default interface IUser {
    id: string;
    name: string;
    email: string;
    role: UserRole;
    imageUrl: string;
    wallet?: string;
}  