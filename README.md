# BACKEND:
## CRUD Task RESTAPI 

It's a crud api using NodeJS v18.11.0
This application also use Expres, Mongo, TypeScript and Docker
### Requirements

- Node.js v18.11.0, npm and MongoDB

---

**NOTE**
It also have a Dockerfile and docker-compose.yml in case you don't wan't to download those apps 

---


### Getting started

Run the following command on your local environment:

```
git clone https://github.com/Carvajalo/Convocatoria_Sagicc
cd task-restapi-crud
npm install
```

Then, you can run locally in development mode using:

```
npm run dev
```

In addition, you would use development mode with live reload executing: 

```

npm run dev:nodemon

```

Now, open http://localhost:3000/ with your favorite browser to see your project. On top of that, You can modify .env variables to setup the port and the MONGO_HOST as well

---

**NOTE 1**
If you want to run it in your machine you have to delete .env file or change MONGO_HOST to default mongohost. **Note 2:** The default port value for database connection with mongo is: 17.0.0.1 

---

To start docker you need to start the dev daemons scripts using:

```
docker build -t "somename" .
docker-compose build
docker-compose up

``` 
---

**REMINDER:** You need to install Docker and docker-compose (in case you are not on Windows SO)
**NOTE:** The default port to communicate with the docker image is 5000, ex: http://localhost:5000/tasks and you could find the configuration in the docker-compose.yml file.

---

### PWD

The tree working directory is:

```bash
├── README.md                               # README file
├── .babelrc                                # File-relative configuration
│  └───src
│   ├───controllers                         # Methods and DB actions
|   |   └─── notSupported.controller.ts     # Not supoported method for Method that are not supported
|   |   └─── task.controllers.ts            # Task controller methods
│   ├───models                              # Schema deffinition
|   |   └─── Task.ts                        # Task model (DB model of Task)
│   └───routes                              # Routes deffinition
|       └─── task.routes.ts                 # Task Routes
├── app.js                                  # App configuration: Port - middlewares - Routes
├── config.js                               # Env configuration
├── database.js                             # Database connection
├── index.js                                # Server connection (initialization)

```


### Deploy to production

You could see the results locally in production mode with:

```
$ npm run build
$ npm run start
```

Additionally, you can build and run the project using:

```
$ npm run build:start
$ npm run start
```


### Authors

- [@Carvajalo](https://github.com/Carvajalo)

[![Linkedin](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/carvajalo/)
### Libs

```

dependencies: 
    "cors": "^2.8.5"
    "dotenv": "^16.0.3"
    "express": "^4.18.2"
    "mongodb": "^4.11.0"
    "mongoose": "^6.7.2"
    "morgan": "^1.10.0"
    "multer": "^1.4.5-lts.1"

DevDependencies: 
    "@types/cors": "^2.8.12"
    "@types/express": "^4.17.14"
    "@types/mongoose": "^5.11.97"
    "@types/morgan": "^1.9.3"
    "@types/node": "^18.11.9"
    "nodemon": "^2.0.20"
    "ts-node-dev": "^2.0.0"
    "typescript": "^4.8.4"

```
### Contributing

Contributions are always welcome!

See `contributing.md` for ways to get started.

Please adhere to this project's `code of conduct`.


### Documentation

Public documentation: https://documenter.getpostman.com/view/24932039/2s8Z73wVBu
