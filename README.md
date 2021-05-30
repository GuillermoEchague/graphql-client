# Cliente Proyecto GraphQL
Desarrollo del cliente del proyecto de GraphQL - Escalab

## Dependencias del proyecto

```bash
# Apollo/client
yarn add @apollo/client@3.0.0-beta.43
# Apollo/react-hooks
yarn add @apollo/react-hooks@3.1.4
# Apollo-boost
yarn add apollo-boost@0.4.7
# Graphql
yarn add graphql@15.0.0
```

## Dependencias en producción del proyecto (Code Splitting)
```bash
yarn add @babel/core@7.12.17 -D
yarn add @babel/preset-env@7.12.17 -D
yarn add @babel/preset-react@7.12.13 -D
yarn add babel-loader@8.2.2 -D
yarn add @svgr/webpack@5.5.0 -D
yarn add copy-webpack-plugin@7.0.0 -D
yarn add core-js@3.9.0 -D
yarn add css-loader@5.0.2 -D
yarn add favicons-webpack-plugin@5.0.1 -D
yarn add file-loader@6.2.0 -D
yarn add html-webpack-plugin@5.2.0 -D
yarn add image-webpack-loader@7.0.1 -D
yarn add prettier@1.19.1 -D
yarn add regenerator-runtime@0.13.7 -D
yarn add sass-loader@11.0.1 -D
yarn add style-loader@2.0.0 -D
yarn add webpack@5.23.0 -D
yarn add webpack-cli@4.5.0 -D
yarn add webpack-dev-server@3.11.2 -D
```

## Proyecto en producción en Vercel

```bash
# Instalar CLI de vercel en forma Global (Una sola vez)
npm i -g vercel
# Configuraciones para el deploy
vercel
# Proyecto a Producción
vercel --prod
# Inspect

# Production 

```

## Ejecución de proyecto
```bash
# Modo Development
yarn start
# Modo Production
yarn build
# Servidor de prueba webpack
yarn run dev-server
```


## Codigos GIT
```bash
# Revisar logs
git log --pretty=oneline
#Cargar cambios y versiones
git branch -M main
git push -u origin main
# Generar Tags
           (Version) 
git tag -a V1.0.0 -m "Mensaje"
git push --tags
#branches (Ramas)
git add .
git checkout -b room
git commit -m "Agregado de dependencias"
git push origin room
#Unir Ramas a main
git checkout main
git merge <Nombre Rama> -m "Mensaje rama"
```

## Demostración del proyecto

### Error
![](img/error.png)
