import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Link from 'next/link';
import Footer from '../components/_App/Footer';

const ComingSoon = () => {
    return (
        <>
			<Navbar />
			
			<PageBanner 
                pageTitle="Coming Soon" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Coming Soon"
            />
			
			<>
				<div className="error-area ptb-100">
					<div className="d-table">
						<div className="d-table-cell">
							<div className="container">
								<div className="error-content">
									<img src="/images/404.png" alt="error" />
				
									<h3>Coming Soon</h3>
									<p>The page you are looking for is currently under development.</p>

									<Link href="/">
										<a className="default-btn">
											Go To Home 
											<i className="ri-arrow-right-line"></i>
											<span></span>
										</a>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>

				<style jsx>{`
					.error-content {
						text-align: center;
						margin: 0 auto;
						max-width: 750px;
					}
					.error-content h3 {
						font-size: 28px;
						margin-top: 45px;
						margin-bottom: 20px;
					}
					.error-content p {
						max-width: 520px;
						margin: 0 auto 25px;
						font-size: 15px;
					}
						
					// Responsive Style
					@media only screen and (max-width: 767px) {

					}

					@media only screen and (min-width : 768px) and (max-width : 991px) {
						
					}

					@media only screen and (min-width : 992px) and (max-width : 1199px) {
						
					}
				`}</style>
			</>

			<Footer />
		</>
    )
}

export default ComingSoon;