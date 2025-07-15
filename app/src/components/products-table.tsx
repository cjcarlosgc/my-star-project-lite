import { ProductsTableProps } from "@/types/products-table-props";

export const ProductsTable = ({ products, loading, handleRowClick }: ProductsTableProps) => {
    const handleTrClick = (productId: string) => {
        handleRowClick(productId);
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
          <tr key={product.id} onClick={() => handleTrClick(product.id)} style={{ cursor: 'pointer', padding: '10px', borderBottom: '1px solid #ccc' }}>
            <td>{product.id}</td>
            <td>{product.description}</td>
            <td>{product.brand}</td>
            <td>{product.unitPrice}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
