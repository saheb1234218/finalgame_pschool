import React from 'react'
import './home.css';
import {Link} from 'react-router-dom';
function Home() {
    return (
        
        <div>
            <header>
            <div class="div001">
					<div class="container1">
						<div class="div002">
							<div class="row">
								<div class="col-lg-4 col-md-4 col-4">
									<div class="div003">
										<a >
											 
											<h4 class="h001">Pschool</h4>
										</a>
									</div>
								</div>
							
								<div class="col-lg-8 col-md-8 col-8">
									<div class="div004">
										<nav>
											<div class="div005">
												<ul class="ul001">
													<li class="list001">
														<a href="#" class="a001">Showcase</a>
													</li>
													<li class="list001">
														<a href="#" class="a001">All playlist</a>
													</li>
													<li class="list001">
														<a href="#" class="a001">Dashboard</a>
													</li>
													<li class="list001">
														<a href="#" class="a001">FAQ</a>
													</li>
													<li class="list001">
														<a href="#" class="a001">Login</a>
													</li>
													<li class="list001">
														<a href="about.html" class="a001">About Us</a>
													</li>
												</ul>
											</div>
										</nav>
									</div>
								</div>
							</div>
						</div>
						
					</div>
				
				</div>
{/* 
			<!-- /navber -->

			<!-- mobile header --> */}

				<section>
					<div class="mobile_header_div_1">
						
						<div class="container">
							<div class="mobile_header_div_2">
								<div class="row">
									<div class="col-sm-6 col-xs-6 col-6">
										<div class="mobile_header_div_3">
											<div id="nkSidenav" class="sidenav">
											    <div class="nkdiv001">
											      	<a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
											      	<div class="nkdiv002">
											      	  	<a href="index.html">
															 <img src="assets/img/logo.png" class="img001"/> 
															<h4 class="h001">Pschool</h4>
														</a>
											      	</div>
											    </div>
											    <div class="div058">
											    	<a href="#" class="a005">Showcase</a>
													<a href="#" class="a005">All playlist</a>
													<a href="#" class="a005">Dashboard</a>
													<a href="#" class="a005">FAQ</a>
													<a href="#" class="a005">Login</a>
													<a href="about.html" class="a005">About Us</a>
											    </div>
											</div>
											<span onclick="openNav()" style={{fontSize:'30px',position:' absolute' ,top: '17px' ,cursor:'pointer',color: '#01448e' }}> &#9776;</span>
										</div>
									</div>
									<div class="col-sm-6 col-xs-6 col-6">
										<div class="mobile_header_div_4">
											<img src="assets/img/logo.png" class="img010"/> 
											<h4 class="h001" style={{width: '100%'}}>Pschool</h4>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

			{/* <!-- /mobile header --> */}

		</header>

	{/* <!-- /header -->

	<!-- home body --> */}

		<div class="div006">
			
			{/* <!-- 1st part Let’s Get You An Awesome Price --> */}

				<div class="div007">
					<div class="container2">
						<div class="div013">
							<div class="div014">
								<div class="div015">
									<p class="p003">Showcase</p>
									<div class="row">
										<div class="col-lg-2 col-md-2 col-sm-2 col-xs-2 col-2">
											<div class="div021">
												<Link to="/dcontents" class="product001">
													<div class="div020">
														<img src="assets/img/drag&drop.png" class="img003"/>
													</div>
													<p class="p004">
														Drag and Drop
													</p>
												</Link>
											</div>
										</div>
										<div class="col-lg-2 col-md-2 col-sm-2 col-xs-2 col-2">
											<div class="div021">
												<a href="#" class="product001">
													<div class="div020">
														<img src="assets/img/product_1.png" class="img003"/>
													</div>
													<p class="p004">Fun Corner</p>
												</a>
											</div>
										</div>
										<div class="col-lg-2 col-md-2 col-sm-2 col-xs-2 col-2">
											<div class="div021">
												<a href="#" class="product001">
													<div class="div020">
														<img src="assets/img/product_2.png" class="img003"/>
													</div>
													<p class="p004">Writing</p>
												</a>
											</div>
										</div>
										<div class="col-lg-2 col-md-2 col-sm-2 col-xs-2 col-2">
											<div class="div021" class="product001">
												<a href="#">
													<div class="div020">
														<img src="assets/img/product_3.png" class="img003"/>
													</div>
													<p class="p004">Stories</p>
												</a>
											</div>
										</div>
										<div class="col-lg-2 col-md-2 col-sm-2 col-xs-2 col-2">
											<div class="div021" class="product001">
												<a href="#">
													<div class="div020">
														<img src="assets/img/product_4.png" class="img003"/>
													</div>
													<p class="p004">Grammer</p>
												</a>
											</div>
										</div>
										<div class="col-lg-2 col-md-2 col-sm-2 col-xs-2 col-2">
											<div class="div021" class="product001">
												<a href="#">
													<div class="div020">
														<img src="assets/img/product_5.png" class="img003"/>
													</div>
													<p class="p004">Vocabulary</p>
												</a>
											</div>
										</div>
										<div class="col-lg-2 col-md-2 col-sm-2 col-xs-2 col-2">
											<div class="div021">
												<a href="#" class="product001">
													<div class="div020">
														<img src="assets/img/product_1.png" class="img003"/>
													</div>
													<p class="p004">Fun Corner</p>
												</a>
											</div>
										</div>
										<div class="col-lg-2 col-md-2 col-sm-2 col-xs-2 col-2">
											<div class="div021">
												<a href="#" class="product001">
													<div class="div020">
														<img src="assets/img/product_2.png" class="img003"/>
													</div>
													<p class="p004">Writing</p>
												</a>
											</div>
										</div>
										<div class="col-lg-2 col-md-2 col-sm-2 col-xs-2 col-2">
											<div class="div021" class="product001">
												<a href="#">
													<div class="div020">
														<img src="assets/img/product_3.png" class="img003"/>
													</div>
													<p class="p004">Stories</p>
												</a>
											</div>
										</div>
										<div class="col-lg-2 col-md-2 col-sm-2 col-xs-2 col-2">
											<div class="div021" class="product001">
												<a href="#">
													<div class="div020">
														<img src="assets/img/product_4.png" class="img003"/>
													</div>
													<p class="p004">Grammer</p>
												</a>
											</div>
										</div>
										<div class="col-lg-2 col-md-2 col-sm-2 col-xs-2 col-2">
											<div class="div021" class="product001">
												<a href="#">
													<div class="div020">
														<img src="assets/img/product_5.png" class="img003"/>
													</div>
													<p class="p004">Vocabulary</p>
												</a>
											</div>
										</div>
										<div class="col-lg-2 col-md-2 col-sm-2 col-xs-2 col-2">
											<div class="div021">
												<a href="#" class="product001">
													<div class="div020">
														<img src="assets/img/product_1.png" class="img003"/>
													</div>
													<p class="p004">Fun Corner</p>
												</a>
											</div>
										</div>
										<div class="col-lg-2 col-md-2 col-sm-2 col-xs-2 col-2">
											<div class="div021">
												<a href="#" class="product001">
													<div class="div020">
														<img src="assets/img/product_2.png" class="img003"/>
													</div>
													<p class="p004">Writing</p>
												</a>
											</div>
										</div>
										<div class="col-lg-2 col-md-2 col-sm-2 col-xs-2 col-2">
											<div class="div021" class="product001">
												<a href="#">
													<div class="div020">
														<img src="assets/img/product_3.png" class="img003"/>
													</div>
													<p class="p004">Stories</p>
												</a>
											</div>
										</div>
										<div class="col-lg-2 col-md-2 col-sm-2 col-xs-2 col-2">
											<div class="div021" class="product001">
												<a href="#">
													<div class="div020">
														<img src="assets/img/product_4.png" class="img003"/>
													</div>
													<p class="p004">Grammer</p>
												</a>
											</div>
										</div>
										<div class="col-lg-2 col-md-2 col-sm-2 col-xs-2 col-2">
											<div class="div021" class="product001">
												<a href="#">
													<div class="div020">
														<img src="assets/img/product_5.png" class="img003"/>
													</div>
													<p class="p004">Vocabulary</p>
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						
					</div>
				</div>

			{/* <!-- /1st part Let’s Get You An Awesome Price -->

			<!-- 6th part footer --> */}

				<footer>
					
					<section>
						<div class="div046">
							
							<div class="container">
								
								
							</div>
							
						</div>
					
					</section>

					<section>
						<div class="div048">
							<div class="container4">
								
								<div class="div049">
									<div class="row">
										<div class="col-lg-3 col-md-3 col-12">
											<div class="div050">
												<div class="div051">
													<a href="index.html">
														 
														<h4 class="h001">Pschool</h4>
													</a>
												</div>
												<div class="div052">
													<p class="p012">Follow Us</p>
													<div class="div053">
														<ul class="ul005">
															<li class="list005" >
																<img src="assets/img/facebook.png" class="img009" style={{margin: '0px'}}/>
																 <h4 class="h001">Pschool</h4> 
															</li>
															<li class="list005">
																<img src="assets/img/instagram.png" class="img009"/>
															</li>
															<li class="list005">
																<img src="assets/img/twitter.png" class="img009"/>
															</li>
															<li class="list005">
																<img src="assets/img/link_in.png" class="img009"/>
															</li>
															<li class="list005">
																<img src="assets/img/youtube.png" class="img009"/>
															</li>
														</ul>
													</div>
												</div>
											</div>
										</div>
										<div class="col-lg-3 col-md-3 col-12">
											<div class="div050">
												<p class="p012">Company</p>
												<ul class="ul004">
													<li class="list004">
														<a href="about.html" class="a003">About Us</a>
													</li>
													<li class="list004">
														<a href="contact.html" class="a003">Contact Us</a>
													</li>
												</ul>
											</div>
										</div>
										<div class="col-lg-3 col-md-3 col-12">
											<div class="div050">
												<p class="p012">Resources</p>
												<ul class="ul004">
													<li class="list004">
														<a href="#" class="a003">Insurance FAQs</a>
													</li>
												</ul>
											</div>
										</div>
										<div class="col-lg-3 col-md-3 col-12">
											<div class="div050">
												<p class="p012">Services</p>
												<ul class="ul004">
													<li class="list004">
														<a href="#" class="a003">Raise A Claim</a>
													</li>
													<li class="list004">
														<a href="#" class="a003">Renewals</a>
													</li>
													<li class="list004">
														<a href="#" class="a003">Self Service</a>
													</li>
												</ul>
											</div>
										</div>
									</div>
								</div>
							
							</div>
						
						</div>
					</section>

					<section>
						<div class="div054">
							<div class="container5">
								<div class="div055">
									<div class="div057"></div>
									<div class="div059">
										<p class="p014">
											© 2021 <a href="#" style={{color: 'white'}}>DINETIC TECHNOLOGIES PVT. LTD.</a>
										</p>
									</div>
								</div>
								
							</div>
							
						</div>
					</section>

				</footer>

			

		</div>

        </div>
        
    )
}

export default Home
