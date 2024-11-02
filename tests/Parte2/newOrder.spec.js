import { test, expect } from '@playwright/test'; 
import fs, { stat } from 'fs';




test.describe('Create an order with pet details', () => {
    test('should create an order for each available pet', async ({ request, baseURL }) => {
        
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



        for (const pet of firstfive) {
            const OrderData = {
                petId:pet.id
            }

            const orderResponse= await request.post(`${baseURL}/store/order`,
                {data:OrderData}
            );

            expect(orderResponse.status()).toBe(200);

            const createdOrder= await orderResponse.json()
            console.log(`Created order: ${createdOrder.id} with status ${createdOrder.status} for pet ${createdOrder.petId}`);
        }


    });
});



