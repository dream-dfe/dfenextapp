import React from 'react';
import NavbarFour from '../components/_App/NavbarFour';
import PageBanner from '../components/Common/PageBanner';
import Link from 'next/link';
import Footer from '../components/_App/Footer';

const PrivacyPolicy = () => {
    return (
        <>
			<NavbarFour />
			
			<PageBanner 
                pageTitle="Privacy Policy" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Privacy Policy"
            /> 
 
            <div className="privacy-policy-area ptb-100">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 col-md-12">
                            <div className="privacy-policy-content">

                                <p><i>This Privacy Policy was last updated on December 1, 2020.</i></p>
                             

                                <blockquote className="blockquote">
                                    <p>This policy is effective as of 20 January 2021.</p>
                                </blockquote>

                                 <p> Your privacy is important to us. It is Dream Factory Enterprise's policy to respect your privacy regarding any information we may collect from you across our website, https://dfenterprise.africa, and other sites we own and operate.</p>
                                 <p> We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we’re collecting it and how it will be used.</p>
                                 <p> We only retain collected information for as long as necessary to provide you with your requested service. What data we store, we’ll protect within commercially acceptable means to prevent loss and theft, as well as unauthorized access, disclosure, copying, use or modification.</p>
                                 <p>We don’t share any personally identifying information publicly or with third-parties, except when required to by law. </p>
                                 <p>Our website may link to external sites that are not operated by us. Please be aware that we have no control over the content and practices of these sites, and cannot accept responsibility or liability for their respective privacy policies. </p>
                                 <p>You are free to refuse our request for your personal information, with the understanding that we may be unable to provide you with some of your desired services. </p>
                                 <p>Your continued use of our website will be regarded as acceptance of our practices around privacy and personal information. If you have any questions about how we handle user data and personal information, feel free to contact us. </p>
                            </div>
                        </div>
                    </div>
                </div>

                <style jsx>{`
                    .privacy-policy-content img {
                        border-radius: 5px;
                        margin-bottom: 30px;
                    }
                    .privacy-policy-content h3 {
                        margin-top: 25px;
                        margin-bottom: 15px;
                        font-size: 25px;
                    }
                    .privacy-policy-content .blockquote, .privacy-policy-content blockquote {
                        margin-top: 25px;
                        margin-bottom: 30px;
                        background-color: #e6f2f5;
                        text-align: left !important;
                        padding: 25px !important;
                        border-radius: 5px;
                    }
                    .privacy-policy-content .blockquote p, .privacy-policy-content blockquote p {
                        margin-bottom: 0;
                        line-height: 1.8;
                        font-size: 15px !important;
                        font-weight: 500;
                    }
                    .privacy-policy-content .blockquote::after, .privacy-policy-content blockquote::after {
                        display: none;
                    }
                    .privacy-policy-content .blockquote::before, .privacy-policy-content blockquote::before {
                        display: none;
                    }
                    .privacy-policy-content ol, .privacy-policy-content ul {
                        margin-top: 20px;
                    }
                    .privacy-policy-content ol li, .privacy-policy-content ul li {
                        margin-bottom: 10px;
                        color: var(--paragraph-color);
                        line-height: 1.8;
                        font-weight: 500;
                        font-size: 15px;
                    }
    
                    // Responsive Style
                    @media only screen and (max-width: 767px) {
                        .privacy-policy-content h3 {
                            font-size: 22px;
                        }
                    }

                    @media only screen and (min-width : 768px) and (max-width : 991px) {
                        
                    }

                    @media only screen and (min-width : 992px) and (max-width : 1199px) {
                        
                    }
                `}</style>
            </div>
  
			<Footer />
		</>
    )
}

export default PrivacyPolicy;