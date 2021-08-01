import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import WorkProcess from '../components/Common/WorkProcess';
import PricePlansOne from '../components/PricePlans/PricePlansOne';
import CTA from '../components/Common/CTA';
import Footer from '../components/_App/Footer';
import ServicesDetailsDomains from '../components/ServicesDetails/ServicesDetailsDomains';

const Domains = () => {
    return (
        <>
			<Navbar />
			
			<PageBanner 
                pageTitle="Domain Hosting & Mngt" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Domain Hosting & Mngt" 
            /> 
			
            <ServicesDetailsDomains />

            <WorkProcess />

            {/* <PricePlansOne /> */}

            <div className="ptb-100">
                <CTA />
            </div>

			<Footer />
		</>
    )
}

export default Domains;