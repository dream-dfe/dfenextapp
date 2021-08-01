import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import WorkProcess from '../components/Common/WorkProcess';
import PricePlansOne from '../components/PricePlans/PricePlansOne';
import CTA from '../components/Common/CTA';
import Footer from '../components/_App/Footer';
import ServicesDetailsGoogleWorkspace from '../components/ServicesDetails/ServicesDetailsGW';

const GoogleWorkspace = () => {
    return (
        <>
			<Navbar />
			
			<PageBanner 
                pageTitle="Google Workspace" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Google Workspace" 
            /> 
			
            <ServicesDetailsGoogleWorkspace />

            <WorkProcess />

            {/* <PricePlansOne /> */}

            <div className="ptb-100">
                <CTA />
            </div>

			<Footer />
		</>
    )
}

export default GoogleWorkspace;