import React from 'react';
import CommonService from './Common';
import data from '../src/img/data.svg';
import enter from '../src/img/enterprise.svg';
import smart from '../src/img/smartphone.svg';
import analysis from '../src/img/analysis.svg';
import cloud from '../src/img/cloud-storage.svg';
import online from '../src/img/online-shopping.svg';
import Supply from '../src/img/supply-chain.svg';
import teach from '../src/img/teaching.svg';

const Service = () =>
{
    return(
    <>
 
     <div className="container-fluid Service__bgColor d-flex align-item-center">
            <div className="row d-flex align-items-center">
                <div className="col-10 mx-auto ">
                <div className="row">
                    <div className="col-md-6  d-flex flex-column">
                       <h1 className="Service__Heading">Services<br/>& Portfolio</h1> 
                    </div>
                </div>
                <div className="row">
                <CommonService 
                   icon={data}
                   Sheading="Web Designing & Development"
                   Spara="Providing an endless range of development for websites. "/>
                           <CommonService 
                   icon={enter}
                   Sheading="Enterprise Application"
                   Spara=" Become the best solution provider for an enterprise using Advance Technologies."/>
                           <CommonService 
                   icon={smart}
                   Sheading="Mobile Application"
                   Spara="Delivered 30+ Mobile Application on Google Playstore "/>
                           <CommonService 
                   icon={Supply}
                   Sheading="Healthcare,Logistic & Supply Chain"
                   Spara="Working on Different healthcare products to make the health ecosystem better."/>
                           <CommonService 
                   icon={teach}
                   Sheading="Education"
                   Spara="Working with giants startups and delivered advanced products."/>
                           <CommonService 
                   icon={online}
                   Sheading="E-Commerce"
                   Spara="Best e-commerce solution provider."/>
                   <CommonService 
                   icon={cloud}
                   Sheading="IoT"
                   Spara="Team Always working on different products to make life easier using IoT."/>
                   <CommonService 
                   icon={analysis}
                   Sheading="Analytics"
                   Spara="Data Visualization | AI & ML"/>
                </div>
                <div style={{marginTop:"60px"}}></div>
</div>
                </div>
            </div>

   
    </>
    )
}
export default Service;