import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import WorkProcess from '../components/Common/WorkProcess';
import PricePlansOne from '../components/PricePlans/PricePlansOne';
import CTA from '../components/Common/CTA';
import Footer from '../components/_App/Footer';
import ServicesDetailsConsultancy from '../components/ServicesDetails/ServicesDetailsConsultancy';

const Consultancy = () => {
    return (
        <>
			<Navbar />
			
			<PageBanner 
                pageTitle="IT anad Startup Consulting" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="IT anad Startup Consulting" 
            /> 
			
            <ServicesDetailsConsultancy />

            <WorkProcess />

            {/* <PricePlansOne /> */}

            <div className="ptb-100">
                <CTA />
            </div>

			<Footer />
		</>
    )
}

export default Consultancy;