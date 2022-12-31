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

- Investigate a more full design system backer such as Chakra UI, Stitches, Vanilla Extract, ...
- Use Zod to enforce parsing of JSON
- Expand ESLint field sorting to JSON and TS type literals
- Move EventsList events data to a JSON file, and semi-automate CSS vars and backgrounds
- Fix lint warnings
- Consolidate icons into public/icons
- Set up `~/` tsconfig path prefixes
- Add end-to-end test for accessibility
- Fix console warnings
- Add end-to-end test for console warnings
- Add .env file setup for Google Maps API key
- Switch background patterns and icons to SVGs, so we can use currentColor

### Handy Scripts

#### Existing Event Data

```js
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
  return Array.from(document.querySelectorAll(tag)).find(
    (element) => element.textContent === title
  );
}

function getDataFor(title) {
  const heading = getBy("h3", title);
  const row = heading?.nextElementSibling;
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
        .replace("assets/images", "logos"),
      name: a.querySelector("img").getAttribute("alt"),
    }));
}

sponsors = {
  complete: getDataFor("Complete Stack Sponsors"),
  large: getDataFor("Large Stack Sponsors"),
  medium: getDataFor("Medium Stack Sponsors"),
  small: getDataFor("Small Stack Sponsors"),
  community: getDataFor("Community Partners"),
};
```
