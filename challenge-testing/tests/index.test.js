const carritoCompra = require('./index')

describe('La clase Carrito', () => {
  let carrito
  let producto1 = { name: 'Pantalones', price: 40}
  let producto2 = { name: 'Musculosas', price: 30}
  let producto3 = { name: 'Gorras', price: 10}
  beforeEach(() => {
    carrito = new carritoCompra()
  })
  it('Debe tener un constructor que inicialice el carrito como un array vacio', () => {
    expect(carrito.productos).toEqual([]);
    expect(carrito.productos.length).toBe(0);
  })
  it('Debe tener un metodo agregarProducto aue agregue un nuevo producto', () => {
    expect(carrito.agregarProducto).toBeDefined();
    expect(typeof carrito.agregarProducto).toBe('function');
    carrito.agregarProducto(producto1);
    expect(carrito.productos.length).toBe(1);
    expect(carrito.productos).toContainEqual(producto1);
    carrito.agregarProducto(producto2,producto3);
    expect(carrito.productos).toContainEqual(producto2,producto3);
  })
  it('Debe tener el metodo calcularTotal que devuelva la suma total de los precios de los productos', () => {
    expect(typeof carrito.calcularTotal).toBe('function');
    carrito.agregarProducto(producto1);
    carrito.agregarProducto(producto2);
    carrito.agregarProducto(producto3);
    expect(carrito.calcularTotal()).toBe(80);
  })
  it('Debe tener el metodo aplicarDescuento que recibe un porcentaje', () => {
    expect(typeof carrito.aplicarDescuento).toBe('function');
    carrito.agregarProducto(producto1);
    carrito.agregarProducto(producto2);
    carrito.agregarProducto(producto3);
    expect(carrito.aplicarDescuento(25)).toBe(60);
    expect(carrito.aplicarDescuento(0)).toBe(carrito.calcularTotal());
  })
})