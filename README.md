# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


Features:
1.Display random images when user visits web-app.
2.User can search for different images by entering query in search box.
3.Author name and Description can be seen by hovering over image.
4.User can click on image, it will be redirected to source of image.

Approach:
1. Set Up Your Development Environment:
Make sure to have Node.js and npm (Node Package Manager) installed on machine.
Create a new React application using Create React App.

2. Obtain an Unsplash API Key:
Go to the Unsplash Developer portal (https://unsplash.com/developers) and create an account.
Create a new application to obtain an API key. This key will be used to make API requests to Unsplash.

3. Create Components:
Design the application's component structure.Components like search form, image display, and possibly a navigation bar.

4. Set Up API Requests:
Create a utility function or a service that will handle API requests.I have used the fetch function for making HTTP requests.
Use API key in the request headers when making calls to the Unsplash API.
Define a function that accepts a category name as a parameter and fetches images related to that category.

5. Build the Search Form:
Create a form component that allows users to input a category name.
Handle form submissions and use the API function to fetch images based on the entered category.

6. Display Images:
Create a component to display the fetched images.
Map through the fetched image data and render individual image components.

7. Add Styling:
I have used CSS to style application.
Create a visually appealing and responsive layout for the image gallery and search form.


Challenges:

1. API Integration:
Integrating the Unsplash API was challenging. Need to handle API key management, authorization, and understand how to structure API requests and handle responses.

2. Data Management:
Managing and displaying the fetched image data can be complex, especially when dealing with a large number of images.

3. State Management:
Using React's state effectively to manage different components' states can be challenging. Need to ensure that the correct components are re-rendered when state changes occur.


