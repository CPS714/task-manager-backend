# Task Manager API

# Start API Server
 ```
npm i
npm i -g --force nodemon
nodemon app.js
```

# Routes
|                |Route                       |
|----------------|-------------------------------|
|Get all tasks|`GET /api/tasks/`|
|Insert new tasks          |`POST /api/tasks/`|
|Update task       |`PUT / api/tasks/:task_id`|

###  Example Request Body: POST /api/tasks/
```
[
	{
	"name":  "Meet with ELE Professor",
	"description":  "Ask professor when the exam will be",
	"priority":  2,
	"schedule_date":  "2022-10-21"
	}
]
```

###  Example Request Body: PUT /api/tasks/:task_id
> **Note:** You only need to add the key, value pairs for the fields you wish to update for the requested task id.
```
{
	"name":  "Updated name",
	"priority":  4
}
```

###  Example Response: GET /api/tasks/
```
[
	{
	"id": 1,
	"name":  "Meet with ELE Professor",
	"description":  "Ask professor when the exam will be",
	"priority":  2,
	"schedule_date":  "2022-10-21"
	},
		{
	"id": 2,
	"name":  "Meet with COE Professor",
	"description":  "Ask professor when the exam will be",
	"priority":  10,
	"schedule_date":  "2022-10-21"
	}
]
```

# Database Setup

Download Postgres Version 15.1 here: https://www.enterprisedb.com/downloads/postgres-postgresql-downloads

###  Create Tasks table
```
CREATE TABLE tasks (
	id serial PRIMARY KEY,
	name VARCHAR (255) NOT NULL,
	description VARCHAR (255),
	priority INT NOT NULL,
	schedule_date TIMESTAMP NOT NULL,
	created_on TIMESTAMP NOT NULL
);
```



