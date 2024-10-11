# Getting Started

This is a backend server created using the Expressjs framework. It uses Prisma, an ORM to connect to the database to allow for simplified database interactions. In order to connect migrate prisma to your database, make sure your PostgreSQL container is up and running.

### Installation
Run the following command to install dependecies:
```
npm install
```

### Environment variables
This project depends on some environment variables. If you are running this project locally, create a `.env` file in the root of the server directory.

Here are the required env variables:
```
PORT=
DATABASE_URL=
POSTGRES_PASSWORD=
```

### Generate your Prisma Client
Run the following command to generate the Prisma Client which will include types based on your database schema:
```
npx prisma generate
```

Apply the Prisma migration against your database:
```
npx prisma migrate --name init
```

### Seed your database (One time process)
To set your database with some initial data, run the following command:
```
npm run seed
```