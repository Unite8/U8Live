import React from 'react';

const apply = () =>{
    return(
        <>
          <div className="container-fluid con_back ">
            <div className="row con_back">
                <div className="col-10 mx-auto" >
                <div className="row ">
                <div className="col-sm-8  col-md-8 offset-sm-2 offst-md-2  d-flex flex-column " style={{marginTop:"90px"}}>
                        <h className="contact__heading text-center">Join Our Team</h>
                       <h className="contact__para text-center" style={{fontWeight:"200"}}>Apply for a job</h>
                </div>
                <div className="col-sm-6 d-flex flex-column" >
                 <input type="input" class="form__field" placeholder="Name" name="name" id='name' required />
                 <label for="name" class="form__label">Name</label>
                     
                </div>
                <div className="col-sm-6 d-flex flex-column">
                   <input type="input" class="form__field" placeholder="Surname" surname="surname" id='surnamename' required />
                 <label for="name" class="form__label">Surname</label> 
                </div>
                <div className="col-sm-12 d-flex flex-column">
                   <input type="input" class="form__field" placeholder="Email" Email="email@gmail.com" id='Email' required />
                 <label for="name" class="form__label">Email</label> 
                </div>
                <div className="col-sm-12 d-flex flex-column">
                   <input type="input" class="form__field" placeholder="Apply For"  required />
                 <label for="name" class="form__label">Apply For</label> 
                 </div>
                 <div className="col-sm-12 d-flex flex-column">
                   <input type="input" class="form__field" placeholder="Message"  required />
                 <label for="name" class="form__label">Message</label> 
                 </div>
                 <div className="col-sm-4">
                 <form method="post" action="mailto:hr@unite8.org">
                    <button className="contact__btn btn-lg" type="submit">Submit</button>
                  </form>
                 </div>
                </div>
                </div>
                </div>
                </div> 
                </>
    )
}

export default apply;