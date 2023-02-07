import React from 'react';


import {  Card, Container, Row ,Col} from "react-bootstrap";


import Carousel from 'better-react-carousel';

import image1 from '../assets/images/image1.jpg';

import image2 from '../assets/images/image2.jpg';
import image3 from '../assets/images/image3.jpg';
import image4 from '../assets/images/image4.png';

import Image5 from '../assets/images/img-edu.png';

import Balancer from 'react-wrap-balancer';

import unspa1 from '../assets/images/unsplash1.png';


function MainSec (){

   return (
     <>
       <Container className="crousel-sec">
         <div className="crousel-title d-flex justify-content-md-between ">
           <Balancer ratio={0.7}>
             {" "}
             <h2> Choose favourite course from top cartegories</h2>
           </Balancer>
           <p> See all</p>
         </div>
       </Container>

       <Container className="crousel-main">
         <div className="crousel-main-start">
           <Carousel cols={4} rows={1} gap={32} loop={true}>
             <Carousel.Item>
               <Card className="cardStyle" style={{ width: "" }}>
                 <Card.Img variant="top" src={image1} />
                 <Card.Body className="overlay-card">
                   <div className="text-card">
                     <Card.Title>Marketing</Card.Title>
                     <Card.Text>
                       Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                       Quam nibh netus auctor consect massa. Maecen vivamus sed
                       nibh enim sed. Hac ridiculus tellus urna quam odio quis
                       montes, diam. Malesuada ut urna eu faucibus faucibus
                       faucibus u
                     </Card.Text>
                   </div>
                 </Card.Body>
               </Card>
             </Carousel.Item>
             <Carousel.Item>
               <Card className="cardStyle" style={{ width: "" }}>
                 <Card.Img variant="top" src={image2} />
                 <Card.Body className="overlay-card">
                   <div className="text-card">
                     <Card.Title>Design</Card.Title>
                     <Card.Text>
                       Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                       Quam nibh netus auctor consect massa. Maecen vivamus sed
                       nibh enim sed. Hac ridiculus tellus urna quam odio quis
                       montes, diam. Malesuada ut urna eu faucibus faucibus
                       faucibus u
                     </Card.Text>
                   </div>
                 </Card.Body>
               </Card>
             </Carousel.Item>
             <Carousel.Item>
               <Card className="cardStyle" style={{ width: "" }}>
                 <Card.Img variant="top" src={image3} />
                 <Card.Body className="overlay-card">
                   <div className="text-card">
                     <Card.Title>Programming</Card.Title>
                     <Card.Text>
                       Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                       Quam nibh netus auctor consect massa. Maecen vivamus sed
                       nibh enim sed. Hac ridiculus tellus urna quam odio quis
                       montes, diam. Malesuada ut urna eu faucibus faucibus
                       faucibus u
                     </Card.Text>
                   </div>
                 </Card.Body>
               </Card>
             </Carousel.Item>
             <Carousel.Item>
               <Card className="cardStyle" style={{ width: "" }}>
                 <Card.Img variant="top" src={image4} />
                 <Card.Body className="overlay-card">
                   <div className="text-card">
                     <Card.Title>Technology</Card.Title>
                     <Card.Text>
                       Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                       Quam nibh netus auctor consect massa. Maecen vivamus sed
                       nibh enim sed. Hac ridiculus tellus urna quam odio quis
                       montes, diam. Malesuada ut urna eu faucibus faucibus
                       faucibus u
                     </Card.Text>
                   </div>
                 </Card.Body>
               </Card>
             </Carousel.Item>
             <Carousel.Item>
               <Card className="cardStyle" style={{ width: "" }}>
                 <Card.Img variant="top" src={image1} />
                 <Card.Body className="overlay-card">
                   <div className="text-card">
                     <Card.Title>Marketing</Card.Title>
                     <Card.Text>
                       Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                       Quam nibh netus auctor consect massa. Maecen vivamus sed
                       nibh enim sed. Hac ridiculus tellus urna quam odio quis
                       montes, diam. Malesuada ut urna eu faucibus faucibus
                       faucibus u
                     </Card.Text>
                   </div>
                 </Card.Body>
               </Card>
             </Carousel.Item>
             <Carousel.Item>
               <Card className="cardStyle" style={{ width: "" }}>
                 <Card.Img variant="top" src={image2} />
                 <Card.Body className="overlay-card">
                   <div className="text-card">
                     <Card.Title>Design</Card.Title>
                     <Card.Text>
                       Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                       Quam nibh netus auctor consect massa. Maecen vivamus sed
                       nibh enim sed. Hac ridiculus tellus urna quam odio quis
                       montes, diam. Malesuada ut urna eu faucibus faucibus
                       faucibus u
                     </Card.Text>
                   </div>
                 </Card.Body>
               </Card>
             </Carousel.Item>
             <Carousel.Item>
               <Card className="cardStyle" style={{ width: "" }}>
                 <Card.Img variant="top" src={image3} />
                 <Card.Body className="overlay-card">
                   <div className="text-card">
                     <Card.Title>Programming</Card.Title>
                     <Card.Text>
                       Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                       Quam nibh netus auctor consect massa. Maecen vivamus sed
                       nibh enim sed. Hac ridiculus tellus urna quam odio quis
                       montes, diam. Malesuada ut urna eu faucibus faucibus
                       faucibus u
                     </Card.Text>
                   </div>
                 </Card.Body>
               </Card>
             </Carousel.Item>
             <Carousel.Item>
               <Card className="cardStyle" style={{ width: "" }}>
                 <Card.Img variant="top" src={image4} />
                 <Card.Body className="overlay-card">
                   <div className="text-card">
                     <Card.Title>Tecnology</Card.Title>
                     <Card.Text>
                       Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                       Quam nibh netus auctor consect massa. Maecen vivamus sed
                       nibh enim sed. Hac ridiculus tellus urna quam odio quis
                       montes, diam. Malesuada ut urna eu faucibus faucibus
                       faucibus u
                     </Card.Text>
                   </div>
                 </Card.Body>
               </Card>
             </Carousel.Item>
           </Carousel>
         </div>
       </Container>


{/* Most Popular courses */}

       <Container>
         <div className="courses-title d-flex justify-content-md-between ">
           <h2> Most Popular courses</h2>
           <p>
             <span>
               <svg
                 width="18"
                 height="14"
                 viewBox="0 0 18 14"
                 fill="none"
                 xmlns="http://www.w3.org/2000/svg"
               >
                 <path
                  
                   d="M15.25 1.06255L9.00003 10.4376L2.75003 1.06255C2.66795 0.939437 2.56243 0.833694 2.43949 0.75136C2.31654 0.669026 2.17859 0.611714 2.0335 0.582696C1.88841 0.553678 1.73902 0.553523 1.59387 0.582238C1.44872 0.610952 1.31064 0.667975 1.18753 0.750051C1.06441 0.832128 0.958669 0.937649 0.876335 1.06059C0.794002 1.18353 0.73669 1.32149 0.707672 1.46658C0.678653 1.61167 0.678497 1.76106 0.707211 1.90621C0.735926 2.05136 0.79295 2.18944 0.875026 2.31255L7.96003 12.9401C8.07418 13.1112 8.22883 13.2516 8.41025 13.3487C8.59168 13.4458 8.79426 13.4966 9.00003 13.4966C9.20579 13.4966 9.40838 13.4458 9.5898 13.3487C9.77122 13.2516 9.92587 13.1112 10.04 12.9401L17.125 2.31255C17.2071 2.18944 17.2641 2.05136 17.2928 1.90621C17.3216 1.76106 17.3214 1.61167 17.2924 1.46658C17.2634 1.32149 17.2061 1.18353 17.1237 1.06059C17.0414 0.937649 16.9356 0.832128 16.8125 0.750051C16.6894 0.667975 16.5513 0.610952 16.4062 0.582238C16.261 0.553523 16.1116 0.553678 15.9666 0.582696C15.8215 0.611714 15.6835 0.669026 15.5606 0.75136C15.4376 0.833694 15.3321 0.939437 15.25 1.06255Z"
                   fill="white"
                 />
               </svg>
             </span>
             Sort by
           </p>
         </div>

         <div className="courserStart">
           <CourseDatadisplay />
         </div>

         {/* Learn New Skills */}

         <div className="newSkills">
           <div className="courses-title d-flex justify-content-md-between ">
             <h2> Learn a new skill in two hours</h2>
           </div>

           <div className="courserStart">
             <div className="crousel-main">
               <div className="crousel-main-start">
                
               
                     <LearnNewSkills/>

                
               </div>
             </div>
           </div>
         </div>




{/* Good Education Section */}
        <div className="newSkills" style={{margin:'0px 0px 192px 0px'}}>
           <div className="courses-title d-flex justify-content-md-between ">
             <h2> We Bring The Good Education To Life</h2>
           </div>
          
        <Row>


          <div className='goodEdu d-flex'>
            <Col lg='5'>
              <img src={Image5} alt='img-left'/>
            </Col>
            <Col lg='6' className='doWork'>
              <h2 >
              Let Your Education Do The Walking
              </h2>

              <div className='do-work-text-icon d-flex'>
              <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="50" height="50" rx="25" fill="#DDFFFF"/>
<g >
<path d="M14.5 17.2419C15.8275 16.6869 17.731 16.0884 19.582 15.9024C21.577 15.7014 23.269 15.9969 24.25 17.0304V31.6494C22.8475 30.8544 21.07 30.7449 19.4305 30.9099C17.6605 31.0899 15.8755 31.6014 14.5 32.1264V17.2419ZM25.75 17.0304C26.731 15.9969 28.423 15.7014 30.418 15.9024C32.269 16.0884 34.1725 16.6869 35.5 17.2419V32.1264C34.123 31.6014 32.3395 31.0884 30.5695 30.9114C28.9285 30.7449 27.1525 30.8529 25.75 31.6494V17.0304ZM25 15.6744C23.5225 14.4039 21.3805 14.2149 19.4305 14.4099C17.1595 14.6394 14.8675 15.4179 13.4395 16.0674C13.3085 16.127 13.1974 16.2231 13.1194 16.3441C13.0415 16.4651 13 16.606 13 16.7499V33.2499C13 33.3754 13.0316 33.4989 13.0917 33.6091C13.1518 33.7192 13.2386 33.8125 13.3441 33.8804C13.4496 33.9483 13.5705 33.9887 13.6957 33.9978C13.8208 34.0069 13.9463 33.9844 14.0605 33.9324C15.3835 33.3324 17.515 32.6109 19.5805 32.4024C21.694 32.1894 23.4655 32.5329 24.415 33.7179C24.4853 33.8055 24.5743 33.8762 24.6756 33.9248C24.7768 33.9734 24.8877 33.9986 25 33.9986C25.1123 33.9986 25.2232 33.9734 25.3244 33.9248C25.4257 33.8762 25.5147 33.8055 25.585 33.7179C26.5345 32.5329 28.306 32.1894 30.418 32.4024C32.485 32.6109 34.618 33.3324 35.9395 33.9324C36.0537 33.9844 36.1792 34.0069 36.3043 33.9978C36.4295 33.9887 36.5504 33.9483 36.6559 33.8804C36.7614 33.8125 36.8482 33.7192 36.9083 33.6091C36.9684 33.4989 37 33.3754 37 33.2499V16.7499C37 16.606 36.9585 16.4651 36.8806 16.3441C36.8026 16.2231 36.6915 16.127 36.5605 16.0674C35.1325 15.4179 32.8405 14.6394 30.5695 14.4099C28.6195 14.2134 26.4775 14.4039 25 15.6744Z" fill="#09B451"/>
</g>
<defs>
<clipPath id="clip0_1_1676">
<rect width="24" height="24" fill="white" transform="translate(13 13)"/>
</clipPath>
</defs>
</svg>

<p>Free E-book, Videos and kits</p>
              </div>
              <div className='do-work-text-icon d-flex'>
            
              <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="50" height="50" rx="25" fill="#DDFFFF"/>
<path d="M35.1485 22.6562H29.1485C29.0454 22.6562 28.961 22.7406 28.961 22.8438V23.9688C28.961 24.0719 29.0454 24.1562 29.1485 24.1562H35.1485C35.2516 24.1562 35.336 24.0719 35.336 23.9688V22.8438C35.336 22.7406 35.2516 22.6562 35.1485 22.6562ZM32.0079 25.8438H29.1485C29.0454 25.8438 28.961 25.9281 28.961 26.0312V27.1562C28.961 27.2594 29.0454 27.3438 29.1485 27.3438H32.0079C32.111 27.3438 32.1954 27.2594 32.1954 27.1562V26.0312C32.1954 25.9281 32.111 25.8438 32.0079 25.8438ZM24.1868 20.5586H23.1719C23.0266 20.5586 22.9094 20.6758 22.9094 20.8211V26.6336C22.9094 26.718 22.9493 26.7953 23.0172 26.8445L26.5071 29.3898C26.6243 29.4742 26.7883 29.4508 26.8727 29.3336L27.475 28.5109V28.5086C27.5594 28.3914 27.5336 28.2273 27.4165 28.143L24.4469 25.9961V20.8211C24.4493 20.6758 24.3297 20.5586 24.1868 20.5586Z" fill="#09B451"/>
<path d="M31.8625 28.7946H30.5078C30.3766 28.7946 30.2524 28.8626 30.182 28.9751C29.8844 29.4462 29.5375 29.8821 29.1391 30.2805C28.4524 30.9673 27.6531 31.5063 26.7649 31.8813C25.8438 32.2704 24.8664 32.4673 23.8586 32.4673C22.8485 32.4673 21.8711 32.2704 20.9524 31.8813C20.0641 31.5063 19.2649 30.9673 18.5781 30.2805C17.8914 29.5938 17.3524 28.7946 16.9774 27.9063C16.5883 26.9876 16.3914 26.0102 16.3914 25.0001C16.3914 23.9899 16.5883 23.0149 16.9774 22.0938C17.3524 21.2055 17.8914 20.4063 18.5781 19.7196C19.2649 19.0329 20.0641 18.4938 20.9524 18.1188C21.8711 17.7298 22.8508 17.5329 23.8586 17.5329C24.8688 17.5329 25.8461 17.7298 26.7649 18.1188C27.6531 18.4938 28.4524 19.0329 29.1391 19.7196C29.5375 20.118 29.8844 20.554 30.182 21.0251C30.2524 21.1376 30.3766 21.2055 30.5078 21.2055H31.8625C32.0242 21.2055 32.1274 21.0368 32.0547 20.8938C30.5266 17.854 27.4281 15.8782 23.9688 15.8384C18.9039 15.7751 14.6969 19.9212 14.6875 24.9813C14.6781 30.0509 18.7867 34.1641 23.8563 34.1641C27.3602 34.1641 30.5102 32.1813 32.0547 29.1063C32.1274 28.9634 32.0219 28.7946 31.8625 28.7946Z" fill="#09B451"/>
</svg>


<p>Learn at your own pace</p>
              </div>
              <div className='do-work-text-icon d-flex'>
              <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="50" height="50" rx="25" fill="#DDFFFF"/>
<path d="M21 21V18C21 17.4696 21.2107 16.9609 21.5858 16.5858C21.9609 16.2107 22.4696 16 23 16H27C27.5304 16 28.0391 16.2107 28.4142 16.5858C28.7893 16.9609 29 17.4696 29 18V21H32C32.5304 21 33.0391 21.2107 33.4142 21.5858C33.7893 21.9609 34 22.4696 34 23V32C34 32.5304 33.7893 33.0391 33.4142 33.4142C33.0391 33.7893 32.5304 34 32 34H18C17.4696 34 16.9609 33.7893 16.5858 33.4142C16.2107 33.0391 16 32.5304 16 32V23C16 22.4696 16.2107 21.9609 16.5858 21.5858C16.9609 21.2107 17.4696 21 18 21H21ZM18 23V32H32V23H28.998V26H27V23H23V26H21V23H18ZM23 21H27V18H23V21Z" fill="#09B451"/>
</svg>


<p>Collaborate with different learners around the globe</p>
              </div>
              <div className='do-work-text-icon d-flex'>
              <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="50" height="50" rx="25" fill="#DDFFFF"/>
<path d="M22 16C20.6739 16 19.4021 16.5268 18.4645 17.4645C17.5268 18.4021 17 19.6739 17 21C17 22.3261 17.5268 23.5979 18.4645 24.5355C19.4021 25.4732 20.6739 26 22 26C23.3261 26 24.5979 25.4732 25.5355 24.5355C26.4732 23.5979 27 22.3261 27 21C27 19.6739 26.4732 18.4021 25.5355 17.4645C24.5979 16.5268 23.3261 16 22 16ZM19 21C19 20.2044 19.3161 19.4413 19.8787 18.8787C20.4413 18.3161 21.2044 18 22 18C22.7956 18 23.5587 18.3161 24.1213 18.8787C24.6839 19.4413 25 20.2044 25 21C25 21.7956 24.6839 22.5587 24.1213 23.1213C23.5587 23.6839 22.7956 24 22 24C21.2044 24 20.4413 23.6839 19.8787 23.1213C19.3161 22.5587 19 21.7956 19 21ZM29.908 21.218C29.6268 21.0747 29.3156 21 29 21V19C29.6315 19 30.2541 19.1496 30.8167 19.4365C31.3793 19.7233 31.866 20.1393 32.2369 20.6504C32.6079 21.1615 32.8526 21.7532 32.9509 22.377C33.0493 23.0008 32.9985 23.639 32.8028 24.2395C32.6072 24.8399 32.2721 25.3855 31.825 25.8316C31.378 26.2776 30.8317 26.6115 30.2308 26.8058C29.6299 27.0002 28.9916 27.0495 28.368 26.9498C27.7444 26.8501 27.1533 26.6041 26.643 26.232L27.821 24.616C28.044 24.7783 28.2982 24.8927 28.5676 24.9521C28.837 25.0114 29.1157 25.0144 29.3863 24.9609C29.6569 24.9073 29.9134 24.7983 30.1399 24.6408C30.3663 24.4833 30.5578 24.2807 30.7021 24.0456C30.8465 23.8106 30.9407 23.5482 30.9787 23.275C31.0168 23.0018 30.998 22.7237 30.9234 22.4582C30.8488 22.1926 30.7201 21.9453 30.5454 21.7319C30.3706 21.5185 30.1536 21.3435 29.908 21.218ZM32.998 34C32.9977 32.9397 32.5764 31.923 31.8267 31.1733C31.077 30.4236 30.0603 30.0023 29 30.002V28C30.5912 28.0003 32.1172 28.6325 33.2423 29.7577C34.3675 30.8828 34.9997 32.4088 35 34H32.998ZM29 34H27C27 32.6739 26.4732 31.4021 25.5355 30.4645C24.5979 29.5268 23.3261 29 22 29C20.6739 29 19.4021 29.5268 18.4645 30.4645C17.5268 31.4021 17 32.6739 17 34H15C15 32.1435 15.7375 30.363 17.0503 29.0503C18.363 27.7375 20.1435 27 22 27C23.8565 27 25.637 27.7375 26.9497 29.0503C28.2625 30.363 29 32.1435 29 34Z" fill="#09B451"/>
</svg>

<p>Top instructors around the globe</p>
              </div>
            </Col>
          </div>
           </Row>
         </div>
  



{/* Meet Our Instructor */}

<div className="newSkills" style={{margin:'0px 0px 192px 0px'}}>
           <div className="courses-title d-flex justify-content-md-between ">
             <h2> Meet our instructors </h2>
           </div>
          
           <Row className='instCards'>
           {Array.from({ length: 3 }).map((_, idx) => (
        <Col lg='4' key={idx} style={{position:'relative'}}>
  
           {/* <img className='imgHide' alt='img' src={unspa1} /> */}
            
          <Card>
            <Card.Img variant="top" src={unspa1} />
            <Card.Body>
              <Card.Title>John Mark</Card.Title>
              
              <Card.Subtitle> Senior Developer</Card.Subtitle>
              <Card.Text>
              “Education will be for you what you want it to be” 
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
           ))}
           </Row>
         </div>


       </Container>
     </>
   );
    
}


// Learn Skills function


class LearnNewSkills extends React.Component{

  // Creact Constructor

  constructor(props){
    super(props);
    this.state = { cards: [], DataisLoaded: false};
    
  }

  // ComponentDidMount is used to execute the code with async await 

  async componentDidMount(){
    const message =document.getElementById('errors');
  
    try{
  //  fetch("https://raw.githubusercontent.com/ParmWebcoder/json-test-api/main/src/Components/coursesList.json")
    
  //   .then( (response) => response.json())
  //   .then( (json) => { 
  //     this.setState({ cards: json, DataisLoaded: true }); 
  //   })

  const response = await fetch("https://raw.githubusercontent.com/ParmWebcoder/json-test-api/main/src/Components/coursesList.json");
  const json = await response.json();
  
  this.setState({ cards: json, DataisLoaded: true });
  
}
     catch(error) {
     
      message.innerHTML = "<span style='color: red ; text-align:center;margin: 0 auto;width: 100%;display: block;'> Some Error accure while Fetching API From Server </span>" ;
    }
  }

  render(){
    const { DataisLoaded, cards } = this.state;
    if(!DataisLoaded)
    { 
      return  <div >    <h2>Pleses wait some time....</h2>  <h4 id="errors"> </h4></div> ; 
    }
else{
 
    return(

            <Row >
              
               <div className="crousel-main-start">

             


               <Carousel  cols={4} rows={1} gap={32} loop={true}>
             { 
              cards.map( (card, id) => (
                
              
                <Carousel.Item  key="{id}">
               
                <div   className="coursesData">
                 <img  className="avatar" src={card.img} alt='name' />
                  <div className="courses-name d-flex justify-content-between">
                    {card.title}
                       <div className='stars'><img className='icon-img' src={card.star}  alt='icon'/>
                          <span> {card.rating} </span>
                       </div>
                  </div>
                
                  <div className='week d-flex justify-content-between'>
                  {card.week} 
                       <span> <img src={card.userIcon}  alt='name' />    {card.users} </span>
                       <h3>{card.price}</h3>
                  </div>
                </div>
              
             </Carousel.Item>
              ))
             }
             </Carousel>
              </div>
            </Row>
    );
            }
  }
}







class CourseDatadisplay extends React.Component{

      // Creact Constructor

      constructor(props){
        super(props);
        this.state = { cards: [], DataisLoaded: false};
      }

      // ComponentDidMount is used to execute the code

      componentDidMount(){
       fetch("https://raw.githubusercontent.com/ParmWebcoder/json-test-api/main/src/Components/coursesList.json")
        
        .then( (response) => response.json())
        .then( (json) => { this.setState({ cards: json, DataisLoaded: true });
      })
      }

      render(){
        const { DataisLoaded, cards } = this.state;
        if(!DataisLoaded) return <div> <h2> Pleses wait some time.... </h2> </div> ;

        return(

                <Row >
                 { 
                  cards.map( (card, id) => (
                    
                  
 
                    <Col key={id}  lg='4' >
                    <div   className="coursesData">
                     <img  className="avatar" src={card.img} alt='name' />
                      <div className="courses-name d-flex justify-content-between">
                        {card.title}
                           <div className='stars'><img className='icon-img' src={card.star}  alt='icon'/>
                              <span> {card.rating} </span>
                           </div>
                      </div>
                    
                      <div className='week d-flex justify-content-between'>
                      {card.week} 
                           <span> <img src={card.userIcon}  alt='name' />    {card.users} </span>
                           <h3>{card.price}</h3>
                      </div>
                    </div>
                   </Col>
                 
                  ))
                 }


                </Row>
        );

      }
}


















  












  

export default MainSec;