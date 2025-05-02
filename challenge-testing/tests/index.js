class carritoCompra {
  constructor() {
    this.productos = []
  }
  agregarProducto(prod) {
    this.productos.push(prod)
  }
  calcularTotal() {
    return this.productos.reduce((total, prod) => {
      return total + prod.price
    }, 0)
  }
  aplicarDescuento(desc) {
    return this.calcularTotal() - (this.calcularTotal() / 100) * desc
  }
}

module.exports = carritoCompra;