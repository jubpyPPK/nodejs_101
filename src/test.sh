#!/bin/sh
curl -kX POST http://localhost:8080/user

curl -kX PUT http://localhost:8080/user/1234

curl -kX DELETE http://localhost:8080/user/1234

curl -kX GET http://localhost:8080/user/1234

curl -kX GET http://localhost:8080/users