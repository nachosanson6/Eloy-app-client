# Eloy-App

## Front-end Repository (React with Vite)

### Table of Contents

1. [Table of Contents](#table-of-contents)
2. [Description](#description)
3. [Setup](#setup)
    - [Scripts](#scripts)
    - [Environment variables](#environment-variables)
4. [File Structure](#file-structure)
5. [Used Technologies](#used-technologies)
6. [Client routes](#client-routes)
7. [License](#license)
8. [Contact](#contact)

[![Back-end Repository](https://img.shields.io/badge/Back--end-Repository-blue?style=for-the-badge&logo=github)](https://github.com/nachosanson6/Eloy-app-server)

 ## Description
 
Eloy-app is a web application showcasing artistic creations, which include paintings, sculptures, and jewelry. The platform provides visitors with an engaging visual experience to explore and appreciate the various works of art.

### Key Features

- **Home Page with Carousel:** The homepage features a carousel showcasing highlighted pieces created by my father. This section gives visitors a visual preview of some of the most notable artworks.

- **Specialized Galleries:** Eñoy-app offers three specialized galleries, each dedicated to a specific artistic specialty (paintings, sculptures, and jewelry). Each gallery allows users to explore all the works corresponding to that category.

- **Artwork Details:** Users can access specific details for each artwork, including information on the techniques used, materials, dimensions, and any other relevant details.

This application provides art enthusiasts with an interactive platform to discover and enjoy the unique creations.


## Setup

#### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed on your machine before getting started.

Follow the steps below to setup the application in your local development environment:

1. Install dependencies

```bash
npm install
```

2. Run the application

```bash
npm run dev
```

The application will open automatically on localhost (port 5173 if it's not in use already).

<br/>

To create a production build

```bash
npm run build
```

### Scripts

The following commands can be found in the [`package.json`](./package.json) file in the project root. To execute them, simply use the command the following way:

```
npm run <command>
```

| Command      | Description                                       |
| ------------ | --------------------------------------------------|
| `dev`        | Starts the Vite development server.               |
| `build`      | Builds an optimized version for production.       |
| `lint`       | Runs ESLint to check and fix the code.            |
| `preview`    | Launches a preview of the generated application.  |


### Environment variables

| Variable                             | Description                                                                        |
| ------------------------------------ | ------------------------------------------------------------------------------------- |
| `VITE_API_URL`             | Url from the API                      |
| `VITE_APP_SITE_TITLE`      | App title                             |
| `VITE_REACT_APP_GOOGLE`    | Google key                            |

## File Structure

The file structure in the Jamlink front-end is organized as follows:

```plaintext
.
|-- .github/
|-- public/  
|-- src/
|   |-- assets/
|   |-- components/
|   |-- contexts/
|   |-- pages/
|   |-- routes/
|   |-- services/
|   |-- utils/
|   |-- App.css
|   |-- App.jsx
|   |-- main.jsx
|-- .eslintrc.cjs
|-- .gitignore
|-- Dockerfile
|-- README.md
|-- index.html
|-- package-lock.json
|-- package.json
|-- vite.config.js

```

## Used Technologies

- **Front-end:**
  - [React](https://reactjs.org/) - JavaScript library for building user interfaces.
  - [Vite](https://vitejs.dev/) - Fast development tool for JavaScript and TypeScript-based projects.
  - [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) - Markup language for web page structure.
  - [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) - Style sheet language for styling the user interface.
  - [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) - Programming language for client-side logic.
  - [Bootstrap](https://getbootstrap.com/) - CSS framework for fast and responsive web development.

- **Tools and Utilities:**
  - [GitHub Actions](https://github.com/features/actions) - For continuous integration and automatic deployment.

## Client routes

| Client routes       |                      |           |
|---------------------|----------------------|-----------|
|                     |                      |           |
|         URL         |      Description     | Protected |
| /                   | Index page           |           |
| /picturesGallery    | Events gallery page  |           |
| /sculpturesGallery  | Events details page  |           |
| /jewelryGallery     | New event from page  |           |
| /productDetails/:id | Edit event form page |           |
| /signup             | Signup page          |           |
| /login              | Login page           |           |

## License

This project uses various technologies and resources, each with its respective licenses. Below is the license information for the main technologies and tools used in the front-end:

### Front-end

- **React**: [MIT License](https://opensource.org/licenses/MIT)
- **Vite**: [MIT License](https://opensource.org/licenses/MIT)
- **HTML**: [HTML License](https://opensource.org/licenses/MIT) (Note: HTML generally doesn't have a specific license)
- **CSS**: [MIT License](https://opensource.org/licenses/MIT)
- **JavaScript**: [MIT License](https://opensource.org/licenses/MIT)
- **Bootstrap**: [MIT License](https://opensource.org/licenses/MIT)

### Tools and Utilities

- **GitHub Actions**: [GitHub Terms of Service](https://docs.github.com/en/github/site-policy/github-terms-of-service)


## Contact

Created by [Nacho Sanson](https://github.com/nachosanson6). 
