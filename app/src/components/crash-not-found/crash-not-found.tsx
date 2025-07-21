import Image from 'next/image';
import Link from 'next/link';

export const CrashNotFound = () => {
  return (
    <>
      <Image
        src={'/images/404.png'}
        alt="No se encontró el recurso"
        width={500}
        height={500}
      />
      <span>No se encontró el recurso</span>
      <br></br>

      <br></br>

      <Link href={'/'}>
        <span>Vamos al inicio</span>
      </Link>
    </>
  );
};
