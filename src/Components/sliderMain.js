import React from 'react';


import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Button from 'react-bootstrap/Button';
// import Stack from 'react-bootstrap/Stack';
import leftImg from '../assets/images/left-img.jpg';
import frame6512 from '../assets/images/frame-6512.jpg';

import frame6515 from '../assets/images/frame-6515.png';
import frame6520 from '../assets/images/frame6520.png';
import Frame6521 from '../assets/images/Frame6521.png';
import Frame6522 from '../assets/images/Frame6522.png';
import Frame6523 from '../assets/images/Frame6523.png';
import Frame6524 from '../assets/images/Frame6524.png';


function SliderMain (){

    return (

     <Container className='slider-Left'>
       <Row className='row-no-margin'>
            <Col lg="7" className='bg-grdiant'>
                <div className=''>

                    <h2 className='qul'>
                    Quality <span>Education</span> <br/> By Any Means<br/> Necessary.
                    </h2>
                    
                </div>
                 <div className='d-flex btn-cls'>
                      <Button  className='btn-get-started' variant="secondary" size="lg">
                          Get Started
                       </Button>
                 </div>
                   
            </Col>
            <Col lg="5">
                <div className="left-img">
                    <img className='left-image' alt="" src={leftImg}  />
                   <div className='img-cont-left'>
                    <p>Learn from best <span>instructors </span> around<br/>  the globe</p>
                    <img alt="" src={frame6512} />
                   </div>
                   <div className='img-cont-right'>

                   <img className='mt-3' alt="" src={frame6515} />
                   <br/>
                    <span className="fifteen-k"> 15k</span>
                    <p>Amazing <br/> students around <br/>the globe</p>
                   
                   </div>
                </div>
            </Col>
        </Row>
        <div className='five-box'>
            <div className='space-box d-flex'>
               
                    <div className='first-box box-one d-flex'>
             
                       
                            <img alt='' src={frame6520} />
                        
                        
                        <p>Problem Solving</p>
                       </div>  
             
               
               
                   <div className='sec-box box-one d-flex'>
                   
                        <img alt='' src={Frame6521} />
                        <p>Live chat</p>
                      
                   </div>
                
               
                    <div className='box-one third-box d-flex'> 
                     
                        <img alt='' src={Frame6522} />
                        <p>Group Reading</p>
                  
                    </div>
                
                
                    <div className='box-one forth-box d-flex'>
                        
                        <img alt='' src={Frame6523} />
                        <p>10k Courses</p>
                   
                   </div>
                
               
                    <div className='box-one fifth-box box-five d-flex'>
                        
                        <img alt='' src={Frame6524} />
                        <p>Hand-on activities</p>

                    </div>
                
           
            </div>
        </div>
     </Container>
     
    );
}








export default SliderMain;