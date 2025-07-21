'use client';

import { ConfirmModal } from '@/components/confirm-modal/confirm-modal';
import { CustomersGrid } from '@/components/customers-grid/customers-grid';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Customers() {
  const router = useRouter();
  const [customerId, setCustomerId] = useState('');
  const [modalOpen, setModalOpen] = useState(false);

  const handleClickNewCustomer = () => {
    router.push('/customers/create');
  };

  const handleClickGoToDetail = (customerId: string) => {
    router.push(`/customers/${customerId}`);
  };

  const handleClickGoToEdit = (customerId: string) => {
    router.push(`/customers/${customerId}/edit`);
  };

  const handleClickGoToDelete = () => {
    setCustomerId(customerId);
    setModalOpen(true);
  };

  const handleConfirmDeleteProduct = () => {
    // deleteProduct({
    //     input: {

    //     }
    // });
    console.log('');
  };

  const handeCancelDeleteProduct = () => {
    setCustomerId('');
    setModalOpen(false);
  };

  //   useEffect(() => {
  //     if(deletedCustomer?.product.id) {
  //       setModalOpen(false);
  //     }
  //   }, [deletedCustomer])

  return (
    <>
      <button onClick={handleClickNewCustomer}>New</button>
      <CustomersGrid
        handleClickDetail={handleClickGoToDetail}
        handleClickEdit={handleClickGoToEdit}
        handleClickDelete={handleClickGoToDelete}
      />

      {modalOpen && (
        <ConfirmModal
          title=""
          description={`¿Estás seguro de que deseas eliminar este producto ${productId}?`}
          handleClickConfirm={handleConfirmDeleteProduct}
          handleClickCancel={handeCancelDeleteProduct}
          handleClickClose={handeCancelDeleteProduct}
        />
      )}
    </>
  );
}

/**tabla con lazy loading   y tabla con filtrado en vivo*/
