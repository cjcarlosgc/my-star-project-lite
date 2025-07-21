'use client';

import { CrashError } from '@/components/crash-error/crash-error';
import { ErrorProps } from '@/types/error-error-props';
import { useEffect } from 'react';

export default function Error(props: ErrorProps) {
  useEffect(() => {
    console.log(`Error global no controlado: ${props.error.message}`);
  }, [props.error]);

  return (
    <>
      <CrashError message="Hubo un error mostrando este contenido" />
      <button onClick={() => props.reset()}>Reintetar</button>
    </>
  );
}
