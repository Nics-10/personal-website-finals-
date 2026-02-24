# Deployment Guide

This guide explains how to deploy the Personal Profile Website with both frontend and backend.

## Architecture Overview

- **Frontend**: Vue.js application (Vite) - Deploy to Vercel
- **Backend**: Nest.js REST API - Deploy to Vercel or Render
- **Database**: Supabase PostgreSQL

## Prerequisites

1. Node.js 18+ installed
2. npm or yarn
3. Supabase account (already configured)
4. Vercel account (for frontend and backend)
5. Git repository (GitHub, GitLab, or Bitbucket)

## Environment Variables

### Frontend (.env)
```
VITE_API_URL=https://your-backend-url.vercel.app/api
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### Backend (.env)
```
SUPABASE_URL=your_supabase_url
SUPABASE_ANON_KEY=your_supabase_anon_key
PORT=3000
```

## Local Development

### 1. Install Dependencies

Frontend:
```bash
npm install
```

Backend:
```bash
cd backend
npm install
```

### 2. Set Up Environment Variables

Copy the example files and fill in your values:
```bash
cp .env.example .env
cd backend
cp .env.example .env
```

### 3. Run Development Servers

Frontend (runs on http://localhost:5173):
```bash
npm run dev
```

Backend (runs on http://localhost:3000):
```bash
cd backend
npm run start:dev
```

## Deployment

### Deploy Frontend to Vercel

1. Push your code to GitHub
2. Go to [Vercel Dashboard](https://vercel.com/dashboard)
3. Click "Add New Project"
4. Import your repository
5. Configure build settings:
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
6. Add environment variables:
   - `VITE_API_URL`
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`
7. Deploy

### Deploy Backend to Vercel

1. Create a separate Vercel project for the backend
2. Set root directory to `backend`
3. Add environment variables:
   - `SUPABASE_URL`
   - `SUPABASE_ANON_KEY`
   - `PORT`
4. Deploy

**Note**: After backend deployment, update the frontend's `VITE_API_URL` environment variable with your backend URL.

### Alternative: Deploy Backend to Render

1. Go to [Render Dashboard](https://dashboard.render.com/)
2. Click "New +" → "Web Service"
3. Connect your repository
4. Configure:
   - Root Directory: `backend`
   - Build Command: `npm install && npm run build`
   - Start Command: `npm run start:prod`
5. Add environment variables
6. Deploy

## Database (Supabase)

The database is already configured and migrated. The guestbook table has been created with proper RLS policies.

To verify the database:
1. Go to your Supabase dashboard
2. Navigate to Table Editor
3. You should see the `guestbook` table

## Post-Deployment

1. Test all functionality:
   - Navigation and scrolling
   - Dark mode toggle
   - Guestbook submission
   - Image loading
   - Mobile responsiveness

2. Update CORS settings in backend if needed (in `src/main.ts`)

3. Monitor logs for any errors

## Troubleshooting

### Backend Connection Issues

If the frontend cannot connect to the backend:
- Verify `VITE_API_URL` is correctly set to your backend URL
- Check CORS settings in backend `main.ts`
- Ensure backend is running and accessible

### Database Connection Issues

- Verify Supabase credentials are correct
- Check RLS policies are properly configured
- Ensure database migrations have been applied

### Build Errors

Frontend:
```bash
npm run build
```

Backend:
```bash
cd backend
npm run build
```

Check the error messages and ensure all dependencies are installed.

## Performance Optimization

1. Enable caching in Vercel
2. Optimize images (use WebP format)
3. Enable compression
4. Use CDN for static assets

## Security Checklist

- [x] Environment variables are not exposed in code
- [x] CORS is properly configured
- [x] RLS policies are enabled on database
- [x] Input validation on backend
- [x] HTTPS enabled (automatic on Vercel)

## Support

For issues or questions:
1. Check the logs in your deployment platform
2. Review the backend API responses
3. Test database connectivity
4. Verify environment variables
