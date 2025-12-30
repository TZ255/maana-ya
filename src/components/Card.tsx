import { slugifyStr } from "@utils/slugify";
import Datetime from "./Datetime";
import type { CollectionEntry } from "astro:content";

export interface Props {
  href?: string;
  frontmatter: CollectionEntry<"blog">["data"];
  secHeading?: boolean;
}

export default function Card({ href, frontmatter, secHeading = true }: Props) {
  const { title, pubDatetime, modDatetime, description } = frontmatter;

  const headerProps = {
    style: { viewTransitionName: slugifyStr(title) },
    className: "h5 mb-2 fw-semibold",
  };

  return (
    <li className="mb-3">
      <article className="card post-card h-100">
        <div className="card-body">
          <a
            href={href}
            className="stretched-link text-decoration-none text-primary"
          >
            {secHeading ? (
              <h2 {...headerProps}>{title}</h2>
            ) : (
              <h3 {...headerProps}>{title}</h3>
            )}
          </a>
          <Datetime
            pubDatetime={pubDatetime}
            modDatetime={modDatetime}
            className="mb-2 text-secondary"
          />
          <p className="mb-0">{description}</p>
        </div>
      </article>
    </li>
  );
}
