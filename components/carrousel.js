import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Image, Flex, Box, Text } from '@chakra-ui/react';

export default function Carrousel(){
	const responsive = {
		  desktop: {
		    breakpoint: { max: 3000, min: 1024 },
		    items: 6,
		    slidesToSlide: 3 // optional, default to 1.
		  },
		  tablet: {
		    breakpoint: { max: 1024, min: 464 },
		    items: 4,
		    slidesToSlide: 2 // optional, default to 1.
		  },
		  mobile: {
		    breakpoint: { max: 464, min: 0 },
		    items: 1,
		    slidesToSlide: 1 // optional, default to 1.
		  }
		};

	return (
	<Carousel
	  swipeable={true}
	  draggable={false}
	  showDots={true}
	  responsive={responsive}
	  ssr={true}
	  infinite={true}
	  autoPlay={true}
	  autoPlaySpeed={3000}
	  keyBoardControl={true}
	  customTransition="all .5"
	  transitionDuration={100}
	  containerClass="carousel-container"
	  removeArrowOnDeviceType={["tablet", "mobile"]}
	  deviceType={"tablet"}
	  dotListClass="custom-dot-list-style"
	  itemClass="carousel-item-padding-40-px"
	>
	<Box>
	  	<Image src="images/boy-370x370.jpg"/>
  		<Text textAlign="center">Texto 1</Text>
  	</Box>
	<Box>
	  	<Image src="images/girl-2-370x370.jpg"/>
  		<Text textAlign="center">Texto 2</Text>
  	</Box>
	<Box>
	  	<Image src="images/chese-370x370.jpg"/>
  		<Text textAlign="center">Texto 3</Text>
  	</Box>
	<Box>
	  	<Image src="images/guitar-370x370.jpg"/>
  		<Text textAlign="center">Texto 4</Text>
  	</Box>
	<Box>
	  	<Image src="images/watch-370x370.jpg"/>
  		<Text textAlign="center">Texto 5</Text>
  	</Box>
	<Box>
	  	<Image src="images/phone-370x370.jpg"/>
  		<Text textAlign="center">Texto 6</Text>
  	</Box>
	</Carousel>)	
}