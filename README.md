# Salsa Screen

Enjoying cinema can be like dipping the chip of your conciousness into a bowl of entertainment salsa: some are excitingly spicy, others disappointingly mild.

But you never know if you'll like it until you try it—

—until now.

At [Salsa Screen](https://salsa-screen.herokuapp.com/), experts have rated the hotness of your movies to display a salsa-rating that can steer you towards the savory experiences you desire and deserve.

Users can: 
![GIF](https://giphy.com/gifs/gyZyjcP0HeSG520TXt/html5)

https://media.giphy.com/media/gyZyjcP0HeSG520TXt/giphy.gif

- See a display of movies
- Click a movie to view only that movie and its details
- Be able to return to the home view of all movies
- Navigate through the site using back or forward arrows
- Search for movies
- Browse by genre

This is the first project of Turing School Mod 3.
## Goals

In this project, my goal was to gain familiarity with using React and React Router, as this was my initial experience with these technologies.

It was also a great chance to continue practicing my CSS, which is where I've felt slowest and least comfortable. I wanted to spend extra time practicing skills I'm not confident in, which might normally be designated to a collaborator if this was a paired project.

Our cohort had an uneven number of students, and instead of joining a pair to complete this project, I challenged myself to do it solo. That way, I had more experience with all aspects of the code and held myself accountable in a self-organized project, with git workflow, timeline requirements, and assessment of realistic goals.

There were struggles being inexperienced and not having a partner to bounce ideas off of, but I was sure to use my mentor and reach out for second opinions to avoid pitfalls of my own limited perspective. Plus, I had less merge conflicts or meeting obligations that allowed me more time to work on my ideas, despite not having someone to split the work with, so I'm happy I pushed to do this project independently.

I'm proud of what I was able to learn and achieve, and grateful for the opportunity to see areas where I can spend more time working to do better in the future.
## Technologies

This project was utlized:

- **ES6 Javascript** with a focus on DRY, SRP, OOP code
- **React** & **React Router** bootstrapped with [Create React App](https://github.com/facebook/create-react-app)
- **Cypress** end-to-end testing
- **CSS** broken out into modular, logical stylesheets (React documentation advised against SCSS given modular CSS, but it was considered)
- A **CSS [normalize](https://github.com/necolas/normalize.css/)** file for browser compatability
- **Accessibility testing** using [aria labels](https://www.w3.org/TR/wai-aria/#aria-label) and [Colorblinding](https://chrome.google.com/webstore/detail/colorblinding/dgbgleaofjainknadoffbjkclicbbgaa?hl=en) checks alongside **semantic HTML**
- **Webpack** bundling 
- **Github pages** deployment
- **Git workflow**, PR template, a kanban project board, wireframing, and self-management of design and development modeled after Agile
- **Material-UI** dev dependency to help with accessibility tooltips and drop-menu
## Contributors

This app was coded by me, [Alice Ruppert](https://www.srslie.com/), following a [spec](https://frontend.turing.io/projects/module-3/rancid-tomatillos-v3.html) by Turing School staff.

Special thanks to my mentor, [Scott Schipke](https://github.com/sschipke) for his technical support, and my partner for all the food and insistence on life details like water and sleep. Also thanks to my classmate [Rachel Buchta](https://github.com/rachelbuchta) for keeping me company and helping while I didn't have an official project partner.

## Future Iterations

In 14 days, I gained skills and familiarity through this first React project, but there are ample areas where time constraints tempered my ambitions.

While no further iterations are planned, future improvements might include:
- More refactoring!
- Deploying a microserver using Express.js (partially written and deployed [here!](https://github.com/srslie/salsa-screen-server)
- Adding ability to log users in, rate movies
- refactor CSS to add grid area names or use SCSS
- Troubleshoot scrolling bug where first cards are hidden possibly due to scrollLeft functionality
- Add Typescript or prop types to ensure proper data types
- Grab additional data from the MovieDatabase api or a larger selection of movies to see how this scales, refactoring the compilation/faux lazy load if needed
