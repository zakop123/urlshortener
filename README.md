# URL Shortener Project

The server-side code has been written in NodeJS Express framework whereas frontend uses AngularJS.

## Pre-requisites

The Project has only a couple of pre-requisites which must be installed first,

  1. [Node.js](http://nodejs.org) (6.x required)
  2. Docker: [https://www.docker.com/products/docker](https://www.docker.com/products/docker)

## Getting Started

  1. `git clone https://github.com/zakop123/urlshortener.git urlshortener`
  2. `cd urlshortener/backend`
  3. `npm install`
  4. `cd ../frontend`
  5. `npm install`
  6. `npm install -g bower`
  7. `bower install`


## Running the application

  * Start the backend API locally inside backend folder: `npm start`
  * Start the frontend locally inside frontend folder: `npm start`
  * Access the application on browser: `http://localhost:8000`

## Running using Docker

  * Build the application in the main folder where Dockerfile resides: `docker build -t urlshortener .`
  * Run the application container: `docker run -p 3000:3000 -p 8000:8000 -d urlshortener`
  * Access the application on browser: `http://localhost:8000`

## Completed Tasks

  * Backend that returns shortened url from submitted user url (Uses npm package for goo.gl)
  * Frontend that allows user to enter url and submit it and shows the returned result
  * Dockerfile that can be used to build and run the application in a container
  * A Dashboard that displays number of clicks for short urls for each of the generated url in localStorage

## Comments on Other Requirements

### Persistent Storage

  I have used localStorage on client to keep track of the urls converted by the user. So as long as user does not clear his browser's cookies, he can see the history of his urls. Storage in a database on backend would have been useful had there been a sign up and login option implemented for the project which is not the case

### Expiry for generated url

  I have used Google's URL shortening service for my project and according to them the generated urls do not have expiry as long as the service is up. In order to add an expiry, one possible option could have been to setup and manage my own domain and a server that generates shortened url with that domain. Another option could have been to use an api from a third party which does allow expiry but unfortunately I wasn't able to find one.

### Abuse of Service

  I didn't get time to work on this one but I would prefer to use Google's no-captcha recaptcha and ask for users to confirm that this form is not being filled by a robot.

### Other limitations

  In the submitted solution form validation has not been implemented which allows anyone to generate url against an invalid input as well. Initial sorting in analytics table is by clicking on the column name
