import React from 'react';

const Impact = () => {
    return (
        <>
            <div className="fun-facts-area">
                <div className="container">
                    <h3> Our Impact in Education</h3>
                    <div className="fun-facts-box">
                        <div className="row">
                            <div className="col-lg-3 col-6">
                                <div className="single-fun-fact">
                                    <div className="icon">
                                        <i className="ri-building-2-line"></i>
                                    </div>
                                    <h3>
                                        160
                                        <span className="sign-icon">+</span>
                                    </h3>
                                    <p>Schools onboard </p>
                                    <span className="impact-descr"> Google for Education</span>
                                </div>
                            </div>
        
                            <div className="col-lg-3 col-6">
                                <div className="single-fun-fact">
                                    <div className="icon">
                                        
                                    <i className="ri-user-line"></i>
                                    </div>
                                    <h3>
                                        38000
                                        <span className="sign-icon">+</span>
                                    </h3>
                                    <p> Learners impacted</p>
                                    <span className="impact-descr"> Google Workspace accounts Setup</span>
                                </div>
                            </div>
        
                            <div className="col-lg-3 col-6">
                                <div className="single-fun-fact">
                                    <div className="icon">
                                        
                                    <i className="ri-user-line"></i>
                                    </div>
                                    <h3>
                                        1300
                                        <span className="sign-icon">+</span>
                                    </h3>
                                    <p> Teachers & IT Champions</p>
                                    <span className="impact-descr"> Google Workspace for Education</span>
                                </div>
                            </div>
        
                            <div className="col-lg-3 col-6">
                                <div className="single-fun-fact">
                                    <div className="icon">
                                        <i className="ri-flag-line"></i>
                                    </div>
                                    <h3>
                                        
                                        <span className="sign-icon">+</span>
                                    </h3>
                                    <p>8 Provinces</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Shape Images */}
                <div className="fun-facts-shape-1">
                    <img src="/images/fun-facts/shape-1.png" alt="image" />
                </div>
                <div className="fun-facts-shape-2">
                    <img src="/images/fun-facts/shape-2.png" alt="image" />
                </div>
                <div className="fun-facts-shape-3">
                    <img src="/images/fun-facts/shape-3.png" alt="image" />
                </div>
                <div className="fun-facts-shape-4">
                    <img src="/images/fun-facts/shape-4.png" alt="image" />
                </div>
            </div>

            {/* Fun Facts Style */}
            <style jsx>{`
                .fun-facts-area {
                    position: relative;
                    z-index: 1;
                    overflow: hidden;
                }
                .fun-facts-box {
                    background: var(--main-gradient-color);
                    padding-top: 80px;
                    padding-bottom: 50px;
                    padding-left: 50px;
                    padding-right: 50px;
                    border-radius: 5px;
                }
                .single-fun-fact {
                    margin-bottom: 30px;
                    position: relative;
                    padding-left: 85px;
                } 
                .single-fun-fact .impact-descr{
                    color: var(--white-color);
                }
                .single-fun-fact .icon {
                    position: absolute;
                    left: 0;
                    top: 50%;
                    -webkit-transform: translateY(-50%);
                            transform: translateY(-50%);
                }
                .single-fun-fact .icon i {
                    display: inline-block;
                    height: 70px;
                    width: 70px;
                    line-height: 70px;
                    font-size: 35px;
                    background-color: #ffffff40;
                    color: var(--white-color);
                    text-align: center;
                    -webkit-transition: var(--transition);
                    transition: var(--transition);
                    border-radius: 2px;
                }
                .single-fun-fact h3 {
                    font-size: 36px;
                    margin-bottom: 0;
                    color: var(--white-color);
                    font-weight: 500;
                }
                .single-fun-fact h3 .sign-icon {
                    font-size: 36px;
                    position: relative;
                }
                .single-fun-fact p {
                    color: var(--white-color);
                    margin-top: 5px;
                }
                
                // Fun Facts Shape Images
                .fun-facts-shape-1 {
                    position: absolute;
                    bottom: 15%;
                    left: 5%;
                    -webkit-transform: translateY(-15%) translateX(-5%);
                            transform: translateY(-15%) translateX(-5%);
                }
                .fun-facts-shape-2 {
                    position: absolute;
                    bottom: 5%;
                    left: 8%;
                    -webkit-transform: translateY(-5%) translateX(-8%);
                            transform: translateY(-5%) translateX(-8%);
                }
                .fun-facts-shape-3 {
                    position: absolute;
                    bottom: 25%;
                    right: 5%;
                    -webkit-transform: translateY(-25%) translateX(-5%);
                            transform: translateY(-25%) translateX(-5%);
                }
                .fun-facts-shape-4 {
                    position: absolute;
                    bottom: 0;
                    right: 10%;
                    -webkit-transform: translateX(-10%);
                            transform: translateX(-10%);
                }
	
                // Responsive Style
                @media only screen and (max-width: 767px) {
                    .fun-facts-box {
                        padding-top: 50px;
                        padding-bottom: 20px;
                        padding-left: 20px;
                        padding-right: 20px;
                    }
                    .single-fun-fact {
                        padding-left: 0;
                        text-align: center;
                    }
                    .single-fun-fact .icon {
                        position: relative;
                        top: unset;
                        -webkit-transform: unset;
                                transform: unset;
                        margin-bottom: 20px;
                    }
                    .single-fun-fact h3 {
                        font-size: 30px;
                    }
                    .single-fun-fact p {
                        font-size: 15px;
                    }
                    .fun-facts-shape-1, .fun-facts-shape-2, .fun-facts-shape-3, .fun-facts-shape-4 {
                        display: none;
                    }
                }

                @media only screen and (min-width : 768px) and (max-width : 991px) {
                    .single-fun-fact {
                        padding-left: 0;
                        text-align: center;
                    }
                    .single-fun-fact .icon {
                        position: relative;
                        top: unset;
                        -webkit-transform: unset;
                                transform: unset;
                        margin-bottom: 20px;
                    }
                    .fun-facts-shape-1, .fun-facts-shape-2, .fun-facts-shape-3, .fun-facts-shape-4 {
                        display: none;
                    }
                }

                @media only screen and (min-width : 992px) and (max-width : 1199px) {
                    .single-fun-fact h3 {
                        font-size: 25px;
                    }
                    .single-fun-fact h3 .sign-icon {
                        font-size: 25px;
                    }
                    .single-fun-fact p {
                        font-size: 14px;
                    }
                }
            `}</style>
        </>
    )
}

export default Impact;