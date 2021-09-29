import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { userRepository } from '../../data/index.js';
import { config } from '../../../config.js';

export const signUp = async (req, res) => {
  const { email, userName, password } = req.body;
  const userNameDuplicateCheck = await userRepository.findByUserName(userName);
  if (userNameDuplicateCheck) {
    return res.status(409).json({ message: `${userName} already exists` });
  }

  const hashedPassword = await bcrypt.hash(password, config.bcrypt.saltRounds);
  const userId = await userRepository.createUser({
    email,
    userName,
    password: hashedPassword,
  });
  const token = createToken(userId);
  res.status(201).json({ token, userName });
};

const createToken = (id) => {
  return jwt.sign({ id }, config.jwt.secretKey, {
    expiresIn: config.jwt.expiresInSec,
  });
};
