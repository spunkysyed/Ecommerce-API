# Ecommerce Platform API
To design the APIs for managing product inventory in an ecommerce platform using Node.js and MongoDB, let's structure the project with a scalable folder structure and implement the required APIs. Here's a brief description of how we can organize the project:

## Setup

1. Clone the repository.
   ```bash
   git clone https://github.com/spunkysyed/Ecommerce-API.git

2. Install dependencies:
   ```bash
    npm install

3. Start the server:
   ```bash
   nodemon .\index.js

4. Open Postman: "Write the api endpoints to create, get, delete, update products

5. Open the application:
   ```bash
   http://localhost:3000

## API Endpoints

- **Create Product**: [POST] `/api/products/create`
  - Request Body:
    ```json
    {
        "name": "laptop",
        "quantity": 10
    }
    ```
  - Response:
    ```json
    {
        "data": {
            "product": {
                "name": "laptop",
                "quantity": 10
            }
        }
    }
    ```

- **List Products**: [GET] `/api/products`
  - Response:
    ```json
    {
        "data": {
            "products": [
                {
                    "id": 1,
                    "name": "laptop",
                    "quantity": 10
                },
                {
                    "id": 2,
                    "name": "camera",
                    "quantity": 5
                },
                {
                    "id": 3,
                    "name": "smartwatch",
                    "quantity": 8
                }
            ]
        }
    }
    ```

- **Delete Product**: [DELETE] `/api/products/:id`
  - Response:
    ```json
    {
        "data": {
            "message": "Product deleted"
        }
    }
    ```

- **Update Quantity**: [POST] `/api/products/:id/update_quantity/?number=10`
  - Response:
    ```json
    {
        "data": {
            "product": {
                "id": 1,
                "name": "laptop",
                "quantity": 20
            }
        },
        "message": "Updated successfully"
    }
    ```

## Folder Structure:
```bash
EcommerceAPI/
├── config/              # Configuration files
│   └── mongoose.js      # Database connection configuration using Mongoose
│    
├── controllers/         # Controller logic
│   └── product-controller.js # Controller handling product logic
│
├── models/              # Database models
│   ├── counter.js       # Schema for Counter model
│   └── product.js       # Schema for product model
│
├── routes/              # Route definitions
│   └── product.js       # Routes for products
|
├──app.js                # Entry point of the application
|
├──package-lock.json     # Lock file for npm package versions
|
├──package.json          # npm package configuration
|
└──README.md             # Project documentation