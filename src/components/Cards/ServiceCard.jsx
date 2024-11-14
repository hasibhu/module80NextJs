import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ServiceCard = ({ service }) => {
    
    return (
        <div>
            <div className="card card-compact bg-base-100  shadow-xl">
                <figure>
                    <Image width={120} height={120} alt='card image' src={service.img}></Image>
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{ service.title}</h2>
                    <p>${service.price}</p>
                    <div className="card-actions justify-end">
                        <Link href={`/services/${service._id}`}><button className="btn btn-primary">View Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;