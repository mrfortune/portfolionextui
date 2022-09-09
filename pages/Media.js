import React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Grid, Container } from '@mui/material';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Typography } from '@mui/material';
import Divider from '@mui/material/Divider';


const FadeDesign = () => {
  return (
   <Container maxWidth='md'>
     <Box component='div' mt={9} sx={{ flexGrow: 1 }}>
		<Grid container spacing={3}>
		  <Grid item xs={2}>
			
		  </Grid>
		  <Grid item xs={8}>
              <Typography variant="h1">Dashboard UI/UX Solution</Typography>
                <Typography variant="body1">Publisher, agency, brand and ad campaign management dashboard solution.</Typography>
          <Box>
                    
               
                        
                    
            </Box>
		  </Grid>
          <Grid item xs={2}>
			
		  </Grid>
          <Grid item xs={2}>
			
		  </Grid>
		  <Grid item xs={8}>
        <Grid container spacing={2}>
<Grid item xs={12} md={4}><Typography variant="body1"> <Typography variant="h5">Overview </Typography>  Fade Technology solutions needs a dashboard solution for its publishers, brands and agencies to manage ad campaigns.</Typography></Grid>
<Grid item xs={12} md={4}><Typography variant="h5">The Team &amp; Timeframe</Typography>
                        <Typography>The project timeframe was a 3 week sprint and we worked with a team of three:</Typography>
                          <ul sx={{marginLeft: '0',}}>
            <li>Jaylon Ballard, UX Researcher</li>
            <li>Robert Harris, Information Architect</li>
            <li>Meagan Crowe, Visual Designer</li>
                        </ul> 
                        </Grid>
<Grid item xs={12} md={4} lg={4}>
<Typography variant="h5">Tools &amp; Methods Used</Typography>            
                    <ul>
                            
                            <li>Competitive &amp; Comparative Analysis</li><li> Miro</li><li> Figma</li><li>Adobe CC</li>
                    </ul> 
</Grid>
</Grid>
                 
                    
		  </Grid>
          <Grid item xs={2}>
			
		  </Grid>
       
          
      <Grid item xs={2}>
			
		  </Grid>
		  <Grid item xs={8} mt={5}>            
                   <Typography variant="h5">Problem</Typography>
                   <Typography variant="h2">
                   Fade Technology Solutions needs a dashboard
                   </Typography>
                   <Typography variant="body1">
                Fade Technology needs a dashboard for their B2B application so that its publishers, brands, agencies and administrators can manage users and ad campaigns for its clients. 
                </Typography>	
          
		  </Grid>
          <Grid item xs={2}>
			
		  </Grid>
      <Grid item xs={2}>
			
		  </Grid>
		  <Grid item xs={8} mt={5}>            
      <Typography variant="h5">Solution Overview</Typography>
                <Typography variant="h2">How might we...?</Typography>
                <Typography variant="body1">How might we design a dashboard that allows managment of campaigns, users and assets for Fade Technology Solutions's admins, publishers, agencies and brands? We believe that by creating a centralized hub for clients to manage their
                accounts, users will be able to check on their statistics efficiently. We believe
                this because, through market research, we have found the standard for business
                management dashboards. We will know this is true when clients have a high
                success rate on tasks needed to be accomplished.
            </Typography>
          
		  </Grid>
          <Grid item xs={2}>
			
		  </Grid>
      <Grid item xs={2}>
			
		  </Grid>
      <Grid item xs={8} mt={5}>

      {/* <img src="img/FadeinIpad.png"> */}
        </Grid>
        <Grid item xs={2}>
			
		  </Grid>
      <Grid item xs={2}>
			
		  </Grid>
      <Grid item xs={8} mt={5}>
      <Typography variant="h5">Approach</Typography>
                    <Typography  variant="h2">Begin with the Project Brief</Typography>
               <Typography variant="body1">
            The Fade executives and techs came to us with a detailed project brief, inclding how their system worked for publishers, agencies, brands and admins and examples of Facebook Business Suite and Snapchat's Business dashboard. We did not have access to user info, nor could we interview users since their users are their business clients.</Typography>
           <Typography variant="body1">
            We were forced to rely on the project brief and competitive analysis and comparative analysis to inform our final design decisions.</Typography>
     
        </Grid>
        <Grid item xs={2}>
			
		  </Grid> 
      <Grid item xs={2}>
			
		  </Grid>
      <Grid item xs={8} mt={5}>
      <Typography variant="h5">Activities & Deliverables</Typography>
                    <Typography  variant="h2">Read and Understand the Brief</Typography>
                   <Typography variant="body1">Fade did part of our Double Diamond work for us and we just needed to build on what they provided and begin sketches and low-fidelity wireframing based on the examples.</Typography>
                    <Typography variant="h4">Design Studio Work</Typography>
                    {/* <img src="img/designstudio.png" class="img-fluid mt-5 mb-5"> */}
     
        </Grid>
        <Grid item xs={2}>
			
		  </Grid> 
      <Grid item xs={2}>
			
		  </Grid>
      <Grid item xs={8} mt={5}>

      <Typography variant="h4">Journey Map</Typography>
                <Typography variant="h2">Prospective Journey Map </Typography>
        </Grid>
        <Grid item xs={2}>
			
		  </Grid> 
      <Grid item xs={2}>
			
		  </Grid>
      <Grid item xs={8} mt={5}>

      <Typography  variant="body1">Here we map the journey of the Account Adminsitrator as he/she interacts with the proposed solution.</Typography>	
        </Grid>
        <Grid item xs={2}>
			
		  </Grid>  
      <Grid item xs={2}>
			
		  </Grid>
      <Grid item xs={8} mt={5}>
      <Typography variant="h3">Research</Typography>
    
    <Typography variant="h4">1. Competitive Analysis</Typography>
    <Typography variant="body1">Campaign managment solutions and administrative dashboards are nothing new. Many companies, such as Amazon, YouTube and Facebook alll have those solutions for their business users. We simply looked at those properties and features and applied it to Fades project brief. </Typography>
    <Typography variant="body1">Fades business model is an advertiser driven model, like Facebook and Youtube, so we focused heavily on their layout and UI components including analytics. Fade has no direct competitors based on their unique offering.</Typography>
    <Typography variant="h6">Observations:</Typography>
    <ul>
    <li>Dashboards all have analytics and charts and features to maipulate the data.</li>
    <li>There are access and privilege levels assigned to users including who has administrative rights.</li>
    <li>Administrators invite users to the platform.</li>
    <li>Security protocols are put in place to prevent unauthorized access of the platform.</li>
    <li>Campaign management features such as 'Create a Campaign', 'Start/Stop a Campaign'.</li>	
    </ul>
     
        </Grid>
        <Grid item xs={2}>
			
		  </Grid> 
      <Grid item xs={2}>
			
		  </Grid>
      <Grid item xs={8} mt={5}>

      <Typography variant="h4">2. Comparative Analysis</Typography>
                    
                        <Typography variant="h2">Fade's Proposition is a Unique Technology</Typography>
                    
                <Typography variant="body1">Fades proposition is a unique technology and although there are similarites in the online ad space they do not have a direct competitor. We next looked at Amazon's Seller Central's dashboard. Their business model is not an advertishing based model but there are similarities in their solutions. This was to gather more data on how these solutions are designed, and to get more inspiration.</Typography>
        </Grid>
        <Grid item xs={2}>
			
		  </Grid> 
      <Grid item xs={2}>
			
		  </Grid>
      <Grid item xs={8} mt={5}>
      <Typography variant="h5">Design</Typography>
                <Typography variant="h2">Dashboards Are Dynamic</Typography>
                <Typography variant="body1">Due to the dynamic nature of this platform many site maps were created to show what pages each user would see. Our design had to account for that and the following images will show the maps. Here is the information architecture that we came up with.</Typography>
                <Typography variant="h4">Site Maps</Typography>
                
                    {/* <img src="img/publishers.png" class="img-fluid border rounded mb-5 mt-5">
                    
                        <img src="img/brands.png" class="img-fluid border rounded mb-5 mt-5">	
                    
                    
                    <img src="img/agency.png" class="img-fluid border rounded mb-5 mt-5">	
                
            
                    <img src="img/fadeadmin.png" class="img-fluid border rounded mb-5 mt-5"> */}
     
        </Grid>
        <Grid item xs={2}>
			
		  </Grid> 
      <Grid item xs={2}>
			
		  </Grid>
      <Grid item xs={8} mt={5}>
      <Typography  variant="h4">User Flows</Typography>
                <Typography  variant="h2">The Happy Paths</Typography>
                <Typography  variant="body1">Fades user flow was touched on earlier at the journey map but here is a bit more detail showing how users would navigate on the platform. We focused on the primary flow, which is 'Sign-up' for the platform.</Typography>
            
                    {/* <img src="img/signupuserflow.jpg" class="img-fluid rounded border mb-5">
                    <Typography  variant="body1">Another flow that the user will take.</Typography>
                    
                    <img src="img/userflow.jpg" class="img-fluid rounded border mb-5"> */}
     
        </Grid>
        <Grid item xs={2}>
			
		  </Grid> 
      <Grid item xs={2}>
			
		  </Grid>
      <Grid item xs={8} mt={5}>
      <Typography variant="h5">Visual Design</Typography>
            <Typography variant="h2">Simple and Intuitive Dashboard</Typography>
            <Typography variant="body1">A simple and intuitive dashboard with all of the minimal features that Fade needs for its clients. These are the final design that the team and I came up with for Fade's dashboard. Desktop was primary so we did not design a mobile solution </Typography>
     
        </Grid>
        <Grid item xs={2}>
			
		  </Grid> 
      <Grid item xs={2}>
			
		  </Grid>
      <Grid item xs={8} mt={5}>
      <Typography variant="h5">Results & Reflections</Typography>
        
        <Typography variant="h2">Dashboards Are a Challenge</Typography>
    
    
    
    <Typography  variant="body1">Dashboards are a challenging design to take on with many moving parts. This was in many ways a vey challenging project for our team. We started off with no ability to research the user and had to rely on the project brief for all of our research. In many ways we had to abondone the normal UX steps and just work with what we had.</Typography>
    <Typography variant="body1">It turned out that what we had was sufficient and we were able to design by looking at other dashboards and copying their architecture and layout and use Fades business goals and needs provided to us in the project brief.</Typography>
     
        </Grid>
        <Grid item xs={2}>
			
		  </Grid> 
      <Grid item xs={2}>
			
		  </Grid>
      <Grid item xs={8} mt={5}>

     
        </Grid>
        <Grid item xs={2}>
			
		  </Grid> 
		</Grid>
	  </Box>
   </Container>
    
  )
}

export default FadeDesign