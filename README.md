# Notas Backend NodeJs y TypeScript

## Primeros pasos
Lo primero es ejecuctar el init e iniciar el tsc
```
npm init -y
tsc --init
```

Luego, para configurar nuestro tsconfig vamos a descomentar outDir y le indicamos la carpeta de destino. Adicional a esto también añadiremos los sourceMap y el moduleResolution
```
"outDir": "./dist",
"sourceMap": true,
"moduleResolution": "node",
```

Ahora instalamos el tslint y TypeScript local en el proyecto.
```
npm i tslint --save-dev
npm i typescript --save-dev
```

Ya que tenemos instalado tslint y TS, vamos a inicializar nuestro tslint
```
./node_modules/.bin/tslint --init
```

Lo único que cambiaremos en el tslint.json es una rule
```
"rules": {
  "no-console": false
},

```
También se recomienda crear algunos comandos para agilizar el desarrollo
```
"scripts": {
  "start": "node dist/app.js",
  "start:dev": "nodemon dist/app.js"
},
```


