import { connectDB } from "@/lib/connectDB";




export const GET = async (request, {params}) => {
    const db = await connectDB();

    const seviceCollection = db.collection('services');
     
    try {
      
        const service = await seviceCollection.findOne({ _id: params.id });
        // console.log(response);
        return Response.json({service})
    } catch (error) {
        console.log(error);
    }
}