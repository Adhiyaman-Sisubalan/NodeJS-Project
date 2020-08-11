# Interview Assignment

This package contains the completed code for the interview assignment.<br>
I have not added any additional libraries for the requirements.
<br>
<br>


## The NodeJS version which i used in my machine
- NodeJS v12.18.3


<br>


## Exposed Port
| S/N | Application | Exposed Port |
|-----|-------------|--------------|
| 1 | database | 3306 |
| 2 | external | 5000 |
| 3 | applicaiton | 3000|

<br>



### Installing dependencies
```bash
npm install
```

<br>

### Starting Project
Starting the project in local environment.
This will start all the dependencies services i.e. database and external (folder).
```bash
npm start
```

<br>

### Running in watch mode
This will start the application in watch mode.
```bash
npm run start:dev
```

<br>

### Check DataUpload API is fullfilling the requirements
You should be able to call (POST) the following endpoint and get a 204 response
```
  http://localhost:3000/api/upload
```
<br>

### Check StudentListing API is fullfilling the requirements
You should be able to call (GET) the following endpoint and get a 204 response
```
  http://localhost:3000/api/class/<classCode>/students?offset=1&limit=5
```
<br>

### Check UpdateClassName API is fullfilling the requirements
You should be able to call (PUT) the following endpoint and get a 204 response
```
  http://localhost:3000/api/class/P1-1
```
<br>

### Check WorkUploadReport API is fullfilling the requirements
You should be able to call (GET) the following endpoint and get a 204 response
```
  http://localhost:3000/api/reports/workload
```
<br>

## Extras

### Database
I have not used the database migration method, instead i used the direct model approach to initialise the database. <br>
I placed the models in the config/models folder. <br>
It will be ran the first time MySQL docker container is first initialised. <br><br>


<br>

## FAQ

### Error when starting up
If you encounter the following error when running ```npm start```, it is due to the slow startup of your database container.<br>
Please run ```npm start``` again.

```
[server.js]	ERROR	SequelizeConnectionError: Connection lost: The server closed the connection.
[server.js]	ERROR	Unable to start application
```



