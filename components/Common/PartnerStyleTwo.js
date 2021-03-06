import React from 'react';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    loop: true,
    nav: true,
    dots: false,
    smartSpeed: 500,
    margin: 40,
    autoplayHoverPause: true,
    autoplay: true,
    navText: [
        "<i class='ri-arrow-left-line'></i>",
        "<i class='ri-arrow-right-line'></i>"
    ],
    responsive: {
        0: {
            items: 1
        },
        576: {
            items: 2
        },
        768: {
            items: 3
        },
        1200: {
            items: 5
        }
    }
};

const PartnerStyleTwo = () => {

    const [display, setDisplay] = React.useState(false);

    React.useEffect(() => {
        setDisplay(true);
    }, [])

    return (
        <>
            <div className="partner-area ptb-100">
            <h2 className="text-center"> Brands</h2>
                <div className="container">
                    {display ? <OwlCarousel 
                        className="partner-slides owl-carousel owl-theme"
                        {...options}
                    > 
                        <div className="single-partner">
                            <img src="/images/partner/partner-5.png" alt="image" />
                        </div>
    
                        <div className="single-partner">
                            <img src="/images/partner/partner-6.png" alt="image" />
                        </div>
    
                        <div className="single-partner">
                            <img src="/images/partner/partner-7.png" alt="image" />
                        </div>
    
                        
                    </OwlCarousel> : ''}
                </div>
            </div>

            {/* Partner Style */}
            <style jsx>{`
                .partner-area {
                    position: relative;
                    z-index: 1;
                }
                .single-partner {
                    text-align: center;
                }
                .single-partner img {
                    width: auto !important;
                    display: inline-block !important;
                }
                .partner-shape-1 {
                    position: absolute;
                    top: -20%;
                    left: 15%;
                    -webkit-transform: translateY(-20%) translateX(-20%);
                            transform: translateY(-20%) translateX(-20%);
                    z-index: -1;
                }
                .partner-shape-2 {
                    position: absolute;
                    bottom: -50%;
                    right: 10%;
                    -webkit-transform: translateY(-28%) translateX(-10%);
                            transform: translateY(-28%) translateX(-10%);
                }
	
                // Responsive Style
                @media only screen and (max-width: 767px) {
                    .partner-shape-1 {
                        display: none;
                    }
                    .partner-shape-2 {
                        display: none;
                    }
                }

                @media only screen and (min-width : 768px) and (max-width : 991px) {
                    .partner-shape-1 {
                        display: none;
                    }
                    .partner-shape-2 {
                        display: none;
                    }
                }

                @media only screen and (min-width : 992px) and (max-width : 1199px) {
                    
                }
            `}</style>
        </>
    )
}

export default PartnerStyleTwo;