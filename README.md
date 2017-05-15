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

### How to use Application
```
1. Register Voter

POST /register
PAYLOAD:
{
	"name": "Test Voter",
	"email": "vote@test.com",
	"password": "password123"
}

2. Login with Voter details

POST /login
PAYLOAD:
{
	"email": "vote@test.com",
	"password": "password123"
}

3. See Candidate list

GET /candidates

4. Vote for Candidate

POST /votes
PAYLOAD:
{
	"candidate_id": 1
}

5. See Results

GET /results
```

### Out of Scope

This is work which was considered but was out of scope for the project:

- Additional Candidate Details
- Ability to Add Candidates
- Ability to Delete Candidates
- Ability to see results in percentage aswell as number of votes
- Views / UI
- Voter Details
- Admin User / Admin User Functionality (This will be needed for showing results)

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

### GET /logout
```javascript

{
    "success": true
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

PAYLOAD:
{
	"candidate_id": 1
}

RESPONSE:
{
    "success": true
}

```

### POST /votes - out of votes
```javascript
PAYLOAD:
{
	"candidate_id": 1
}

RESPONSE:
{
    "error": "Vote Invalid. You are out of votes."
}

```

### POST /votes - candidate does not exist
```javascript
PAYLOAD:
{
	"candidate_id": 1122112
}

RESPONSE:
{
    "error": "Vote Invalid. Candidate does not exist."
}

```

## References

### Libraries Used
```
Express
- Express is a minimal and flexible Node.js web application framework that provides a robust set of features 
for web and mobile applications.

Lodash
- Lodash makes JavaScript easier by taking the hassle out of working with arrays, numbers, objects, strings, etc.
- Lodash’s modular methods are great for:
    - Iterating arrays, objects, & strings
    - Manipulating & testing values
    - Creating composite functions

Sails.js
- Sails.js is a web framework that makes it easy to build custom, enterprise-grade Node.js apps. It is designed to resemble the MVC architecture from frameworks like Ruby on Rails, but with support for the more modern, data-oriented style of web app development. It's especially good for building realtime features like chat.

```

