


import { getServicesDetails } from '@/services/getServices';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const page = async ({ params }) => {
    const details = await getServicesDetails(params?.id);

    if (!details) {
        return (
            <div className='text-center mt-20'>
                <h1 className='text-2xl font-bold text-red-500'>Service Not Found</h1>
            </div>
        );
    }

    return (
        <div className='w-11/12 mx-auto my-10'>
            <div>
                {/* Header Section */}
                <div className='relative h-72'>
                    <Image
                        className='absolute h-72 w-full left-0 top-0 object-cover'
                        src={details.img}
                        alt={details.title}
                        width={1920}
                        height={1080}
                        style={{ width: '90vw' }}
                    />
                    <div className='absolute h-full left-0 top-0 flex justify-center items-center bg-gray-500 bg-opacity-50'>
                        <h1 className='text-white text-3xl font-bold flex justify-center items-center'>
                            {details.title}
                        </h1>
                    </div>
                </div>

                {/* Details Section */}
                <div className='p-10 bg-gray-100'>
                    <h2 className='text-3xl font-bold text-orange-600'>Details</h2>
                    <p>{details.description}</p>
                </div>

                {/* Facilities Section */}
                <div className='my-6'>
                    <h2 className='text-2xl font-bold mb-4'>Facilities</h2>
                    <div className='grid grid-cols-2 gap-6'>
                        {details.facility.map((item, index) => (
                            <div
                                key={index}
                                className='bg-red-100 p-4 border-t-4 border-t-rose-500 rounded-xl'
                            >
                                <h3 className='text-xl font-bold'>{item.name}</h3>
                                <p>{item.details}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Pricing and Checkout */}
                <div className='p-6 bg-gray-100'>
                    <Image
                        className='w-full h-40 object-cover'
                        src={details.img}
                        width={1020}
                        height={230}
                        alt={details.title}
                    />
                    <div className='flex my-5'>
                        <h2 className='text-xl font-bold'>Price:</h2>
                        <h2 className='text-2xl text-rose-500 ml-2'>${details.price}</h2>
                    </div>
                    <Link href={`/checkout/${details._id}`}>
                        <button className='bg-rose-500 px-3 py-2 rounded-lg mt-2 w-full'>
                            Checkout
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default page;