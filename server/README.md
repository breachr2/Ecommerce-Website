# Getting Started

This is a backend server created using the Expressjs framework. It uses Prisma, an ORM to connect to the database to allow for simplified database interactions. In order to connect migrate prisma to your database, make sure your PostgreSQL container is up and running.

# Prerequisites
Ensure that you have the following tools installed:
* NPM (node package manager)
* Node
* Docker

### Installation
Run the following command to install all dependencies:
```
npm install
```

### Environment variables
This project depends on some environment variables. If you are running this project locally, create a `.env` file in the root of the server directory.

Here are the required env variables:
```
PORT=<your_port_number>
DATABASE_URL=postgresql://<username>:<password>@<host>:<port>/<database>
POSTGRES_PASSWORD=<your_postgres_password>
```

### Generate your Prisma Client
Run the following command to generate the Prisma Client, which will include types based on your database schema. This command is a one-time process, only run it again if the prisma schema schema ever changes.
```
npx prisma generate
```

### Apply the Prisma migration against your database
This command is a one-time process, only run it again if the prisma schema ever changes.
```
npx prisma migrate --name init
```

### Seed your database (One-time process)
To set your database with some initial data, run the following command:
```
npm run seed
```

### Starting a development server
To start up a development server, run the following command:
```
npm run dev
```