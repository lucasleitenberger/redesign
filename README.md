# Lucas Leitenberger Website — Final Team Version

This version includes:

- Lucas Leitenberger and Vy Truong team section
- Green Key Resources affiliation
- Pennsylvania and Ohio market coverage
- Nationwide recruiting reach
- LinkedIn profile links
- Correct business email
- Netlify-ready static files

## Publish

1. Open `lucasleitenberger/redesign` on GitHub.
2. Select **Add file → Upload files**.
3. Upload everything inside this extracted folder.
4. Replace the existing files.
5. Select **Commit changes**.
6. Netlify will redeploy automatically.

## Vy's headshot

Vy currently appears with an initials graphic. When you have her photo:

1. Name it `vy-truong.jpg`.
2. Add it to the `assets` folder.
3. In `index.html`, replace:

```html
<div class="team-photo team-placeholder" aria-label="Vy Truong">
  <span>VT</span>
</div>
```

with:

```html
<div class="team-photo">
  <img src="assets/vy-truong.jpg" alt="Vy Truong" />
</div>
```
