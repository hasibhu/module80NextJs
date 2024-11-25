'use client'
import { getServicesDetails } from '@/services/getServices';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const CheckoutPage = ({ params }) => {
    const data = useSession()
    const [details, setDetails] = useState({})
    // const details = await getServicesDetails(params.id);
    
    const loadService = async() => {
        const details = await getServicesDetails(params.id);
        setDetails(details)
    }

    useEffect(() => {
        loadService()
    }, [params])


    const handleBooking = (e) => {
        e.preventDefault();

        const bookingInfo = {
            name: e.target.name.value,
            email: e.target.email.value,
            date: e.target.date.value,
            amount: e.target.amount.value,
            phone: e.target.phone.value,
            address: e.target.address.value
        };

        console.log(bookingInfo);
        
    }


    return (
        <div className='container mx-auto  '>
            <div className=''>
                    <Image
                        className='  object-cover'
                        src={details.img}
                        alt={""}
                        width={1920}
                        height={320}
                        // style={{ width: '90vw' }}
                    />
                    <div className=' flex justify-center items-center  bg-opacity-50'>
                        <h1 className=' text-3xl font-bold flex justify-center items-center'>
                            Checkout {details.title}
                        </h1>
                    </div>
            </div>


            {/* checkout  form  */}

            <div className='my-12 bg-slate-300 p-12'>
                <form onSubmit={handleBooking} className='mb-10'>
                    <div className='grid grid-cols-2 gap-5'>
                        {/* name input  */}
                        <div className='form-control'>
                            <label className='label'>
                                <span className='label-text'>Name</span>
                            </label>
                            <input type="text" name='name' className='input input-bordered' />
                        </div>

                        {/* email input  */}
                        <div className='form-control'>
                            <label className='label'>
                                <span className='label-text'>Email</span>
                            </label>
                            <input type="text" name='email' className='input input-bordered' />
                        </div>

                        {/* date input  */}
                     
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Date</span>
                            </label>
                            <input
                                defaultValue={new Date().toISOString().split("T")[0]}
                                type="date"
                                name="date"
                                className="input input-bordered"
                            />
                        </div>


                         {/* price amount   */}
                        <div className='form-control'>
                            <label className='label'>
                                <span className='label-text'>Due Amount</span>
                            </label>
                            <input type="text" name='amount' className='input input-bordered' />
                        </div>


                         {/* Phone   */}
                        <div className='form-control'>
                            <label className='label'>
                                <span className='label-text'>Phone </span>
                            </label>
                            <input type="text" name='phone' className='input input-bordered' />
                        </div>


                         {/* address   */}
                        <div className='form-control'>
                            <label className='label'>
                                <span className='label-text'>Present Address </span>
                            </label>
                            <input type="text" name='address' className='input input-bordered' />
                        </div>
                    </div>

                    <div className='form-control text-center mt-7'>
                        <input type="submit" className='btn btn-primary btn-block' value='Confirm Order' />
                    </div>
                </form>
            </div>
             
        </div>
    );
};

export default CheckoutPage;