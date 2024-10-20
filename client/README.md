# If you are using Docker
The entire application can be run using docker-compose. Navigate to the root directory of the project and run the following command:
```
docker-compose up -d
```
To test that the frontend is up and runnnig with docker, navigate to localhost:3000 and the dashboard should be viewable.

Run the command to stop the application:
```
docker-compose down
```

# Getting Started without Docker

The frontend of this application is developed using Nextjs. To get a local server up and running follow these example steps.

# Prerequisites
Ensure that you have the following tools installed:
* NPM (node package manager)
* Node

### Environment variables
This project depends on some environment variables. If you are running this project locally, create a `.env.local` file in the root of the client directory.

Here are the required env variables:
```
NEXT_PUBLIC_API_BASE_URL=<your_base_url>
```

### Installation

1. CD into the client directory, if you haven't done so already

```
cd client
```

2. Install the project dependencies

```
npm install
```

3. Start up the server

```
npm run dev
```

4. To visit the app navigate to
   `localhost:3000`
