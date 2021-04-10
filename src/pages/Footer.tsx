import React from 'react';


const Footer: React.FC= () => {
    return ( 
        <>
            <div className="cta-horizon bg-blue pt-4 pb-2">
                <div className="container d-md-flex align-items-center justify-content-between">
                    <h4 className="mb-2 white">Besoin d'aide pour une réservation ?</h4>
                    <a href="#" className="nir-btn-black">Contactez nous</a>
                </div>
            </div>

            <footer className="pt-10 bubbles footermain">
                <div className="footer-upper pb-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-4">
                                <div className="footer-about bg-white p-4">
                                    <img src="images/logo.png" alt=""/>
                                    <p className="mt-3">
                                        In ut odio libero, at vulputate urna. Nulla tristique mi a massa convallis cursus. Nulla eu mi magna
                                    </p>
                                    <ul>
                                        <li><strong>Tel:</strong> +47-252-254-2542</li>
                                        <li><strong>Email:</strong> info@bethelmove.com</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-6 col-sm-12 col-xs-12 mb-4">
                                <div className="footer-links">
                                    <h4 className="white">Bethel move</h4>
                                    <ul>
                                        <li><a href="about-us.html">A propos</a></li>
                                        <li><a href="#">Mentions légales</a></li>
                                        <li><a href="#">Conditions d'utilisation</a></li>
                                        <li><a href="#">Service client</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-6 col-sm-12 col-xs-12 mb-4">
                                <div className="footer-links">
                                    <h4 className="white">Services</h4>
                                    <ul>
                                        <li><a href="#">Paiement</a></li>
                                        <li><a href="#">Comment ça marche</a></li>
                                        <li><a href="#">Nous contacter</a></li>
                                        <li><a href="#">Nos Services</a></li>
                                        <li><a href="#">FAQ</a></li>
                                        <li><a href="#">Site map</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-4">
                                <div className="footer-links">
                                    <h4 className="white">Télécharger l'application</h4>
                                    <p>Simplifiez vos trajets quotidiens ou ponctuel en effectuant vos réservations par téléphone.<br/>Pour télécharger l'application.</p>
                                    <div className="">
                                    <a href="#" className="nir-btn">Cliquez ici</a>
                                    </div>
                                        <img src="images/Footer/download-app2.png" alt="" />
                                </div>     
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-payment">
                    <div className="container">
                        <div className="footer-pay d-md-flex align-items-center justify-content-between pt-2 pb-2">
                            <div className="footer-payment-nav">
                                <ul className="d-md-flex align-items-center">
                                    <li className="mr-2">We Support:</li>
                                    <li className="mr-2"><i className="fab fa-cc-mastercard"></i></li>
                                    <li className="mr-2"><i className="fab fa-cc-paypal"></i></li>
                                    <li className="mr-2"><i className="fab fa-cc-stripe"></i></li>
                                    <li className="mr-2"><i className="fab fa-cc-visa"></i></li>
                                    <li className="mr-2"><i className="fab fa-cc-discover"></i></li>
                                </ul>
                            </div>
                            <div className="footer-payment-nav mb-0">
                                <ul>
                                    <li>
                                        <select>
                                            <option>Français</option>
                                            <option>English (United States)</option>                                
                                        </select>
                                    </li>
                                    <li>
                                        <select>
                                            <option>CFA</option>
                                            <option>€ EUR</option>
                                            <option>$ USD</option>
                                        </select>
                                    </li>
                                </ul>
                            </div>
                        </div>    
                    </div>
                </div>
                <div className="footer-copyright pt-2 pb-2">
                    <div className="container">
                        <div className="copyright-inner d-md-flex align-items-center justify-content-between">
                            <div className="copyright-text">
                                <p className="m-0 white">2021 Bethel Move.Tous droits réservés.</p>
                            </div>
                            <div className="social-links">
                                <ul>  
                                    <li><a href="#"><i className="fab fa-facebook" aria-hidden="true"></i></a></li>
                                    <li><a href="#"><i className="fab fa-twitter" aria-hidden="true"></i></a></li>
                                    <li><a href="#"><i className="fab fa-instagram" aria-hidden="true"></i></a></li>
                                    <li><a href="#"><i className="fab fa-linkedin" aria-hidden="true"></i></a></li>
                                </ul>
                            </div>
                        </div>    
                    </div>
                </div>
            </footer>
        
            <div id="back-to-top">
                <a href="#"></a>
            </div>

            <div className="modal fade" id="register" tabIndex={-1} role="dialog"  aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header bordernone p-0">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body p-0">
                            <div className="login-content p-4 text-center">
                                <div className="login-title section-border">
                                    <h3 className="pink mb-1">Register</h3>  
                                    <p>Access thousands of online classes in design, business, and more!</p>                  
                                </div>
                                <div className="login-form text-center">
                                    <form>
                                        <div className="form-group">
                                            <input type="text" placeholder="Enter Full Name"/>
                                        </div>
                                        <div className="form-group">
                                            <input type="email" placeholder="Enter email address"/>
                                        </div>
                                        <div className="form-group">
                                            <input type="password" placeholder="Enter password"/>
                                        </div>
                                        <div className="form-group">
                                            <input type="password" placeholder="Confirm password"/>
                                        </div>
                                    </form>
                                    <div className="form-btn">
                                        <a href="#" className="nir-btn">Register</a>
                                    </div>
                                    <div className="form-group mb-0 form-checkbox mt-3">
                                        <input type="checkbox"/> By clicking this, you are agree to to<a href="#" className=""> our terms of use</a> and <a href="#" className="">privacy policy</a> including the use of cookies
                                    </div>
                                </div>
                                <div className="login-social border-t mt-3 pt-2 mb-3">
                                    <p className="mb-2">OR continue with</p>
                                    <a href="#" className="btn-facebook"><i className="fab fa-facebook" aria-hidden="true"></i> Facebook</a>
                                    <a href="#" className="btn-twitter"><i className="fab fa-twitter" aria-hidden="true"></i> Twitter</a>
                                    <a href="#" className="btn-google"><i className="fab fa-google" aria-hidden="true"></i> Google</a>
                                </div>
                                <div className="sign-up">
                                    <p className="m-0">Already have an account? <a href="login.html" className="pink">Login</a></p>
                                </div>                
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="login" tabIndex={-1} role="dialog" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header bordernone p-0">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body p-0">
                            <div className="login-content p-4 text-center">
                                <div className="login-title section-border">
                                    <h3 className="pink">Login</h3>                    
                                </div>
                                <div className="login-form">
                                    <form>
                                        <div className="form-group">
                                            <input type="email" placeholder="Enter email address"/>
                                        </div>
                                        <div className="form-group">
                                            <input type="password" placeholder="Enter password"/>
                                        </div>
                                    </form>
                                    <div className="form-btn">
                                        <a href="#" className="nir-btn">LOGIN</a>
                                    </div>
                                    <div className="form-group mb-0 form-checkbox mt-3">
                                        <input type="checkbox"/> Remember Me | <a href="#" className="" >Forgot password?</a>
                                    </div>
                                </div>
                                <div className="login-social border-t mt-3 pt-2 mb-3">
                                    <p className="mb-2">OR continue with</p>
                                    <a href="#" className="btn-facebook"><i className="fab fa-facebook" aria-hidden="true"></i> Facebook</a>
                                    <a href="#" className="btn-twitter"><i className="fab fa-twitter" aria-hidden="true"></i> Twitter</a>
                                </div>
                                <div className="sign-up">
                                    <p className="m-0">Do not have an account? <a href="login.html" className="pink">Sign Up</a></p>
                                </div>                
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        
            <div className="header_sidemenu">
                <div className="header_sidemenu_in">
                    <div className="menu">
                        <div className="close-menu">
                            <i className="fa fa-times white"></i>
                        </div>
                        <div className="m-contentmain">
                            <div className="cart-main">
                                <div className="cart-box">
                                    <div className="popup-container">
                                        <h5 className="p-3 mb-0 bg-pink white text-caps">My Carts(3 Items)</h5>
                                        <div className="cart-entry d-flex align-items-center p-3">
                                            <a href="#" className="image">
                                                <img src="images/shop/shop1.jpg" alt=""/>
                                            </a>
                                            <div className="content">
                                                <a href="#" className="title font-weight-bold">Pullover Batwing</a>
                                                <p className="quantity m-0">Quantity: 3</p>
                                                <span className="price">$45.00</span>
                                            </div>
                                            <div className="button-x">
                                                <i className="icon-close"></i>
                                            </div>
                                        </div>
                                        <div className="cart-entry d-flex align-items-center p-3">
                                            <a href="#" className="image">
                                                <img src="images/shop/shop2.jpg" alt=""/>
                                            </a>
                                            <div className="content">
                                                <a href="#" className="title font-weight-bold">Pullover Batwing</a>
                                                <p className="quantity m-0">Quantity: 3</p>
                                                <span className="price">$90.00</span>
                                            </div>
                                            <div className="button-x">
                                                <i className="icon-close"></i>
                                            </div>
                                        </div>
                                        <div className="cart-entry d-flex align-items-center p-3">
                                            <a href="#" className="image">
                                                <img src="images/shop/shop6.jpg" alt=""/>
                                            </a>
                                            <div className="content">
                                                <a href="#" className="title font-weight-bold">Pullover Batwing</a>
                                                <p className="quantity m-0">Quantity: 3</p>
                                                <span className="price">$90.00</span>
                                            </div>
                                            <div className="button-x">
                                                <i className="icon-close"></i>
                                            </div>
                                        </div>
                                        <div className="summary-total">
                                            <div className="summary d-flex align-items-center justify-content-between">
                                                <div className="subtotal font-weight-bold">Delivery Charge</div>
                                                <div className="price-s">$10</div>
                                            </div>
                                            <div className="summary d-flex align-items-center justify-content-between">
                                                <div className="subtotal font-weight-bold">Sub Total</div>
                                                <div className="price-s">$200</div>
                                            </div>
                                            <div className="summary d-flex align-items-center justify-content-between">
                                                <div className="subtotal font-weight-bold">Discount</div>
                                                <div className="price-s">$2</div>
                                            </div>
                                            <div className="summary d-flex align-items-center justify-content-between">
                                                <div className="subtotal font-weight-bold">Total</div>
                                                <div className="price-s">$208</div>
                                            </div>
                                        </div>
                                        <div className="cart-buttons d-flex align-items-center justify-content-between">
                                            <a href="#" className="nir-btn">View Cart</a>
                                            <a href="#" className="nir-btn-black">Checkout</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>    
                    </div>
                    <div className="overlay hide"></div>
                </div>
            </div>

        </>
     );
}
 
export default Footer;