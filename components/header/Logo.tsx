import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href='/' className='flex items-center gap-2'>
      <Image src='/logo.avif' alt='logo' height={32} width={32} />
      <Image src='/logo-text.avif' alt='logo-text' height={32} width={102} />
    </Link>
  );
};

export default Logo;
