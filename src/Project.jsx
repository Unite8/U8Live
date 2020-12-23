import React from 'react';
import g from '../src/img/project.jpg';
import g1 from '../src/img/project2.jpg';
import g2 from '../src/img/project1.jpg';
import g3 from '../src/img/project3.jpg'
const Project = () =>
{
    return(
    <>
    <div className="container-fluid gallery__bgColor display-flex">
            <div className="row">
                <div className="col-10 mx-auto ">
                <div class="gallery gallery1" id="gallery">


<div class=" pics animation all 2 animate__slideInLeft "  style={{animationDuration:"5s"}}>
  <img class="img-fluid" src={g} alt="Card image cap"/>
  <div class="overlay">
      <div class="text">Stepping is an Educational mobile application and stepping providing a wide range of educational material and live class and more...</div>
  </div>
</div>

<div class=" pics animation all 1 animate__slideInUp"  style={{animationDuration:"7s"}}>
  <img class="img-fluid" src={g1} alt="Card image cap"/>
  <div class="overlay">
      <div class="text">Joe’s Auto Wrecker is the #1 Used Auto Parts Supplier.  and they are Top buyer and seller of Auto parts.</div>
  </div>
</div>

<div class="pics animation all 1 animate__slideInRight"  style={{animationDuration:"10s"}}>
  <img class="img-fluid" src={g2}alt="Card image cap"/>
  <div class="overlay">
      <div class="text">Partbig is India's leading multivendor application to provide his services across India almost on 50K+ Pincode.</div>
  </div>
</div>

<div class="pics animation all 1 animate__slideInRight"  style={{animationDuration:"10s"}}>
  <img class="img-fluid" src={g3}alt="Card image cap"/>
  <div class="overlay">
      <div class="text">MATCHING APP is a multi-vendor mobile application and its working like Tender here seller and buyer matched as per requirement.</div>
  </div>
</div>
</div>
<div className="row ">
<div className="col-sm-4 col-md-4 col-lg-4 offset-sm-4 offset-md-4 offset-lg-4">
<form method="get" action="/Project">
<button className="project__btn btn-lg"  type="submit"  >View All Project</button>
</form>
</div>
</div>
<div className="row">
  <div className="col-sm-4 col-md-4 col-lg-4 offset-sm-4 offset-md-4 offset-lg-4">
    <p className="Project__heading">Achievementes</p>  
    <p className="Project__para">We are proud of</p>
  </div>
</div>
<div className="row">
  <div className="col-sm-3">
        <h1 class = "counter" >25+</h1>
        <p class = "followers">Happy Clients</p>   
        <p class="winning">Winnings</p>
  </div>
  <div className="col-sm-3">
        <h1 class = "counter">30+</h1>
        <p class = "followers">Projects</p>  
        <p class="winning"> <p class="winning">Winnings</p></p> 
  </div>
  <div className="col-sm-3">
        <h1 class = "counter">800hr+</h1>
        <p class = "followers">Time</p>   
 
 <p class="winning"> <p class="winning">Winnings</p></p> </div>
  <div className="col-sm-3">
        <h1 class = "counter">10+</h1>
        <p class = "followers">Delivered Projects</p>
         <p class="winning">Winnings</p>   
  </div>
  {/* <div className="col-sm-2">
        <h1 class = "counter">12</h1>
        <p class = "followers">Awwards</p>  
        <p class="winning"> <p class="winning">Winnings</p></p> 
  </div>
  <div className="col-sm-2">
        <h1 class = "counter">21</h1>
        <p class = "followers">The Weeby</p>
        <p class="winning"> <p class="winning">Winnings</p></p>   
  </div> */}
  
</div>
            </div>
    </div>
</div>

    </>        
    )
}
export default Project;