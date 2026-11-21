# Souparna Biswas, portfolio

A static portfolio site. No build step, no dependencies. It runs as plain HTML, CSS and JavaScript, so GitHub Pages can host it for free.

## Files

| File | What it is |
| --- | --- |
| `index.html` | Page structure. You rarely need to touch it. |
| `data.js` | **All content.** Projects, roles, institutions, contact details. Edit this file. |
| `style.css` | Colours, fonts and layout. |
| `app.js` | Filters, project panels, theme switch. |
| `.nojekyll` | Tells GitHub Pages to serve the files as they are. |

## Adding or changing content

1. Open `data.js` on GitHub and click the pencil icon.
2. Edit the text. To add a project, copy one block inside `PROJECTS`, paste it below, and change the words.
3. Click **Commit changes**. The live site updates in about a minute.

While `SHOW_TODOS = true`, amber `[add: ...]` tags show what is still missing. When you have filled everything in, change it to `false`. The tags disappear and empty fields are hidden.

## Contact details and CV

In `data.js`, fill in `SITE.contact` (email, LinkedIn, GitHub, CV). To offer a CV, upload the PDF next to index.html and set `cv` to the file name.

## Publishing on GitHub Pages

1. Create a repository named `YOUR-USERNAME.github.io` (public). Your site will then live at `https://YOUR-USERNAME.github.io`.
2. Upload every file to the repository.
3. Go to **Settings > Pages**. Under **Build and deployment**, choose **Deploy from a branch**, pick `main` and `/ (root)`, then **Save**.
4. Wait a minute, then open the address shown at the top of the Pages screen.
