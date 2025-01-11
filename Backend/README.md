# API Documentation

## User Registration

### POST /user/register

#### Description
Registers a new user in the system with the provided information.

#### Request Body
```json
{
  "fullname": {
    "firstname": "string",     // Required, min length: 3
    "lastname": "string"       // Optional, min length: 3 if provided
  },
  "email": "string",          // Required, valid email format
  "password": "string"        // Required, min length: 6
}
```

#### Validation Rules
- `fullname.firstname`: Required, minimum 3 characters
- `fullname.lastname`: Optional, minimum 3 characters if provided
- `email`: Required, must be a valid email format
- `password`: Required, minimum 6 characters

#### Responses

##### Success Response
- **Code**: 201 Created
```json
{
  "token": "JWT_TOKEN_STRING",
  "user": {
    "_id": "USER_ID",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john@example.com"
  }
}
```

##### Error Responses
- **Code**: 400 Bad Request
```json
{
  "error": [
    {
      "msg": "First name must be at least 3 character long",
      "param": "fullname.firstname",
      "location": "body"
    }
  ]
}
```

- **Code**: 500 Internal Server Error
```json
{
  "error": "Internal Server Error"
}
```

#### Sample Request
```bash
curl -X POST http://localhost:5000/user/register \
  -H "Content-Type: application/json" \
  -d '{
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "password": "password123"
  }'
```

## Captain Registration

### POST /captains/register

#### Description
Registers a new captain in the system with the provided information.

#### Request Body
```json
{
  "fullname": {
    "firstname": "string",     // Required, min length: 3
    "lastname": "string"       // Required, min length: 3
  },
  "email": "string",          // Required, valid email format
  "password": "string",       // Required, min length: 6
  "vehicle": {
    "color": "string",        // Required, min length: 3
    "plate": "string",        // Required, min length: 4
    "capacity": "number",     // Required, min value: 1
    "vehicleType": "string"   // Required, must be one of ["car", "motorcycle", "auto"]
  }
}
```

#### Validation Rules
- `fullname.firstname`: Required, minimum 3 characters
- `fullname.lastname`: Required, minimum 3 characters
- `email`: Required, must be a valid email format
- `password`: Required, minimum 6 characters
- `vehicle.color`: Required, minimum 3 characters
- `vehicle.plate`: Required, minimum 4 characters
- `vehicle.capacity`: Required, minimum 1
- `vehicle.vehicleType`: Required, must be one of ["car", "motorcycle", "auto"]

#### Responses

##### Success Response
- **Code**: 201 Created
```json
{
  "captain": {
    "_id": "CAPTAIN_ID",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john@example.com",
    "vehicle": {
      "color": "red",
      "plate": "ABC123",
      "capacity": 4,
      "vehicleType": "car"
    }
  }
}
```

##### Error Responses
- **Code**: 400 Bad Request
```json
{
  "error": [
    {
      "msg": "First name must be at least 3 character long",
      "param": "fullname.firstname",
      "location": "body"
    }
  ]
}
```

- **Code**: 500 Internal Server Error
```json
{
  "error": "Internal Server Error"
}
```

#### Sample Request
```bash
curl -X POST http://localhost:5000/captains/register \
  -H "Content-Type: application/json" \
  -d '{
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "password": "password123",
    "vehicle": {
      "color": "red",
      "plate": "ABC123",
      "capacity": 4,
      "vehicleType": "car"
    }
  }'
```

## Captain Login

### POST /captains/login

#### Description
Logs in an existing captain with the provided credentials.

#### Request Body
```json
{
  "email": "string",          // Required, valid email format
  "password": "string"        // Required, min length: 6
}
```

#### Validation Rules
- `email`: Required, must be a valid email format
- `password`: Required, minimum 6 characters

#### Responses

##### Success Response
- **Code**: 200 OK
```json
{
  "token": "JWT_TOKEN_STRING",
  "captain": {
    "_id": "CAPTAIN_ID",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john@example.com"
  },
  "message": "login Successful"
}
```

##### Error Responses
- **Code**: 400 Bad Request
```json
{
  "error": [
    {
      "msg": "Invalid Email",
      "param": "email",
      "location": "body"
    }
  ]
}
```

- **Code**: 401 Unauthorized
```json
{
  "error": "Invalid credentials"
}
```

- **Code**: 500 Internal Server Error
```json
{
  "error": "Internal Server Error"
}
```

#### Sample Request
```bash
curl -X POST http://localhost:5000/captains/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "john.doe@example.com",
    "password": "password123"
  }'
```

## User Login

### POST /user/login

#### Description
Logs in an existing user with the provided credentials.

#### Request Body
```json
{
  "email": "string",          // Required, valid email format
  "password": "string"        // Required, min length: 6
}
```

#### Validation Rules
- `email`: Required, must be a valid email format
- `password`: Required, minimum 6 characters

#### Responses

##### Success Response
- **Code**: 200 OK
```json
{
  "token": "JWT_TOKEN_STRING",
  "user": {
    "_id": "USER_ID",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john@example.com"
  }
}
```

##### Error Responses
- **Code**: 400 Bad Request
```json
{
  "error": [
    {
      "msg": "Invalid Email",
      "param": "email",
      "location": "body"
    }
  ]
}
```

- **Code**: 401 Unauthorized
```json
{
  "error": "Invalid credentials"
}
```

- **Code**: 500 Internal Server Error
```json
{
  "error": "Internal Server Error"
}
```

#### Sample Request
```bash
curl -X POST http://localhost:5000/user/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "john.doe@example.com",
    "password": "password123"
  }'
``` 

## User Profile

### GET /users/profile

#### Description
Retrieve the profile information of the authenticated user.

#### Responses

##### Success Response
- **Code**: 200 OK
```json
{
  "_id": "USER_ID",
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john@example.com"
}
```

##### Error Responses
- **Code**: 401 Unauthorized
```json
{
  "error": "Unauthorized"
}
```

#### Sample Request
```bash
curl -X GET http://localhost:5000/users/profile \
  -H "Authorization: Bearer JWT_TOKEN_STRING"
```

## Captain Profile

### GET /captains/profile

#### Description
Retrieve the profile information of the authenticated captain.

#### Responses

##### Success Response
- **Code**: 200 OK
```json
{
  "captain": {
    "_id": "CAPTAIN_ID",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john@example.com",
    "vehicle": {
      "color": "red",
      "plate": "ABC123",
      "capacity": 4,
      "vehicleType": "car"
    }
  }
}
```

##### Error Responses
- **Code**: 401 Unauthorized
```json
{
  "error": "Unauthorized"
}
```

#### Sample Request
```bash
curl -X GET http://localhost:5000/captains/profile \
  -H "Authorization: Bearer JWT_TOKEN_STRING"
```

## User Logout

### GET /users/logout

#### Description
Logout the authenticated user.

#### Responses

##### Success Response
- **Code**: 200 OK
```json
{
  "message": "logged out"
}
```

##### Error Responses
- **Code**: 401 Unauthorized
```json
{
  "error": "Unauthorized"
}
```

#### Sample Request
```bash
curl -X GET http://localhost:5000/users/logout \
  -H "Authorization: Bearer JWT_TOKEN_STRING"
```

## Captain Logout

### GET /captains/logout

#### Description
Logout the authenticated captain.

#### Responses

##### Success Response
- **Code**: 200 OK
```json
{
  "message": "Logout successful"
}
```

##### Error Responses
- **Code**: 401 Unauthorized
```json
{
  "error": "Unauthorized"
}
```

#### Sample Request
```bash
curl -X GET http://localhost:5000/captains/logout \
  -H "Authorization: Bearer JWT_TOKEN_STRING"
```
