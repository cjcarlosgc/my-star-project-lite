'use client';

import { CustomerForm } from '@/components/customer-form/customer-form';
import { useCustomer } from '@/hooks/useCustomer';
import { CustomerFormValues } from '@/types/customer-form-values';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Detail() {
  const { customer } = useParams();
  const { customerFinded, loading } = useCustomer({
    input: {
      id: customer as string,
    },
  });
  const [formValues, setFormValues] = useState<CustomerFormValues | null>(null);
  const router = useRouter();

  const handleReturn = () => {
    router.push('/customers');
  };

  useEffect(() => {
    if (customerFinded) {
      setFormValues({
        id: customerFinded.id,
        dni: customerFinded.dni,
        lastName: customerFinded.lastName,
        name: customerFinded.name,
        sex: customerFinded.sex,
      });
    }
  }, [customerFinded]);

  return (
    <>
      <br></br>
      <h1>Customer Details</h1>
      {loading && <p>Loading...</p>}
      {formValues && (
        <CustomerForm
          readOnly={true}
          initialValues={formValues}
          handleClickReturnButton={handleReturn}
        />
      )}
    </>
  );
}
