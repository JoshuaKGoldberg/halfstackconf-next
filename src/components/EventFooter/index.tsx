import Image from "next/future/image";

import { BodyArea } from "../BodyArea";
import { CopyrightFooter } from "../CopyrightFooter";
import { RoundLink } from "../RoundLink";
import { TextLink } from "../TextLink";
import facebookIconInverted from "./assets/iconFacebookInverted.png";
import instagramIconInverted from "./assets/iconInstagramInverted.png";
import twitterIconInverted from "./assets/iconTwitterInverted.png";
import styles from "./index.module.css";

const icons = [
  ["Facebook", facebookIconInverted, "https://www.facebook.com/halfstackconf/"],
  ["Instagram", instagramIconInverted, "https://www.instagram.com/halfstack2022/"],
  ["Twitter", twitterIconInverted, "https://twitter.com/halfstackconf/"],
] as const;

export interface EventFooterProps {
  slug: string;
}

export function EventFooter({ slug }: EventFooterProps) {
  return (
    <footer className={styles.eventFooter}>
      <div className={styles.cityscape}>
        <Image
          alt={`${slug} cityscape`}
          className={styles.cityscapeImage}
          height={150}
          src={`/events/${slug}/skyline.png`}
          width={350}
        />
      </div>
      <BodyArea className={styles.contents}>
        <div className={styles.iconLinks}>
          {icons.map(([alt, src, href]) => (
            <a
              className={styles.icon}
              href={href}
              key={alt}
              rel="noreferrer"
              target="_blank"
            >
              <Image alt={`${alt} logo`} className={styles.icon} src={src} />
            </a>
          ))}
        </div>
        <div className={styles.textLinks}>
          <TextLink className={styles.textLink} href="/code-of-conduct">
            Code of Conduct
          </TextLink>
          <TextLink className={styles.textLink} href="/faqs">
            FAQs
          </TextLink>
          <TextLink className={styles.textLink} href="/contact">
            Contact Us
          </TextLink>
        </div>
        <div className={styles.ticketsLink}>
          <RoundLink as="a" href={`/${slug}/tickets`} size="small">
            Buy Tickets
          </RoundLink>
        </div>
      </BodyArea>
      <CopyrightFooter />
    </footer>
  );
}
