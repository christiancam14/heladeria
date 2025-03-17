export interface Heladería {
  Heladeria: Heladeria;
}

export interface Heladeria {
  "Sabores de helado": string[];
  Productos: { [key: string]: Producto[] };
}

export interface Producto {
  id: string;
  nombre: string;
  descripcion: string;
  precio: number;
  imagen: string;
  categoria: string;
  variaciones?: string[];
  sabores?: string[];
}
