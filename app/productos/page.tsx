import CardProducto from "@/components/CardProducto";

function page() {
  return (
    <div className="container mx-auto px-4 py-8">
      Ver Productos
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <CardProducto
          producto={{
            id: 1,
            nombre: "Shampoo Revitalizante",
            categoria: "Cuidado del Cabello",
            precio: 19.99,
            imagen: "/images/shampoo.jpg",
          }}
        />
      </div>
    </div>
  );
}

export default page;
