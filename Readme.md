# Consumo de los endpoints mediante Curl

Consumo de un servicio ejecutandose localmente en el puerto 5000 `http://localhost:5000/` el cual contiene todos los end-points para realizar un CRUD(GET,POST,PUT,DELETE) mediante [Curl](https://curl.se/).

## Petición GET
`curl http://localhost:5000/`

## Petición POST
`curl -X POST http://localhost:5000/`

## Petición POST Enviando Json Data
`curl -H "Content-Type: application/json" -X POST -d "{\"name\":\"Spring Forever\",\"author\":\"pivotal\"}" http://localhost:5000/`

## Petición PUT
`curl -H "Content-Type: application/json" -X PUT -d "{\"name\":\"Spring Forever\",\"author\":\"pivotal\"}" http://localhost:5000`

## Petición DELETE
`curl -X DELETE http://localhost:5000/1`