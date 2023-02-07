import React from 'react';
import { Button,  Container, Row ,Col, Form} from "react-bootstrap";

import logo from '../assets/images/WiSchool.png';

import topfooterBG from '../assets/images/img-edu.jpg';

function FooterBottom(){
    return(

<>




       <div style={{position: 'relative'}}>

	  
          <div className='topFooter'>
			<Container className='d-flex topfooterContainer'>
                   <Col lg='5'>
					  <div className='topFooterImg'>
						   <img  src={topfooterBG} />					  
					  </div>
				   </Col>
				   <Col lg={{ span: 6, offset: 1 }} >
					   <div className='firstStep'>
						   <h2>
						   You don’t have to see the whole staircase just take the first step
						   </h2>
						   <p>Amet in a suspendisse convallis eget, Amet in a suspendisse convallis egetAmet in a </p>
						   <div className='d-flex btnTwo'>
                                <Button  className='btn-get-started' variant="secondary" size="lg">
                                    Get Started
                                </Button>
								<Button style={{background:'#E7FAEF', color:'#09b451' , margin:'0px 0px 0px 32px'}} className='btn-get-started' variant="secondary" size="lg">
                                    Place a call
                                </Button>
                       
				           </div>
						   
					   </div>
				   </Col>
			</Container>
		  </div>
       </div>






         <div className='footerBg'>
            <Container>
                 <div className='fooSpace d-flex'>
                    <Col lg='3'>
                        <img src={logo} alt='' />
                        <p>We are not here to sell you products, we sell value through our expertise.</p>
                    </Col>
                    <Col lg='2' className='bottomManu'>
                        <BottomNav />
						
                    </Col>
					<Col lg='2' className='bottomManu'>
                        <BottomNav2 />
						
                    </Col>
					<Col lg='2' className='bottomManu'>
                        <BottomNav3 />
						
                    </Col>
					<Col lg='2' className='bottomManu'>
                        <BottomNav4 />
						
                    </Col>
					<Col lg='2' className='bottomManu'>
                        <BottomNav5 />
						
                    </Col>
                    
                 </div>

                <Row>
					<Col md={{ span: 6, offset: 3 }}>
					
				<Form className='form-marBot'>
				<Form.Text className=" subs-text">
	          Subscribe to get latest updates
           </Form.Text>
      <Form.Group className="mb-3 d-flex" controlId="formBasicEmail">
	      
       
        <Form.Control className='input-style' type="email" placeholder="Your Email address" />
       
		    <Button variant="primary" className='subsBtn' type="submit">
			Subscribe
            </Button>
      </Form.Group>

      
     
        </Form>
	</Col>
				</Row>

            </Container>
         </div>
</>
    );
}

function BottomNav(){
   const  navBottomOne = ["Home", "Service", "Training", "Resources", "About Us"];
    return (   
		navBottomOne.map( (navOne, id1) => (
					  <div key={id1}>
                        	<a href='#' > {navOne} </a>
							
					 </div>
	))  
    );
}
function BottomNav2(){
	const  navBottomtwo = [ "Home", "Service", "Training", "Resources"];
	 return (   
		 navBottomtwo.map( (navtwo, id2) => (
					   <div key={id2}>
							 <a href='#'  > {navtwo} </a>
  
					  </div>
	 ))  
	 ); 
 }
 function BottomNav3(){
	const  navBottom3 = [ "Home", "Service", "Training", "Resources"];
	 return (   
		 navBottom3.map( (nav3, id3) => (
					   <div key={id3}>
							 <a href='#' > {nav3} </a>
  
					  </div>
	 ))  
	 );
 }
 function BottomNav4(){
	const  navBottom4 = [ "Home", "Service", "Training"];
	 return (   
		 navBottom4.map( (nav4, id4) => (
					   <div key={id4}>
							 <a href='#' > {nav4} </a>
  
					  </div>
	 ))  
	 );
 }
 function BottomNav5(){
	const  navBottom5 = [ "Home", "Service"];
	 return (   
		 navBottom5.map( (nav5, id5) => (
					   <div key={id5}>
							 <a  href='#'> {nav5} </a>
  
					  </div>
	 ))  
	 );
 }


export default FooterBottom;