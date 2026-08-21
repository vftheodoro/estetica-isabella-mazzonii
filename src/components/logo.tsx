import Image from "next/image";
import Link from "next/link";

export function Logo({ variant = "color" }: { variant?: "color" | "light" }) {
  const src = variant === "light" ? "/images/logo-light.png" : "/images/logo-color.png";
  return (
    <Link href="/" className="logo" aria-label="Estética Isabella Mazzoni — início">
      <Image src={src} alt="Estética Isabella Mazzoni" width={58} height={58} priority className="logo-img" />
      <span>
        <small>Estética</small>
        <strong>Isabella Mazzoni</strong>
      </span>
    </Link>
  );
}
