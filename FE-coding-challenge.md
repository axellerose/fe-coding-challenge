# Prueba técnica Front-end Developer Innovamat

Asegúrate de leer bien **todo** el documento con atención y seguir los pasos indicados.

## Contexto

Se acerca el nuevo curso y en Innovamat queremos dar a nuestros alumnos la mejor solución para que puedan disponer de los recursos de la manera más fácil posible. Para ello hay que desarrollar una aplicación web dónde el alumno pueda navegar para encontrar los recursos según su categoría.

El equipo de producto nos ha compartido su documento de trabajo para poder realizar un MVP y así poder empezar con algunas clases al inicio de curso.

> [Enlace al documento](https://www.figma.com/file/9hNUxEKXAlXHMh3oKcSOEY/Junior-Frontend?node-id=0%3A1) \
> <sup><sup>*</sup>*Con sesión iniciada en Figma podrás ver los detalles y características de los elementos*</sup>

Nos han pedido desarrollemos unas características **mínimas e imprescindibles** para poder empezar y si tenemos tiempo extra quedarán encantados de ver alguna parte **opcional**.

## Requerimientos mínimos

Hay que desarrollar la **página inicial de la vista de escritorio** como muestra el documento, con la navegación en los elementos de menú mostrando los contenidos de cada sección. Para mostrar el contenido el equipo de Backend ya está trabajando en ello también y nos ha proporcionado una API para poder obtener los recursos.

#### API

La dirección que nos han facilitado es `https://api.mocklets.com/mock68016`

Para la petición de los recursos nos han dado estos parámetros.

- `/talleres`
- `/rincones`

### Página detalle

Desde la página de inicio podemos acceder a la página detalle del recurso. Para eso hay que implementar la página de detalle que nos ha facilitado producto con el resultado del recurso que nos devuelve backend.

- `/resource/{id}`

Nos han comentado los compañeros de backend que por ahora siempre resuelve al mismo recurso. Este recurso por el momento se trata de un video de YouTube con su identificador y descripción. Intégralo cómo mejor creas oportuno.

### Favoritos

Otra de las cosas que nos pide producto como **requerimiento** es que los alumnos deberían poder marcar como favorito los recursos que deseen.
Todos los recursos que se elijan deben quedar marcados mientras se navega entre categorías. Además hay un botón "Ver favoritos" que debe mostrar únicamente la lista de los favoritos que han sido seleccionados en la sección activa.

## Te pedimos

- Aplicación desarrollada en **React**
- Puedes usar cualquier 'Boilerplate' de inicio si lo consideras conveniente.
- Puedes usar preprocesadores, CSS-in-JS o similar, pero _NO uses_ librerías de estilos predefinidos (MaterialUI, Bootstrap...)
  - Queremos ver tu conocimiento y estilo en los componentes asi que mejor no usar elementos pre-fabricados.
- Usa librerías que utilizarías normalmente en una aplicación real. Quizá tengas que explicar y justificar su elección.
- Escribe una pequeña **documentación** clara sobre como has diseñado la app, los pasos y decisiones que has tomado.
- Describe los pasos para ejecutar correctamente la aplicación.
- Si por cualquier razón hay alguna parte de la que no puedes realizar el código, nos gustaría que nos explicaras cómo lo hubieras desarrollado.

## Que nos gustaría ver pero no es imprescindible

- Que la aplicación se vea correctamente en distintos tamaños de escritorio aunque el equipo de producto no lo haya especificado. Tienes libertad para tomar esas decisiones.

## Q&A

> ¿Cómo tengo que enviar el resultado cuando haya finalizado?

Lo dejamos a tu criterio, envíanos la aplicación cómo mejor creas conveniente. Seguro que ya tienes nuestro contacto.

> ¿Y si tengo alguna pregunta?

Pregúntanos lo que sea, te responderemos lo más rápido posible.

Por norma general si no está especificado algún detalle o función concreto puedes hacerlo como tu creas conveniente, siempre justificando su implementación.

> Ya he terminado, me queda tiempo y me gustaría hacer algo más.

Genial, buen trabajo! No hay problema pues el equipo de producto estará encantado de oír eso así que aquí tienes algunas opciones extra. Puedes elegir la/s que prefieras.

---

### Opción extra: Versión mobile

Se ha pensado que en ocasiones el alumno puede hacer uso de su teléfono para acceder a los contenidos así que estaría bien preparar una versión para estos dispositivos.

### Opción extra: Testing

El mantenimiento del código es clave para tener un buen producto escalable y sólido así que siempre es bueno la implementación de algunos tests unitarios útiles.
