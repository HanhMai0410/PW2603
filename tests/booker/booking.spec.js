import {test,expect} from '@playwright/test';
import { z } from 'zod';

const bookingSchema = z.object({
    firstname: z.string(),
    lastname: z.string(),
    totalprice: z.number(),
    depositpaid: z.boolean(),
    bookingdates: z.object({
        checkin: z.string(),
        checkout: z.string(),
    }),
    additionalneeds: z.string().optional(),
}); 
test("GET booking by ID", async ({request}) => {
    const response = await request.get('https://restful-booker.herokuapp.com/booking/1');
    expect(response.status()).toBe(200);
    const booking = await response.json();
    expect(() => bookingSchema.parse(booking)).not.toThrow();

    const { firstname, lastname } = booking;

    expect(firstname).toBe('Eric');
    expect(lastname).toBe('Jackson');
});

const newBookingSchema = z.object({
    bookingid: z.number(),
    booking: bookingSchema,
});
test("POST create a new booking", async ({request}) => {
    const newBookingPayload = {
        firstname: "John",
        lastname: "Doe",
        totalprice: 150,
        depositpaid: true,
        bookingdates: {
            checkin: "2026-04-01",
            checkout: "2026-04-10"
        },
        additionalneeds: "Breakfast"
    };

    const response = await request.post('https://restful-booker.herokuapp.com/booking', {
        data: newBookingPayload
    });

    expect(response.status()).toBe(200);
    const createBookingResponse = await response.json();
    expect(() => newBookingSchema.parse(createBookingResponse)).not.toThrow();
    const  {booking} = createBookingResponse;
    expect(booking).toMatchObject(newBookingPayload);
});

test("PUT update a booking", async ({request}) => {
    // get token
    const authResponse = await request.post('https://restful-booker.herokuapp.com/auth', {
        data: {
            username: 'admin',
            password: 'password123'
        }
    });
    expect(authResponse.status()).toBe(200);
    const authData = await authResponse.json();
    const token = authData.token;

    const updatedBookingPayload = {
        firstname: "Jane",
        lastname: "Smith",
        totalprice: 200,
        depositpaid: false,
        bookingdates: {
            checkin: "2026-05-01",
            checkout: "2026-05-10"
        },
        additionalneeds: "Late checkout"
    };

    const response = await request.put('https://restful-booker.herokuapp.com/booking/1', {
        data: updatedBookingPayload,
        headers: {'Cookie': `token=${token}`}   
    });

    expect(response.status()).toBe(200);
    const updatedBookingResponse = await response.json();
    console.log(updatedBookingResponse);
    expect(updatedBookingResponse).toMatchObject(updatedBookingPayload);
});

test("[Basic] DELETE API call delete booking", async ({ request }) => {
    const getBookinsgResponse = await request.get('https://restful-booker.herokuapp.com/booking');
    const bookingList = await getBookinsgResponse.json();
    const bookingId = bookingList[0].bookingid;
    const accessToken = await request.post('https://restful-booker.herokuapp.com/auth', {
        data: {
            username: 'admin',
            password: 'password123'
        }
    });
    const tokenBody = await accessToken.json();
    const token = tokenBody.token;
    const response = await request.delete(`https://restful-booker.herokuapp.com/booking/${bookingId}`, {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Cookie': `token=${token}`
        }
    });
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(201);
});
// //verify delete booking
// test("DELETE a booking", async ({request}) => {
//     // get token
//     const authResponse = await request.post('https://restful-booker.herokuapp.com/auth', {
//         data: {
//             username: 'admin',
//             password: 'password123'
//         }
//     });
//     expect(authResponse.status()).toBe(200);
//     const authData = await authResponse.json();
//     const token = authData.token;

//     const response = await request.delete('https://restful-booker.herokuapp.com/booking/1', {
//         headers: {'Cookie': `token=${token}`}   
//     });

//     expect(response.status()).toBe(201);
// });


// import {test,expect} from '@playwright/test';

// test("GET all bookings", async ({request}) => {
//    const response = await request.get('https://restful-booker.herokuapp.com/booking');
//    expect(response.status()).toBe(200);
//    console.log(await response.json());
//    // verify that the response is an array of objects like [{bookingid: number}]
//     const bookings = await response.json();
//     expect(Array.isArray(bookings)).toBe(true);
//     for (const booking of bookings) {
//         expect(booking).toHaveProperty('bookingid');
//         expect(typeof booking.bookingid).toBe('number');
//     }
  
// });