"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Logo } from "./logo";
import { MenuIcon } from "./icons";
import { buildWhatsAppUrl } from "@/utils/contact";

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className={`site-header${open ? " menu-open" : ""}`}>
      <div className="header-inner">
        <Logo variant="light" />
        <nav className={open ? "nav open" : "nav"} aria-label="Navegação principal">
          <Link href="/#sobre" onClick={() => setOpen(false)}>
            Sobre
          </Link>
          <Link href="/servicos" onClick={() => setOpen(false)}>
            Serviços
          </Link>
          <Link href="/#depoimentos" onClick={() => setOpen(false)}>
            Depoimentos
          </Link>
          <Link href="/#espaco" onClick={() => setOpen(false)}>
            Espaço
          </Link>
          <Link href="/#contato" onClick={() => setOpen(false)}>
            Contato
          </Link>
        </nav>
        <a className="button header-cta" href={buildWhatsAppUrl()} target="_blank" rel="noreferrer">
          Agendar
        </a>
        <button
          className="menu-button"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
        >
          <MenuIcon />
        </button>
      </div>
    </header>
  );
}
