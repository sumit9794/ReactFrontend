function Header(){
    return (
        <header class="main-header">
		<div class="header-sticky">
			<nav class="navbar navbar-expand-lg">
				<div class="header-action-box">
                   
                    <div class="header-contact-info-list mobile-hide">
                       
                        <div class="header-contact-info">
                            <div class="icon-box">
                                <image src="images/icon-phone-primary.svg" alt="">
                            </div>
                            <div class="header-contact-info-content">
                                <p>Need Help ?</p>
                                <span><a href="tel:123456789">+123 456 789</a></span>
                            </div>
                        </div>
                       
                    </div>
                    
                    <a class="navbar-brand" href="index.html">
                        <img src="images/logo.svg" alt="Logo">
                    </a>
                   
                    <div class="header-action-details">
                        <ul>
                            <li>
                                
                                <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                    <img src="images/icon-search.svg" alt="">
                                </button>
                                <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div class="modal-dialog modal-dialog-centered">
                                        <div class="modal-content">
                                            <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                                                <i class="fa-solid fa-xmark"></i>
                                            </button>
                                            <div class="modal-search-form">
                                                <input type="text" name="search" class="form-control" id="search" placeholder="Search Your Product">
                                                <button type="submit" class="modal-search-btn"><i class="fa-solid fa-magnifying-glass"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                               
                            </li>
                            <li><a href="account-wishlist.html"><img src="images/icon-wishlist-primary.svg" alt=""></a></li>
                            <li><a href="account-dashboard.html"><img src="images/icon-user-primary.svg" alt=""></a></li>
                            <li><a href="cart.html"><img src="images/icon-cart-primary.svg" alt=""></a></li>
                        </ul>
                    </div>
                 
                </div>

              
                <div class="main-menu">
                    <div class="collapse navbar-collapse">
                        <div class="nav-menu-wrapper">
                            <ul class="navbar-nav mr-auto" id="menu">
                                <li class="nav-item"><a class="nav-link" href="index.html">Home</a></li>                                
                                <li class="nav-item mega-menu submenu position-static">
                                    <a class="nav-link" href="products.html">Shop</a>
                                   
                                    <ul class="dropdown-menu">
                                      
                                        <li class="mega-menu-box">
                                            <div class="mega-menu-links-box">
                                               <div class="mega-menu-link">
                                                    <h2>Shop By Collection</h2>
                                                    <ul>
                                                        <li><a href="products.html">Modern Living Room</a></li>
                                                        <li><a href="products.html">Luxury Sofa Sets</a></li>
                                                        <li><a href="products.html">Elegant Dining Tables</a></li>
                                                        <li><a href="products.html">Premium Furniture</a></li>
                                                        <li><a href="products.html">Wooden Storage Units</a></li>
                                                        <li><a href="products.html">Classic Home Decor</a></li>
                                                    </ul>
                                                </div>
                                                 <div class="mega-menu-link">
                                                    <h2>Shop Features</h2>
                                                    <ul>
                                                        <li><a href="products.html">New Arrivals</a></li>
                                                        <li><a href="products.html">Best Selling Products</a></li>
                                                        <li><a href="privacy-policy.html">Privacy Policy</a></li>
                                                        <li><a href="delivery-policy.html">Free Home Delivery</a></li>
                                                        <li><a href="refund-return.html">Secure Online Payment</a></li>
                                                        <li><a href="conntact.html">24/7 Customer Support</a></li>
                                                    </ul>
                                                </div>
                                       </div>

                                                 <div class="mega-menu-items-list">
                                                       <div class="mega-menu-item">
                                                            <div class="mega-menu-item-image">
                                                        <a href="products.html">
                                                            <figure class="image-anime">
                                                                <img src="images/mega-menu-item-image-1.jpg" alt="">
                                                            </figure>
                                                        </a>
                                                    </div>
                                                             <div class="mega-menu-item-content">
                                                        <h2><a href="products.html">Modern Furniture</a></h2>
                                                        <p>Stylish furniture crafte for comfortable living spaces.</p>
                                                    </div>
                                                            </div>
                                                   <div class="mega-menu-item">
                                                                  <div class="mega-menu-item-image">
                                                        <a href="products.html">
                                                            <figure class="image-anime">
                                                                <img src="images/mega-menu-item-image-2.jpg" alt="">
                                                            </figure>
                                                        </a>
                                                    </div>
                                                            <div class="mega-menu-item-content">
                                                        <h2><a href="products.html">Luxury Interior</a></h2>
                                                        <p>Premium furniture designed aesthetics and durability.</p>
                                                    </div>
                                                           </div>
                                                    <div class="mega-menu-item big-offer-box">
                                                         <div class="mega-menu-item-image">
                                                        <figure>
                                                            <img src="images/mega-menu-item-image-3.jpg" alt="">
                                                        </figure>
                                                    </div>
                                                              <div class="mega-menu-item-content">
                                                        <span>-Special Offer-</span>
                                                        <h2>Big Sale</h2>
                                                        <h3>50% Off</h3>
                                                    </div>
                                                   
                                                </div>
                                              
                                            </div>
                                            
                                        </li>
                                      
                                    </ul>
                                    
                                </li>
                                <li class="nav-item submenu"><a class="nav-link" href="#">Collections</a>
                                    <ul>
                                        <li class="nav-item"><a class="nav-link" href="products.html">Modern Linen Fabric Sofa</a></li>
                                        <li class="nav-item"><a class="nav-link" href="products.html">Luxury Tufted Velvet Sofa</a></li>
                                        <li class="nav-item"><a class="nav-link" href="products.html">Natural Oak Side Table</a></li>
                                        <li class="nav-item"><a class="nav-link" href="products.html">Wooden Dining Chair</a></li>
                                        <li class="nav-item"><a class="nav-link" href="products.html">Handcrafted Lounge Chair</a></li>
                                        <li class="nav-item"><a class="nav-link" href="products.html">Wooden Storage Cabinet</a></li>
                                    </ul>
                                </li>
                                <li class="nav-item submenu"><a class="nav-link" href="#">My Account</a>
                                    <ul>
                                        <li class="nav-item"><a class="nav-link" href="login.html">Login / Register</a></li>
                                        <li class="nav-item"><a class="nav-link" href="forgot-password.html">Forgot Password</a></li>
                                        <li class="nav-item"><a class="nav-link" href="account-dashboard.html">My Account</a></li>
                                        <li class="nav-item"><a class="nav-link" href="account-order.html">My Order</a></li>
                                        <li class="nav-item"><a class="nav-link" href="account-download.html">My Download</a></li>
                                    </ul>
                                </li>
                                <li class="nav-item"><a class="nav-link" href="products.html">Best Sellers</a></li>
                                <li class="nav-item submenu"><a class="nav-link" href="#">Pages</a>
                                    <ul>
                                        <li class="nav-item"><a class="nav-link" href="account-wishlist.html">Wishlist</a></li>
                                        <li class="nav-item"><a class="nav-link" href="cart.html">Cart</a></li>
                                        <li class="nav-item"><a class="nav-link" href="checkout.html">Checkout</a></li>
                                        <li class="nav-item"><a class="nav-link" href="order-received.html">Order Received</a></li>
                                        <li class="nav-item"><a class="nav-link" href="about.html">About Us</a></li>
                                        <li class="nav-item"><a class="nav-link" href="testimonials.html">Testimonials</a></li>
                                        <li class="nav-item"><a class="nav-link" href="faqs.html">FAQs</a></li>
                                        <li class="nav-item"><a class="nav-link" href="404.html">404</a></li>
                                    </ul>
                                </li>
                                <li class="nav-item"><a class="nav-link" href="blog.html">Blog</a></li>
                                <li class="nav-item"><a class="nav-link" href="contact.html">Contact Us</a></li>
                            </ul>
                        </div>
                    </div>                
                    <div class="navbar-toggle"></div>
                </div>
                
			</nav>
			<div class="responsive-menu"></div>
		</div>
	</header>
    );
}