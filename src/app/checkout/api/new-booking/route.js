import { connectDB } from "@/lib/connectDB";



export const POST = async (request) => {
    const booking = await request.json();
    console.log(booking);

    const db = await connectDB();

    const bookingCollection = db.collection('bookings');
     
    try {
      
        const res = await bookingCollection.insertOne(booking);
        return Response.json({message: 'Service has booked successfully.'}, {status: 200})
     
       
    } catch (error) {
        console.log(error);
    }
}