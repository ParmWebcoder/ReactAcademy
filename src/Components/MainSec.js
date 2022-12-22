import React from 'react';


import { Button, Card, Container, Row ,Col} from "react-bootstrap";


import Carousel from 'better-react-carousel';

import image1 from '../assets/images/image1.jpg';

import image2 from '../assets/images/image2.jpg';
import image3 from '../assets/images/image3.jpg';
import image4 from '../assets/images/image4.png';

import courses1 from '../assets/images/courses1.png';

import rate from '../assets/images/star.svg' ;


import JsonData from './coursesList.json'
import { toHaveAccessibleName } from '@testing-library/jest-dom/dist/matchers';





function MainSec (){
   return(
<>
          <Container className='crousel-sec'>
            <div className='crousel-title d-flex justify-content-md-between '>
                <h2> Choose favourite course from top cartegories</h2>
                <p> See all</p>
            </div>

          </Container>


          <Container className='crousel-main'>  
            <div className='crousel-main-start'>

            <Carousel  cols={4} rows={1} gap={32} loop={true}  >
          <Carousel.Item>
            

    <Card className='cardStyle' style={{ width: '' }}>
      <Card.Img variant="top" src={image1}  />
      <Card.Body className='overlay-card'>
        <div className='text-card'>
             <Card.Title>Marketing</Card.Title>
        <Card.Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam nibh netus auctor consect massa. Maecen vivamus sed nibh enim sed. Hac ridiculus tellus urna quam odio quis montes, diam. Malesuada ut urna eu faucibus faucibus faucibus u

        </Card.Text>
        </div>
       
       
      </Card.Body>
    </Card>
          </Carousel.Item>
          <Carousel.Item>
          
          <Card className='cardStyle' style={{ width: '' }}>
      <Card.Img variant="top" src={image2}  />
      <Card.Body className='overlay-card'>
        <div className='text-card'>
             <Card.Title>Design</Card.Title>
        <Card.Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam nibh netus auctor consect massa. Maecen vivamus sed nibh enim sed. Hac ridiculus tellus urna quam odio quis montes, diam. Malesuada ut urna eu faucibus faucibus faucibus u

        </Card.Text>
        </div>
       
       
      </Card.Body>
    </Card>
          </Carousel.Item>
          <Carousel.Item>
          <Card className='cardStyle' style={{ width: '' }}>
      <Card.Img variant="top" src={image3}  />
      <Card.Body className='overlay-card'>
        <div className='text-card'>
             <Card.Title>Programming</Card.Title>
        <Card.Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam nibh netus auctor consect massa. Maecen vivamus sed nibh enim sed. Hac ridiculus tellus urna quam odio quis montes, diam. Malesuada ut urna eu faucibus faucibus faucibus u

        </Card.Text>
        </div>
       
       
      </Card.Body>
    </Card>
          </Carousel.Item>
          <Carousel.Item>
          <Card className='cardStyle' style={{ width: '' }}>
      <Card.Img variant="top" src={image4}  />
      <Card.Body className='overlay-card'>
        <div className='text-card'>
             <Card.Title>Technology</Card.Title>
        <Card.Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam nibh netus auctor consect massa. Maecen vivamus sed nibh enim sed. Hac ridiculus tellus urna quam odio quis montes, diam. Malesuada ut urna eu faucibus faucibus faucibus u

        </Card.Text>
        </div>
       
       
      </Card.Body>
    </Card>
          </Carousel.Item>
          <Carousel.Item>
          <Card className='cardStyle' style={{ width: '' }}>
      <Card.Img variant="top" src={image1}  />
      <Card.Body className='overlay-card'>
        <div className='text-card'>
             <Card.Title>Marketing</Card.Title>
        <Card.Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam nibh netus auctor consect massa. Maecen vivamus sed nibh enim sed. Hac ridiculus tellus urna quam odio quis montes, diam. Malesuada ut urna eu faucibus faucibus faucibus u

        </Card.Text>
        </div>
       
       
      </Card.Body>
    </Card>
          </Carousel.Item>
          <Carousel.Item>
          <Card className='cardStyle' style={{ width: '' }}>
      <Card.Img variant="top" src={image2}  />
      <Card.Body className='overlay-card'>
        <div className='text-card'>
             <Card.Title>Design</Card.Title>
        <Card.Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam nibh netus auctor consect massa. Maecen vivamus sed nibh enim sed. Hac ridiculus tellus urna quam odio quis montes, diam. Malesuada ut urna eu faucibus faucibus faucibus u

        </Card.Text>
        </div>
       
       
      </Card.Body>
    </Card>
          </Carousel.Item>
          <Carousel.Item>
          <Card className='cardStyle' style={{ width: '' }}>
      <Card.Img variant="top" src={image3}  />
      <Card.Body className='overlay-card'>
        <div className='text-card'>
             <Card.Title>Programming</Card.Title>
        <Card.Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam nibh netus auctor consect massa. Maecen vivamus sed nibh enim sed. Hac ridiculus tellus urna quam odio quis montes, diam. Malesuada ut urna eu faucibus faucibus faucibus u

        </Card.Text>
        </div>
       
       
      </Card.Body>
    </Card>
          </Carousel.Item>
          <Carousel.Item>
          <Card className='cardStyle' style={{ width: '' }}>
      <Card.Img variant="top" src={image4}  />
      <Card.Body className='overlay-card'>
        <div className='text-card'>
             <Card.Title>Tecnology</Card.Title>
        <Card.Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam nibh netus auctor consect massa. Maecen vivamus sed nibh enim sed. Hac ridiculus tellus urna quam odio quis montes, diam. Malesuada ut urna eu faucibus faucibus faucibus u

        </Card.Text>
        </div>
       
       
      </Card.Body>
    </Card>
          </Carousel.Item>
         
        </Carousel>         

					
            </div>
          </Container>




           <Container>
               <div className='courses-title d-flex justify-content-md-between '>
                     <h2> Most Popular courses</h2>
                     <p> 
                        <span><svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.25 1.06255L9.00003 10.4376L2.75003 1.06255C2.66795 0.939437 2.56243 0.833694 2.43949 0.75136C2.31654 0.669026 2.17859 0.611714 2.0335 0.582696C1.88841 0.553678 1.73902 0.553523 1.59387 0.582238C1.44872 0.610952 1.31064 0.667975 1.18753 0.750051C1.06441 0.832128 0.958669 0.937649 0.876335 1.06059C0.794002 1.18353 0.73669 1.32149 0.707672 1.46658C0.678653 1.61167 0.678497 1.76106 0.707211 1.90621C0.735926 2.05136 0.79295 2.18944 0.875026 2.31255L7.96003 12.9401C8.07418 13.1112 8.22883 13.2516 8.41025 13.3487C8.59168 13.4458 8.79426 13.4966 9.00003 13.4966C9.20579 13.4966 9.40838 13.4458 9.5898 13.3487C9.77122 13.2516 9.92587 13.1112 10.04 12.9401L17.125 2.31255C17.2071 2.18944 17.2641 2.05136 17.2928 1.90621C17.3216 1.76106 17.3214 1.61167 17.2924 1.46658C17.2634 1.32149 17.2061 1.18353 17.1237 1.06059C17.0414 0.937649 16.9356 0.832128 16.8125 0.750051C16.6894 0.667975 16.5513 0.610952 16.4062 0.582238C16.261 0.553523 16.1116 0.553678 15.9666 0.582696C15.8215 0.611714 15.6835 0.669026 15.5606 0.75136C15.4376 0.833694 15.3321 0.939437 15.25 1.06255Z" fill="white"/>
</svg>
 </span>
                        Sort by</p>
               </div>




               

<div className='courserStart'> 




<CourseDatadisplay/>

</div>


           </Container>



</>

    );
    
}





// function JsonDataDisplay(){
// 	const DisplayData = JsonData.map( (info ) =>
//   {
// 			return(
			
//     <Col lg='4'>
//         <div   className="coursesData">
//          <img  className="Avatar"
//                src={info.img} 
//                alt='name' />
          
//           <div className="courses-name d-flex justify-content-between">
//             {info.title}
//             <div className='stars'><img className='icon-img' src={info.star}  alt='icon'/>
//           <span> {info.rating} </span>
//           </div>
//           </div>
        
//           <div className='week'>
//           {info.week} 
//           <span> <img src={info.userIcon}  alt='name' />    {info.users} </span>
//           <h3>{info.price}</h3>
//           </div>

//         </div>
//    </Col>

// 			)
// 		}
// 	)

// 	return(
// 		<Row>		
// 					{DisplayData}			
// 		</Row>
// 	)
// }

class CourseDatadisplay extends React.Component{

      // Creact Constructor

      constructor(props){
        super(props);
        this.state = { cards: [], DataisLoaded: false};
      }

      // ComponentDidMount is used to execute the code

      componentDidMount(){
        fetch("Components/coursesList.json")
        .then( (response) => response.json())
        .then( (json) => { this.setState({ cards: json, DataisLoaded: true });
      })
      }

      render(){
        const { DataisLoaded, cards } = this.state;
        if(!DataisLoaded) return <div> <h2> Pleses wait some time.... </h2> </div> ;
        
        return(
                <Row>

                 {
                  cards.map( (card) => (
                    <Col lg='4'>
                    <div   className="coursesData">
                     <img  className="Avatar"
                           src={card.img} 
                           alt='name' />
                      
                      <div className="courses-name d-flex justify-content-between">
                        {card.title}
                        <div className='stars'><img className='icon-img' src={card.star}  alt='icon'/>
                      <span> {card.rating} </span>
                      </div>
                      </div>
                    
                      <div className='week'>
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


// class UsersData extends React.Component {

// 	// Constructor
// 	constructor(props) {
// 		super(props);
// 		this.state = {  items: [], DataisLoaded: false };
// 	}

// 	// ComponentDidMount is used to
// 	// execute the code
// 	componentDidMount() {
// 		fetch( "https://jsonplaceholder.typicode.com/users")
// 			.then((res) => res.json())
// 			.then((json) => { this.setState({ items: json, DataisLoaded: true });
// 			})
// 	}

// 	render() {
// 		const { DataisLoaded, items } = this.state;
// 		if (!DataisLoaded) return <div> <h1> Pleses wait some time.... </h1> </div> ;

// 		return (
// 		<div className = "App">
// 			<h1> Fetch data from an api in react </h1> 
//       {
// 				items.map((item) => (
// 				<ul key = { item.id } >
//           <li> User Name : { item.username }
// 					</li>
// 					<li> 
// 					Full Name : { item.name }
// 					</li>
//           <li> 
// 					User Email : { item.email }</li>
//           <li> 
// 					User Phone : { item.phone }</li>

// 					</ul>
          
// 				))
// 			}
// 		</div>
// 	);
// }
// }
















// function Comment(props) {
//     return (
//       <div className="Comment">
//         <div className="coursesData">
//           <img className="Avatar"
//                src={props.Img1}
//                alt={props.author.name} />
//           <div className="courses-name d-flex justify-content-between">
//             {props.title}
//             <div className='stars'><img className='icon-img' src={props.author.rateIcon}  alt='icon'/>
//           <span> {props.author.rating} </span>
//           </div>
//           </div>
        
//           <div className='week'>
//           {props.author.weeks} 
//           <span>  {props.author.users} </span>
//           <h3>{props.author.price}</h3>
//           </div>

//         </div>
        
       
//       </div>
//     );
//   }
  
//   const comment = {
//     Img1 : require('../assets/images/courses1.png'),
//     title: 'Learn Marketing from   Top Instructors.',
   
    
//     author: {
//       name: 'Hello Kitty',
//       rateIcon: rate ,
//       rating: '4.5',
//       weeks: '6',
//       users:'1.5k Students',
//       price: '30.5$',
//     }
//   };
  
  












  

export default MainSec;