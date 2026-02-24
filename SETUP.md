# Setup Instructions

Complete guide to set up and run the Personal Profile Website locally.

## Project Structure

```
personal-profile-website/
├── backend/                 # Nest.js REST API
│   ├── src/
│   │   ├── guestbook/      # Guestbook module
│   │   ├── supabase/       # Supabase service
│   │   ├── app.module.ts   # Main app module
│   │   └── main.ts         # Entry point
│   ├── .env                # Backend environment variables
│   └── package.json
├── src/                    # Vue.js frontend
│   ├── assets/
│   │   └── styles/        # Global styles
│   ├── components/        # Vue components
│   │   ├── LoadingIntro.vue
│   │   ├── Navigation.vue
│   │   ├── HeroSection.vue
│   │   ├── AboutSection.vue
│   │   ├── EducationSection.vue
│   │   ├── ProjectsSection.vue
│   │   ├── HobbiesSection.vue
│   │   ├── PhotoGallery.vue
│   │   ├── ResourcesSection.vue
│   │   ├── GuestbookSection.vue
│   │   ├── ParallaxBackground.vue
│   │   ├── ScrollProgress.vue
│   │   └── Footer.vue
│   ├── App.vue            # Main app component
│   └── main.js            # Entry point
├── .env                   # Frontend environment variables
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Prerequisites

Make sure you have the following installed:

- **Node.js** 18 or higher
- **npm** or **yarn**
- **Git**

## Installation Steps

### 1. Clone or Navigate to Project

```bash
cd /path/to/personal-profile-website
```

### 2. Install Frontend Dependencies

```bash
npm install
```

### 3. Install Backend Dependencies

```bash
cd backend
npm install
cd ..
```

### 4. Environment Variables

The `.env` files are already configured with your Supabase credentials.

**Frontend (.env):**
- `VITE_API_URL` - Backend API URL
- `VITE_SUPABASE_URL` - Supabase project URL
- `VITE_SUPABASE_ANON_KEY` - Supabase anonymous key

**Backend (backend/.env):**
- `SUPABASE_URL` - Supabase project URL
- `SUPABASE_ANON_KEY` - Supabase anonymous key
- `PORT` - Backend server port (default: 3000)

### 5. Database Setup

The database has been automatically configured with:
- `guestbook` table with columns: id, name, message, created_at
- Row Level Security (RLS) enabled
- Public read/write policies for the guestbook

You can verify this in your Supabase dashboard.

## Running the Application

### Development Mode

You need to run both frontend and backend servers:

**Terminal 1 - Frontend:**
```bash
npm run dev
```
Frontend will run on: http://localhost:5173

**Terminal 2 - Backend:**
```bash
cd backend
npm run start:dev
```
Backend will run on: http://localhost:3000

### Production Build

**Frontend:**
```bash
npm run build
npm run preview
```

**Backend:**
```bash
cd backend
npm run build
npm run start:prod
```

## Customization Guide

### 1. Personal Information

**Hero Section** (`src/components/HeroSection.vue`):
- Update name, title, and description
- Replace profile image URL
- Update social media links

**About Section** (`src/components/AboutSection.vue`):
- Customize your personal story
- Update the intro text

### 2. Education

Edit `src/components/EducationSection.vue`:
```javascript
const educationData = [
  {
    logo: 'your-school-logo-url',
    degree: 'Your Degree',
    school: 'Your School',
    year: '2018 - 2022',
    description: 'Your description'
  }
]
```

### 3. Projects

Edit `src/components/ProjectsSection.vue`:
```javascript
const projects = [
  {
    image: 'project-image-url',
    title: 'Project Name',
    description: 'Project description',
    tech: ['Tech1', 'Tech2', 'Tech3']
  }
]
```

### 4. Hobbies

Edit `src/components/HobbiesSection.vue`:
```javascript
const hobbies = [
  {
    icon: '💻',
    title: 'Your Hobby',
    description: 'Description'
  }
]
```

### 5. Photo Gallery

Edit `src/components/PhotoGallery.vue`:
```javascript
const photos = ref([
  {
    image: 'photo-url',
    location: 'Location',
    caption: 'Your caption',
    liked: false
  }
]
```

### 6. Resources

Edit `src/components/ResourcesSection.vue`:
```javascript
const resources = [
  {
    icon: '📚',
    title: 'Resource Name',
    description: 'Description',
    url: 'https://your-link.com'
  }
]
```

### 7. Colors and Theme

Edit `src/assets/styles/global.css`:
```css
:root {
  --primary-blue: #3B5998;
  --warm-accent: #B36D3B;
  --light-gray: #D1D1D1;
  --soft-white: #F9F9F9;
  --deep-charcoal: #2D2D2D;
}
```

### 8. Loading Animation

Edit `src/components/LoadingIntro.vue`:
- Update the name in the animation
- Customize animation timing

## Features

### ✨ Implemented Features

1. **Loading Animation** - Scrapbook-style intro with animated decorations
2. **Sticky Navigation** - Smooth scrolling with active section highlighting
3. **Scroll Progress** - Visual indicator at the top
4. **Parallax Effects** - Background elements move at different speeds
5. **Hero Section** - Profile with animated social buttons
6. **About Section** - Animated text with decorative elements
7. **Education Cards** - Hover effects and staggered animations
8. **Projects Carousel** - Auto-scrolling glassmorphism cards
9. **Hobbies Grid** - Interactive icon cards with animations
10. **Photo Gallery** - Instagram-style posts with like functionality
11. **Resources** - Link cards with hover effects
12. **Guestbook** - Full CRUD with real-time updates
13. **Dark Mode** - Smooth theme switching with localStorage
14. **Responsive Design** - Mobile-optimized layouts

## API Endpoints

### Backend REST API

**GET /api/guestbook**
- Returns all guestbook entries
- Sorted by creation date (newest first)

**POST /api/guestbook**
- Creates a new guestbook entry
- Body: `{ name: string, message: string }`
- Validation: name (max 100 chars), message (max 500 chars)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Performance Tips

1. Images are loaded from Pexels CDN
2. Animations use CSS transforms for better performance
3. Intersection Observer for scroll animations
4. Lazy loading for off-screen content

## Troubleshooting

### Port Already in Use

If port 5173 or 3000 is already in use:

Frontend:
```bash
npx vite --port 3001
```

Backend - Edit `backend/.env`:
```
PORT=3001
```

### Module Not Found Errors

```bash
# Frontend
npm install

# Backend
cd backend
npm install
```

### Database Connection Issues

1. Verify Supabase credentials in `.env` files
2. Check Supabase dashboard for project status
3. Ensure database migration was applied

### CORS Issues

If frontend can't connect to backend:
1. Check `backend/src/main.ts` CORS configuration
2. Verify `VITE_API_URL` in frontend `.env`
3. Ensure backend is running

## Next Steps

1. Customize all content with your personal information
2. Replace placeholder images with your own
3. Test the guestbook functionality
4. Test dark mode
5. Check mobile responsiveness
6. Deploy to Vercel (see DEPLOYMENT.md)

## Support

For issues:
1. Check browser console for errors
2. Check backend logs
3. Verify environment variables
4. Review database in Supabase dashboard
