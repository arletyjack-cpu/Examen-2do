## Bitacora - Arlet
1. **¿Por qué usar un id único en lugar de identificar al personaje por su nombre?** Para evitar casos de error, en caso de que dos personajes tengan el mismo nombre **¿Qué pasaría si dos
personajes se llaman igual?** Se dificultaría la identicación a partir del nombre, y en su lugar se dependería de un identificador unico.

2. **¿Qué ocurre si alguien modifica manualmente localStorage desde la consola y deja un JSON inválido? La
aplicación no debe romperse.** Al dejar un JSON inválido, la aplicación no podría generar un arreglo, y causaría errores, para evitar un fallo en la ejecución, dichos errores deben ser atrapados mediante try-catch, y volver a generar o eliminar el JSON inválido.

3. **¿Qué pasa si la URL de la imagen no existe? Propón un comportamiento de respaldo (por ejemplo,
mostrar iniciales).** El contenido no se muestra de manera apropiada, y puede afectar otro contenido cercano, o hijo. Lo mejor sería mostrar una imagen de respaldo, para evitar la deformación del contenido, sin embargo mostrar el nombre del archivo puede ser una opción válida, para mantener la claridad de lo que se intentaba mostrar.

4. **¿Se debe permitir guardar un personaje con nombre solo de espacios en blanco?** La aplicación no se rompera, sin embargo causaría errores en el formato de la página **¿Y uno duplicado?** Este caso es totalmente válido, ya que todos de los personajes son accesados mediante su identificador único. 

5. **Tu aplicación vive en GitHub Pages. Si un compañero abre tu URL, ¿verá tus personajes? Explica por qué
y qué implica para el diseño de la aplicación.** Cualquiera es capaz de ver lo que está disponible mediante el repositorio, verá los personajes por defecto, más no será capaz de acceder mi localStorage, ya que existe en una base de datos local. 

6. **Propón una funcionalidad adicional (favoritos, ordenamiento por rol, exportar/importar JSON,
etiquetas) y justifica por qué tiene más valor que otras alternativas.** Añadí links a mis articulos en venta, mis redes de la plataforma, ya que planeo reusar partes de esta página para futuros proyectos de marketing. 