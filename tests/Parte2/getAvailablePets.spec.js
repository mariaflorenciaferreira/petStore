import { test, expect } from '@playwright/test'; 
import fs from 'fs';




test.describe('Get pet details', () => {
    test('should get pets information by status', async ({ request, baseURL }) => {
        
        const statusNeeded= 'available'

        const response = await request.get(`${baseURL}/pet/findByStatus?status=${statusNeeded}`); 
        expect(response.status()).toBe(200);
        const availablePets = await response.json();
        
        const firstfive=availablePets.slice(0,5)

        const organizedPets={}

        firstfive.forEach(item=>{
            organizedPets[item.id]=item
        })

        
        firstfive.forEach((pet, index) => {
            console.log(`Pet ${index + 1} - ID: ${pet.id}, Name: ${pet.name}, Status: ${pet.status}`);
        });

    });
});



