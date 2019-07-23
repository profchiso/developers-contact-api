# Project Title

A simple developers contact Api

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them

```
1. To run this app, you need the following dependencies
 - express
 - mongoose
 - body-parser
```
```
2.  you  also need 
 - mongodb installed in your
 - node
 - Postman or any other rest client
 - then a browser(optional though)
```

### Installing

A step by step series of examples that tell you how to get the app   running a development env


```
use git bash to clone this repository "https://github.com/profchiso/developers-contact-api.git"
```
open the cloned project with git
 - install the dependencies using the command "npm install express body-parser mongoose
 - startup the mongodb your terminal app using the command "mongod"
 - open the clonned project in an terminal and run the server using " node server.js" command;
 - then you are read to perform certain operations in the developers contact api 

```
```

End with an example of getting some data out of the system or using it for a little demo

## Basic routes of the Api
```
        GET    /developers
        GET    /developers/stack/front-end or back-end or full-stack
        GET    /developers/1
        POST   /developers
        PUT    /developers/1
        PATCH  /developers/1
        DELETE /developers/1
```


## Running on postman
```
    1. To  view all developers
       Type this url  http://localhost:3000/developers
       in POSTMAN Address bar and click on send
       Note the HTTP Method must be GET             
```

### Break down into end to end tests

Explain what these tests test and why

```
Give an example
```

### And coding style tests

Explain what these tests test and why

```
Give an example
```

## Deployment

Add additional notes about how to deploy this on a live system

## Built With

* [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - The web framework used
* [Maven](https://maven.apache.org/) - Dependency Management
* [ROME](https://rometools.github.io/rome/) - Used to generate RSS Feeds

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Authors

* **Billie Thompson** - *Initial work* - [PurpleBooth](https://github.com/PurpleBooth)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone whose code was used
* Inspiration
* etc

