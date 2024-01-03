# Note-Taking App API

This API is designed for a simple note-taking application, allowing users to create, retrieve, update, and delete text notes. The application uses Node.js, Express.js, and MongoDB.

## Table of Contents

- [MongoDB Setup](#mongodb-setup)
- [API Endpoints](#api-endpoints)
- [Data Validation](#data-validation)
- [Error Handling](#error-handling)
- [Basic Authentication (Optional)](#basic-authentication-optional)
- [Documentation](#documentation)
- [Testing](#testing)
- [Getting Started](#getting-started)
- [Contributing](#contributing)
- [License](#license)

## MongoDB Setup

Make sure you have MongoDB installed. Configure the MongoDB connection in the `config.js` file.

## API Endpoints

1. **Create Note:** `POST /notes`
2. **Retrieve All Notes:** `GET /notes`
3. **Retrieve Single Note by ID:** `GET /notes/:id`
4. **Update Note:** `PUT /notes/:id`
5. **Delete Note:** `DELETE /notes/:id`

## Data Validation

Ensure that title and content fields are provided and meet appropriate lengths.

## Error Handling

Comprehensive error handling for scenarios like invalid input, accessing or modifying non-existent notes, etc.

## Basic Authentication 

Protect the endpoints with basic authentication. Username: admin, Password: password1234.


## Testing

To test the API endpoints, use tools like Postman. 

## Getting Started

1. Clone the repository.
2. Install dependencies: `npm install`
3. Start the server: `npm run dev`

## Contributing

Feel free to contribute to this project. Create a pull request or open an issue.

## License

This project is licensed under the [MIT License](LICENSE).
