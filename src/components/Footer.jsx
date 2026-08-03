export function Footer() {
    return(
        <footer className="main-footer dark-section">
        <div className="container">
            <div className="row">
                <div className="col-xl-12">
                  
                    <div className="footer-header">
                      
                        <div className="footer-social-links">
                            <ul>
                                <li><a href="#"><i className="fa-brands fa-pinterest-p"></i></a></li>
                                <li><a href="#"><i className="fa-brands fa-x-twitter"></i></a></li>
                                <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                                <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                            </ul>
                        </div>
                       
                        <div className="footer-logo">
                            <img src="images/logo-white.svg" alt=""/>
                        </div>
                       
                        <div className="footer-contact-item-list">
                            
                            <div className="footer-contact-item">
                                <div className="icon-box">
                                    <img src="images/icon-phone-primary.svg" alt=""/>
                                </div>
                                <div className="footer-contact-item-content">
                                    <p>Call 24/7</p>
                                    <h2><a href="tel:123456789">+91 12345 6789</a></h2>
                                </div>
                            </div>
                           
                        </div>
                       
                    </div>
                   
                </div>

                <div className="col-xl-4">
                   
                    <div className="footer-newsletter-box">
                     
                        <div className="footer-newsletter-content">
                            <p>Crafted with passion deliver elegant furniture experiences for modern homes and lifestyles.</p>
                        </div>
                      
                        <div className="footer-newsletter-form">
                            <form id="newslettersForm" action="#" method="POST">
                                <div className="form-group">
                                    <input type="email" name="mail" className="form-control" id="mail" placeholder="Enter Email Address *" required/>
                                    <button type="submit" className="newsletter-btn"><img src="images/arrow-primary.svg" alt=""/></button>
                                </div>
                            </form>
                        </div>
                     
                    </div>
                   
                </div>

                <div className="col-xl-8">
                  
                    <div className="footer-links-box">
                     
                        <div className="footer-links">
                            <h2>Quick Links</h2>
                            <ul>
                                <li><a href="index-2.html">Home</a></li>
                                <li><a href="products.html">Shop</a></li>
                                <li><a href="products.html">Collections</a></li>
                                <li><a href="blog.html">Blog</a></li>
                                <li><a href="contact.html">Contact Us</a></li>
                            </ul>
                        </div>
                      
                        <div className="footer-links">
                            <h2>Customer Services</h2>
                            <ul>
                                <li><a href="delivery-policy.html">Shipping Information</a></li>
                                <li><a href="refund-return.html">Return Policy</a></li>
                                <li><a href="cancellation-policy.html">Cancellation Policy</a></li>
                                <li><a href="privacy-policy.html">Privacy Policy</a></li>
                                <li><a href="term-condition.html">Terms & Conditions</a></li>
                            </ul>
                        </div>
                     
                        <div className="footer-links footer-contact-list">
                            <h2>Contact Information</h2>
                            <ul>
                                <li>245 Modern Avenue, Manhattan, New York, USA</li>
                                <li><a href="tel:123456789">+91 12345 6789</a></li>
                                <li><a href="mailto:support@domain.com">support@domain.com</a></li>
                            </ul>
                        </div>
                      
                    </div>
                  
                </div>
            </div>
        </div>

       
        <div className="footer-copyright">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        
                        <div className="footer-copyright-box">
                           
                            <div className="footer-copyright-text">
                                <p>Copyright © 2026 All Rights Reserved.</p>
                            </div>
                            
                            <div className="footer-payment-options">
                                <ul>
                                    <li><a href="#"><img src="images/icon-payment-options-1.svg" alt=""/></a></li>
                                    <li><a href="#"><img src="images/icon-payment-options-2.svg" alt=""/></a></li>
                                    <li><a href="#"><img src="images/icon-payment-options-3.svg" alt=""/></a></li>
                                    <li><a href="#"><img src="images/icon-payment-options-4.svg" alt=""/></a></li>
                                    <li><a href="#"><img src="images/icon-payment-options-5.svg" alt=""/></a></li>
                                    <li><a href="#"><img src="images/icon-payment-options-6.svg" alt=""/></a></li>
                                </ul>
                            </div>
                          
                        </div>
                       
                    </div>
                </div>
            </div>
        </div>
     
    </footer>
    );
}