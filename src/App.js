
import './App.css';
import React, { useState,Component,useEffect } from 'react';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {DragDropContext,Droppable,Draggable} from 'react-beautiful-dnd';
import {Set_right,gameover} from './redux/actions';
import './home.css';
const data1=[
  {
    image:"https://pschool.in/image2/animals/lion.jpg",
    nature:"wild",
  }
  ,
  {
    image:"https://pschool.in/image2/animals/horse.png",
    nature:"domestic",
  }
  ,
  {
    image:"https://pschool.in/image2/animals/goat.png",
    nature:"domestic",
  }
  ,
  {
    image:"https://pschool.in/image2/animals/cat.jpg",
    nature:"domestic",
  }
  ,
  {
    image:"https://pschool.in/image2/animals/dog.jpg",
    nature:"domestic",
  }
  ,
  {
    image:"https://pschool.in/image2/animals/sheep.jpg",
    nature:"domestic"
  }
  ,
  {
    image:"https://pschool.in/image2/animals/zebra.jpg",
    nature:"wild",
  }
  ,
  {
    image:"https://pschool.in/image2/animals/pig.png",
    nature:"domestic",
  }
  ,
  {
    image:"https://pschool.in/image2/animals/rhino.jpg",
    nature:"wild",
  }
  ,
  {
    image:"https://pschool.in/image2/animals/tiger.jpg",
    nature:"wild",
  }
  ,
  {
    image:"https://pschool.in/image2/animals/monkey.jpg",
    nature:"wild",
  }
  ,
  {
    image:"https://pschool.in/image2/animals/elephant.jpg",
    nature:"wild",
  }
  
]



const data3=[];
const data2=[];

function App() {
  const [animal,setanimal]=useState("");
  const [count,setcount]=useState(0);
  const dispatch=useDispatch();
      const score=useSelector(state=>state.reducer.cond);    
      const gameovered=useSelector(state=>state.reducer.over);
      const [sviewscore,setsviewscore]=useState(false);
      const [mobilenav,setmobilenav]=useState(false);
      const openmobilenav=()=>{
        console.log("hit")
        setmobilenav(true);
      }

const onDragend=result=>{
  setcount(count+1);
console.log(animal)
console.log(result);
setcount(count+1);
if(data1[result.source.index].nature==='wild'){
  if(result.destination.droppableId==='1'){
    dispatch(Set_right(score+1));
    const item=data1[result.source.index]
    data2.splice(0,0,item);
    
    data1.splice(result.source.index,1);
  
  }
  else{
   
    data1.splice(result.source.index,1);
    alert("Wrong Choice");
   
    
  }


  
}
else{
  if(result.destination.droppableId==='2'){
    dispatch(Set_right(score+1));
    const item=data1[result.source.index]
    data3.splice(0,0,item);
    
    data1.splice(result.source.index,1);
  
  }
  else{
   
    data1.splice(result.source.index,1);
    alert("Wrong Choice");
   
   
  }
}
console.log(count)
if(count===11){
  dispatch(gameover(true));
  alert("gameover");
}

}

const setplay=()=>{
  data1=data2+data3;
  console.log(data1);
  dispatch(Set_right(0));
  dispatch(gameover(false));
}

// const viewscore=()=>{
// if(gameover){
//   alert("Thanks for playing :)");
//   setsviewscore(true)

// }
// }
  return (
    <DragDropContext
      onDragEnd={onDragend}
      
    >
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
											<div id="nkSidenav" class={mobilenav?"opensidenav":"sidenav"}>
											    <div class="nkdiv001">
											      	<a  class="closebtn" onClick={()=>setmobilenav(false)}>&times;</a>
											      	<div class="nkdiv002">
											      	  	<a href="index.html">
															
															<h4 class="h001">Pschool</h4>
														</a>
											      	</div>
											    </div>
											    <div class="div058">
											    	<a href="#" class="a005">Showcase</a>
													<a href="#" class="a005">All playlist</a>
                          <Link to="/">
                          <a href="#" class="a005">Dashboard</a>
                          </Link>
												
													<a href="#" class="a005">FAQ</a>
													<a href="#" class="a005">Login</a>
													<a href="about.html" class="a005">About Us</a>
											    </div>
											</div>
											<span onClick={openmobilenav} style={{fontSize:'30px',position:' absolute' ,top: '17px' ,cursor:'pointer',color: '#01448e' }}> &#9776;</span>
										</div>
									</div>
									<div class="col-sm-6 col-xs-6 col-6">
										<div class="mobile_header_div_4">
										
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

      <div className="container">
      <div className="container-top">
        <div className="box-con">
      <span className="heading" >Wild Animals</span>
      <Droppable
       droppableId="1"
       >
         {(provided) => (
                   <div
                   {...provided.droppableProps}
                   ref={provided.innerRef}
                 className="box2"
                 >
                   {data2.map((value,indexes)=>(
                       
                       
                      
                       <img  className="card" src={value.image}></img>
       
                      ))}
                      
         
         {provided.placeholder}
         </div>
         )}
       </Droppable>
       </div>
    {gameovered?<div className="score">Score:{score}/12</div>:""} 
    <div className="box-con" >
    <span className="heading">Domestic Animals</span>
       <Droppable
       droppableId="2"
       >
         {(provided) => (
                   <div
                   {...provided.droppableProps}
                   ref={provided.innerRef}
                 className="box2"
                 >
                   {data3.map((value,indexes)=>(
                       
                       
                      
                        <img  className="card" src={value.image}></img>
       
                      ))}
                      
         
         {provided.placeholder}
         </div>
         )}
       </Droppable>
       </div>
       </div>
       <div style={{marginLeft:'100px',marginTop:'50px'}}>{gameovered?<div className="score-mob">Score:{score}/12</div>:""}</div> 
      {gameovered?"":
      <Droppable
      droppableId="3"
     
      
      >
        {(provided) => (
                  <div
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                 className="box1"
                >
        
                     {data1.map((val,ind)=>(
                      
                      
                      <Draggable
                      draggableId={`${ind}`}
                      index={ind}
                      
                      >
                      {(provided) => (
                                 <div
                                   ref={provided.innerRef}
                                   {...provided.draggableProps}
                                   {...provided.dragHandleProps}
                                  
                                 >
                                           
                       <img  className="card" src={val.image}></img>
                       </div>
        )}
        </Draggable>
                     ))}
                     
                     
        {provided.placeholder}
        </div>
        )}
      </Droppable>} 
       </div>
       
        </DragDropContext>
  );
}

export default App;
