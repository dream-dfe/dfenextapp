import React from 'react';

const ContactInfo = () => {
    return (
        <>
            <div className="contact-info-area pb-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-4 col-md-12">
                            <div className="contact-address">
                                <h3>Contact Address:</h3>
                                <p>With the right technology in place, you are certainly an exceptional industry leader in your cosmos.</p>

                                <ul className="address-info">
                                    <li>
                                        <i className="ri-customer-service-line"></i>
                                        <a href="tel:+27674920877">+27 67 492 0877</a>
                                    </li>

                                    <li>
                                        <i className="ri-global-line"></i>
                                        <a href="mailto:info@dfenterprise.africa">info@dfenterprise.africa</a>
                                    </li>

                                    <li>
                                        <i className="ri-map-pin-line"></i>
                                        370B Main Rd, Observatory
                                        Cape Town , 7925, South Africa.
                                    </li>
                                </ul>

                                <ul className="address-social">
                                    <li>
                                        <a href="https://www.facebook.com/dreamfactoryfoundation" target="_blank">
                                            <i className="ri-facebook-line"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://twitter.com/DreamFactoryFdn" target="_blank">
                                            <i className="ri-twitter-fill"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank">
                                            <i className="ri-linkedin-fill"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.instagram.com/dreamfactory_foundation/" target="_blank">
                                            <i className="ri-instagram-line"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-8 col-md-12">
                            <div id="map">
                                <iframe src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=370B%20Main%20Rd,%20Observatory,%20Cape%20Town,%207925+(Dream%20Factory%20Enterprise)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

          



            <style jsx>{`
                .contact-address {
                    background: #F4F8FC;
                    border: 1px solid #E6EDF6;
                    padding: 45px 35px;
                    border-radius: 5px;
                }
                
                .contact-address h3 {
                    font-size: 22px;
                    margin-bottom: 15px;
                }
                
                .contact-address p {
                    font-size: 15px;
                }
                
                .contact-address .address-info {
                    padding-left: 0;
                    margin-top: 30px;
                    margin-bottom: 0;
                }
                
                .contact-address .address-info li {
                    list-style-type: none;
                    margin-bottom: 30px;
                    font-size: 15px;
                    font-weight: 500;
                    color: #4B4B61;
                    position: relative;
                    padding-left: 40px;
                }
                
                .contact-address .address-info li a {
                    font-size: 15px;
                    font-weight: 500;
                    color: #4B4B61;
                }
                
                .contact-address .address-info li a:hover {
                    color: var(--main-color);
                }
                
                .contact-address .address-info li i {
                    position: absolute;
                    left: 0;
                    top: 50%;
                    -webkit-transform: translateY(-50%);
                            transform: translateY(-50%);
                    color: var(--main-color);
                    font-size: 30px;
                }
                
                .contact-address .address-info li .ri-global-line {
                    color: #FF414B;
                }
                
                .contact-address .address-info li .ri-map-pin-line {
                    color: #36CC72;
                }
                
                .contact-address .address-info li:last-child {
                    margin-bottom: 0;
                }
                
                .contact-address .address-social {
                    padding-left: 0;
                    margin-bottom: 0;
                    margin-top: 35px;
                    text-align: center;
                }
                
                .contact-address .address-social li {
                    display: inline-block;
                    list-style-type: none;
                    margin-bottom: 0;
                    margin-right: 10px;
                }
                
                .contact-address .address-social li:last-child {
                    margin-right: 0;
                }
                
                .contact-address .address-social li i {
                    display: inline-block;
                    height: 35px;
                    width: 35px;
                    line-height: 35px;
                    background-color: var(--white-color);
                    color: var(--main-color);
                    -webkit-box-shadow: 0px 15px 35px rgba(0, 0, 0, 0.1);
                            box-shadow: 0px 15px 35px rgba(0, 0, 0, 0.1);
                    border-radius: 50px;
                    text-align: center;
                    font-size: var(--font-size);
                    -webkit-transition: var(--transition);
                    transition: var(--transition);
                }
                
                .contact-address .address-social li i:hover {
                    background-color: var(--main-color);
                    color: var(--white-color);
                    -webkit-transform: translateY(-5px);
                            transform: translateY(-5px);
                }
                
                #map iframe {
                    width: 100%;
                    height: 440px;
                    border: 1px solid #E6EDF6;
                    border-radius: 5px;
                }
                
                // Responsive Style
                @media only screen and (max-width: 767px) {
                    .contact-address {
                        padding: 35px 20px;
                        margin-bottom: 30px;
                    }
                }

                @media only screen and (min-width : 768px) and (max-width : 991px) {
                    .contact-address {
                        padding: 35px 20px;
                        margin-bottom: 30px;
                    }
                }

                @media only screen and (min-width : 992px) and (max-width : 1199px) {
                    
                }
            `}</style>
        </>
    )
}

export default ContactInfo;