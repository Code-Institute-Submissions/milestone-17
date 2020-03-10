# London Skate-Spot Finder

Interactive Frontend Development Milestone Project.

This website is basically an interactive digital pocket guide to all the best skateparks and spots in London. It has the exact locations of more than 20 street spots and over 30 skateparks. This is perfect for skateboarders of all levels of ability.
From looking up where your local park is when you start skating, to the explorers trying to find that secret ledge that you've only seen in videos theres a use case for every skater.


## UX

### Strategy

I want to let people find the spot they want as quickly and in as few clicks as possible. The site should be aesthetically pleasing, simple and professional.

### Scope

The function of the site will be to give skateboarders and spectators a simple way to find places all around London to skateboard. You will be able to filter the location and type of the spot easily or search for the spot by name in an input box.

### Structure

The site was designed to be as user friendly as possible. I wanted to make sure that the UX was viable for people with bad eye-sight, people with dyslexia,
those who aren't comfortable using complex websites and the elderly (even if some users are not skaters some like to take their kids and grandkids to skateparks or just find places to watch skateboarding).

Whether you are a pro-skater, rookie or a parent looking for somewhere to take a child the London Skate-Spot Finder will give you no problems in your user experience.

### Skeleton
NOT OKAY
[Landing Page wireframe]  (https://github.com/harrypars0ns/milestone-project/blob/master/wireframes/landing-wireframe.jpg)
NOT OKAY
[About Page + Portfolio wireframe]  (https://github.com/harrypars0ns/milestone-project/blob/master/wireframes/about-portfolio-wireframe.jpg)
NOTOKAY
[Contact Page wireframe]  (https://github.com/harrypars0ns/milestone-project/blob/master/wireframes/contact-wireframe.jpg)

### Surface
 
I want my users to be able to have to read as few words as possible to find the spot they need. 

The simple black text on white achieves this while still looking striking and professional.
The font sizes have been set to the biggest and most legible they can without sacrificing the usability and aesthetic of the website.

## Features

The Map is generated using the Google Maps API, it gives the user an impeccable experience in scrolling around the map
as well as having plenty of landmark information amongst the array of spot markers. I have buttons that work as a navigation point to filter spots by location (North, East, South, West and Central) and type (Skatepark or Street Spot).

There is a search bar at the bottom of the site that lets you search for the spot by name, and will filter to just your chosen spot on a click of a sumit button or 'Enter' keypress. 

### Features Left to Implement

- When I have time I would like to make: A profile data base so skaters could sign-in and add their own spots to their map, as well as being able to favorite certain spots.

- Another great feature would be to add a direction/journey planner to show what public transport people can use to get to a spot from their GPS location.


## Technologies Used

- HTML
- CSS
- [Bootstrap](https://getbootstrap.com/)
    - The project uses **Bootstrap** for aiding placement and responsive design.
- [Google Fonts](https://fonts.google.com/)
    - The project uses the **Google Fonts** typeface 'Exo' in varying weights and sizes.
- [Google Maps Javascript API](https://developers.google.com/maps/documentation/javascript/tutorial)
    - The project uses the **Google Maps Javascript API** to generate the fully interactive map, markers and info-windows.

## Testing
 
When clicking the buttons the site would jump back to the top of the page almost looking like it was refreshing
I gave the anchor-tag an 

When first building the web-app I had the Nav Buttons (location filters) at the top of the screen, 
adhering to established design techniques. This gave me a few problems. Firstly when using the map you had to 
scroll all the way up past the title and logo everytime you wanted to filter the spots. This made for a bad user experience.
I made the nav bar sticky so that you wouldn't need to scroll all the way up but it looked horrible when it scrolled over the title and logo.
Moving it down still looked professional and familiar while sacrificing none of the design or UX. 

Another reason for moving the nav down below the title was that it aided in making the site responsive on all screens, landscape or portrait. 
I was using a lot of media queries to make the site look good and still be easy to use. The site now works with 
very few media queries, looks good, feels good and all the text is extremely legible for any user.


.

.
.

.

.

 .  
When I started this project I got about halfway through before I realised I hadn't made it truly responsive. 
After writing a silly number of media queries in some attempt to serve all screen sizes with some bad code 
I decided to start again with a new, responsive foundation on which everything would work properly. 
Now the site looks good across all screen sizes including mobile, tablet, desktop and landscape-mobile.

When clicking the portfolio section of the NAV, as the page dropped to the portfolio section, 
the nav bar would to cover the 'Portfolio' heading. Now if you click it, 
it should transport you a few pixels above the heading.

If you don't enter required information in the contact form, 
it will not submit. An error message will display. 
This will also occur if an invalid email address is submitted. 
If all information is valid, the page will reload.

The 'About'/'Portfolio' section was made to take up as much space as the content requires to let the text and carousel respond to the screen size. Using the mobile simulator on Chrome Dev Tools you can see this working. The carousel controls have been tested to make sure they scroll properly on all devices.

The site works across many browsers including: Chrome, Firefox, Safari and Edge. The site works across ALL mobile sizes. I had a terrible moment when I thought I had finished only to find that the site doesn't work on a on a mobile in landscape mode. Landscape now works perfectly on all mobiles.

The social media buttons are not currently linked to anywhere so they will load the page again in a new tab. They will (when social media is set up) link to the 'TGC' profile of the relevent social media sites in a new tab.

I had a button with a call to action on the landing page but the icon in the button was not available on some mobiles. I have removed the button until this gets sorted. 

I was having some trouble with the sizing of the landing-page's content and carousel on iPad size screens so I have set up precision media queries on those sizes re-sizing the elements.

I ran the CSS and HTML through the W3C Jigsaw validator with no errors found.



## Deployment

I am hosting the site on GitHub pages on the master branch. I had a already commited to GitHub a few times before I actually put code on GitHub Pages. To do this I went into the settings tab in my GitHub repository and scrolled down to the GitHub Pages section, selected "master branch" as the source, and clicked 'Save'. This created the link to where my code is being published: "https://harrypars0ns.github.io/milestone-project/".  

If you want to run the code locally you can use 'git clone'. Alternatively you can download all the files in a .zip file and open 'index.html' in your browser of choice.


## Credits

### Content

I built the Nav-bar and form from scratch. Content from the "About us" section was written by me. 


### Media
I used Pexels (stock images) for all my images, because people upload a whole photo shoot I could get a selection.
I cropped the images in the carousel so they were all the same size. I also darkened some images that needed higher contrast with the light text.


### Acknowledgements

- The Carousel is a bootstrap component. I added more spots for images in the carousel so that I could have more examples of our work. (https://getbootstrap.com/docs/4.4/components/carousel/)

- I used the Bootstrap grid for responsive placement. (https://getbootstrap.com/docs/4.4/layout/grid/)

- The social media icons were made by font awesome. (https://fontawesome.com/) 

 

