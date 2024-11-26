import { connectDB } from "@/lib/connectDB";
import { ObjectId } from "mongodb";

export const DELETE = async (request, { params }) => {
    const db = await connectDB();
    const bookingCollection = db.collection("bookings");

    try {
        const result = await bookingCollection.deleteOne({ _id: new ObjectId(params.id) });
        if (result.deletedCount === 1) {
            return new Response(
                JSON.stringify({ success: true, message: "Booking deleted successfully" }),
                { status: 200 }
            );
        }
        return new Response(
            JSON.stringify({ success: false, message: "Booking not found" }),
            { status: 404 }
        );
    } catch (error) {
        console.error(error);
        return new Response(
            JSON.stringify({ success: false, message: "Error deleting booking" }),
            { status: 500 }
        );
    }
};
