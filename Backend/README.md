# Backend API Documentation

## `/users/register` Endpoint

### Description

Registers a new user by accepting their first name, last name, email, and password.

### HTTP Method

`POST`

### Request Body

- `fullname` (object):
    - `fullname.firstname` (string, required): First name of the user (minimum 3 characters).
    - `fullname.lastname` (string, optional): Last name of the user (minimum 3 characters).
- `email` (string, required): Valid email address.
- `password` (string, required): Password (minimum 6 characters).

### Example Response

- `user` (object):
  - `fullname` (object):
     - `fullname.firstname` (string): First name of the user (minimum 3 characters).
     - `fullname.lastname` (string): Last name of the user (minimum 3 characters).
  - `email` (string): Valid email address.
  - `password` (string): Password (minimum 6 characters).
- `token` (String): JWT Token

## `/users/login` Endpoint

### Description

Authenticates a user using their email and password.

### HTTP Method

`POST`

### Request Body

- `email` (string, required): Valid email address.
- `password` (string, required): Password (minimum 6 characters).

### Example Response

- `user` (object):
  - `fullname` (object):
     - `fullname.firstname` (string): First name of the user (minimum 3 characters).
     - `fullname.lastname` (string): Last name of the user (minimum 3 characters).
  - `email` (string): Valid email address.
  - `password` (string): Password (minimum 6 characters).
- `token` (String): JWT Token

## `/users/profile` Endpoint

### Description

Retrieves the profile information of the authenticated user.

### HTTP Method

`GET`

### Headers

- `Authorization`: Bearer token obtained upon login.

### Example Response

- `user` (object):
  - `fullname` (object):
     - `fullname.firstname` (string): First name of the user.
     - `fullname.lastname` (string): Last name of the user.
  - `email` (string): Valid email address.

## `/users/logout` Endpoint

### Description

Logs out the authenticated user by invalidating their token.

### HTTP Method

`GET`

### Headers

- `Authorization`: Bearer token obtained upon login.

### Example Response

- `message` (string): Confirmation message, e.g., "Logged Out".

## `/captains/register` Endpoint

### Description

Registers a new captain by accepting their first name, last name, email, password, and vehicle details.

### HTTP Method

`POST`

### Request Body

- `fullname` (object):
    - `firstname` (string, required): First name of the captain (minimum 3 characters).
    - `lastname` (string, optional): Last name of the captain.
- `email` (string, required): Valid email address.
- `password` (string, required): Password (minimum 6 characters).
- `vehicle` (object):
    - `color` (string, required): Color of the vehicle (minimum 3 characters).
    - `plate` (string, required): License plate of the vehicle (minimum 3 characters).
    - `capacity` (number, required): Capacity of the vehicle (minimum 1).
    - `vehicleType` (string, required): Type of the vehicle (must be one of 'car', 'auto', 'motorcycle').

### Example Response

- `captain` (object):
  - `fullname` (object):
     - `firstname` (string): First name of the captain.
     - `lastname` (string): Last name of the captain.
  - `email` (string): Valid email address.
  - `password` (string, required): Password (minimum 6 characters).
  - `vehicle` (object):
    - `color` (string): Color of the vehicle.
    - `plate` (string): License plate of the vehicle.
    - `capacity` (number): Capacity of the vehicle.
    - `vehicleType` (string): Type of the vehicle.
- `token` (string): JWT Token

## `/captains/login` Endpoint

### Description

Authenticates a captain using their email and password.

### HTTP Method

`POST`

### Request Body

- `email` (string, required): Valid email address.
- `password` (string, required): Password (minimum 6 characters).

### Example Response

- `captain` (object):
  - `fullname` (object):
     - `firstname` (string): First name of the captain.
     - `lastname` (string): Last name of the captain.
  - `email` (string): Valid email address.
  - `vehicle` (object):
    - `color` (string): Color of the vehicle.
    - `plate` (string): License plate of the vehicle.
    - `capacity` (number): Capacity of the vehicle.
    - `vehicleType` (string): Type of the vehicle.
- `token` (string): JWT Token

## `/captains/profile` Endpoint

### Description

Retrieves the profile information of the authenticated captain.

### HTTP Method

`GET`

### Headers

- `Authorization`: Bearer token obtained upon login.

### Example Response

- `captain` (object):
  - `fullname` (object):
     - `firstname` (string): First name of the captain.
     - `lastname` (string): Last name of the captain.
  - `email` (string): Valid email address.
  - `vehicle` (object):
    - `color` (string): Color of the vehicle.
    - `plate` (string): License plate of the vehicle.
    - `capacity` (number): Capacity of the vehicle.
    - `vehicleType` (string): Type of the vehicle.

## `/captains/logout` Endpoint

### Description

Logs out the authenticated captain by invalidating their token.

### HTTP Method

`GET`

### Headers

- `Authorization`: Bearer token obtained upon login.

### Example Response

- `message` (string): Confirmation message, e.g., "Logout successfully".
