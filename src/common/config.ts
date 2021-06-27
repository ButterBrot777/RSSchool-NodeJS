import dotenv from 'dotenv';
import path from 'path';

dotenv.config({
  path: path.join(__dirname, '../../.env')
});

export const { PORT, POSTGRES_PORT, POSTGRES_PASSWORD, POSTGRES_USER, POSTGRES_DB, POSTGRES_HOST, JWT_SECRET_KEY } = process.env;
export const { NODE_ENV } = process.env;
const { AUTH_MODE: authMode } = process.env;
export const AUTH_MODE = authMode === 'true';
