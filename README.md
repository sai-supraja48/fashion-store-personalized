# Fashion Store Personalized

MERN Stack E-Commerce Application

## Features

- Authentication
- Product Management
- Variants
- Recommendation Engine
- Cart & Checkout
- Orders
- Admin Dashboard
- Dashboard Analytics

## Tech Stack

Frontend:
- React
- Redux

Backend:
- Node.js
- Express.js
- MongoDB
- Mongoose

## Installation

Clone repository

```bash
git clone <repo-url>
```

Install backend packages

```bash
npm install
```

Start server

```bash
npm start
```

## API Routes

### Auth

POST /api/auth/register

POST /api/auth/login

### Products

GET /api/products

POST /api/products

### Orders

POST /api/orders/place

GET /api/orders/:userId

### Admin

GET /api/admin/dashboard

GET /api/admin/products

GET /api/admin/orders