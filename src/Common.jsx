import React from 'react';
const CommonService = (props) =>{
      return(<>
          
                    <div className="col-md-4" >
                        <div className="row">
                            <div className="col-sm-1 col-md-1">
                                <img  class="icon__service animate__bounce"  src={props.icon}/>
                            </div>
                            <div className="col-sm-11 col-md-11">
                            <h4 className="Service__Heading1"> {props.Sheading}</h4>
                        <p className="Service__Para">{props.Spara}</p>
                            </div>
                        </div>
                    </div>
                
      </>)
    
}

const Card__team = (props) =>{
    return(<>
        <div className=" col-lg-4 col-md-4 animate__slideInLeft" style={{animationDuration:"10s"}}>
                                <div className="card">
                                    <div className="card-body">
                                    {/* <div className="col-sm-4 offset-sm-4">
                                        <img src={p} alt="person" className="card__img"/>
                                        </div> */}
                                        <h3 className="card__heading">{props.teammember_name}</h3>
                                        <h5 className="card__h2">{props.team_specify}</h5>
                                        <p className="card__para">{props.team_profesor}</p>
                                        <div className="d-flex flex-row justify-content-center">
                                            <div class="p-4">
                                                <a href="#">
                                                    <i className="fa fa-facebook card__icon"></i>
                                                </a>
                                            </div>
                                            <div class="p-4">
                                                <a href="#">
                                                    <i className="fa fa-twitter card__icon"></i>
                                                </a>
                                            </div>
                                            <div class="p-4">
                                                <a href="#">
                                                    <i className="fa fa-instagram card__icon"></i>
                                                </a>
                                            </div>
                                            <div class="p-4">
                                                <a href="#">
                                                    <i className="fa fa-linkedin card__icon"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
    </>)
}
export default CommonService;
export {Card__team};

