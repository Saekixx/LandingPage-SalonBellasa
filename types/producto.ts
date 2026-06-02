export interface Producto {
  id: number;
  nombre: string;
  categoria: string;
  precio: number;
  imagen: string;
}

export interface PedidoDetalle {
  idPedido: string;
  fecha: string;
  total: number;
  estado: string;
  productos: ProductoPedido[];
}

export interface ProductoPedido {
  id: number;
  nombre: string;
  categoria: string;
  precio: number;
  imagen: string;
  cantidad: number;
}
