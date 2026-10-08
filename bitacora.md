# P0
- El navegador.
- El computador que recibe la solicitud.
- Solicitud y recibo respuesta.

# P1
- ¿Que respuesta vas a ver en cada una?
- Lo mismo que antes
- ¿Por qué?
- Porque no hemos creado un sistema más complejo de respuesta.

# P2
- ¿Cuántas líneas "Llegó una petición" van a aparecer en la
terminal?
- Una por recarga.

# P3 
- ¿Qué responde el servidor si pides /actividades/ (con slash al final)? ¿Y /ACTIVIDADES?
- ERROR 404, porque el codigo no contiene esas entradas, solo /actividades

# REFLEXION 
- Escribe tres cosas que te parecieron tediosas o frágiles al hacer el servidor a mano. Las vas a
comparar en el siguiente momento.
- Iniciar el npm
- Iniciar el git (todo)
- Conectar con la cuenta de github

# M2

# P4
- No has programado ninguna ruta para /no-existe. ¿Qué crees que responde Express si la pides?
Ábrela en el navegador con las herramientas de desarrollador abiertas (F12 → pestaña
Red/Network) y mira el código de estado.
- Creemos que saldra error 404, porque todavia no existe una respuesta para esa ruta especifica.

# REFLEXION 
- Vuelve a tus tres cosas tediosas del Momento 1. ¿Cuáles resolvió Express? ¿Alguna sigue igual?
- Ya todo es mejor, porque se hacerlo bien.

# M3

# P5
- Comenta la línea next(); y pide / en el navegador. ¿Qué ves en el navegador? ¿Qué ves en la
terminal? Cuando termines, vuelve a activar next();.
- Se ve que funciona, aparece el json.

# M4 

# P6
- Pides GET /actividades/1. La actividad con id 1 sí existe. ¿Qué código de estado y qué body vas a
recibir? Pista para cuando ejecutes: mira lo que imprime console.log('params:', req.params). ¿El 1
aparece con comillas o sin comillas?

- 'Rafting en el rio fonce', tipo: 'agua', precio 60000

# P7
- En la versión corregida, borra la palabra return que está antes de res.status(404) y pide
/actividades/99. ¿Qué recibe el cliente? ¿Qué aparece en la terminal? Después vuelve a poner el
return.
- Recibe igual un error la terminal imprime normal lo del next.

# P8
- Predice el resultado de estas tres peticiones: ?tipo=agua, ?tipo=AGUA y ?tipo=fuego. Para la
última: ¿debería responder 404 o 200 con una lista vacía? Defiende tu respuesta.

- La primera arroja los obetos con el tipo 'agua', la segunda y la tercera arrojn un array vacío 
porque AGUA no es un resultado existente, sino solo "agua", y como tampoco existe fuego, por eso ocurre. Arroja 200 porque
aun no tenemos el código que detecte lo que no existe para que arroje 400.





