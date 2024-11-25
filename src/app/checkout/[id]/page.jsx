'use client';
import { getServicesDetails } from '@/services/getServices';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const CheckoutPage =  ({ params }) => {
    const {data} = useSession();
    const [details, setDetails] = useState(null); 
  
    const loadService = async () => {
        const serviceDetails = await getServicesDetails(params?.id);
        setDetails(serviceDetails);
    };

    useEffect(() => {
        loadService();
    }, [params]);

    const handleBooking = async(e) => {
        e.preventDefault();

        const booking = {
            serviceId: details?.id,
            name: e.target.name.value,
            email: e.target.email.value,
            date: e.target.date.value,
            amount: e.target.amount.value,
            phone: e.target.phone.value,
            address: e.target.address.value,
        };

        try {
            const resp = await fetch("http://localhost:3000/checkout/api/new-booking", {
                method: 'POST',
                body: JSON.stringify(booking),
                headers: {
                    "content-type": "application/json"
                }
            })
            
        } catch (error) {
            console.log(error);
        }
        
    };

    return (
        <div className="container mx-auto">
            {/* Render Image only when details is loaded */}
            {details?.img && (
                <div>
                    <Image
                        className="object-cover"
                        src={details?.img}
                        alt={details?.title || 'Service Image'}
                        width={1920}
                        height={320}
                    />
                    <div className="flex justify-center items-center bg-opacity-50 mt-10">
                        <h1 className="text-3xl font-bold flex justify-center items-center">
                            Checkout {details.title}
                        </h1>
                    </div>
                </div>
            )}

            {/* Checkout Form */}
            <div className="my-12 bg-slate-300 p-12">
                <form onSubmit={handleBooking} className="mb-10">
                    <div className="grid grid-cols-2 gap-5">
                        {/* Name input */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                defaultValue={data?.user?.name}
                                readOnly
                                type="text" name="name" className="input input-bordered" />
                        </div>

                        
                        {/* Date input */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Date</span>
                            </label>
                            <input
                                defaultValue={new Date().toISOString().split('T')[0]}
                                type="date"
                                name="date"
                                className="input input-bordered"
                            />
                        </div>

                        {/* Email input */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                defaultValue={data?.user?.email}
                                readOnly
                                type="text" name="email" className="input input-bordered" />
                        </div>


                        {/* Price amount */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Due Amount</span>
                            </label>
                            
                            <input
                                defaultValue={details?.price}
                                readOnly
                                type="text" name="amount" className="input input-bordered" />
                        </div>

                        {/* Phone */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Phone</span>
                            </label>
                            <input type="text" name="phone" className="input input-bordered" />
                        </div>

                        {/* Address */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Present Address</span>
                            </label>
                            <input type="text" name="address" className="input input-bordered" />
                        </div>
                    </div>

                    <div className="form-control text-center mt-7">
                        <input
                            type="submit"
                            className="btn btn-primary btn-block"
                            value="Confirm Order"
                        />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CheckoutPage;
