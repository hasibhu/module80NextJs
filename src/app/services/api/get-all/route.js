import { connectDB } from "@/lib/connectDB";




export const GET = async () => {
    const db = await connectDB();

    const seviceCollection = db.collection('services');
     
    try {
      
        const response = await seviceCollection.find().toArray();
        return Response.json({response})
    } catch (error) {
        console.log(error);
    }
}