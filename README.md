# Bike Library API

A simple REST API built with Nest.js for managing a bike library. This API allows you to perform CRUD operations on bikes, including fetching, adding, updating, and deleting bikes. The project uses SQLite for data storage and integrates with Swagger for API documentation.

## Features

- **GET /bikes**: Fetch all bikes in the library.
- **POST /bikes**: Add a new bike to the library.
- **PUT /bikes/{id}**: Update an existing bike's details.
- **DELETE /bikes/{id}**: Remove a bike from the library.
- **Data Model**:
  - `id`: UUID (auto-generated)
  - `make`: String (e.g., "Royal Enfield")
  - `model`: String (e.g., "Classic 350")
  - `year`: Number (e.g., 2021)
  - `type`: String (e.g., "Cruiser", "Sport", etc.)

## Prerequisites

Make sure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (version 16.14 or later)
- [Nest.js CLI](https://docs.nestjs.com/cli/overview) (globally installed)
- [SQLite](https://www.sqlite.org/download.html) (optional, as it can be generated automatically by the API)

## Setup

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/abhishekdhar999/ridesense.git
   cd bike-library
Start the server by : npm run start:dev <br/>
Once the server is running, you can access the Swagger UI for API documentation at:http://localhost:3000/api
