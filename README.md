## 1. Walk us through your development process as you worked on this project. How did you plan out the structure and design of it? How did decide on the tools you've used? Did you encounter any problems? And if so, how did you solve them? Are there any areas of your code that you're particularly proud of or want to point out?

Overall, the development went relatively smoothly. I drew out the rough UML of how each component should be connected as well as additional libraries I would need to import such as Bootstrap. 
I first implemented the basic functionalities of the website as well as a few additional features such as the search or filter. Then, the style was added with CSS to create a more appealing user interface. 
I decided to utilize React as the framework because of its versatility and my previous experience with it. And the style of many components were taken care of with Bootstrap given the time constraints. 
I faced a few problems during the development process. The main one being customizing the Bootstrap styling. The fast development time that Bootstrap provided had a downside and it was difficult to alter the styling of some components to my liking. 
I solved this issue by adding !important to styles as well as creating my own components for components like Cards which had to be more customized.Another problem was that the setState was asynchronous. This caused rendering problems as I tried to set the array of events as empty, but it wouldn’t update in time, which would cause discontinuities in the user interface.
In order to resolve this issue, I made use of the useEffect hook.I was particularly proud of the Card popping out on hover for each event as well as the appealing view of the homepage.

## 2. Given additional time, how would you extend your application to become a fully functional product that thousands of hackers and the general public would use at Hackathon Global Inc.™'s next event? Would you add more features and performance metrics? If so, what would they be?

Given additional time…
The code base would be commented on fully for each function to ensure that the code is readable and easily understandable for future developers.
Unit testing and integration testing would be implemented into the website. 
I would first implement a better user interface with more HacktheNorth logos and designs. Because of the time constraint, I wasn’t able to polish the design (especially for the individual pages) and this would be a great first step to a fully functional product. 
Adding additional menus such as the Home page, Settings page, Events page would also be a great addition where the website can display things other than events such as announcements and the list of winners. Having a centralized website where the hackers can access all of the information would be efficient for easier communication between the organizers and the hackers.
Another feature could be a log in with a fully functional backend user authentication to keep track of user data. 
This would go hand to hand with users signing up for events directly on this website and showing a scheduler for each user where they can see the time and location for the events that they signed up for.

## 3. Any other thoughts you have (not limited to the previous questions).

I thoroughly enjoyed working on this mini project and I really appreciate being considered for this role! Thank you!
Some additional notes about the considerations:
The code was written in a coherent manner but it does not have comments due the time constraint. 
The project is structured in a way that is extensible and scalable. The events are being mapped to whatever length it is, so having additional events and data would not be a problem. I also utilized a HashRouter so that any additional routes can be integrated easily into the website.
I tried to follow the modern best practices for React where hooks were used to keep track of states as well as having a file structure with low coupling and high cohesion.
The application is responsive to a certain extent. I tried to use the view port height and width when considering the size of components and elements. However, I did not have time to add any media queries to create a different style for smaller or larger screen sizes.The styling of my code was well done in my opinion. I used a Prettier VS code extension to make my code look more visually appealing and I gave my variables and functions meaningful names for better readability.
