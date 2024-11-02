import { test, expect } from '@playwright/test'; 
import fs from 'fs';





test.describe('Create 10 pets', () => {
    test('should create pets from the loaded data', async ({ request, baseURL }) => {

        const loadPetData=()=>{
            const pets= fs.readFileSync('./data/pets.json');
            return JSON.parse(pets)
        }

        const petsToCreate = loadPetData();

        for (const pet of petsToCreate) {
            const response = await request.post(`${baseURL}/pet`, {
                data: pet,
            });
            
            // Expect the response status to be 200 OK
            expect(response.status()).toBe(200);

            console.log(`Created pet: ${pet.name} with status ${pet.status}`);
        }

    });

});


