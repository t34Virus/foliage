# foliage

Teresa Nededog's portfolio: https://portfolio.alohateresa.com/

Agency-style showcase of apps, platforms and interactive experiences. Next.js (static export), React and TypeScript.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000/
npm run build    # static site in out/
```

## Where things live

- `src/content/projects.ts`: every project (client, role, story, media). Add a project here and it gets a page, a card and a filter tag.
- `src/content/capabilities.ts`: the five capability pages.
- `src/content/profile.ts`: bio, experience, certifications, contact.
- `src/components/CardCircle.tsx`: the rotating rectangle circle from the original site, rebuilt in React.
- `public/media/`: demo loops, posters and project images. Full demos are embedded from Vimeo.

## Deploy

`.github/workflows/deploy.yml` builds and publishes on every push to `main` once Pages is set to use GitHub Actions.

The original Angular 11 version is preserved at the `v1-angular` tag.
