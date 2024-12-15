FROM openjdk:23-jdk-slim

WORKDIR /app

# COPY target/backend-*.jar app.jar
COPY mvnw .
COPY .mvn .mvn
COPY pom.xml .

RUN ./mvnw dependency:resolve

COPY src ./src

EXPOSE 8080

# ENTRYPOINT ["java", "-jar", "app.jar"]
# spring-boot:run is for development only.
CMD ["./mvnw", "spring-boot:run"]