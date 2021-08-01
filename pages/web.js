import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import WorkProcess from '../components/Common/WorkProcess';
import PricePlansOne from '../components/PricePlans/PricePlansOne';
import CTA from '../components/Common/CTA';
import Footer from '../components/_App/Footer';
import ServicesDetailsWeb from '../components/ServicesDetails/ServicesDetailsWeb';

const Web = () => {
    return (
        <>
			<Navbar />
			
			<PageBanner 
                pageTitle="Web Development" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Web Development" 
            /> 
			
            <ServicesDetailsWeb />

            <WorkProcess />

            {/* <PricePlansOne /> */}

            <div className="ptb-100">
                <CTA />
            </div>

			<Footer />
		</>
    )
}

export default Web;