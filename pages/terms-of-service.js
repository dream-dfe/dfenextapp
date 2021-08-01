import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/_App/Footer';

const TermsOfService = () => {
    return (
        <>
			<Navbar />
			
			<PageBanner 
                pageTitle="Terms of Service" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Terms of Service"
            /> 
 
            <div className="terms-of-service-area ptb-100">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 col-md-12">
                            <div className="terms-of-service-content">

                                <p><i>This Terms of Service was last updated on December 1, 2020.</i></p>
                                <h3><span>1.</span> Our Website</h3>
                                <p>Our website address is: https://dfenterprise.africa</p>
                                <blockquote className="blockquote">
                                    <p>By accessing the website at https://dfenterprise.africa, you are agreeing to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site. The materials contained in this website are protected by applicable copyright and trademark law.</p>
                                </blockquote>
                                <h3><span>2.</span> Disclaimer</h3>
                                <p> The materials on Dream Factory Enterprise's website are provided on an 'as is' basis. Dream Factory Enterprise makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
                                <p> Further, Dream Factory Enterprise does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.</p>
                                <h3><span>3.</span> How We Get Data About You</h3>
                                <p>We use tools like cookies, web beacons, analytics services, and advertising providers to gather the data listed above. Some of these tools offer you the ability to opt out of data collection.</p>
                                
                                <h3><span>4.</span>Use License</h3>
                                <p>Permission is granted to temporarily download one copy of the materials (information or software) on Dream Factory Enterprise's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not: </p>
                                <ol>
                                    <li>modify or copy the materials;</li>
                                    <li>use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
                                    <li>attempt to decompile or reverse engineer any software contained on Dream Factory Enterprise's website;</li>
                                    <li>remove any copyright or other proprietary notations from the materials; or </li>
                                    <li>transfer the materials to another person or "mirror" the materials on any other server. </li>
                                </ol>
                                <p>This license shall automatically terminate if you violate any of these restrictions and may be terminated by Dream Factory Enterprise at any time. Upon terminating your viewing of these materials or upon the termination of this license, you must destroy any downloaded materials in your possession whether in electronic or printed format. </p>

                                <h3><span>5.</span> Your Choices About the Use of Your Data</h3>
                                <p>You can choose not to provide certain data to us, but you may not be able to use certain features of the Services.</p>
                                <ul>
                                    <li>To stop receiving promotional communications from us, you can opt out by using the unsubscribe mechanism in the promotional communication you receive or by changing the email preferences in your account. Note that regardless of your email preference settings, we will send you transactional and relationship messages regarding the Services, including administrative confirmations, order confirmations, important updates about the Services, and notices about our policies.</li>
                                    <li>The browser or device you use may allow you to control cookies and other types of local data storage. Your wireless device may also allow you to control whether location or other data is collected and shared. You can manage Adobe’s LSOs through their Website Storage Settings panel.</li>
                                    <li>To get information and control cookies used for tailored advertising from participating companies, see the consumer opt-out pages for the Network Advertising Initiative and Digital Advertising Alliance, or if you’re located in the European Union, visit the Your Online Choices site. To opt out of Google’s display advertising or customize Google Display Network ads, visit the Google Ads Settings page. To opt out of Taboola’s targeted ads, see the Opt-out Link in their Cookie Policy.</li>
                                    <li>To update data you provide directly, log into your account and update your account at any time.</li>
                                </ul>
                                <h3><span>6.</span> Accuracy of materials</h3>
                                <p>  The materials appearing on Dream Factory Enterprise's website could include technical, typographical, or photographic errors. Dream Factory Enterprise does not warrant that any of the materials on its website are accurate, complete or current. Dream Factory Enterprise may make changes to the materials contained on its website at any time without notice. However Dream Factory Enterprise does not make any commitment to update the materials.</p>
                                
                                <h3><span>7.</span> Links</h3>
                                <p>We recognize the privacy interests of children and encourage parents and guardians to take an active role in their children’s online activities and interests. Children under 13 (or under 16 in the European Economic Area) should not use the Services. If we learn that we’ve collected personal data from a child under those ages.</p>
                          
                                <h3><span>8.</span> Modifications</h3>
                                <p> Dream Factory Enterprise may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.</p>
                                <h3><span>9.</span> Governing Law</h3>
                                <p> These terms and conditions are governed by and construed in accordance with the laws of South Africa and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.</p>
                            
                            
                            </div>
                        </div>
                    </div>
                </div>

                <style jsx>{`
                    .terms-of-service-content img {
                        border-radius: 5px;
                        margin-bottom: 30px;
                    }
                    .terms-of-service-content h3 {
                        margin-top: 25px;
                        margin-bottom: 15px;
                        font-size: 25px;
                    }
                    .terms-of-service-content .blockquote, .terms-of-service-content blockquote {
                        margin-top: 25px;
                        margin-bottom: 30px;
                        background-color: #e6f2f5;
                        text-align: left !important;
                        padding: 25px !important;
                        border-radius: 5px;
                    }
                    .terms-of-service-content .blockquote p, .terms-of-service-content blockquote p {
                        margin-bottom: 0;
                        line-height: 1.8;
                        font-size: 15px !important;
                        font-weight: 500;
                    }
                    .terms-of-service-content .blockquote::after, .terms-of-service-content blockquote::after {
                        display: none;
                    }
                    .terms-of-service-content .blockquote::before, .terms-of-service-content blockquote::before {
                        display: none;
                    }
                    .terms-of-service-content ol, .terms-of-service-content ul {
                        margin-top: 20px;
                    }
                    .terms-of-service-content ol li, .terms-of-service-content ul li {
                        margin-bottom: 10px;
                        color: var(--paragraph-color);
                        line-height: 1.8;
                        font-weight: 500;
                        font-size: 15px;
                    }
                    
                    // Responsive Style
                    @media only screen and (max-width: 767px) {
                        .terms-of-service-content h3 {
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

export default TermsOfService;