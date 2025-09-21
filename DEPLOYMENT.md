# Deployment Guide for 18SEE Website

## Vercel Deployment Fixes Applied

### Issues Fixed:
1. **File Extension Mismatch**: Changed `backend/index.cjs` to `backend/index.js` to match Vercel configuration
2. **Missing Backend Dependencies**: Created `backend/package.json` with required dependencies
3. **Incorrect Vercel Configuration**: Updated `vercel.json` with proper routing and build configuration
4. **Serverless Compatibility**: Modified backend to export the app instead of starting a server
5. **CORS Support**: Added CORS middleware for cross-origin requests

### Files Modified:
- `vercel.json` - Updated routing and build configuration
- `backend/index.js` - Renamed from .cjs and made serverless-compatible
- `backend/package.json` - Created with backend dependencies
- Added CORS support for API endpoints

### Environment Variables Required:
Make sure to set these in your Vercel dashboard:
- `DB_URL` - Your MongoDB connection string

### Deployment Steps:
1. Commit and push these changes to your repository
2. Redeploy on Vercel (or it will auto-deploy if connected to Git)
3. Set the `DB_URL` environment variable in Vercel dashboard
4. Your API endpoints will be available at `/api/contact` and `/api/newsletter`

### API Endpoints:
- `POST /api/contact` - Contact form submission
- `POST /api/newsletter` - Newsletter subscription

The frontend will be served from the root path, and API calls will be routed to the backend automatically.
