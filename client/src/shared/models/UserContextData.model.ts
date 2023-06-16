import IUser from './User.model'

export default interface UserContextData{
    users: IUser[],
    currentUser?: IUser  
}