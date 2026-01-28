# Deployment Guide

This guide covers deploying the Hacker Portfolio to Vercel.

## Prerequisites

- GitHub repository (already set up at github.com/dvrd/hacker-portfolio)
- Vercel account (sign up at vercel.com)
- PostgreSQL database (optional - Vercel Postgres or external provider)

## Deployment Steps

### Option 1: Vercel Dashboard (Recommended)

1. **Import Project**
   - Go to [vercel.com/new](https://vercel.com/new)
   - Select "Import Git Repository"
   - Choose `dvrd/hacker-portfolio`

2. **Configure Project**
   - Framework Preset: Next.js (auto-detected)
   - Root Directory: `./`
   - Build Command: `npm run build` (default)
   - Output Directory: `.next` (default)

3. **Environment Variables**

   Add in Vercel dashboard under "Settings > Environment Variables":

   ```
   DATABASE_URL=postgresql://user:password@host:5432/dbname
   NEXT_PUBLIC_APP_URL=https://your-domain.vercel.app
   ```

   **Note:** If you don't have a database, the app will work without it (analytics disabled).

4. **Deploy**
   - Click "Deploy"
   - Wait for build to complete (~2-3 minutes)
   - Your portfolio will be live at `https://your-project.vercel.app`

### Option 2: Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Follow prompts to link project
# Set environment variables when prompted

# Deploy to production
vercel --prod
```

## Database Setup (Optional)

### Using Vercel Postgres

1. Go to your project in Vercel dashboard
2. Navigate to "Storage" tab
3. Click "Create Database" > "Postgres"
4. Follow setup wizard
5. Copy connection string to `DATABASE_URL` environment variable
6. Run migrations:
   ```bash
   # Install Vercel CLI if not already installed
   vercel env pull .env.local

   # Run migrations
   npm run db:push
   ```

### Using External PostgreSQL

1. Create database on your provider (e.g., Supabase, Neon, Railway)
2. Get connection string
3. Add to Vercel environment variables:
   ```
   DATABASE_URL=postgresql://user:password@host:5432/dbname
   ```
4. Run migrations from local machine:
   ```bash
   # Set DATABASE_URL locally
   export DATABASE_URL="your-connection-string"

   # Generate and push migrations
   npm run db:generate
   npm run db:push
   ```

## Custom Domain (Optional)

1. Go to your project in Vercel dashboard
2. Navigate to "Settings > Domains"
3. Click "Add Domain"
4. Enter your domain (e.g., `dancastrillo.com`)
5. Follow DNS configuration instructions from your domain provider
6. Wait for DNS propagation (5-30 minutes)

### Common DNS Configurations

**For root domain (dancastrillo.com):**
```
A record: @ → 76.76.21.21
```

**For www subdomain:**
```
CNAME record: www → cname.vercel-dns.com
```

## Post-Deployment

### Verify Deployment

1. **Check Homepage**
   - Visit your Vercel URL
   - Verify Matrix rain animation loads
   - Test navigation menu (desktop & mobile)

2. **Test Features**
   - Click through all sections
   - Test CV download button
   - Verify contact copy-to-clipboard
   - Check expandable work history

3. **Check Analytics** (if database configured)
   - Visit `/api/analytics/stats`
   - Should return JSON with download/view stats

### Performance Optimization

Vercel automatically optimizes:
- Image optimization with Next.js Image component
- Edge caching for static assets
- Automatic HTTPS
- Global CDN distribution

### Monitoring

View deployment logs and analytics in Vercel dashboard:
- Real-time logs: "Deployments > [deployment] > Logs"
- Analytics: "Analytics" tab
- Performance: "Speed Insights" (enable in settings)

## Troubleshooting

### Build Errors

**Error: "Module not found"**
- Check all imports have correct paths
- Verify all dependencies in package.json
- Clear build cache: `vercel --force`

**Error: "Database connection failed"**
- Verify DATABASE_URL is set correctly
- Check database allows connections from Vercel IPs
- App will work without database (analytics disabled)

### Runtime Errors

**500 Error on API routes**
- Check Vercel function logs
- Verify environment variables are set
- Test API routes locally first

### DNS Issues

**Domain not resolving**
- Wait 5-30 minutes for DNS propagation
- Verify DNS records are correct
- Use `dig` or `nslookup` to check DNS:
  ```bash
  dig dancastrillo.com
  ```

## Redeployment

Vercel automatically deploys on every push to `main` branch:

```bash
git add .
git commit -m "Update portfolio"
git push origin main
```

To manually trigger deployment:
```bash
vercel --prod
```

## Rollback

If deployment has issues:

1. Go to Vercel dashboard
2. Navigate to "Deployments"
3. Find previous working deployment
4. Click "..." menu > "Promote to Production"

## Environment Management

**Production:**
```bash
vercel env ls
vercel env add DATABASE_URL production
```

**Preview (staging):**
```bash
vercel env add DATABASE_URL preview
```

**Development:**
```bash
vercel env pull .env.local
```

## Resources

- [Vercel Next.js Documentation](https://vercel.com/docs/frameworks/nextjs)
- [Vercel Postgres](https://vercel.com/docs/storage/vercel-postgres)
- [Custom Domains](https://vercel.com/docs/concepts/projects/custom-domains)
- [Environment Variables](https://vercel.com/docs/concepts/projects/environment-variables)

## Support

- Vercel Support: support@vercel.com
- GitHub Issues: github.com/dvrd/hacker-portfolio/issues
