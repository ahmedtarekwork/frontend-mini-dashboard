# Mini Dashboard System

This is a lightweight user dashboard that allows users to browse, manage, and interact with simple data entries,
mock data comes from JSONPlaceholder API, specifically the todos category.

## How to setup on local machine

- clone github repo on your machine

  ```bash
  github clone https://github.com/ahmedtarekwork/frontend-mini-dashboard.git
  ```

- run this command in your terminal to install dependencies

  ```bash
  npm install
  ```

- run the development server with vite

  ```bash
  npm run dev
  ```

## Features list

- **Authentication**

  - Login page that handles many cases like:
    - Email and password inputs invalid values with error message widget.
    - Handle valid email and password values, then send request to mock Auth API, after the response comes back successfully with the token, the token stored in the localStorage and user info setted in the global state of the app.
  - The token always saved in the localStorage, unfortunately the mock Auth API that used doesn't provide the option to store the token in httpOnly cookie.
  - At initial loading of the app, if there is a token in the localStorage user will be redirecting to the home page.
  - User can't access the Login page if he already authorized, reverse is true.
  - Logout Button in the side bar "accessible if authorized", sends a request to the mock Auth API to end the session, after response successfully comes back the token removed from the localStorage and user info removed from the global state of the app.

- **Responsive UI**

  - The app have two parts, a side bar on the left side with button to open or close it with smooth animation, and main content area at the right side.
  - In the mobile, the side bar will disappeare and only toggle button will show on the left side of the screen.
  - Side bar have a navigation buttons at the top of it with active status styles if the button url match the page url, at the bottom the logout button is present and handles the mock logout proccess.
  - The app have a main content area that change it's content based on the page.

- **Reusable Code**

- Reusable components like tables, titles, form inputs and much more.
- Custom hooks for reusable code in different components and parts of the app

- **Home Page**

  - Fetching mock data from JSONPlaceholder with custom hook.
  - Handle loading and error statements.
  - Pagination with caching results with Redux toolkit for fetched data.
  - Display mock data in a responsive table with action buttons like:
    - Button that mark the todo as a completed or pending based on it's status.
    - Button for redirecting to the todo form page to edit the todo, the current info of the todo is placed as default values of the form inputs.

- **Form Page**
  - This page have two input fields only, todo title input and completed checkbox input.
  - If the todo page opened with edit button from specific todo in the home page there is a read only field called id will appear, it's show the id of the todo.
  - There are two buttons in this form, one for Reset and one for Submit, these buttons also used in the Login form.
  - Reset button with red background color do two different things:
    - Reseting the form to initial state if the mode of the form is creating a new todo.
    - If the mode of the form is edit specific todo then it reset the inputs to the initial values of the todo.

## API Endpoints

This used two defferent mock APIs:

- JSONPlaceholder for mock data
- Reqres.in for mock authentication

**List of endpoints**

- **JSONPlaceholder**

  - GET - https://jsonplaceholder.typicode.com/todos
  - POST - https://jsonplaceholder.typicode.com/todos
  - PATCH - https://jsonplaceholder.typicode.com/todos/${todoId}

- **Reqres.in**
  - POST - https://reqres.in/api/logout
  - POST - https://reqres.in/api/login

## Live Preview

This project was deployed to netlify for live preview in production enviroment.

Live Preview URL : https://ahmed-mini-dashboard.netlify.app
