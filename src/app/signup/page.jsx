'use client'

import React, { useState } from "react";
import Image from "next/image";

const SignupPage = () => {
    const [message, setMessage] = useState(""); 

    const handleSignup = async (e) => {
        e.preventDefault();

        const newUser = {
            name: e.target.name.value,
            email: e.target.email.value,
            password: e.target.password.value
        };

        setMessage(""); // Clear previous message
        try {
            const resp = await fetch('http://localhost:3000/signup/api', {
                method: "POST",
                body: JSON.stringify(newUser),
                headers: {
                    'content-type': 'application/json'
                }
            });

          console.log(resp);
            const result = await resp.json();
            console.log(result);
            if (resp.status === 400) {
                setMessage(result.message); // Display error message if email exists
            } else if (resp.status === 200) {
                setMessage(result.message); // Display success message if user is created
            }
        } catch (error) {
            console.error("Error signing up:", error);
            setMessage("An error occurred. Please try again."); // Display generic error message
        }
    };

    return (
        <div className="h-screen py-24 container mx-auto">
            <div className="grid grid-cols-2 gap-12">
                <div className="border-2 p-12">
                    <h2 className="text-3xl font-semibold p-6 text-center">Sign Up</h2>

                    <form onSubmit={handleSignup}>
                        <label htmlFor="name">Name</label> <br />
                        <input type="text" placeholder="Name" name="name" className="input input-bordered w-full max-w-xs" />
                        <br />

                        <label htmlFor="Email">Email</label> <br />
                        <input type="email" placeholder="Email" name='email' className="input input-bordered w-full max-w-xs" />
                        <br />

                        <label htmlFor="Password">Password</label> <br />
                        <input type="password" placeholder="Password" name="password" className="input input-bordered w-full max-w-xs" />
                        <br />

                        {/* Display the response message here */}
                        {message && (
                            <p className="text-red-500 mt-4">{message}</p>
                        )}

                        <button type="submit" className="btn btn-primary w-full mt-4">Sign Up</button>
                    </form>
                </div>

                <div>
                    <Image src='/assets/images/login/login.svg' height="530" width="520" alt="login image" />
                </div>
           </div>
        </div>
    );
};

export default SignupPage;
