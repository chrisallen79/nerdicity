import dotenv from 'dotenv';

dotenv.config();

var CONFIG = {
  api_port: process.env.API_PORT || '3001',
  mongo_db_uri: process.env.MONGO_DB_URI || 'test:test@localhost',
  app_hostname: process.env.APP_HOSTNAME || 'localhost:3000',
  jwt_secret: process.env.JWT_SECRET || 'secret',
  jwt_expiration: process.env.JWT_EXPIRATION || 300000
};

export default CONFIG;
