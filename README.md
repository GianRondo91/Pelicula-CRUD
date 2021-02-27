The Film Project
===
![downloads](https://img.shields.io/github/downloads/atom/atom/total.svg) ![build](https://img.shields.io/appveyor/ci/:user/:repo.svg) ![chat](https://img.shields.io/discord/:serverId.svg)

## Tabla de contenido
- [**Introducción**](#item1)
- [**Herramientas**](#item2)
- [**Funcionalidades**](#item2)
- [**Ejecución**](#item3)

## <a name="item1"></a>Introducción

Mi primer proyecto creando mi propia API de peliculas siguiendo los pasos **CRUD**, en el cual cuento con los datos de mis peliculas cargadas, usuarios y pedidos que realizo el usuario.

## <a name="item2"></a>Herramientas 🚀
<img src="https://user-images.githubusercontent.com/56218293/109397367-7bf85800-7936-11eb-88a8-7a384392b1fc.png" width="40"><img src="https://user-images.githubusercontent.com/56218293/109397410-b4983180-7936-11eb-8c5a-6ff5908a13bb.png" width="42"><img src="https://user-images.githubusercontent.com/56218293/109397386-9b8f8080-7936-11eb-8123-391fb81a87c1.png" width="40"><img src="https://user-images.githubusercontent.com/56218293/109397340-684cf180-7936-11eb-9a52-03eef880dfba.png" width="40"><img src="https://user-images.githubusercontent.com/56218293/109397397-a5b17f00-7936-11eb-9322-d4b2adb0c202.png" width="50">

## <a name="item4"></a>Ejecución 🛠️

Para istalar las librerias que utilizo en el proyecto, solo tiene que lanzar:
```bash
    npm i
```
Si no, para:

Iniciar un proyecto con nodejs
```bash
    npm init
```

Para lanzar la importación de la **Base de Datos**
```bash
    npm run import
```

Libreria para ayudarte a codificar contraseñas
```bash
    npm i bcryptjs
```

Lanzar mongo
```bash
    docker run --rm -p 27017:27017 mongo
```
Luego lanzar app.js
```bash
    node app.js
```
ó
```bash
    npm start
```


## <a name="item3"></a>Funcionalidades

Para poder probarlo, necesitas usar postman.

- Si la creación (**POST**) es exitosa, devueve un status 200 y en el body el ID. 
- Si da error, devulve un status 500 y en el body:
```js
    message: 'Server Error: ' + error 
```
<img src="https://user-images.githubusercontent.com/56218293/109397426-c679d480-7936-11eb-89bb-11720cb54772.png">

- Si la modificación (**PUT**) es exitosa, devueve un status 200 y en el body me devuelve el json del objeto actualizado. 
- Si da error, devulve un status 500 y en el body:
```js
    message: 'Server Error: ' + error 
```
<img src="https://user-images.githubusercontent.com/56218293/109397432-cda0e280-7936-11eb-8fa7-9b2bfee9d19b.png">

- Si la lectura (**GET**) es exitosa, devueve un status 200 y en el body me devuelve el json del objeto.
- Si no existe un objeto con el **ID** especificado, devolvera un status 404 (Not found).
- Si da error, devulve un status 500 y en el body:
```js
    message: 'Server Error: ' + error 
```
<img src="https://user-images.githubusercontent.com/56218293/109397418-bd890300-7936-11eb-89b1-93c744ce35f8.png">

- Si la eliminación (**DELETE**) es exitosa, devueve un status 200. 
- Si da error, devulve un status 500 y en el body:
```js
    message: 'Server Error: ' + error 
```
<img src="https://user-images.githubusercontent.com/56218293/109397435-d4c7f080-7936-11eb-957b-fcdeacf949d5.png">


###### tags: `Templates` `Documentation`
