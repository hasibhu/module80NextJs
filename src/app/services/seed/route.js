import { connectDB } from "@/lib/connectDB"
import { services } from "@/lib/services";


export const GET = async () => {
    const db = await connectDB();

    const seviceCollection = db.collection('services');
     
    try {
        await seviceCollection.deleteMany();
        const response = await seviceCollection.insertMany(services);
        return Response.json({message: 'Seeded succesfully!!'})
    } catch (error) {
        console.log(error);
    }
}