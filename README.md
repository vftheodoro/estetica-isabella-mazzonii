# Estética Isabella Mazzoni — Site Institucional

Site institucional responsivo para apresentar serviços de estética, informações do estabelecimento e formas de contato, com chamadas de agendamento via WhatsApp. O projeto utiliza Next.js e conteúdo configurável.

## Tecnologias

- Next.js App Router, React e TypeScript.
- Tailwind CSS e estilos responsivos.
- Metadados, `sitemap`, `robots` e dados estruturados para SEO.
- Vitest para testar utilitários relacionados a contato.

## Organização do código

| Caminho | Função |
| --- | --- |
| `src/app` | Páginas, layout, política de privacidade, termos e SEO |
| `src/components` | Interface, navegação, serviços, depoimentos e contato |
| `src/config/site.ts` | Dados e textos configuráveis do estabelecimento |
| `src/utils/contact.ts` | Lógica utilitária de contato, com teste correspondente |
| `public` | Arquivos estáticos e imagens |

## Executar localmente

```bash
git clone https://github.com/vftheodoro/estetica-isabella-mazzonii.git
cd estetica-isabella-mazzonii
npm ci
npm run dev
```

Abra http://localhost:3000.

## Qualidade e publicação

```bash
npm run lint
npm test
npm run build
```

Antes do deploy, confira nomes, serviços, preços, WhatsApp, depoimentos e imagens autorizados em `src/config/site.ts` e componentes relacionados. Revisar também privacidade, termos e metadados.

## Escopo e cuidados

O repositório documenta o site institucional; não indica existência de sistema próprio de agenda ou prontuário. Credenciais, qualificações profissionais e avaliações não verificadas não devem ser apresentadas como fatos. As imagens e a identidade visual de terceiros não estão disponíveis para reutilização sem autorização. Não há uma licença open source indicada neste repositório.
