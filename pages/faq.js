import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Link from 'next/link';
import Footer from '../components/_App/Footer';

import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemPanel,
    AccordionItemButton
} from 'react-accessible-accordion';

const FAQs = () => {
    return (
        <>
			<Navbar />
			
			<PageBanner 
                pageTitle="FAQs" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="FAQs"
            /> 
			
            <div className="faq-area ptb-100">
                <div className="container">
                    <div className="faq-accordion accordion-box">
                        <Accordion allowZeroExpanded preExpanded={['a']}>
                            <AccordionItem uuid="a">
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        Our school does not have a lot of Computers, Are we able to get Google Workspace for Education
                                    </AccordionItemButton>
                                </AccordionItemHeading>

                                <AccordionItemPanel>
                                    <p>Google workspace for education tools work well on mobile devices. All you need is a smart device that can connect to internet. However IT Admins need laptops to manage the platform well</p>
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem uuid="b">
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        What is The Purpose of a Consultant?
                                    </AccordionItemButton>
                                </AccordionItemHeading>

                                <AccordionItemPanel>
                                    <p>The IT industry offers a sea of options, from platforms, programming languages, methodologies, technologies, tools, and more. IT consulting services are important because they play a vital role in businesses by covering the management, implementation, deployment, and maintenance of an IT infrastructure. IT industry offers a sea of options, from platforms, programming languages, methodologies, technologies, tools, and more.</p>
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem uuid="c">
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        How many days does it take to deploy Google Workspace
                                    </AccordionItemButton>
                                </AccordionItemHeading>

                                <AccordionItemPanel>
                                    <p>Our Qualified Deployment Specialist only need 2 hours at least to deploy and train the IT champions</p>
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem uuid="d">
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        Websites that you build for schools are schools able to edit on their own
                                    </AccordionItemButton>
                                </AccordionItemHeading>

                                <AccordionItemPanel>
                                    <p>Before we build a website , we give each school and option to choose a type of site that suits them.</p>
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem uuid="e">
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        What is Chrome Enterprise upgrade
                                    </AccordionItemButton>
                                </AccordionItemHeading>

                                <AccordionItemPanel>
                                    <p> It is an upgrade to your organisation's devices and network that unlocks the built-in business capabilities of Chrome OS devices for I.T. to secure, orchestrate
                                        and power the cloud workforce.
                                        </p>
                                </AccordionItemPanel>
                            </AccordionItem>

                            
                        </Accordion>
                    </div>

                    <div className="ticket-box">
                        <h3>Have Any Question in Mind Please Call or Mail Us</h3>

                        <div className="box-one">
                            <i className="ri-customer-service-line"></i>
                            <a href="tel:+27674920877">+27 67 492 0877</a>
                        </div>

                        <div className="box-two">
                            <i className="ri-earth-line"></i>
                            <a href="mailto:info@dfenterprise.africa">info@dfenterprise.africa</a>
                        </div>
                    </div>
                </div>

                {/* Shape Images */}
                <div className="faq-shape-1">
                    <img src="/images/faq/shape-1.png" alt="image" />
                </div>
                <div className="faq-shape-2">
                    <img src="/images/faq/shape-2.png" alt="image" />
                </div>
                <div className="faq-shape-3">
                    <img src="/images/faq/shape-3.png" alt="image" />
                </div>
                <div className="faq-shape-4">
                    <img src="/images/faq/shape-4.png" alt="image" />
                </div>
                <div className="faq-shape-5">
                    <img src="/images/faq/shape-5.png" alt="image" />
                </div>
            </div>
	 
			<Footer />
		</>
    )
}

export default FAQs;