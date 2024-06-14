# Tools Market

Tools Market es un ecommerce de herramientas hecho en React con Vite y TypeScript.
Casos de uso:
- Listar productos
- Gestionar carrito (agregar y quitar productos y sus cantidades)
- Realizar compra (genera una orden con todos los productos y las cantidades de cada uno)

### Stock
No se podra agregar al carrito mas productos de los que hay disponibles para cada producto, pero el stock de cada producto sera modificado cuando el usuario haya realizado una orden de compra

### Categorias
Los productos se clasifican por categorias y la categoria 'All' aplica para todos los productos.
Las categorias se hidratan de la base de datos por lo que son dinamicas



## Run

```
npm install
npm run dev
```