import { ProductsTableProps } from "@/types/products-table-props";

export const ProductsTable = ({
  products,
  loading,
  handleSeeProductClick,
  handleEditProductClick,
  handleDeleteProductClick,
}: ProductsTableProps) => {
  const handleIdClick = (productId: string) => {
    handleSeeProductClick(productId);
  };

  if (loading) {
    return <p>Cargando...</p>;
  } else {
    if (products.length === 0) {
      return <p>No hay productos</p>;
    }
  }

  return (
    <table>
      <thead>
        <tr>
          <th>id</th>
          <th>descripción</th>
          <th>marca</th>
          <th>precio</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr
            key={product.id}
            style={{
              padding: "10px",
              marginBottom: "10px",
              borderBottom: "1px solid #ccc",
            }}
          >
            <td
              style={{
                cursor: "pointer",
              }}
              onClick={() => handleIdClick(product.id)}
            >
              {product.id}
            </td>
            <td>{product.description}</td>
            <td>{product.brand}</td>
            <td>{product.unitPrice}</td>
            <td>
              <button onClick={() => handleEditProductClick(product.id)}>
                Editar
              </button>
              <button onClick={() => handleDeleteProductClick(product.id)}>
                Eliminar
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
