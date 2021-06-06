import React from 'react'
import './home.css';
import {Link} from 'react-router-dom';
function Dragcontents() {
    return (
<>
<header>
            <div class="div001">
					<div class="container1">
						<div class="div002">
							<div class="row">
								<div class="col-lg-4 col-md-4 col-4">
									<div class="div003">
										<a >
											 <img src="assets/img/logo.png" class="img001"/> 
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
													<Link to="/">
													<li class="list001">
														<a href="#" class="a001">Dashboard</a>
													</li>
													</Link>
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

				<div class="div007">
					<div class="container7">
						<div class="div013">
							<div class="div014">
								<div class="div015">
									<p class="p003">Drag And Drop</p>
									<div class="row">
										<div class="col-lg-2 col-md-2 col-sm-2 col-xs-2 col-2">
											<div class="div021">
												<Link to="/drag" class="product001">
													<div class="div020">
														<img src="assets/img/drag&drop.png" class="img003"/>
													</div>
													<p class="p004">
														Domestic vs Wild Animals
													</p>
												</Link>
											</div>
										</div>
										<div class="col-lg-2 col-md-2 col-sm-2 col-xs-2 col-2">
											<div class="div021">
												<a href="#" class="product001">
													<div class="div020">
														<img src="assets/img/drag&drop.png" class="img003"/>
													</div>
													<p class="p004">Parts of Plant</p>
												</a>
											</div>
										</div>
										<div class="col-lg-2 col-md-2 col-sm-2 col-xs-2 col-2">
											<div class="div021">
												<a href="#" class="product001">
													<div class="div020">
														<img src="assets/img/drag&drop.png" class="img003"/>
													</div>
													<p class="p004"> Parts of Dog</p>
												</a>
											</div>
										</div>
										<div class="col-lg-2 col-md-2 col-sm-2 col-xs-2 col-2">
											<div class="div021">
												<a href="#" class="product001">
													<div class="div020">
														<img src="assets/img/drag&drop.png" class="img003"/>
													</div>
													<p class="p004"> Parts of Face</p>
												</a>
											</div>
										</div>
										<div class="col-lg-2 col-md-2 col-sm-2 col-xs-2 col-2">
											<div class="div021">
												<a href="#" class="product001">
													<div class="div020">
														<img src="assets/img/drag&drop.png" class="img003"/>
													</div>
													<p class="p004">Parts of Human</p>
												</a>
											</div>
										</div>
										<div class="col-lg-2 col-md-2 col-sm-2 col-xs-2 col-2">
											<div class="div021">
												<a href="#" class="product001">
													<div class="div020">
														<img src="assets/img/drag&drop.png" class="img003"/>
													</div>
													<p class="p004">Parts of Computer</p>
												</a>											
											</div>
										</div>
										<div class="col-lg-2 col-md-2 col-sm-2 col-xs-2 col-2">
											<div class="div021">
												<a href="#" class="product001">
													<div class="div020">
														<img src="assets/img/drag&drop.png" class="img003"/>
													</div>
													<p class="p004">Parts of Tree</p>
												</a>
											</div>
										</div>
										<div class="col-lg-2 col-md-2 col-sm-2 col-xs-2 col-2">
											<div class="div021">
												<a href="#" class="product001">
													<div class="div020">
														<img src="assets/img/drag&drop.png" class="img003"/>
													</div>
													<p class="p004">Water Cycle</p>
												</a>
											</div>
										</div>
										<div class="col-lg-2 col-md-2 col-sm-2 col-xs-2 col-2">
											<div class="div021">
												<a href="#" class="product001">
													<div class="div020">
														<img src="assets/img/drag&drop.png" class="img003"/>
													</div>
													<p class="p004">Parts of a Fish</p>
												</a>
											</div>
										</div>
										<div class="col-lg-2 col-md-2 col-sm-2 col-xs-2 col-2">
											<div class="div021">
												<a href="#" class="product001">
													<div class="div020">
														<img src="assets/img/drag&drop.png" class="img003"/>
													</div>
													<p class="p004">Parts of a Flower</p>
												</a>
											</div>
										</div>
										<div class="col-lg-2 col-md-2 col-sm-2 col-xs-2 col-2">
											<div class="div021">
												<a href="#" class="product001">
													<div class="div020">
														<img src="assets/img/drag&drop.png" class="img003"/>
													</div>
													<p class="p004">Skeletal System</p>
												</a>
											</div>
										</div>
										<div class="col-lg-2 col-md-2 col-sm-2 col-xs-2 col-2">
											<div class="div021">
												<a href="#" class="product001">
													<div class="div020">
														<img src="assets/img/drag&drop.png" class="img003"/>
													</div>
													<p class="p004">Organs</p>
												</a>
											</div>
										</div>
										<div class="col-lg-2 col-md-2 col-sm-2 col-xs-2 col-2">
											<div class="div021">
												<a href="#" class="product001">
													<div class="div020">
														<img src="assets/img/drag&drop.png" class="img003"/>
													</div>
													<p class="p004">Parts of a Bicycle</p>
												</a>
											</div>
										</div>
									</div>
								
								</div>
								
							</div>
						</div>
					</div>
				</div>




</>

    )
}

export default Dragcontents
