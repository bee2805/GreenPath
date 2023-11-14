
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
    <img src="https://github.com/bee2805/GreenPath/blob/main/README_assets/logo.svg" alt="Logo" width="200" height="200">
  </a>
    
   <br />
   <br />

   <a href="https://drive.google.com/file/d/1oDMOZGuCXlBvzEyEf5mGN9UssmxGmq-l/view?usp=sharing">View Demo</a>
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
![image1](https://github.com/bee2805/GreenPath/blob/main/README_assets/Mockup1.png)

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

![image2](https://github.com/bee2805/GreenPath/blob/main/README_assets/LandingPage.png)

### Carbon Calculator

The Carbon Calculator lets users calculate their weekly vehicle emissions based on specified parameters. This is where the ML model [VehicleCO2Emissions](https://github.com/bee2805/VehicleCO2Emissions) is used. The UI updates according to the response, letting the user if their emissions are good, average or bad. The user will also be able to see some tips on how to lower their emissions.

![image3](https://github.com/bee2805/GreenPath/blob/main/README_assets/CarbonCalculator.png)

### Climate Stats

Here, the user will be able to see the detremental stats of the current environmental issues going on in the world. These stats let users know what has been going on this year with regards to topics such as deforestation, CO2 emissions, toxic gas release etc. These stats are being returend from this API: [Live World Data](https://rapidapi.com/jonaskoscielny/api/live-world-data/)

![image4](https://github.com/bee2805/GreenPath/blob/main/README_assets/ClimateStats.png)

### Climate News

On the Climate News page, the user will be able to see current environmental news articles, which are being returned from an API call. API: [Climate News Feed](https://rapidapi.com/TheTellusProject/api/climate-news-feed/)

![image5](https://github.com/bee2805/GreenPath/blob/main/README_assets/ClimateNews1.png)

![image5](https://github.com/bee2805/GreenPath/blob/main/README_assets/ClimateNews2.png)

### Get Envolved

Here, users will be able to see different sustainability projects that they can volunteer in. If the user clicks on the project, they will be navigated to the website where they can sign up for these voluntary programs.

![image6](https://github.com/bee2805/GreenPath/blob/main/README_assets/SustainabilityProjects.png)

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

![image6](https://github.com/bee2805/GreenPath/blob/main/README_assets/wireframe1.svg)
![image6](https://github.com/bee2805/GreenPath/blob/main/README_assets/wireframe2.svg)
![image6](https://github.com/bee2805/GreenPath/blob/main/README_assets/wireframe3.svg)

<!-- DEVELOPMENT PROCESS -->
## Development Process

### Implementation Process
<!-- stipulate all of the functionality you included in the project -->
<!-- This is your time to shine, explain the technical nuances of your project, how did you achieve the final outcome!-->

* I started off by creating my react app, and built all the pages and components.
* I added routing and incuded all appropriate navigation links.
* Next, I implemented the API's on the Carbon Stats and Carbon News pages.
* I then went on to train my vehicle emissions model, and once that was done, I implemented the the carbon calculator functionality.
* Before continuing, I conducted user tests to see how I could improve the website, and then made some changes based on the results.
* Finally, I added recommendations on how to lower your carbon emissions based on whether the result was average or bad, and I added UI changes to the vehicle emissions based on the results of the calculation.

#### Main Insights from User Testing
* Users Found the site easy to navigate through.
* The users enjoyed the UI.
* The users enjoyed the main feature of the site (Carbon Calculator).
* The main thing users didnt like about the site was that the results from the calculation was just a number in kg's, and there wasn't an idication of whether that was good or bad. They also said they would like to see tips on how to lower emissions.
* Overall, the site addresses the climate crisis in an impactful way.

#### Recommendations from User Testing
* Letting users login and add their own volunteer projects.
* Contextualise the footprint calculation a bit more (what does that number mean?).
* Give the user information on how they can reduce their cabron emissions/ suggestions.

#### Changes made based on User Testing Results
* I contexualised the footprint calculation result a bit more, letting the user know if their emissions are good, average or bad.
* The user now get information on how they can reduce their cabron emissions.

#### Highlights
* Implementing my own ML model into the project.
* I enjoyed training my model.
* I really enjoyed making the UI state changes based on the results of the calculation.
* I had fun adding all the animations.
* I enjoyed this project as a whole because I am passionate about the environment and the importance of making changes and gaining knowledge about the environment.

#### Challenges
<!-- stipulated the challenges you faced with the project and why you think you faced it or how you think you'll solve it (if not solved) -->
* I struggled with my models accuracy score. I kept getting 0.0 but ended up getting it to 0.9 using the random forest regressor.
* I struggled with setting up the AI endpoint for my model, I ran into a few errors sich as naming convention errors.

### Future Implementation
<!-- stipulate functionality and improvements that can be implemented in the future. -->

* I'd like add more carbon calculators to the project (based on: energy usage, food consumption, different types of transportation).
* I would like users to be able to login and add their own volunteer projects.

<!-- MOCKUPS -->
## Final Outcome

### Final Mockup

![image1](https://github.com/bee2805/GreenPath/blob/main/README_assets/Mockup2.png)
<br>

<!-- VIDEO DEMONSTRATION -->
### Video Demonstration

To see a run through of the application, click below:

[View Demonstration](https://drive.google.com/file/d/1oDMOZGuCXlBvzEyEf5mGN9UssmxGmq-l/view?usp=sharing)


See the [open issues](https://github.com/bee2805/GreenPath/issues) for a list of proposed features (and known issues).

<!-- AUTHORS -->
## Authors

* **Bronwyn Potgieter** - [bee2805](https://github.com/bee2805)

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.\

<!-- LICENSE -->
## Contact

* **Bronwyn Potgieter** - [bronwyn.potgieter@yahoo.co.za](mailto:bronwyn.potgieter@yahoo.co.zas) - [@bronns_designs](https://www.instagram.com/bronns_designs/) 
* **Project Link** - https://github.com/bee2805/GreenPath

<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements
<!-- all resources that you used and Acknowledgements here -->
* [Live World Data API](https://rapidapi.com/jonaskoscielny/api/live-world-data/)
* [Climate News Feed API](https://rapidapi.com/TheTellusProject/api/climate-news-feed/)
* [Imagery](https://www.freepik.com/author/freepik)
* [VehicleCO2Emissions](https://github.com/bee2805/VehicleCO2Emissions)