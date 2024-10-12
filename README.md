A three-tier architecture application using Nextjs, Expressjs, and a PostgreSQL database pulled from a docker image.

### Environment variables

This project depends on some environment variables. If you are running this project locally, create a `.env` file in the root directory.

Here are the required env variables:
```
POSTGRES_PASSWORD=postgresql://<username>:<password>@<host>:<port>/<database>
```

To start up the PostgreSQL database, make sure to have Docker installed. If you are on Mac or Windows, you will need to install Docker Desktop.

### Installations for Mac and Windows:

- [Docker Desktop for Mac](https://docs.docker.com/desktop/install/windows-install/)
- [Docker Desktop for Windows](https://docs.docker.com/desktop/install/mac-install/)

To start up the PostgreSQL container, make sure Docker Desktop is up and running.

Run the command:

```
docker-compose up -d
```

To stop the PostgreSQL container, run the command:

```
docker-compose down
```