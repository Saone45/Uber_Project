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
