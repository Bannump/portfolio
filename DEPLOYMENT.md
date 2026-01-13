# Deployment Guide

This portfolio is configured to be deployed on multiple platforms. Choose the option that best fits your needs.

## Option 1: Vercel (Recommended - Easiest)

Vercel is the creators of Next.js and provides the best integration.

### Steps:

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio setup"
   git branch -M main
   git remote add origin https://github.com/Bannump/bannump.github.io.git
   git push -u origin main
   ```

2. **Deploy on Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Click "New Project"
   - Import your `bannump.github.io` repository
   - Vercel will auto-detect Next.js settings
   - Click "Deploy"
   - Your site will be live at `https://bannump.github.io.vercel.app` (or a custom domain)

3. **Custom Domain (Optional):**
   - In Vercel dashboard, go to your project settings
   - Add your custom domain
   - Update DNS records as instructed

## Option 2: GitHub Pages

For free hosting directly on GitHub.

### Steps:

1. **Update next.config.js:**
   The config is already set to `output: 'export'` for static export.

2. **Install gh-pages package:**
   ```bash
   npm install --save-dev gh-pages
   ```

3. **Add deploy script to package.json:**
   ```json
   "scripts": {
     "deploy": "npm run build && gh-pages -d out"
   }
   ```

4. **Deploy:**
   ```bash
   npm run deploy
   ```

5. **Enable GitHub Pages:**
   - Go to your repository settings on GitHub
   - Navigate to "Pages" section
   - Set source to `gh-pages` branch
   - Your site will be live at `https://bannump.github.io`

## Option 3: AWS S3 + CloudFront (Cloud-Native)

For demonstrating AWS expertise.

### Steps:

1. **Build the static site:**
   ```bash
   npm run build
   ```

2. **Upload to S3:**
   - Create an S3 bucket (e.g., `bannump-portfolio`)
   - Enable static website hosting
   - Upload contents of `out/` folder to the bucket

3. **Set up CloudFront:**
   - Create a CloudFront distribution
   - Point origin to your S3 bucket
   - Configure custom domain (optional)
   - Your site will be live at the CloudFront URL

## Adding Your Resume

1. Place your resume PDF in the `public/` folder
2. Name it exactly: `Saratchandra_Resume.pdf`
3. The "Download Resume" button will automatically work

## Environment Variables

This portfolio doesn't require environment variables for basic functionality. If you add the "Chat with Resume" RAG feature later, you'll need to add:

```env
NEXT_PUBLIC_OPENAI_API_KEY=your_key_here
```

**Note:** Never commit API keys to GitHub. Use environment variables in your deployment platform.

## Troubleshooting

### Build Errors
- Ensure Node.js 18+ is installed
- Delete `node_modules` and `.next` folder, then run `npm install` again

### Styling Issues
- Clear browser cache
- Ensure Tailwind CSS is properly configured (check `tailwind.config.ts`)

### Deployment Issues
- For Vercel: Check build logs in the dashboard
- For GitHub Pages: Ensure `output: 'export'` is set in `next.config.js`
