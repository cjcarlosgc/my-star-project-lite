import { CustomersSearchTableProps } from '@/types/customers-searchtable-props';

export const CustomersSearchTable = (props: CustomersSearchTableProps) => {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>DNI</th>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Sexo</th>
        </tr>
      </thead>
      <tbody>
        {props.customers.map((iterable) => {
          return (
            <tr key={iterable.id}>
              <td
                style={{
                  cursor: "pointer",
                }}
                onClick={() => props.handleClickDetail(iterable.id)}
              >
                {iterable.id}
              </td>
              <td>{iterable.dni}</td>
              <td>{iterable.name}</td>
              <td>{iterable.lastName}</td>
              <td>{iterable.sex}</td>
              <td>
              <button onClick={() => props.handleClickEdit(iterable.id)}>
                Editar
              </button>
              <button onClick={() => props.handleClickDelete(iterable.id)}>
                Eliminar
              </button>
            </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
