import { connectDB } from "@/lib/connectDB"


export const POST = async(request) => {
    const booking = await request.json()

    const db = connectDB();

    const bookingsCollection = db.collection('booking')

    try {
        const newBooking = await bookingsCollection.insertOne(booking);
        return Response.json({message : "service has booked successfully"})
    } catch (error) {
        console.log(error);
    }


}