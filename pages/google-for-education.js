import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import WorkProcess from '../components/Common/WorkProcess';
import CTA from '../components/Common/CTA';
import Footer from '../components/_App/Footer';
import ServicesDetailsGoogleForEducation from '../components/ServicesDetails/ServicesDetailsGFE';
const GoogleForEducation = () => {
    return (
        <>
			<Navbar />
			
			<PageBanner 
                pageTitle="Google for Education" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Google for Education" 
            /> 
			
            <ServicesDetailsGoogleForEducation />

            {/* <WorkProcess />

            

            <div className="ptb-100">
                <CTA />
            </div> */}

			<Footer />
		</>
    )
}

export default GoogleForEducation;