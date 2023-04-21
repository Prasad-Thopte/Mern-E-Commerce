# clothshopp

Online Clothing Store using the MERN stack

## Features:

- Product reviews and ratings
- Product pagination
- Product search feature
- User profile with orders
- Full featured shopping cart
- Admin product management
- Admin user management
- Admin Order details page
- Mark orders as delivered option
- Checkout process (shipping, payment method, etc)
- PayPal / credit card integration
- Database  (products & users)

## Technology Stack:

- Node js
- Express Js
- MongoDB
- JWT
- React
- React Bootstrap
- Redux
- React Paypal Button V2

## Usage

### Env Variables

Create a .env file in then root and add the following

```
NODE_ENV = development
PORT = 5000
MONGO_URI = your mongodb uri
JWT_SECRET = 'abc123'
PAYPAL_CLIENT_ID = your paypal client id
```

## Install Dependencies

```
Root Directory
npm install

cd frontend
npm install

cd backend
npm install
 
In some cases you have to update your dependencies
in that case
cd  backend 
npm update --force

cd frontend
npm update --force

```

### Run

```
# Run frontend (:3000) & backend (:5000)
npm run dev
this command will run server and client side conccurently

# Run backend only
npm run server
```






# Import data
to import data 
use mongoCompass
create a database or select database
create collection 
orders
products
users
use add data and select JSON file From /Data folder

# To Place an Order using Paypal

use demo paypal account or 
use demo credit card details as follows
Generated Credit Card Details

Card Type: Visa
Card Number: 4032032471691573
Expiration Date: 03/2026
CVV: 809

# Admin Access
to access admin account
goto login page
enter following details
email : admin@sample.com
password: admin123


# create user account
you can create user account by just entering few details on register page
to place an order
