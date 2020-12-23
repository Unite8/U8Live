import React from 'react';




const contact = () =>
{
    return(
    <>
      <div className="container-fluid">
            <div className="row">
                <div className="col-10 mx-auto">
                <div class="row">
                <div className="col-sm-6  d-flex flex-column margin1">
                <iframe  className=" mapstyle" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d449363.69055627135!2d77.23522782035015!3d28.369313563645708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cef471e692893%3A0xd9d05803e4a841a3!2sUnite8%20Software%20Solutions%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1607236950850!5m2!1sen!2sin " />
                <div style={{ marginBottom:"50px"}}></div>
                </div>
                    <div className="col-sm-6  d-flex flex-column margin1">
                        <p className="contact__heading">Contact Us</p> 
                        <p className="contact__para">We will be happy to answer your question</p> 
                         <div className="row" style={{marginTop:"20px"}}>
                             <div className="col-1">
                                 <i className="fa fa-3x fa-map-marker contact__icon animate__bounce"></i>
                             </div>
                             <div className="col-11">
                                 <h className="contact__heading1">Location</h><br/>
                                 <h className="contact_para1" style={{marginLeft:"10px"}}>A 404 Ajnara Homes Greater Noida West India</h>
                             </div>
                         </div>
                         <div className="row " style={{marginTop:"50px"}}>
                             <div className="col-1">
                                 <i className="fa fa-3x fa-envelope contact__icon animate__bounce"></i>
                             </div>
                             <div className="col-11">
                                 <h className="contact__heading1">E-mail</h><br/>
                                 <h className="contact_para1" style={{marginLeft:"10px"}}>info@unite8.org / sales@unite8.org</h>
                             </div>
                         </div>
                         <div className="row" style={{marginTop:"50px"}}>
                             <div className="col-1">
                                 <i className="fa fa-3x fa-phone contact__icon animate__bounce"></i>
                             </div>
                             <div className="col-11">
                                 <h className="contact__heading1">Phone number</h><br/>
                                 <h className="contact_para1" style={{marginLeft:"10px"}} >+918423050982 , +917302097374</h>
                             </div>
                         </div>
                         <div style={{ marginBottom:"50px"}}></div>
                    </div>
                </div>
               
            </div>
        </div>
       
                </div>
    
    </>
    )
}
export default contact;