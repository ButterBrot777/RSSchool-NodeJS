import { User } from '../users/user.model';
declare function authenticateUser(user: Partial<User>): Promise<false | User>;
export { authenticateUser };
