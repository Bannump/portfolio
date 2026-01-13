# Quick Start Guide

Get your portfolio up and running in 5 minutes!

## Prerequisites

- Node.js 18 or higher
- npm or yarn
- Git

## Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Add your resume:**
   - Place your resume PDF in the `public/` folder
   - Name it: `Saratchandra_Resume.pdf`

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   - Navigate to [http://localhost:3000](http://localhost:3000)
   - You should see your portfolio!

## Customization Checklist

Before deploying, make sure to:

- [ ] Update LinkedIn URL in `components/Hero.tsx` (if different)
- [ ] Verify all project links in `components/Projects.tsx`
- [ ] Add your resume PDF to `public/` folder
- [ ] Review and update the About section in `components/About.tsx`
- [ ] Check that all GitHub links point to your repositories

## Next Steps

1. **Test locally:** Make sure everything looks good
2. **Commit to Git:** 
   ```bash
   git add .
   git commit -m "Initial portfolio setup"
   ```
3. **Deploy:** Follow instructions in `DEPLOYMENT.md`

## Need Help?

- Check `DEPLOYMENT.md` for deployment options
- Review `README.md` for more details
- All components are in the `components/` folder
- Styling is in `app/globals.css` and `tailwind.config.ts`
