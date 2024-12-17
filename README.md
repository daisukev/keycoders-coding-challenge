# Key Coders

## Nakupuna Code Quest Challenge

## Installation

### For Development

In project root folder:

```sh
docker compose build
docker compose up
```


Environment files need to be created

```sh
# ./backend/.env
SPRING_DATASOURCE_URL="DB Connection URL String"
SPRING_DATASOURCE_USERNAME="DB username"
SPRING_DATASOURCE_PASSWORD="DB password"
```

TODO: Create environmental variables for the CORS allow so it can be done inside configuration instead of manually in Java. 

You may also update values in the `Application.properties` file location in `./backend/src/main/resources/application.properties`

Currently the application name, the jwt secret, and jwt expiration.

TODO: Add all configurable variables here and then pull them in from the .env file.

```sh
spring.application.name=backend
# spring.config.import=file:../.env[.properties],file:.env[.properties]
jwt.secret="myverySecretKeyHereThatisDefinitelySecure12248018201230"
jwt.expiration=86400000
```

### Production

CORS configuration will need to be updated.

## Entity Relationship Diagram

![Entity Relationship Diagram](readme-assets/ERD.png)