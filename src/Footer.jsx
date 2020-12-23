import React from 'react';


const Footer = () =>
{
    return(
    <>
     
   
        <div className="container-fluid" style={{background:"#363636"}}>
            <div className="row">
                <div className="col-10 mx-auto">
                <div class="row">
                    <div className="col-md-2  d-flex flex-column">
                        <h1 className="footer__Heading">Follow&nbsp;Us</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-3">
                        <p className="para1">Office</p>
                        <h className="para2">office<br/>Noida-<br/>A 404<br/>Ajnara Homes<br/>Greater Noida <br/>UttarPardesh , India</h>
                    </div>
                    <div className="col-3">
                        <p className="para1">Start a conversation</p>
                        <h className="para2">info@unite8.org<br/>+918423050982,<br/>+917302097374</h>
                    </div>
                    <div className="col-3">
                        <p className="para1">Social</p>
                        <div className="row">
                            <div className="col-3">
                            <a className = "nav-link" href="https://www.facebook.com/unite8software">
                            <i className="fa fa-facebook card__icon" style={{color:"white"}}> </i>
                            </a>
                            </div>
                            <div className="col-3">
                            <a className = "nav-link" href="https://twitter.com/home">
                            <i className="fa fa-twitter card__icon"  style={{color:"white"}}></i>
                            </a>
                            </div>
                            <div className="col-3">
                            <a className = "nav-link" href="https://www.facebook.com/">
                            <i className="fa fa-instagram card__icon"  style={{color:"white"}}></i>
                            </a>
                            </div>
                            <div className="col-3">
                            <a className = "nav-link" href="https://www.linkedin.com/company/unite8-software">
                            <i className="fa fa-linkedin card__icon"  style={{color:"white"}}></i>
                            </a>
                            </div>
                        </div>
                      
                    </div>
                    <div className="col-3">
                    <p className="para1">Useful-Link</p>
                     <div className="row">
                        <div className="col-12">
                           <a href="/Project" className="para2 f_para" style={{textDecoration:"none"}}> <i class="fa fa-circle" style={{color:"#606060",marginRight:"5px",fontSize:"0.75em"}}></i>Project</a>
                        </div>
                        <div className="col-12">
                           <a href="/Team" className="para2 f_para" style={{textDecoration:"none"}}> <i class="fa fa-circle" style={{color:"#606060",marginRight:"5px",fontSize:"0.75em"}}></i>Team</a>
                        </div>
                        <div className="col-12">
                           <a href="/Contact" className="para2 f_para" style={{textDecoration:"none"}}> <i class="fa fa-circle" style={{color:"#606060",marginRight:"5px",fontSize:"0.75em"}}></i>Contact</a>
                        </div>
                        <div className="col-12">
                           <a href="/Carrier" className="para2 f_para" style={{textDecoration:"none"}}> <i class="fa fa-circle" style={{color:"#606060",marginRight:"5px",fontSize:"0.75em"}}></i>Carrier</a>
                        </div>
                        <div className="col-12">
                           <a href="/about" className="para2 f_para" style={{textDecoration:"none"}}> <i class="fa fa-circle" style={{color:"#606060",marginRight:"5px",fontSize:"0.75em"}}></i>AboutUs</a>
                        </div>
                    </div>
                    <div className="m"></div>
                   </div>
                   </div>
                 
                </div>
            </div>
        </div>
        <div className=" container-fluid" style={{background:"#252525"}}>
        <div className="row">
                        <p className="para2" style={{textAlign:"center",marginTop:"30px",marginBottom:"30px"}}>Copyright @ 2019 Unite8.org-Software Development Startup</p>
                        </div>
                    </div>
        
  
    </>
    )
}
export default Footer;