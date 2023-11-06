# Challenge grupo HOUSTON ROUTERS

Tenéis que crear una SPA con varias 'páginas' en React, gestionando el estado común con context + reducer (useReducer). Usaremos scss + css-module y la app debe ser responsive (mobile + desktop) / mobile first.

Mínimo de páginas (vistas):

Lista API pública,

Lista API privada

Detail

Crear ítem

Modificar ítem

Página no encontrada

Alguna/s de ellas se tiene que cargar mediante lazy loading.

La app se conectará a una API pública de vuestra elección y listará los elementos. En dicho listado tiene que haber paginación y también un filtro como mínimo. Filtrado en la misma página del listado. Al filtrar, no dirigimos al usuario a otra página, se queda en el listado y el listado cambia.

A partir de este listado tendréis que crear otro listado conectado a una API privada (API local mediante JSON-server), donde implementaréis CRUD.

La creación y edición de item se hará con el mismo componente formulario reutilizado. La creación y la edición tienen que tener paths distintos en la URL. Cuando el usuario crea o edita, se le tiene que redirigir al listado y dar un feedback del resultado de la operación.
El botón de borrar tiene que estar en el mismo listado de items. Cuando el usuario borra, no se va a otra página, en el mismo listado en el que está debe desaparecer el ítem. También si queréis puede estar en la página de detalle.
La interfaz debe dar feedback de cuando se está esperando una response de las APIs, y también debe gestionar los errores de éstas.

Requisitos:

Diseño en Figma

Listado de componentes y responsabilidades

Trello:

Columnas Backlog, ToDo (Day/Sprint), In progress, Testing, Review/Que hice ayer y Done
Hacer daily:

Qué tareas hice ayer
Qué stoppers tuve
Qué tareas haré hoy
Hooks de git (huskies) y GitHub Actions

SonarCloud, mínimo de un escaneo diario

Links:

Figma Trello Responsabilidad de componentes API The Simpsons SonarCloud

Mínimo de un approvals para poder mergear PR

Desplegada a Netlify / Vercel

HTML semántico (validado)

CSS con module-css (validado)

Testing con coverage. Todos los tipos de tests que hemos visto.

Optimizada (Lighthouse en Netlify / Vercel)
