import React from 'react';
import { services } from '../../lib/services'
import ServiceCard from '../Cards/ServiceCard';
import { getServices } from '@/services/getServices';


// getservices in services folder 

const Services = async() => {

    const data = await getServices()
    const serviceData = data?.response;
    
    return (
        <div>
            <div>
                <h3>Our Services</h3>
                <h3>Our Service Area</h3>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>
            <div className='container mx-auto mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6 '>
                {
                    serviceData?.map((service, index)=> <ServiceCard key={index+1} service={service }></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;