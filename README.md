# petStore

## Parte 1

### Crear 10 mascotas: 5 en estado available, 4 en estado pending y 1 en estado sold.

Para crear nuevas mascotas con sus correspondientes estados, debe cargarse la información en el archivo **pets.json** que podrán encontrar en la carpeta **data**.
Sólo deberan ingresarse los nombres y estados de las mascotas siguiendo el siguiente formato:

    {"name": "_nombre_","status": "_estado_"}

Los estados que podrán ingresarse son: available, pending y sold.

### Obtener los detalles de la mascota en estado sold.


Para crear consultas de las mascotas en estado **sold** no se deben realizar cambios. En caso de querer consultar las mascotas registradas en otros estados, se debe modificar el estado en el archivo **petsStatus.json** y volver a realizar la consulta.

## Parte 2

### Listar mascotas disponibles y guardar 5 de ellas en una estructura de datos.

Para obtener las mascotas disponibles y guardarlas en una estructura no se deben realizar cambios.
En caso de precisar buscar mascotas en otro estado se debe modificar la variable **statusNeeded**,  y en caso de buscar guardar otra cantidad de elementos se debe modificar la cantidad indicada en  _const firstfive=availablePets.slice(0,5)_


### Crear una orden para cada una de las 5 mascotas obtenidas en el punto anterior

Para crear las ordenes no se deben realizar modificaciones en el código. En caso de necesitar crear órdenes para mascotas en otro estado se debe modificar la variable **statusNeeded**,  y en caso de buscar crearlas para otra cantidad de mascotas se debe modificar la cantidad indicada en  _const firstfive=availablePets.slice(0,5)_