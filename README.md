# Wayfarer

## Table Of Contents
- [Project Description](#description)
- [Tools & Technoilogies](#technology-stack)
- [Project Aproach](#approach)
- [User Stories](#user-stories)
- [Hurdles](#hurdles)
- [Installation Instructions](#installation-instructions)
- [Credits](#credits)

## Description

The site Wayfarer was created for spontaneous travelers! Travelers who know they want to get outside of their city, but not sure where to go! On our site you can find many recommendations on where to dine, what to do, and more. The site allows users to interact with different cities and filter through photos. Here at Wayfarer we believe traveling broadens the mind and changes the way you approach life. Through the people you have encounters with on your journey and through traveling to different places, you expand you horizon when it comes to food and culture. Traveling allows you to have a different mindset, as well as see the world through a different lens. Utilizing Wayfarer is the best way to gain knowledge on where your next trip may be. Lets get you traveling, the world is your playground!

## Technology Stack
- [Jasmine for Testing](https://jasmine.github.io/tutorials/your_first_suite)
- [Bootstrap](https://getbootstrap.com/docs/5.3/getting-started/introduction/)
- Apple Notes
- VS Code
- [Angular](https://angular.io/start)

## Architecture and Design Pattern

By following an iterative development process, transforming user stories and design mockups into functional components, and utilizing responsive design through Bootstrap, we will managed the project's development lifecycle effectively.

## Approach

Our project revolves around creating a travel site called Wayfarer. We completed the majority of Sprint 1 on Day 1, which involved wireframing, user stories, and establishing paths for the Home and Cities pages. We have also implemented a header that remains visible across all pages. On Day 2, we finalized the information component on the Home page and started Sprint 2 by displaying a list of citites and showing a list of posts associated with that city. On our last day, we finished up the second sprint and added a functional search bar that will retrieve the posts based on the keyword.

We encountered challenges related to routing between the Home Page and Cities Page, as well as nesting routes within the Cities component. However, by referring to our lesson notes and following the necessary steps, we successfully resolved these challenges.

Our project process involves working through two core sprints  while continuously refactoring our code for better readability, organization, and adherence to coding best practices. We aimed to ensure a clear understanding of the client's vision and hammer out any ambiguities in the wireframes to create a smooth UX/UI flow.

## User Stories

### Sprint 1: Landing Page

A user should be able to:

- Navigate to "/" and see a basic splash page with the name of the website.
- See the site-wide header on every page with a link to home page with list of cities.

### Sprint 2: HomePage
A user should be able to:

- View the "San Francisco" page (at "/cities/1") including:
  - The site-wide header.
  - The name of the city.
  - An iconic photo of the city.

- View a list of posts on the San Francisco page:
  - Sorted by newest first.
  - With the post titles linked to the individual post "show" pages.

- Use the search bar to search through the posts' title and/or content.
- Click on the title of one of their posts and be redirected to a "show" page for that post.
- View post "show" pages with title, author, and content.

## Wireframes

![Wireframe of Wayfarer App]()

## Hurdles

- Routing between the Home Page and Cities Page - We had a hard time understanding how to set up the routing so that the application would toggle between the home page and the cities page. Once we looked back through our lesson notes, we were able to create a router and paths for each page

- Nesting Routes within the Cities Component - We wanted to have the information for each city display next to the list of cities. In order to do that, we knew we had to nest routes from one component within another component but had trouble figuring out how to do that. By going through the lesson notes and walking through the steps of how to nest the routes, we were able to get our display elements to appear next to our city list.

- Displaying list of posts based on search - We had a difficult time getting the posts to display based on the keyword in the search tab. In order to get that to work, we had to create a service in order to link the data from our posts to a new router path. Once we made those changes, we were able to see the list of posts displayed on a new path.

## Installation Instructions

1. Prerequisites: You will need Node.js and Node Package Manager installed on your local machine to be able to run this application. You can run the following command lines in your terminal to confirm you have them: 
   ```
   node—version
	 npm –version
   ```
If either one is not installed, you can download and install them from the [Node.js website](https://nodejs.org/en) and view their official documentation [here](https://nodejs.org/en/docs) 

2.	Download our application: 
  - [GitHub](https://github.com/woodsdeshe/wayfarer)
  - Make sure you extract the zip file! 
  - Then in your terminal navigate to the downloaded directory. 
  
3. Once in the folder directory in your terminal, you will need to install node modules. You can do that with the following command: 
    ```
    npm install
    ```
4. Before running the application, you will need to build the application by running the following command:
    ``` 
    ng build
    ```
5. Then run the following command to start your server: 
    ``` ng serve, or ng serve –open``` 
     to automatically run and open on your browser. 
     
6. If you did not elect to automatically open once the server started, you make visit http://localhost:4200 to visit our angular application! 

## Credits
- Kevin Barrios - Assisted us in solving our issues with Git.
- Leo Rodriguez - Assisted us in debugging our code throughout the project.
- Kelsey Halley, Dominique Collins, and DeShe Woods - Developers that assisted in the development of the Wayfarer app.
