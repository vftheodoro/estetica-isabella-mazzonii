import Image from "next/image";import Link from "next/link";
export function Logo(){return <Link href="/" className="logo" aria-label="Estética Isabella Mazzoni — início"><Image src="/images/logo.webp" alt="" width={58} height={58} priority/><span><small>Estética</small><strong>Isabella Mazzoni</strong></span></Link>}
