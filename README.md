# LinkTree

## Descripcion

Clon de LinkTree con mis links mas importantes para un facil acceso realizado con Vue 3, Vite y CSS.

## SVG

Se utilizaron los svgs de la web <https://www.svgrepo.com/> que ofrece iconos svg de licencia abierta.

## Deploy

Para implementar en Github Pages, se debe realizar lo siguiente:

- Descargar el repositorio publico, o en todo caso realizar un fork y crear un repositorio aparte.
- Ejecutar npm install para instalar todas las librerias necesarias
- Ejecutar npm run build para construir los archivos estaticos
- Ejecutar los siguientes comandos para subir los archivos a la rama gh-pages:

    git add dist -f && git commit -m "Upload to gh-pages"
   
    git push origin \`git subtree split --prefix dist main\`:gh-pages --force
    
    git reset --hard HEAD^1

Nota: Por lo general hay otras formas de hacerlo, pero no terminaban por actualizar la rama y por lo tanto no funcionaron.

- Esperar a que se termine de implementar en Github y la pagina estatica estara activa.
