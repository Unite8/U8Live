import React from 'react';
import {Card__team} from './Common';



const Team = () =>
{
    return(
    <> 
     
    <div className="container-fluid" style={{background:"white"}}>
            <div className="row">
                <div className="col-10 mx-auto margin1 ">
                     <div className="row">
                        <div className="col-md-4 ">
                            <p className="Team__Styling ">Master<br/>Crew</p>
                            <p className="Team__Para">Our professional team will be<br/>happy to bring amazing ideas<br/>and projects to life</p>
                        </div>
                        <div className="col-md-6">
                        </div>
                        <div className="row">
                          
                           <Card__team 
                             teammember_name="Shivam J "
                             team_specify="Founder"
                             team_profesor="As the director and founder of Unite8, Shivam brings hands-on experience in technologies and has the ability to leading a team successfully and Shivam has an appreciable career in Project Management. He has earned the goodwill of clients across domains, like finance, logistics, e-commerce, Ed-Tech, process automation, and ISPs. The characteristic parameters that Shivam continually reinforce, in everything Unite8 undertakes, are Quality, Timely delivery, and Flexibility in approach  An entrepreneur by passion, A Solution Architect who thinks exploring technologies may give you a chance to build another world"
                           />
                            <Card__team 
                             teammember_name="Tarun Mairothia"
                             team_specify="Cheif Executive"
                             team_profesor="
As the Director and Chief Executive Officer of Unite8, Tarun brings a wealth of hands-on experience to the table. His modest leadership, strategical approach, and humble persona make him the most approachable for clients around the world. He has earned the goodwill of clients across domains, like finance, logistics, e-commerece, pharmaceuticals, process automation and ISPs. The characteristic parameters that tarun continually reinforces, in everything Unite8 undertakes, are Quality, Timely delivery, and Flexibility in approach. He believes in providing the expertise of a large firm without the red tape, baggage and without convoluted excuses or deployment delays. Attention to detail in every aspect of unite’s deliverables, and managing all affairs in a responsive, transparent, and ethical way. His goal is to create mutual value by building and strengthening strategic client relationships, whether it requires us to stretch, think out of the box or be flexible, he makes it happen."
                           />
                           <Card__team 
                             teammember_name="Abhishek S."
                             team_specify="Business Head"
                             team_profesor="As the Director and Business Head of Unite8. Mr. Abhishek has hands-on experience in Clients relationship and has expertise in technologies that's why they deliver Solutioning, conceptualization.  Mr.Abhishek is driven by a passion to ensure that Unite8 becomes a leading global entity delivering best in class products for its customers. Under his guidance, Unite8 has made a strategic and transformation and is continuing to execute on its mission.
                                           He is on a mission to turn Mobile & Web app development into a process-oriented stack, leveraging his services experience, entrepreneurial skills, and intense background in Sales."
                           />
                            
                        </div>
                        </div>
                    </div>
                </div>
            </div>
       
    </>
    )
}
export default Team;