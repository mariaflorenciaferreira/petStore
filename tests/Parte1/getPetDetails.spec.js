import { test, expect } from '@playwright/test'; 
import fs from 'fs';




test.describe('Get pet details', () => {
    test('should get pets information by status', async ({ request, baseURL }) => {

        
        const statusNeeded= fs.readFileSync('./data/petsStatus.json');
        return JSON.parse(statusNeeded)
        

        const response = await request.get(`${baseURL}/pet/findByStatus?status=${statusNeeded}`); 
        expect(response.status()).toBe(200);
        const responseBody = await response.json();
        
        responseBody.forEach((pet, index) => {
            console.log(`Pet ${index + 1} - ID: ${pet.id}, Name: ${pet.name}, Status: ${pet.status}`);
        });

    });
});



