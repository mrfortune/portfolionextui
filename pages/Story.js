import * as React from "react";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';


const Story = () => {
	return(
		<Container maxWidth="md">
		<Box mt={15} mb={12}>
			<Grid container  spacing={2} sx={{marginLeft:'16px'}}>
				<Grid item xs={11} md={8} lg={9}>
<Typography variant="h1">Story</Typography>
			<Typography mt={4}mb={4} variant="h2"><Box component="span" sx={{fontWeight:'bold',}}>Robert S Harris</Box>, UX Engineer, Design Thinking Practioner</Typography>
		  <Typography mb={2} variant="body1">
			  I am a UX engineer, architech, designer and design strategist and thinker.
		I have worked with large brands successfully 
			  delivering digital products and solutions for their customers and business. 
			  I collaborate with cross-functional teams to deliver these solutions. 
  
	  </Typography>
	  <Typography mb={2} variant="body1">
	  My love for design began as a child where I would sketch for hours, and I developed a love for drawing characters and creating figures with clay. I was always trying to create something new and interesting. That creative interest evolved into music, video and photography, so when the Web became ubiquitous it was obvious how tech, business and creative work would merge into an interactive experience. I did not realize it at the time but that was my first insight into the world of user experience.
  
	  </Typography>
	  <Typography mb={2} variant="body1">
	  My degree in business trained me to think about marketing, management, statistics, and the challenges involved with succeeding in business. I learned to develop websites, and then I learned online video production, photography and how to translate compositions into code. 
	  </Typography>
	  <Typography mb={2} variant="body1">
	  WorldShaker Interactive was founded to solve a problem that my cousin and I had identified, wrote a complete business plan for and designed a mock-up. Our plan did not get funded but I see it everytime I visit SoundCloud. I'm not saying that they stole our plan, but their business model for artists is basically what we had developed. Glad to see that our idea proved to be a solution for many independent artists and other users. 
  
	  </Typography>
	  <Typography mb={2} variant="body1">
	  I am still designing soltuons to problems and who knows may come up with another idea that can shake the world. But, for now, I am happy to share my skills with companies small, medium and large to help them deliver better user experiences to their customers.	  
		</Typography>
</Grid>
<Grid item xs={1} md={4} lg={3}>

</Grid>	

			</Grid>
			
			
		</Box>
		</Container>
	)
}
export default Story



	
/* const About = () => {
	return 
	<div className="App">
	<main class="flex-shrink-0 text-dark"/>
	<section/>
<div class="container">
	<div class="row">
		<div class="co-7">

		
		<div class="col-5">
			<h1 class="mt-5 mb-4 display-1">The Story</h1>
		</div>
	</div>
	<div class="row">
		
		<div class="col-7">
				 <article class="text"/>
 
<p>I am <strong>Robert Harris</strong>, and I am a <strong>UX Engineer, Designer, Researcher, and Architect</strong>. I have worked with large brands successfully delivering digital products and solutions for their customers and business. I collaborate with cross-functional teams to deliver these solutions.</p>	 
<p class="mt-3">My love for design began as a child where I would sketch for hours, and I developed a love for drawing characters and creating figures with clay. I was always trying to create something new and interesting. That creative interest evolved into music, video and photography, so when the Web became ubiquitous it was obvious how tech, business and creative work would merge into an interactive experience. I did not realize it at the time but that was my first insight into the world of user experience.</p>
<p class="mt-3">My degree in business trained me to think about marketing, management, statistics, and the challenges involved with succeeding in business. I learned to develop websites, and then I learned online video production, photography and how to translate designs into code. At Showtime I was tasked with editing clips weekly for our series shows using Final Cut Pro and other video processing/streaming  tools. I have also taken a course in editing using Premier. But, with these skills, I would always find myself asking “why?”. UX Design methodologies, skills, thinking, language and processes has provided me with the approach to get those answers and create greater questions.</p>
<p class="mt-3"><strong>WorldShaker Interactive</strong> was founded to solve a problem that my cousin and I had identified, wrote a complete business plan for and designed a mock-up. Our plan did not get funded but I see it everytime I visit SoundCloud. I'm not saying that they stole our plan, but their business model for artists is basically what we had developed. Glad to see that our idea proved to be a solution for many independent artists and other users.</p>
<p class="mt-2">I am still designing soltuons to problems and who knows may come up with another idea that can shake the world. But, for now, I am happy to share my skills with companies small, medium and large to help them deliver better user experiences to their customers.</p>
 
 
				
		   </div> 
		   
		   <div class="col-5">
			<div class="myimagebox">
				<img src="img/mebwsmiling.jpg" class="img-fluid rounded"/>
				<p class="mb-3 mt-3 text-center">Robert S. Harris, <strong><i>UX Engineer, Designer, Researcher, and Architect</i></strong>
			<a href="RobertSHarris.pdf" target="_blank"><i class="bi bi-cloud-arrow-down">&nbsp;</i>Download Resume...</a></p>
	
		</div>
		
	   
</div>

};

export default About; */

		
			