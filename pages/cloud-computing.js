import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import WorkProcess from '../components/Common/WorkProcess';
import PricePlansOne from '../components/PricePlans/PricePlansOne';
import CTA from '../components/Common/CTA';
import Footer from '../components/_App/Footer';
import ServicesDetailsCloud from '../components/ServicesDetails/ServicesDetailsCloud';

const Cloud = () => {
    return (
        <>
			<Navbar />
			
			<PageBanner 
                pageTitle="Cloud Computing" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Cloud Computing" 
            /> 
			
            <ServicesDetailsCloud />

            <WorkProcess />

            {/* <PricePlansOne /> */}

            <div className="ptb-100">
                <CTA />
            </div>

			<Footer />
		</>
    )
}

export default Cloud;