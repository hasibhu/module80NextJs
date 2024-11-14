import React from 'react';
import Banner from './Banner';
import Services from './Services';

const Homepage = () => {
    return (
        <div className='h-screen'>
            <Banner></Banner>
            <Services></Services>
        </div>
    );
};

export default Homepage;