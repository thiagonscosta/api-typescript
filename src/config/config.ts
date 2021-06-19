import * as dotenv from 'dotenv';
dotenv.config();

export default {
  jwtSecret: process.env.SECRET || '',
  db: {
    url: process.env.DATABASE || ''
  }
}