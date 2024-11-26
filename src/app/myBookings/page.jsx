"use client"

import { useSession } from 'next-auth/react';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const MyBookings = () => {
    const session = useSession();

    const [bookings, setBookings] = useState();


    const loadData = async () => {
        const resp = await fetch(`http://localhost:3000/myBookings/api/${session?.data?.user?.email}`);
   
        const data = await resp.json();

        console.log(data);
        setBookings(data);
    }


   useEffect(() => {
            if (session?.data?.user?.email) {
                loadData();
            }
        }, [session]);


    console.log(bookings);
    return (
        <div className='container '>
            <div>
                    <Image
                        className="object-cover"
                        src={'/assets/images/about_us/parts.jpg'}
                        alt={'Service Image'}
                        width={1920}
                        height={320}
                    />
                    
            </div>
            


            <h1 className='text-2xl text-center pt-10'>My Bookings</h1>

            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Service Name</th>
                        <th>Price</th>
                        <th>Date</th>
                        <th>Actions</th>
                    </tr>
                    </thead>

                    <tbody>
                        {bookings?.map((booking, idx) => (
                            <tr key={booking._id}>
                                <th>{idx + 1}</th>
                                <td>{booking.name}</td>
                                <td>{booking.serviceTitle || 'N/A'}</td>
                                <td>{booking.amount}</td>
                                <td>{booking.date}</td>
                                <td>
                                    <button className="btn btn-sm btn-primary">Cancel</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>


                </table>
                </div>



        </div>
    );
};

export default MyBookings;

