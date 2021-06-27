import { getManager } from 'typeorm';
import bcrypt from 'bcrypt';
import { User } from '../users/user.model';

async function authenticateUser(user: Partial<User>) {
  const { login, password } = user;
  const userRepository = getManager().getRepository(User);
  const userFromDB = await userRepository.findOne({login});
  if (userFromDB && await bcrypt.compare(String(password), String(userFromDB?.password))) {
    return userFromDB;
  }
  return false;
}

export { authenticateUser };
