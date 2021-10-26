```yml
name: deploy-container

on:
  push:
    branches:
      - dev
    path:
      - 'packages/container/**'

defaults:
  run:
    working-direntory: packages/container

jobs:
    build:
        runs-on: ubuntu-latest
    steps:
        -   uses: actions/checkout@v2
        -   run: npm install
        -   run: npm run build

        -   uses: chrislennon/action-aws-cli@v1.1
        -   run: aws s3 sync dist s3://${{ secrets.AWS_S3_BUCKET_NAME }}/container/latest
            env:
                AWS_ACCESS_KEY_ID: ${{ secrets.AWS_ACCESS_KEY_ID }}
                AWS_SECRETS_ACCESS_KEY: ${{ secrets.AWS_SECRETS_ACCESS_KEY }}
```
- name: Nombre del workflow
- on: instruccion para hacer algo al escuchar un evento
- push: evento de interes. Cuando se escuche el evento push ( cuando sube algun cambio )
- branches: rama de interes en la que se escuchara el evento push
- path: el directorio o archivos de interes. Con esto especificamos que queremos que se escuche el evento push cuando ocurra en la rama `dev` en cualquiera de los archivo 'packages/container/**'
- defaults: configuracion por defecto
- run: especificamos que requermos ejecutar acciones
- working-diirectory: especificamos el directorio de trabajo por defecto al momento de ejecutar algun codigo o accion
- jobs: comando para especificar las acciones a ejecutar
- build: accion de construccion de archivos para produccion
- runs-on: maquina virtual en la que ocurrira todo el proceso build
- steps: pasos o comandos a ejecutar en la maquina virtual
- uses: action o instruccion a ejecutar
- actions/checkout@v2: carga el codigo a la maquina virtual
- chrislennon/action-aws-cli@v1.1: permite tener accedo a CLI de aws
- aws s3 sync dist: comando de aws para sincronizar los archivos que se encuentren dentro de la carpeta `dist`
- env: definir las variables de entorno para aws


