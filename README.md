# ronaldsnyder.net

My personal blog: cooking, travel, learning, and life. Built with [Astro](https://astro.build), edited with [Pages CMS](https://pagescms.org), hosted on Netlify.

## Run it locally

Requires Node 22.23 or newer (`node -v`).

```sh
npm install
npm run dev        # http://localhost:4321 (drafts are visible here)
npm run build      # production build into dist/ (drafts are hidden)
npm run preview    # serve the production build
```

## Writing a post

**In the browser or on your phone (Pages CMS):** sign in at https://app.pagescms.org with GitHub, open this repo, and go to **Posts**. Fill in the fields, drop in photos, and save. Saving commits to GitHub, and Netlify rebuilds the site in about a minute. New posts start as drafts, so untick **Draft** when the post is ready to go live.

**In VS Code:** add a Markdown file to `src/content/posts/`. The file name becomes the URL (`my-post.md` → `/posts/my-post/`). Put photos in `src/assets/images/` and reference them as `../../assets/images/photo.jpg`. Use `recipe-template.md` and `trip-template.md` as starting points.

### Frontmatter

| Field | Required | Notes |
|---|---|---|
| `title` | yes | |
| `description` | yes | One line. Shows on cards and in search results |
| `date` | yes | `2026-11-22` |
| `topic` | yes | `Cooking`, `Travel`, `Learning`, or `Life` |
| `tags` | no | Free-form labels, e.g. `[pasta, Italian, weeknight]`. Each tag gets a page at `/tags/<tag>/`, and `/tags/` lists them all. Matching ignores case |
| `cover`, `coverAlt`, `coverCaption` | no | Cover photo. Without one, cards show a tinted placeholder |
| `featured` | no | Puts the post in the big spot on the home page (newest featured wins) |
| `draft` | no | `true` hides the post from the live site |
| `gallery` | no | List of `{ image, caption, alt }`. Shows as a photo grid after the post |
| `recipe` | no | `{ servings, time, ingredients[], steps[] }`. Shows the recipe box |

Full-size iPhone photos are fine. Astro resizes them and converts them to WebP at build time. (If your iPhone saves HEIC, export as JPEG, or set Camera → Formats → Most Compatible.)

## Topics and colors

Topics live in `src/consts.ts`. Colors, fonts, and spacing are CSS variables at the top of `src/styles/global.css`.

## Deploying (one-time setup)

1. Create an empty GitHub repo (e.g. `ronaldsnyder-blog`), then:
   ```sh
   git init && git add . && git commit -m "Initial blog"
   git branch -M main
   git remote add origin git@github.com:<you>/ronaldsnyder-blog.git
   git push -u origin main
   ```
2. **Netlify:** Add new site → Import from Git → pick the repo. The build settings come from `netlify.toml`.
3. **Domain:** in Netlify, Domain management → add `ronaldsnyder.net`, then update DNS at your registrar as Netlify instructs. HTTPS is automatic.
4. **Pages CMS:** sign in at https://app.pagescms.org with GitHub and grant it access to the repo. It reads `.pages.yml`.

## Maintenance

None required. It's a static site, so there's no server or database to patch. Run `npm outdated` / `npm update` whenever you feel like it.
