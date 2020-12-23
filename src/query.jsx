import React from 'react';

const Query = () =>
{
    return(
    <>
     
    <section id="header" className="d-flex align-items-center" style={{background:"#FE774A"}}>
        <div className="container-fluid">
            <div className="row">
                <div className="col-10 mx-auto">
                <div class="row">
                <div className="col-md-4 d-flex flex-column ">
                       <h1 className="query__heading">Get <br/>Into Touch</h1>
                    
                </div>
                <div className="col-md-8 d-flex flex-column">
                    <div className="row">
                        <div className="col-md-6"> 
                             <input type="input" class="form__field " style={{marginTop:"110px"}} placeholder="Enter your email" Email="email@gmail.com" id='Email' required />
                              <label for="name" class="form__label">Email</label> 
                        </div>
                        <div className="col-md-6 back__query" > 
                        <form method="post" action="mailto:info@unite8.org">
                        <button className="query__btn btn-lg" type="submit">Notify me</button>
                        </form>
                        </div>
                    </div>
                </div>
                </div>

                </div>
            </div>
        </div>
    </section>
    </>
    )
}

export default Query;
