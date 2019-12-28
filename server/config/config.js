import dotenv from 'dotenv';

dotenv.config();

var CONFIG = { 
    api_port: process.env.API_PORT || '3001',
    db_host: process.env.DB_HOST || 'localhost', 
    db_port: process.env.DB_PORT || '3306', 
    db_name: process.env.DB_NAME || 'nerdicity', 
    app_hostname: process.env.APP_HOSTNAME || 'localhost:3000'
}; 

export default CONFIG;