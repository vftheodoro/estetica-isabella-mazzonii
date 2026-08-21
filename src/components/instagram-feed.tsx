import Image from "next/image";
import { Arrow, Instagram } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { instagramPosts, site } from "@/config/site";

const profileUrl = `https://instagram.com/${site.instagram}`;

export function InstagramFeed() {
  return (
    <section className="section instagram" id="instagram">
      <div className="container">
        <Reveal className="instagram-heading">
          <div className="instagram-brand">
            <span className="instagram-logo" aria-hidden="true">
              <Instagram />
            </span>
            <div>
              <span className="eyebrow burgundy">No Instagram</span>
              <h2>
                Divulgações e
                <br />
                bastidores do cuidado
              </h2>
            </div>
          </div>
          <div className="instagram-cta-wrap">
            <p>Acompanhe novidades, resultados e o dia a dia no espaço da Isabella.</p>
            <a
              className="button button-instagram"
              href={profileUrl}
              target="_blank"
              rel="noreferrer"
            >
              <span className="instagram-logo small" aria-hidden="true">
                <Instagram />
              </span>
              @{site.instagram}
            </a>
          </div>
        </Reveal>

        <div className="instagram-grid">
          {instagramPosts.map((post, i) => (
            <Reveal key={post.id} delay={i * 90}>
              <a
                className="ig-post"
                href={profileUrl}
                target="_blank"
                rel="noreferrer"
                aria-label={`${post.tag}: ver no Instagram de @${site.instagram}`}
              >
                <div className="ig-post-media">
                  <Image
                    src={post.image}
                    alt={post.caption}
                    fill
                    sizes="(max-width: 800px) 100vw, 33vw"
                    className="ig-post-image"
                  />
                  <span className="ig-post-badge">
                    <Instagram />
                    {post.tag}
                  </span>
                </div>
                <div className="ig-post-body">
                  <div className="ig-post-user">
                    <span className="instagram-logo tiny" aria-hidden="true">
                      <Instagram />
                    </span>
                    <strong>@{site.instagram}</strong>
                  </div>
                  <p>{post.caption}</p>
                  <span className="ig-post-link">
                    Ver no Instagram <Arrow />
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
