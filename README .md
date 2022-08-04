
# User Management Dashboard

It a simple 2 page application that facilitates CRUD features

Main Components of the projrct are 

-- React for frontend

-- Node for Backend

-- Postgres as Database


## API Reference

#### Get all items

```http
  GET /dashboard/allUser
  
```
Generic call to list down all users

```http
  POST /login
  
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `email` | `string` | **Required**. Registered Email |
| `password` | `string` | **Required**. Password relating to that |

#### Get item

```http
  POST /dashboard/addUser
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `username`      | `string` | **Required**. Username that will be added|
| `email`      | `string` | **Required**. Email that will be added|
| `password`      | `string` | **Required**. password that will be added|


```http
  DELETE /dashboard/remove
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `integer` | User of corresponding id will be removed|


```http
  UPDATE /dashboard/addUser
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `username`      | `string` | Username can be updated|
| `email`      | `string` | **Required**. Email cannot be updated|
| `password`      | `string` | password can be updated|



## Demo

Feel free to view and share feedback

[Video Reference of work flow](https://www.loom.com/share/201bbd22ba00483e8db0e7db9ffd4416)
## Roadmap

- Additional browser support

- Add more integrations


## Documentation

### FrontEnd:

The frontend is build using React.

While entering there is a logion screen if that is bypassed by user the access is bloced using state .

Post login comes Admin dashboard which list all the user

There there is feature of adding the user , deleting the user and updating user credentials except email .

### BackEnd:

It holds all the REST API for CRUD operation 

### Database:

It hold the user database 






## Features

- Admin Dashboard 
- Login Screen
- Add User Screen
- Edit User Screen
- CRUD operation
- Interactive Modal
- Indegineous cross site access blockage Features
- Authentication system using state
- Admin based Edit Delete operation
- Unique email identifier


## Authors

- [@Satwik](https://satwik-mohanty-portfolio.netlify.app/)


## Feedback

If you have any feedback, please reach out to us at [Satwik-Email](satwikmohanty@gmail.com)


## 🛠 Skills
Javascript, HTML, CSS , React , Node , Postgres


## Lessons Learned

What did you learn while building this project? What challenges did you face and how did you overcome them?

