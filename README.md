# Swagger Petstore API

## Description

This repository contains a sample API server built with Express.js. It provides endpoints to manage pets, users, and store orders.

## Installation

### To run the API server locally, follow these steps:

Clone the repository:

```bash
git clone <repository_url>
cd <repository_name>
```

Install dependencies:

```javascript
npm install
```

Start the server:

```javascript
npm start
```

The server will start running on http://localhost:3000.

## Usage

Endpoints:

```
/api/pets - CRUD operations for pets.
/api/users - CRUD operations for users.
/api/store - Operations related to store orders.
```

### Sample Request

You can use tools like Postman or curl to make sample requests to the API

Example: Get all pets <br />
Method: GET <br />
URL: http://localhost:3000/api/pets <br />
Response: <br />

```json
[
  {
    "id": 1,
    "name": "Buddy",
    "species": "Dog"
  },
  {
    "id": 2,
    "name": "Whiskers",
    "species": "Cat"
  }
  // Additional pets...
]
```
