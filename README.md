
# GreenPath

<br />

![GitHub repo size](https://img.shields.io/github/repo-size/bee2805/GreenPath)
![GitHub watchers](https://img.shields.io/github/watchers/bee2805/GreenPath)
![GitHub language count](https://img.shields.io/github/languages/count/bee2805/GreenPath)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/bee2805/GreenPath)

<br/>

<!-- HEADER SECTION -->
<h5 align="center" style="padding:0;margin:0;">Bronwyn Potgieter</h5>
<h5 align="center" style="padding:0;margin:0;">200089</h5>
<h6 align="center">DV300 - Term 4 | 2023</h6>
</br>

<p align="center">

  <a href="https://github.com/bee2805/GreenPath">
    <img src="https://github.com/bee2805/GreenPath/blob/main/README_assets/logo.png" alt="Logo" width="200" height="200">
  </a>
    
   <br />
   <br />
   <!-- TODO: Add demo video -->
   <!-- <a href="https://drive.google.com/file/d/13yYQyI_oNGEweU1Nftim3kCc0yPdMXoP/view?usp=sharing">View Demo</a> -->
    ·
    <a href="https://github.com/bee2805/GreenPath/issues">Report Bug</a>
    ·
    <a href="https://github.com/bee2805/GreenPath/issues">Request Feature</a>
</p>

<!-- TABLE OF CONTENTS -->
<!-- TODO: Edit table of contents -->
## Table of Contents

* [About the Project](#about-the-project)
  * [Project Description](#project-description)
  * [Built With](#built-with)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [How to install](#how-to-install)
* [Angular Know How](#angular-know-how)
* [Features and Functionality](#features-and-functionality)
* [Concept Process](#concept-process)
   * [Ideation](#ideation)
   * [Wireframes](#wireframes)
* [Development Process](#development-process)
   * [Implementation Process](#implementation-process)
        * [Highlights](#highlights)
        * [Challenges](#challenges)
   * [Future Implementation](#future-implementation)
* [Final Outcome](#final-outcome)
    * [Final Mockup](#final-mockup)
    * [Video Demonstration](#video-demonstration)
* [License](#license)
* [Contact](#contact)
* [Acknowledgements](#acknowledgements)

<!--PROJECT DESCRIPTION-->
## About the Project
<!-- header image of project -->
![image1](https://github.com/bee2805/VehicleCO2Emissions/blob/main/README_assets/Mockup1.png)

### Project Description

GreenPath is a website that helps users understand their enviromnetal impact based on the daily choices they make. This project uses a trained machine learning model to help users predict the weekly CO2 emissions of their vehicle, and based on that, they are able to get tips on how to lower their emission. GreenPath helps users understand the importance of the climate crisis and helps them make more eco-friendly decisions.

### Built With

* [Jupyter Notebook](https://jupyter.org/)
* [Pandas](https://pandas.pydata.org/)
* [Sklearn](https://pypi.org/project/sklearn/)
* [ReactJS](https://react.dev/)
* [NodeJS](https://nodejs.org/en)
* [axios](https://axios-http.com/)

## Getting Started
<!-- GETTING STARTED -->
The following instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites
Ensure that you have GitHub desktop and Android Studio downloaded onto your machine.

### How to install

Here are a couple of ways to clone this repo:

1. GitHub Desktop </br>
Enter `https://github.com/bee2805/GreenPath.git` into the URL field and press the `Clone` button.

2. Clone Repository </br>
Run the following in the command-line to clone the project:
   ```sh
   git clone https://github.com/bee2805/GreenPath.git
   ```
    Open `Software` and select `File | Open...` from the menu. Select cloned directory and press `Open` button
<!-- Make sure to add appropriate information about what prerequesite technologies the user would need and also the steps to install your project on their own mashines -->
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm install`

Installs any dependencies/packages you may need for the application

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

# Getting Started with ML Model API

Head over to [VehicleCO2Emissions](https://github.com/bee2805/VehicleCO2Emissions) and clone the project onto your machine. Follow the documentation to run the model on local host

<!-- FEATURES AND FUNCTIONALITY-->
## Features and Functionality

### Landing Page

The landing page has appropriate information about GreenPath, and lets the user know what to expect when using it.

![image2](https://github.com/bee2805/GreenPath/blob/main/README_assets/Mockup2.png)

### Carbon Calculator

The Carbon Calculator lets users calculate their weekly vehicle emissions based on specified parameters. This is where the ML model [VehicleCO2Emissions](https://github.com/bee2805/VehicleCO2Emissions) is used. The UI updates according to the response, letting the user if their emissions are good, average or bad. The user will also be able to see some tips on how to lower their emissions.

![image3](https://github.com/bee2805/GreenPath/blob/main/README_assets/Mockup3.png)

### Climate Stats

Here, the user will be able to see the detremental stats of the current environmental issues going on in the world. These stats let users know what has been going on this year with regards to topics such as deforestation, CO2 emissions, toxic gas release etc. These stats are being returend from this API: [Live World Data](https://rapidapi.com/jonaskoscielny/api/live-world-data/)

![image4](https://github.com/bee2805/GreenPath/blob/main/README_assets/Mockup4.png)

### Climate News

On the Climate News page, the user will be able to see current environmental news articles, which are being returned from an API call. API: [Live World Data](https://rapidapi.com/TheTellusProject/api/climate-news-feed/)

![image5](https://github.com/bee2805/GreenPath/blob/main/README_assets/Mockup4.png)

### Get Envolved

Here, users will be able to see different sustainability projects that they can volunteer in. If the user clicks on the project, they will be navigated to the website where they can sign up for these voluntary programs.

![image6](https://github.com/bee2805/GreenPath/blob/main/README_assets/Mockup4.png)

<!-- CONCEPT PROCESS -->
## Concept Process

* I started off my ideation process by coming up with a few ideas for the theme. Once I had my theme in place, I thought about different ideas for the AI implementation - which resulted in the carbon calculator. I initially decided to calulate your carbon footprint based on various factors (Energy Usage, Transportation, Food Consumption etc.), but ended up only choosing the vehicle emissions as I would have had to train multiple models with a few different datasets and it would not have fit into my timeline.

### Ideation

![image5](https://github.com/bee2805/GreenPath/blob/main/README_assets/Ideate_1.svg)
![image5](https://github.com/bee2805/GreenPath/blob/main/README_assets/Ideate_2.svg)
![image5](https://github.com/bee2805/GreenPath/blob/main/README_assets/Ideate_3.svg)
![image5](https://github.com/bee2805/GreenPath/blob/main/README_assets/Ideate_4.svg)
![image5](https://github.com/bee2805/GreenPath/blob/main/README_assets/Ideate_5.svg)
![image5](https://github.com/bee2805/GreenPath/blob/main/README_assets/Ideate_6.svg)


<br>

### Wireframes

![image6](https://github.com/bee2805/GreenPath/blob/main/README_assets/Wireframes.png)

<!-- DEVELOPMENT PROCESS -->
## Development Process

### Implementation Process
<!-- stipulate all of the functionality you included in the project -->
<!-- This is your time to shine, explain the technical nuances of your project, how did you achieve the final outcome!-->

* I started off my angular project by generating components and styling them using html and css
* I added routing and incuded all appropriate navigation links
* The next step was to then set up my back end with appropriate shemas routs for my CRUD functinality
* Got the data and displayed it dynamically in angular components

#### Highlights
* Overall, The theme of this project was really cool. It allowed me to be super creative and free with my design choices.
* I really enjoyed learning Angular and Typescript
* The crafting section was my favorite part. 

#### Challenges
<!-- stipulated the challenges you faced with the project and why you think you faced it or how you think you'll solve it (if not solved) -->
* I struggled with the select on the crafting page and inputting that data dynamically. At the end of the day I was successful, however I believe I would be able to achive the same functionality in a much simpler way and in less lines of code. I aim to acieve this in the future.
* I also struggled to have a defualt value on the select option because I used the value property to filter my data.


#### Above And Beyond

* I added modals that pop up once editing and crafting inventory with data passed to those modals that showcase what exactly was crafted/edited.
* The side nav was also implemented following a tutorial found on youtube.

### Future Implementation
<!-- stipulate functionality and improvements that can be implemented in the future. -->

* I'd like to get the select to have a default value
* I would love to make use of the potions that have been crafted, and maybe use them to craft other potions.

<!-- MOCKUPS -->
## Final Outcome

### Final Mockup

![image7](https://github.com/bee2805/VehicleCO2Emissions/blob/main/README_assets/Mockup5.png)
<br>

<!-- VIDEO DEMONSTRATION -->
### Video Demonstration

To see a run through of the application, click below:

[View Demonstration](https://drive.google.com/file/d/13yYQyI_oNGEweU1Nftim3kCc0yPdMXoP/view?usp=sharing)


See the [open issues](https://github.com/bee2805/VehicleCO2Emissions/issues) for a list of proposed features (and known issues).

<!-- AUTHORS -->
## Authors

* **Bronwyn Potgieter** - [bee2805](https://github.com/bee2805)

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.\

<!-- LICENSE -->
## Contact

* **Bronwyn Potgieter** - [bronwyn.potgieter@yahoo.co.za](mailto:bronwyn.potgieter@yahoo.co.zas) - [@bronns_designs](https://www.instagram.com/bronns_designs/) 
* **Project Link** - https://github.com/bee2805/VehicleCO2Emissions

<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements
<!-- all resources that you used and Acknowledgements here -->
* [Artstation Material Studies](https://www.artstation.com/search?sort_by=relevance&query=material%20study)
* [Artstation Potion Bottles](https://www.artstation.com/search?sort_by=relevance&query=potion%20bottles)
* [Heading Font](https://fonts.google.com/specimen/Press+Start+2P?query=Press+Start+2P)
* [Subheading + Paragraph Font](https://fonts.google.com/specimen/Courier+Prime?query=Courier+Prime)
* [Background Image](https://www.vecteezy.com/vector-art/16265381-stilt-house-in-swamp-in-forest-at-night)
* [Icons](https://fontawesome.com/)
* [Main Mockup](https://www.mockupworld.co/free/workspace-mit-imac-scene-creator-mockup-set/)
* [Clay Mockup](https://www.mockupworld.co/free/web-design-showcase-with-imac-macbook-and-iphone-mockup/)
* [Wireframe Mockup](https://www.mockupworld.co/free/website-or-presentation-template-mockup/)

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
