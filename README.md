# Tabla de Contenidos

[TOCM]

[TOC]

## Introducción

Se decidió realizar un menú digital para un restaurante llamado alma tierra, ya que con el menú que contaban no era muy intuitivo y mas aparte no todos los clientes podian acceder y visualizarlo de forma correcta ya que no todos contaban con una cuenta de gmail.

## Base de datos
Para la base de datos se uso [Firebase](https://firebase.google.com "Firebase") de Google que es una plataforma la cual nos otorga el servicio de almacenamiento en la nube, al pertenecer a Google podemos tener la tranquilidad que los datos están seguros. Cuenta con una cuota diaria gratuita lo que nos permite correr pruebas de una manera sencilla sin hacer gasto. 

Entre los servicios que ofrece esta plataforma cuenta con Firestore Database, en este se crearon todas las colecciones necesarias para la administración de los datos. Las colecciones creadas son** cymbals**,** menus** e **images**.

![Menu](https://imagizer.imageshack.com/v2/1280x1024q90/922/TdKK0m.png "Menu")
>**Cymbals** contiene los registros de los Productos, cada registro está conformado por:

>- **menu:** Dato utilizado para filtrar a qué menú pertenece entre los diferentes que hay.
**categorie: ** Igualmente es utilizado para filtrar a qué categoria del menú pertenece.
- **name:** Nombre del platillo/producto.
- **description:** Descripción del platillo/producto.
- **price: ** Precio del producto.
- **status:** Dato utlizado para filtrar si el platillo se encuentra activo,  dependiendo su valor se mostrará o no en el Menú.
El ID de cada documento fue formado con el siguiente orden


    menu: 'Comida'
    categorie: 'Para Compartir'
    lastId: 'SOME0000'
    //obtenemos las primeras 3 letras de menu 
    //obtenemos la primera letra de cada palabra de categorie
    //obtenemos el valor numerico del ultimo ID (lastId) y agregamos 1 
    //todo lo convertimos a mayusculas
    newId: 'COM' + 'PC' + 0001

![Menu](https://imagizer.imageshack.com/v2/1280x1024q90/924/4pAF9r.png "Menu")
>- **Menu** trae todos los datos de las categorias de los platillos del menu y cada registro contiene:
- **banner:** Contiene la imagen del header de cada seccion del menu.
- **categorie: ** Dato que contiene las subcategorias de cada menu.
- **mainImage:** Contiene la imagen representativa de cada menu para acceder a los platillos.
- **status:**  Dato utlizado para filtrar si alguna categoria del menu se encuentra activo. En caso de no encontrarse activo este desaparecera del menu.
- **title:** Nombre que se le otorga a cada categoria.

![Menu](https://imagizer.imageshack.com/v2/1280x1024q90/923/lzkcU0.png "Menu")
>- **Images** guarda la informacion de las imagenes que se usaron en el Menú, cada registro contiene:
- **alt**: Nombre de la imagen
- **section**: Dato utilizado para saber a qué sección del menú pertenece, ya que hay 3 secciones: **banner**, **menu**, **banner menu**. Si el valor es *banner*, los siguientes campos quedarian vacios. 
- **menu:** Dato utilizado para filtrar a qué menú pertenece entre los diferentes que hay. Puede estar vacío.
- **categorie: ** Igualmente es utilizado para filtrar a qué categoria del menú pertenece. Puede estar vacío.
- **src**: Hipervinculo a la imagen. 

![Menu](https://imagizer.imageshack.com/v2/1280x1024q90/922/r7pnRI.png "Menu")
>**Otro servicio que se uso de Firebase es Storage donde se almacenaron las imagenes y de donde obtenemos el hipervinculo a estas. **

## Instalacion

```bash
git clone https://github.com/itsaimejia/almatierra-menu.git
```

## Dependencias
```bash
npm install firebase
npm install @tabler/icons
npm install @mantine/core
npm install @mantine/carousel
```

## TypeScript
El lenguaje que se utilizó para este proyecto fue TypeScript ya que es un lenguaje intuitivo, facil de leer y de redactar, es mejor que javascript en terminos de que TypeScript es un lenguaje fuertemente tipado, esto quiere decir que tenemos que indicar que tipo que tipo de dato estamos asignando a una variable y si ocurre algun error de sintaxis sabremos en donde estaria gracias a que el compilador detecta estos errores y es ideal para proyectos complejos ya que puede llegar a ser mas escalable.

## Desarrollo

![Menu](https://imagizer.imageshack.com/v2/1280x1024q90/924/nPegl2.png "Menu")

>**La pantalla principal muestra las imagenes de los eventos en forma de carousel, ademas de los distintos menus con los que cuenta el restaurante**

![Menu](https://imagizer.imageshack.com/v2/1280x1024q90/924/GM5OxE.png "Menu")

>**Una vez seleccionado algun menu pasaremos a la segunda pantalla que son todos los platillos que se encuentran disponible, en caso de no haber algun platillo disponible este se pone de forma inactiva y desapareceria del menu.**

![Menu](https://imagizer.imageshack.com/v2/1280x1024q90/924/ottMvP.png "Menu")
>**En la tercera pantalla esta el menu de desayunos que cuenta con las subcategorias para despertar que son cosas ligeras como pan tostado, plato con frutas, en la seccion compartir tenemos el borrego tatemado, tambien hay omelets a la mexicana, de camaron y hongo, unos chilaquiles rojos, ademas de unos waffles y pan frances.**

![Menu](https://imagizer.imageshack.com/v2/1280x1024q90/923/cZyp8G.png "Menu")
>**Pasando a la cuarta pantalla tenemos las bebidas sin alcohol como una limonada natural o mineral.**

![Menu](https://imagizer.imageshack.com/v2/1280x1024q90/924/uiFMU7.png "Menu")
>**En la quinta pantalla tenemos la seccion de cafeteria que cuentan con espresso, americano y latte, ademas de una variedad de tes como te negro, verde y de manzanilla.**

![Menu](https://imagizer.imageshack.com/v2/1280x1024q90/923/MTsAAC.png "Menu")
>**En la sexta pantalla se encuentra la mixologia como el carajillo y el mictlan, ademas hay cocteleria clasica como el abe, aperol y Blody Mary. Y para los mas intensos en la tercer  subcategoria se encuentran los licores fuertes como el 1800 añejo, don julio 70 y Herradura Añejo.**

![Menu](https://imagizer.imageshack.com/v2/1280x1024q90/922/iO3NDa.png "Menu")
>** Y pasando a la septima pantalla y ultima, tenemos la seccion de los vinos y pasando a las subcategorias tenemos los Premium que son Santo Tomas duetto y el vino tinto unico santo tomas. Tambien hay vinos de reserva como el ojo azul y  EMV Nietos, tambien hay vinos de crianza que son vinos que han pasado al menos 24 meses de envejecimiento, de estos estan el ojo azul malbec cabernet, Ojo azul merlot y EMV Cabernet Sauvignon, tenemos la subcategoria de vinos blancos los cuales estan Santo Tomas Sauvignon Blanc y Chardonay y en la ultima subcategoria tenemos los vinos rosados los cuales son Santo Tomas Rosado, Solar Fortun La Vina En Rosa y Vina Emiliana Bella Mia Espumoso.**

## Colaboradores

- ##### Itsai Zempoaltecatl Mejia [![Itsai](https://imagizer.imageshack.com/v2/1280x1024q90/924/0KjJQs.png)](https://github.com/itsaimejia)
- ##### Vicki Ornelas  [![Vicki](https://imagizer.imageshack.com/v2/100x75q90/923/bOThTs.png)](https://github.com/Vickiornelas27)
- ##### Victor Rivera Moreno [![Victor](https://imagizer.imageshack.com/v2/100x75q90/923/dW2yYz.png)](https://github.com/Victor-Martin-Rivera)
- ##### Angel Mora Silva [![Angel](https://imagizer.imageshack.com/v2/100x75q90/923/b0brgy.png)](https://github.com/itsaimejia)