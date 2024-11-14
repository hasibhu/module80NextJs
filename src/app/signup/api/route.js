import { connectDB } from "@/lib/connectDB";
import bcrypt from 'bcrypt'


export const POST = async (request) => {
    const newUser = await request.json();

    try {
        const db = await connectDB();
        const userCollection = db.collection('userModule80');

        const isExist = await userCollection.findOne({ email: newUser.email });
        if (isExist) {
            return new Response(JSON.stringify({ message: 'Email is already in database.' }), { status: 400 });
        }

        const hashedPassword = bcrypt.hashSync(newUser.password, 14);
        const resp = await userCollection.insertOne({ ...newUser, password: hashedPassword });

        return new Response(JSON.stringify({ message: 'User Created' }), { status: 200 });

    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ message: 'Error creating user' }), { status: 500 });
    }
};


195621001863-qe8d9stg3co176dkutn5oiu8vjp9knki.apps.googleusercontent.com