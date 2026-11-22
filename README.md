# ronaldsnyder.net

My personal blog: cooking, travel, learning, and life. Built with [Astro](https://astro.build), edited with [Pages CMS](https://pagescms.org), hosted on [Cloudflare Pages](https://pages.cloudflare.com) (free plan: 500 builds/month, unlimited bandwidth).

## Run it locally

Requires Node 22.23 or newer (`node -v`).

```sh
npm install
npm run dev        # http://localhost:4321 (drafts are visible here)
npm run build      # production build into dist/ (drafts are hidden)
npm run preview    # serve the production build
```

## Writing a post

**In the browser or on your phone (Pages CMS):** sign in at https://app.pagescms.org with GitHub, open this repo, and go to **Posts**. Fill in the fields, drop in photos, and save. Saving commits to GitHub, and Cloudflare rebuilds the site in about a minute. New posts start as drafts, so untick **Draft** when the post is ready to go live.

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

1. Push the code to GitHub (repo: `my-blog`). If git rejects your password, run `gh auth login` or use a personal access token — GitHub no longer accepts account passwords for git.
2. **Cloudflare Pages:** in the Cloudflare dashboard, Workers & Pages → Create → Pages → Connect to Git. When GitHub asks, install the Cloudflare app on your **personal** account with **Only select repositories → `my-blog`**. Build settings:
   - Framework preset: **Astro**
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Node version comes from `.node-version` (22). If the build complains, add an environment variable `NODE_VERSION` = `22`.
3. **Domain:** in the Pages project, Custom domains → Set up a domain → `ronaldsnyder.net` (and `www.ronaldsnyder.net`). Easiest if the domain's DNS is on Cloudflare; otherwise follow the DNS records it shows you at your registrar. HTTPS is automatic.
4. **Pages CMS:** sign in at https://app.pagescms.org with GitHub and give it access to `my-blog` only. It reads `.pages.yml`.

Every push to `main` (including saves in Pages CMS) triggers a rebuild. The free plan allows 500 builds a month.

## Maintenance

None required. It's a static site, so there's no server or database to patch. Run `npm outdated` / `npm update` whenever you feel like it.
