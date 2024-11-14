import React from 'react';

const Banner = () => {
    return (
        <div className='container mx-auto mt-4'>
            <div className="carousel w-full  ">
                {
                    banners.map((banner, index) => (
                        <div key={index + 1}
                            id={`slide${index + 1}`}
                            className="carousel-item relative w-full bg-top bg-no-repeat bg-cover h-[90vh] rounded-xl "
                            style={{
                              backgroundImage: `linear-gradient(45deg, rgba(7,25,82,0.7), rgba(0,0,0,0.3)), url(/assets/images/banner/${index+1}.jpg)`
                          }}
                        >
                
                            <div className='h-full w-full flex items-center pl-28'>
                                <div className='space-y-7'>
                                    <h1 className='text-6xl text-white font-bold'>{banner.title}</h1> 
                                    <h3>{banner.description}</h3>
                                   
                                        <button className='btn btn-primary '>Discover More</button>
                                        <button className='btn btn-primary btn-outline ml-6'> Latest Projects</button>
                                    
                                </div>
                            </div>
                            <div className="absolute  flex  transform justify-between bottom-12 right-12  gap-5">
                            <a href={banner.previous} className="btn btn-circle">❮</a>
                            <a href={banner.next} className="btn btn-circle">❯</a>
                            </div>
                        </div>
                   )) 
                }
            
            </div>
        </div>
    );
};


const banners = [
    {
        title: 'Affordable Price for Car Repairing',
        description: 'All text will be shown here with styles',
        next: "#slide2",
        previous: "#slide4",
    },
    {
        title: 'Affordable Price for Car Repairing',
        description: 'All text will be shown here with styles',
        next: "#slide2",
        previous: "#slide1",
    },
    {
        title: 'Affordable Price for Car Repairing',
        description: 'All text will be shown here with styles',
        next: "#slide4",
        previous: "#slide2",
    },
    {
        title: 'Affordable Price for Car Repairing',
        description: 'All text will be shown here with styles',
        next: "#slide1",
        previous: "#slide3",
       
    },

]
export default Banner;