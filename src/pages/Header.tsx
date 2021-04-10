import React from 'react';

 
const Header: React.FC = () => {
    return ( 
        <>   
            <div id="preloader">
                <div id="status"></div>
            </div>
            <header className="main_header_area headerstye-1">
                
                <div className="header_menu" id="header_menu">
                    <nav className="navbar navbar-default">
                        <div className="container">
                            <div className="navbar-flex d-flex align-items-center justify-content-between w-100 pb-2 pt-2">
                                
                                <div className="navbar-header">
                                    <a className="navbar-brand" href="index.html">
                                        <img src="assets/images/logo-white.png" alt="image"/>
                                        <img src="assets/images/logo.png" alt="image"/>
                                    </a>
                                </div>
                                <div className="navbar-collapse1 d-flex align-items-center" id="bs-example-navbar-collapse-1">
                                    <ul className="nav navbar-nav" id="responsive-menu">
                                        <li><a href="about.html">Accueil</a></li>							
                                        <li className="submenu dropdown">
                                            <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Réservation <i className="icon-arrow-down" aria-hidden="true"></i></a> 
                                            <ul className="dropdown-menu">
                                                <li><a href="booking.html">Booking</a></li>
                                                <li><a href="confirmation.html">Confirmation</a></li>
                                                <li className="submenu dropdown">
                                                    <a href="gallery.html" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Gallery<i className="fa fa-angle-right" aria-hidden="true"></i></a>
                                                    <ul className="dropdown-menu">
                                                        <li><a href="gallery.html">Gallery</a></li>
                                                        <li><a href="gallery1.html">Gallery Masonry</a></li>
                                                    </ul>
                                                </li>
                                                <li className="submenu dropdown">
                                                    <a href="404.html" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Error<i className="fa fa-angle-right" aria-hidden="true"></i></a>
                                                    <ul className="dropdown-menu">
                                                        <li><a href="404.html">Error Page 1</a></li>
                                                        <li><a href="404-1.html">Error Page 2</a></li>
                                                    </ul>
                                                </li>
                                                <li className="submenu dropdown">
                                                    <a href="comingsoon.html" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Comming Soon<i className="fa fa-angle-right" aria-hidden="true"></i></a>
                                                    <ul className="dropdown-menu">
                                                        <li><a href="comingsoon.html">Coming Soon 1</a></li>
                                                        <li><a href="comingsoon-1.html">Coming Soon 2</a></li>
                                                    </ul>
                                                </li>
                                                <li className="submenu dropdown">
                                                    <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Shop <i className="fa fa-angle-right" aria-hidden="true"></i></a>
                                                    <ul className="dropdown-menu">
                                                        <li><a href="shop-grid1.html">Right Grid</a></li>
                                                        <li><a href="shop-list1.html">Right List</a></li>
                                                        <li><a href="shop-detail.html">Shop Single One</a></li>
                                                        <li><a href="cart.html">Cart</a></li>
                                                        <li><a href="checkout.html">Checkout</a></li>
                                                        <li><a href="login.html">Account</a></li>
                                                        <li><a href="wishlist.html">Wishlist</a></li>
                                                        <li><a href="forgot-password.html">Forgot Password</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="faq.html">Faq</a></li>
                                                <li><a href="testimonial.html">Testimonials</a></li>
                                                <li><a href="pricing.html">Pricing</a></li>
                                            </ul> 
                                        </li>
                                        
                                        <li><a href="contact.html">Contact</a></li>
                                        
                                        <li className="submenu dropdown">
                                            <a href="dashboard.html" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Language <i className="fa fa-angle-down" aria-hidden="true"></i></a> 
                                            <ul className="dropdown-menu">
                                                <li><a href="dashboard.html">FR</a></li>
                                                <li><a href="dashboard-my-profile.html">EN</a></li>
                                            </ul>
                                        </li>								
                                    </ul>

                                </div> 

                                <div className="register-login">
                                    <a href="#" className="mr-2" data-toggle="modal" data-target="#register"><i className="icon-user mr-1"></i> Inscription</a>
                                    <a href="#" data-toggle="modal" data-target="#login"><i className="icon-login mr-1"></i> Connexion</a>
                                </div>

                                <div id="slicknav-mobile"></div>
                            </div>
                        </div>
                    </nav>
                </div>
                
            </header>
            
        </>
     );
}
 
export default Header;