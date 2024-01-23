import Image from "next/image";

export default function Logo() {
  return (
    <Image
      src="/images/logo.png"
      height={122}
      width={122}
      alt="Logo do Projeto"
    />
  );
}
