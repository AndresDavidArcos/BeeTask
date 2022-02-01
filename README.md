# BeeTask 🐝
Aplicación para mejorar el rendimiento académico por medio de la organización.

# Comenzar 🍯
1. Clonar el repositorio
```
git clone https://github.com/Ingrid-E/BeeTask.git
```
2. Instalar las dependencias de la carpeta client
```
cd client
npm install
```
3. Instalar las dependencias de la carpeta api
```
cd api
npm install
```
4. Empezar a correr el proyecto, en ambas carpetas realizar
```
npm start
```

# Nomenclatura

## **PascalCase**
- Nombre de archivos
- Componentes (El nombre del componente es el mismo al del archivo)
## **camelCase**
- Metodos

## Ramas
[Numero del issue]-[Descripción corta]

# Organización
En client/src se tienen las siguientes carpetas:
- Assets  => Para guardar los siguientes datos
    - Audios
    - Images
    - Videos
- Components => Guardar componentes para utilizar
- Hooks => Guardar las llamadas al backend para reutilizar en todo el proyecto
- Pages => Guardar las paginas con la siguiente estructura:
    - Carpeta con el nombre de la pagina
        - CSS => Individual
        - nombre.js o .tsx

KIOasjkdg