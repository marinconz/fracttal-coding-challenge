# Fracttal Coding Challenge FRONTEND
## Bienvenidos a mi implementación! :smile:
Hola! Esta es una guía de cómo correr este proyecto y unos cuantos detalles que son importantes para poder entender la implementación.
Esta es la prueba técnica para Fracttal, y está basada en las instrucciones que me fueron brindadas en el pdf.
Par esta implementación, el frontend se realizó usando ReactJS.

## Precondiciones
Este proyecto requiere la versión de node `v14.18.2`

## Cómo correr el proyecto :runner:
Para poder correr el frontend y que todo funcione desde localhost:3000 se requieren los siguientes pasos: 
1. Clonar o descargar el repositorio
2. Hacer `cd` al directorio /client
3. Correr el comando `npm install` en la terminal para instalar todas las dependencias necesarias
4. Correr `npm start`, esto abrirá el navegador y ya se podrá navegar por la aplicación

## Detalles importantes
Las herramientas que fueron utilizadas para este proyecto fueron:
- `ReactJS` y `material design (mui)` para el frontend y toda la parte de diseño
- `redux`, `react-redux` y `redux-thunk` para toda la lógica adicional para poder traer la información desde el backend
- `Winston` y `winston-mongodb` para crear los logs y guardarlos en un schema de la base de datos, para luego consumirlos desde la aplicación web
- Para hacer UPDATE en cada usuario, hacer click en ... en la esquina superior derecha de cada usuario