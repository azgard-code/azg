import React from 'react'

export default function Home() {

	return (
		<React.Fragment>

    <div class="container-fluid bg-dark p-0">
        <div class="row gx-0 d-none d-lg-flex">
            <div class="col-lg-7 px-5 text-start">
                <div class="h-100 d-inline-flex align-items-center me-4">
                    <small class="fa fa-map-marker-alt text-primary me-2"></small>
                    <small>Aaba, Delt State, Nigeria</small>
                </div>
                <div class="h-100 d-inline-flex align-items-center">
                    <small class="far fa-clock text-primary me-2"></small>
                    <small>Mon - Fri : 09.00 AM - 09.00 PM</small>
                </div>
            </div>
            <div class="col-lg-5 px-5 text-end">
                <div class="h-100 d-inline-flex align-items-center me-4">
                    <small class="fa fa-phone-alt text-primary me-2"></small>
                    <small>+23470 1920 0657, +23491 2869 4833</small>
                </div>
                <div class="h-100 d-inline-flex align-items-center mx-n2">
                    <a target="_blank" class="btn btn-square btn-link rounded-0 border-0 border-end border-secondary" href="https://web.facebook.com/Azgard.Company?mibextid=ZbWKwL&_rdc=1&_rdr"><i class="fab fa-facebook-f"></i></a>
                    <a target="_blank" class="btn btn-square btn-link rounded-0 border-0 border-end border-secondary" href="https://twitter.com/GOriuwa"><i class="fab fa-twitter"></i></a>
                    <a target="_blank" class="btn btn-square btn-link rounded-0 border-0 border-end border-secondary" href="https://www.linkedin.com/company/azgard-company/?viewAsMember=true"><i class="fab fa-linkedin-in"></i></a>
                    <a target="_blank" class="btn btn-square btn-link rounded-0" href="https://instagram.com/azgard32345?utm_source=qr&igshid=MzNlNGNkZWQ4Mg=="><i class="fab fa-instagram"></i></a>
                </div>
            </div>
        </div>
    </div>
    <nav class="navbar navbar-expand-lg bg-white navbar-light sticky-top p-0">
        <a class="navbar-brand d-flex align-items-center border-end px-4 px-lg-5">
            <h2 class="m-0 text-primary">Azgard Company</h2>
        </a>
        <button type="button" class="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
            <div class="navbar-nav ms-auto p-4 p-lg-0">
                <small class="nav-item nav-link active">Home</small>
                <small class="nav-item nav-link">About</small>
                <small class="nav-item nav-link">Service</small>
                <small class="nav-item nav-link">Resources</small>
                <small class="nav-item nav-link">Contact</small>
            </div>
        </div>
    </nav>
    <div class="container-xxl py-5">
        <div class="container">
            <div class="row g-5">
                <div class="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.1s">
                    <div class="d-flex align-items-center mb-4">
                        <div class="btn-lg-square bg-primary rounded-circle me-3">
                            <i class="fa fa-users text-white"></i>
                        </div>
                        <h1 class="mb-0" data-toggle="counter-up">3453</h1>
                    </div>
                    <h5 class="mb-3">Happy Customers</h5>
                    <span>Around the World From Different Works of Life...</span>
                </div>
                <div class="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.3s">
                    <div class="d-flex align-items-center mb-4">
                        <div class="btn-lg-square bg-primary rounded-circle me-3">
                            <i class="fa fa-check text-white"></i>
                        </div>
                        <h1 class="mb-0" data-toggle="counter-up">4234</h1>
                    </div>
                    <h5 class="mb-3">Project Done</h5>
                    <span>Within Speculated Time</span>
                </div>
                <div class="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.5s">
                    <div class="d-flex align-items-center mb-4">
                        <div class="btn-lg-square bg-primary rounded-circle me-3">
                            <i class="fa fa-award text-white"></i>
                        </div>
                        <h1 class="mb-0" data-toggle="counter-up">3453</h1>
                    </div>
                    <h5 class="mb-3">Awards Win</h5>
                    <span>We have won Customers Trust over The Years</span>
                </div>
                <div class="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.7s">
                    <div class="d-flex align-items-center mb-4">
                        <div class="btn-lg-square bg-primary rounded-circle me-3">
                            <i class="fa fa-users-cog text-white"></i>
                        </div>
                        <h5 class="mb-0" data-toggle="counter-up">Expart Workers</h5>
                    </div>
                    
                    <span>Working Together For Your Business</span>
                </div>
            </div>
        </div>
    </div>

    <div class="container-fluid bg-light overflow-hidden my-5 px-lg-0">
        <div class="container about px-lg-0">
            <div class="row g-0 mx-lg-0">
                <div class="col-lg-6 ps-lg-0 wow fadeIn" data-wow-delay="0.1s" style={{minHeight: '400px'}}>
                    <div class="position-relative h-100">
                        <img class="position-absolute img-fluid w-100 h-100" src="img/4.png" style={{objectFit: 'cover'}} alt="" />
                    </div>
                </div>
                <div class="col-lg-6 about-text py-5 wow fadeIn" data-wow-delay="0.5s">
                    <div class="p-lg-5 pe-lg-0">
                        <h1 class="mb-4">About Us</h1>
                        <p>Company that work for for Better Business Environment to Bridge Gaps between Potential Client and Prospective Entrepreneur, Offering </p>
                        <p><i class="fa fa-check-circle text-primary me-3"></i>... Quality</p>
                        <p><i class="fa fa-check-circle text-primary me-3"></i>... Timely</p>
                        <p><i class="fa fa-check-circle text-primary me-3"></i>... Protected</p>
                        <p><i class="fa fa-check-circle text-primary me-3"></i>... Outstanding Services</p>
                        <small href="" class="btn btn-primary rounded-pill py-3 px-5 mt-3">On The Go !</small>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="container-xxl py-5">
        <div class="container">
            <div class="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: '600px'}}>
                <h1 class="mb-4">Our Services</h1>
            </div>
            <div class="row g-4">
                <div class="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.1s">
                    <div class="service-item rounded overflow-hidden">
                        <img class="img-fluid" src="img/development.png" alt="" />
                        <div class="position-relative p-4 pt-0">
                            <div class="service-icon">
                                <i class="fa fa-solar-panel fa-3x"></i>
                            </div>
                            <h4 class="mb-3">Web Development</h4>
                            <p>Sophisticated User Experience with Moden Frameworks and Packages</p>
                            
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.3s">
                    <div class="service-item rounded overflow-hidden">
                        <img class="img-fluid" src="img/security.png" alt="" />
                        <div class="position-relative p-4 pt-0">
                            <div class="service-icon">
                                <i class="fa fa-wind fa-3x"></i>
                            </div>
                            <h4 class="mb-3">Security & Protection</h4>
                            <p>Solid 24/7 protection on web assets and Pages</p>
                            
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.5s">
                    <div class="service-item rounded overflow-hidden">
                        <img class="img-fluid" src="img/affiliate.png" alt="" />
                        <div class="position-relative p-4 pt-0">
                            <div class="service-icon">
                                <i class="fa fa-lightbulb fa-3x"></i>
                            </div>
                            <h4 class="mb-3">Brand Promotion</h4>
                            <p>With Targeted and Respective Audience Around The World</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.1s">
                    <div class="service-item rounded overflow-hidden">
                        <img class="img-fluid" src="img/database.png" alt="" />
                        <div class="position-relative p-4 pt-0">
                            <div class="service-icon">
                                <i class="fa fa-solar-panel fa-3x"></i>
                            </div>
                            <h4 class="mb-3">Database Management</h4>
                            <p>Robust and Capable Bearable Backed Analysis</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.3s">
                    <div class="service-item rounded overflow-hidden">
                        <img class="img-fluid" src="img/maintain.png" alt="" />
                        <div class="position-relative p-4 pt-0">
                            <div class="service-icon">
                                <i class="fa fa-wind fa-3x"></i>
                            </div>
                            <h4 class="mb-3">Web Maintainance</h4>
                            <p>Expedient Maintainance Services as to Enhancing lazy Response</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.5s">
                    <div class="service-item rounded overflow-hidden">
                        <img class="img-fluid" src="img/phones.png" alt="" />
                        <div class="position-relative p-4 pt-0">
                            <div class="service-icon">
                                <i class="fa fa-lightbulb fa-3x"></i>
                            </div>
                            <h4 class="mb-3">Android Development</h4>
                            <p>With Moden UI/UX Designs For Daily Needs</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="container-fluid bg-light overflow-hidden my-5 px-lg-0">
        <div class="container feature px-lg-0">
            <div class="row g-0 mx-lg-0">
                <div class="col-lg-6 feature-text py-5 wow fadeIn" data-wow-delay="0.1s">
                    <div class="p-lg-5 ps-lg-0">
                        <h1 class="mb-4">Why Choose Us</h1>
                        <p class="mb-4 pb-2">Azgard is One of the Best in The Market with profficienct Quality and Features as to ...</p>
                        <div class="row g-4">
                            <div class="col-6">
                                <div class="d-flex align-items-center">
                                    <div class="btn-lg-square bg-primary rounded-circle">
                                        <i class="fa fa-check text-white"></i>
                                    </div>
                                    <div class="ms-4">
                                        <p class="mb-0">Quality</p>
                                        <h5 class="mb-0">Services</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="d-flex align-items-center">
                                    <div class="btn-lg-square bg-primary rounded-circle">
                                        <i class="fa fa-user-check text-white"></i>
                                    </div>
                                    <div class="ms-4">
                                        <p class="mb-0">Expert</p>
                                        <h5 class="mb-0">Workers</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="d-flex align-items-center">
                                    <div class="btn-lg-square bg-primary rounded-circle">
                                        <i class="fa fa-check text-white"></i>
                                    </div>
                                    <div class="ms-4">
                                        <p class="mb-0">Free</p>
                                        <h5 class="mb-0">Consultation</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="d-flex align-items-center">
                                    <div class="btn-lg-square bg-primary rounded-circle">
                                        <i class="fa fa-headphones text-white"></i>
                                    </div>
                                    <div class="ms-4">
                                        <p class="mb-0">Customer</p>
                                        <h5 class="mb-0">Support</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 pe-lg-0 wow fadeIn" data-wow-delay="0.5s" style={{minHeight: '400px'}}>
                    <div class="position-relative h-100">
                        <img class="position-absolute img-fluid w-100 h-100" src="img/1.png" style={{objectFit: 'cover'}} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="container-xxl py-5">
        <div class="container">
            <div class="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: '600px'}}>
                <h1 class="mb-4">Available Public Resources</h1>
            </div>
            <div class="row mt-n2 wow fadeInUp" data-wow-delay="0.3s">
                <div class="col-12 text-center">
                    <ul class="list-inline mb-5" id="portfolio-flters">
                        <li class="mx-2" data-filter=".first">Visit Our Available Hands-On Resources</li>
                    </ul>
                </div>
            </div>
            <div class="row g-4 portfolio-container wow fadeInUp" data-wow-delay="0.5s">

                <div class="col-lg-4 col-md-6 portfolio-item third">
                    <div class="portfolio-img rounded overflow-hidden">
                        <img class="img-fluid" src="img/img-600x400-1.jpg" alt="" />
                        <div class="portfolio-btn">
                            <a class="btn btn-lg-square btn-outline-light rounded-circle mx-1" href="img/img-600x400-1.jpg" data-lightbox="portfolio"><i class="fa fa-eye"></i></a>
                            <a class="btn btn-lg-square btn-outline-light rounded-circle mx-1" href=""><i class="fa fa-link"></i></a>
                        </div>
                    </div>
                    <div class="pt-3">
                        <h5 >Share Thrust</h5>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="container-fluid bg-dark text-body footer mt-5 pt-5 wow fadeIn" data-wow-delay="0.1s">
        <div class="container py-5">
            <div class="row g-5">
                <div class="col-lg-3 col-md-6">
                    <h5 class="text-white me-4">Addresses</h5>
                    <p class="mb-2"><i class="fa fa-map-marker-alt me-3"></i>Aaba, Delt State, Nigeria</p>
                    <p class="mb-2"><i class="fa fa-phone-alt me-3"></i>+23470 1920 0657, +23491 2869 4833</p>
                    <p class="mb-2"><i class="fa fa-envelope me-3"></i>azgardc@outlook.com</p>
                    <div class="d-flex pt-2">
                        <a target="_blank" class="btn btn-square btn-outline-light btn-social" href="https://twitter.com/GOriuwa"><i class="fab fa-twitter"></i></a>
                        <a target="_blank" class="btn btn-square btn-outline-light btn-social" href="https://web.facebook.com/Azgard.Company?mibextid=ZbWKwL&_rdc=1&_rdr"><i class="fab fa-facebook-f"></i></a>
                        <a target="_blank" class="btn btn-square btn-outline-light btn-social" href="https://instagram.com/azgard32345?utm_source=qr&igshid=MzNlNGNkZWQ4Mg=="><i class="fab fa-instagram"></i></a>
                        <a target="_blank" class="btn btn-square btn-outline-light btn-social" href="https://www.linkedin.com/company/azgard-company/?viewAsMember=true"><i class="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="copyright">
                <div class="row">
                    <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
                        &copy; <a href="#">Azgard Company</a>, All Right Reserved.
                    </div>
                    <div class="col-md-6 text-center text-md-end">
                        Designed By <a href="">Azgard Company</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
		</React.Fragment>
	)

}
