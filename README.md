<h1 align="center">FacturasAPI</h1>

## Características

- **Obtener todas las facturas**
- **Obtener una factura por ID**
- **Crear una nueva factura**
- **Actualizar una factura existente**
- **Eliminar una factura**

## Endpoints

### 1. `GET /api`
Devuelve una lista de todas las facturas disponibles en la panadería.
- **Respuesta exitosa**: Lista de facturas con `id`, `nombre` y `url` de la imagen.
- **Código de respuesta**: `200 OK`

### 2. `GET /api/:id`
Devuelve una factura específica por su ID.
- **Parámetros**: `id` (identificador único de la factura).
- **Respuesta exitosa**: Datos de la factura (`id`, `nombre`, `url`).
- **Código de respuesta**: `200 OK`
- **Si no se encuentra la factura**: `404 Not Found`

### 3. `POST /api`
Crea una nueva factura:
- **Cuerpo de la solicitud**:  
  ```json
  {
    "id": 7,
    "nombre": "Factura de Chocolate",
    "url": "https://mi-panaderia.com/factura-chocolate.jpg"
  }
  ```
 ** Respuesta exitosa: Información de la nueva factura creada.
 ** Código de respuesta: 201 Created

### 4. PUT /api/:id

Actualiza una factura existente.

    Parámetros: id (identificador de la factura a actualizar).
    Cuerpo de la solicitud:
 ```json
    {
      "nombre": "Factura de Crema Pastelera",
      "url": "https://mi-panaderia.com/factura-crema-pastelera.jpg"
    }
```
    Respuesta exitosa: Factura actualizada.
    Código de respuesta: 200 OK

### 5. DELETE /api/:id

Elimina una factura específica por su ID de la panadería.

    Parámetros: id (identificador de la factura a eliminar).
    Respuesta exitosa: Confirmación de eliminación.
    Código de respuesta: 200 OK
    Si no se encuentra la factura: 404 Not Found

Ejemplo de uso
Obtener todas las facturas

`GET http://localhost:4040/api`

Respuesta:

```json
[
  {
    "id": 1,
    "nombre": "Factura de Manteca",
    "url": "http://localhost:4040/assets/factura-manteca.jpg"
  },
  {
    "id": 2,
    "nombre": "Factura de Dulce de Leche",
    "url": "http://localhost:4040/assets/factura-dulce-leche.jpg"
  }
]
```
### Crear una nueva factura

`POST http://localhost:4040/api`
Content-Type: application/json

```json
{
  "nombre": "Factura de Chocolate",
  "url": "http://localhost:4040/assets/factura-chocolate.jpg"
}
```
Respuesta:

```json
{
  "id": 3,
  "nombre": "Factura de Chocolate",
  "url": "http://localhost:4040/assets/factura-chocolate.jpg"
}
```

### Requisitos

    La API requiere que tu servidor esté corriendo en http://localhost:4040 (o el puerto configurado).
    La API utiliza CORS, por lo que puedes acceder a ella desde aplicaciones frontend alojadas en otros dominios.
    
### Contribuir

Siéntete libre de hacer un fork del repositorio, hacer cambios y enviar un pull request. ¡Toda ayuda es bienvenida!

<hr>
<p align="center">
  <img src="./assets/icons/Leon-2.png" alt="Flor separadora" height="45">
</p>
