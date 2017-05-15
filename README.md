# CountMeUp

```
Microservice using NodeJS to count votes for candidates.
```

## Instructions

### Pre-requisites
```
1. NodeJS / NPM - https://nodejs.org/en/download/
2. A modern browser - https://www.google.co.uk/chrome/browser/desktop/
3. GIT (optional)
```

### Initial Set up

``` 
1. git clone https://github.com/DilwoarH/CountMeUp
2. npm install
3. npm start
4. Navigate to http://localhost:1337/init  // this will initialise candidates
```

### How to start application
```
npm start;
Navigate to http://localhost:1337/
```

### How to run Tests

```
npm test;
```

## Example Responses

### POST /register
```javascript

PAYLOAD:
{
	"name": "Test Voter",
	"email": "vote@test.com",
	"password": "password123"
}

RESPONSE:
{
    "success": true
}

```

### POST /register - failure
```javascript

PAYLOAD:
{
	"name": "Test Voter",
	"email": "vote@test.com",
	"password": "password123"
}

RESPONSE:
{
    "error": "User Already Registered"
}

```

### POST /login
```javascript

PAYLOAD:
{
	"email": "vote@test.com",
	"password": "password123"
}

RESPONSE:
{
    "success": true
}

```

### POST /login - failure
```javascript

PAYLOAD:
{
	"email": "vote@test.com",
	"password": "password123zzzzzzz"
}

RESPONSE:
{
    "error": "Invalid request."
}

```


### GET /results
```javascript

[
  {
    "candidate_id": 1,
    "candidate_name": "Paul Walker",
    "votes": 24
  },
  {
    "candidate_id": 2,
    "candidate_name": "Vin Diesel",
    "votes": 0
  },
  {
    "candidate_id": 3,
    "candidate_name": "Michelle Rodriguez",
    "votes": 0
  },
  {
    "candidate_id": 4,
    "candidate_name": "Jordana Brewster",
    "votes": 0
  }
]

```

### GET /candidates

```javascript

[
  {
    "id": 1,
    "name": "Paul Walker",
    "createdAt": "2017-05-15T00:28:58.477Z",
    "updatedAt": "2017-05-15T00:28:58.477Z"
  },
  {
    "id": 2,
    "name": "Vin Diesel",
    "createdAt": "2017-05-15T00:28:58.477Z",
    "updatedAt": "2017-05-15T00:28:58.478Z"
  },
  {
    "id": 3,
    "name": "Michelle Rodriguez",
    "createdAt": "2017-05-15T00:28:58.478Z",
    "updatedAt": "2017-05-15T00:28:58.478Z"
  },
  {
    "id": 4,
    "name": "Jordana Brewster",
    "createdAt": "2017-05-15T00:28:58.478Z",
    "updatedAt": "2017-05-15T00:28:58.478Z"
  }
]

```

### POST /votes
```javascript

{
    "success": true
}

```

### POST /votes - out of votes
```javascript

{
    "error": "Vote Invalid. You are out of votes."
}

```

