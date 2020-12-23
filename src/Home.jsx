import React from 'react';
import h from '../src/img/cover2.jpg';
import Project from './Project';
import Service from './Service';
import Team from './Team';
import About from './About';
import Query from './query';


const Home = () =>
{
    return(
    <>
    
    <div className="box">
      <div></div>
     <div></div>
     <div></div>
     <div></div>
     <div></div>
     <div></div>
     <div></div>
     <div></div>
     <div></div>
     <div></div>
 </div> 
    <section id="header" className="d-flex align-items-center">
        <div className="container-fluid">
            <div className="row">
                <div className="col-10 mx-auto">
                <div class="row">
                    <div className="col-sm-6  d-flex flex-column margin">
                        <p className="Header__Styling animate__fadeInLeft">Vision</p>
                        <p className="Header__Styling animate__fadeInLeft" style={{animationDuration:"3s"}}>Implementation</p> 
                    </div>
                    <div className="col-sm-6  header-img">
                        <img src={h} className="img-fluid animated" alt="headerimg"/> 
                    </div>
                    </div>
                </div>
            </div>
        </div>
        
    </section>
    <Service/>
    <About/>
    <Project/>
    <Team/>
    <Query/>
   
    </>
    )
}
export default Home;