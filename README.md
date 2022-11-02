# Task Manager API

# Routes
|                |Route                       |
|----------------|-------------------------------|
|Get all tasks|`'GET / api/tasks/`|
|Insert new tasks          |`"POST /api/tasks/"`|
|Update task       |`'PUT / api/tasks/:task_id`|

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
> **Note:** You only need to add the key, value pairs for the fields you wish to update for the requested task id.
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

