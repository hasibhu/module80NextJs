'use client'
import Image from "next/image";
import { redirect } from "next/navigation";
import {signIn} from 'next-auth/react'
import { BsGoogle, BsGithub } from "react-icons/bs";


const page = () => {


    const handleLogin = async e => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;
       

        const resp = await signIn('credentials', {email, password, redirect:false})

        console.log("Response from login:", resp);
    if (resp?.error) {
        console.error("Error:", resp.error);
    }
    }

   

    const SocialSignin = () => {
        const handleSocialLogin = async (provider) => {
            const resp = await signIn(provider);
            console.log("Response from social login:", resp);
        };

        return (
            <div>
                <button
                    onClick={() => handleSocialLogin('google')}
                    className="btn btn-accent w-full text-4xl flex justify-center items-center text-red-600"
                >
                    <BsGoogle />
                </button>
                
                <button
                    onClick={() => handleSocialLogin('github')}
                    className="mt-10 btn btn-accent w-full text-4xl flex justify-center items-center text-yellow-400"
                >
                    <BsGithub />
                </button>
            </div>
        );
    };


    return (
        <div className="h-screen py-24 container mx-auto mb-10">
           
            <div className="lg:grid grid-cols-2 gap-12">
                <div>
                    <Image src='/assets/images/login/login.svg' height="530" width="520" alt="login image"></Image>
                </div>


                <div className="border-2 p-12">
                    <h2 className="text-3xl font-semibold p-6 text-center">Sign in</h2>
                    
                    <form onSubmit={handleLogin} action="">

                        <label htmlFor="Email">Email</label> <br />

                        <input type="email" placeholder="Email" name="email" className="input input-bordered w-full max-w-xs" />
                        <br />


                        <label htmlFor="Password">Password</label> <br />

                        <input type="password" placeholder="Password" name="password" className="input input-bordered w-full max-w-xs" />


                        <button type="submit" className="btn btn-primary w-full mt-12">Login</button>
                    </form>

                    <div>
                        <h6 className="  text-center border-b-4 border-t-4 mt-6 border-yellow-700 mb-6">Or Login with</h6>

                        <div className="">
                            {/* <button onClick={()=> signIn('google')} className="btn btn-accent w-full text-4xl flex justify-center items-center text-red-600 "><BsGoogle /></button>
                            
                            <button className="mt-10 btn btn-accent w-full text-4xl flex justify-center items-center text-yellow-400 
                            "><BsGithub/></button> */}

                            <SocialSignin/>
                                
                        </div>
                    </div>
                </div>
           </div>
        </div>
    );
};

export default page;