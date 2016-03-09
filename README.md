# Description

Open Weather is a UI prototype of displaying weather using openweathermap.org api based on location.

# Demo

http://sahilbathlaofficial.github.io/open_weather/

# How to Run

1) Install node https://nodejs.org/en/download/

2) Install compass `sudo gem install compass`

3) npm install (sudo if required)

4) bower install

5) npm start (open http://localhost:8080)

6) Change sass files and do `compass compile` to turn them into css

7) Change Open Weather **API key** in app.js

# How to Run Tests

1) Follow step 1-5 from above

2) For unit tests :- http://localhost:8080/specs/unit/tests.html

2) For api tests :- http://localhost:8080/specs/api/tests.html

# Known Issues

1. [FireFox] :- GeoLocation is not picked if 'Not now' is clicked in Firefox.

# Web Stack

1) AngularJs (1.2.0)

2) Compass (Used to import some crossplatform mixins and compile sass)

3) RequireJs

# App Structure

-- app

---- controllers

---- views

---- directives

---- enums

---- assets

------ sass

------ stylesheeets

------ images


-- specs

---- unit
---- api
