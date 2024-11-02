import { defineConfig } from '@playwright/test'; 
import dotenv from 'dotenv';


dotenv.config();

export default defineConfig({
    timeout: 30000, 
    retries: 2, 
    use: {
        baseURL: 'https://petstore.swagger.io/v2',
    },
});


