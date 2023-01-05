# HalfStack Website: Next

## Setup

```shell
pnpm install
```

### Local Development

```shell
pnpm dev
```

### Building a Static Site

```shell
pnpm build
pnpm start
```

## TODO

- Google Maps isn't using the page's theme colors
- Investigate a more full design system backer such as Chakra UI, Stitches, Vanilla Extract, ...
- Use Zod to enforce parsing of JSON
- Expand ESLint field sorting to JSON and TS type literals
- Fix lint warnings
- Consolidate icons into public/icons
- Set up `~/` tsconfig path prefixes
- Add end-to-end test for accessibility
- Fix console warnings
- Add end-to-end test for console warnings
- Add .env file setup for Google Maps API key
- Switch background patterns and icons to SVGs, so we can use currentColor
- Make "Other Past Events" data dynamic
- Use tRPC or similar to optimize data needs per-page
- Runbooks for:
  - Making a new event
  - Marking an event as completed
  - Opening sponsorship for an event
  - Making a new year of an event (and moving the previous to historical)
  - Adding a trailer for an event
  - Removing an event

### Handy Scripts

#### Existing Event Data

```js
Array.from(document.querySelectorAll(".img.overlay")).forEach((overlay) =>
  overlay.remove()
);

cardElements = [...document.querySelectorAll(".speaker")];

cardElements.forEach((card) => {
  const summary = card.querySelector("summary");

  if (!summary.parentNode.open) {
    summary.click();
  }
});

cardData = cardElements.map((card) => ({
  by: card.querySelector("h3").textContent,
  description: [...card.querySelectorAll("details p")].map((p) =>
    p.textContent.trim()
  ),
  socials: [...card.querySelectorAll(".socials a")].map((a) => ({
    href: a.href,
    icon: a.querySelector("img").id.replace("-icon", ""),
  })),
  title: card.querySelector("summary").textContent,
}));
```

#### Existing Event Sponsors

```js
function getBy(tag, title) {
  return Array.from(document.querySelectorAll(tag)).find((element) =>
    element.textContent.includes(title)
  );
}

function getDataFor(title) {
  const row =
    getBy("h3", title)?.nextElementSibling ??
    getBy("h4", title)?.nextElementSibling;
  console.log({ row }, "from", title, getBy("h3", title));
  if (!row) {
    return undefined;
  }

  return [...row.querySelectorAll("a")]
    .filter((a) => !a.textContent.includes("Why not"))
    .map((a) => ({
      href: a.getAttribute("href"),
      src: a
        .querySelector("img")
        .getAttribute("src")
        .replace("assets/images", "logos")
        .replace(/^logos/, "/logos"),
      name: a.querySelector("img").getAttribute("alt"),
    }));
}

sponsors = {
  complete: getDataFor("Complete Stack"),
  large: getDataFor("Large Stack"),
  medium: getDataFor("Medium Stack"),
  small: getDataFor("Small Stack"),
  community: getDataFor("Community"),
};
```

#### Past Event Data

```js
Array.from(document.querySelectorAll("div.img.overlay")).forEach((overlay) =>
  overlay?.remove()
);

title = document.querySelector("h4").textContent;
year = title.match(/\d{4}/)[0];
date = title.split(year)[1].replace("-", "").trim();

videos = Array.from(document.querySelectorAll(".row a.article")).map(
  (article) => ({
    by: article.querySelector(".Name").textContent,
    href: article.getAttribute("video-url"),
    thumbnail: article
      .querySelector(".img[style]")
      .style["background-image"].split("url(")[1]
      ?.replace(/'|"|\)/gi, "")
      .replace("/assets/images/pastevents", ""),
    title: article.querySelector(".Title").textContent,
  })
);

data = { date, videos };
JSON.stringify(data, null, 4);
```
