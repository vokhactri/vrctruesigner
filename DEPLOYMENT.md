# GitHub Pages Deployment Guide

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

## Setup Instructions

### 1. Enable GitHub Pages

1. Go to your repository on GitHub
2. Navigate to **Settings** → **Pages**
3. Under "Build and deployment":
   - **Source**: Select "GitHub Actions"
4. Save the settings

### 2. Push Your Code

Once you push to the `main` branch, the deployment will automatically trigger:

```bash
git add .
git commit -m "Configure GitHub Pages deployment"
git push origin main
```

### 3. Access Your Deployed Site

After the workflow completes (usually 2-3 minutes), your site will be available at:

```
https://<your-username>.github.io/vrc-truesigner/
```

## Manual Deployment

You can also trigger deployment manually:

1. Go to **Actions** tab in your repository
2. Select "Deploy to GitHub Pages" workflow
3. Click "Run workflow"
4. Select the branch and click "Run workflow"

## Local Testing

To test the production build locally:

```bash
# Build the static export
pnpm build

# Serve the out directory (you'll need a static server)
npx serve out
```

## Configuration Notes

- **Base Path**: The app is configured with `/vrc-truesigner` as the base path for GitHub Pages
- **Static Export**: Next.js is configured to generate a static site (`output: 'export'`)
- **Image Optimization**: Disabled for static export compatibility
- **Environment**: Production builds automatically use the correct base path

## Troubleshooting

### Images or Assets Not Loading

If you see 404 errors for images or assets:

1. Ensure all asset paths are relative (e.g., `/image.png` becomes `image.png`)
2. Use Next.js `Image` component with `unoptimized` prop
3. Check that `basePath` in `next.config.js` matches your repository name

### Workflow Fails

1. Check the Actions tab for error details
2. Ensure GitHub Pages is enabled in repository settings
3. Verify that the workflow has proper permissions

### Custom Domain

To use a custom domain:

1. Add a `CNAME` file to the `public` directory with your domain
2. Configure DNS settings as per GitHub's documentation
3. Update `basePath` and `assetPrefix` in `next.config.js` to empty strings

## Workflow Details

The deployment workflow:

1. **Triggers** on push to `main` or manual dispatch
2. **Builds** the Next.js app with pnpm
3. **Caches** dependencies for faster builds
4. **Deploys** the static output to GitHub Pages

See `.github/workflows/deploy.yml` for the complete workflow configuration.
