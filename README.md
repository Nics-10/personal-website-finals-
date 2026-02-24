# Personal Profile Website - Cinematic Experience

A stunning full-stack personal portfolio website with cinematic animations, scrapbook aesthetics, and modern design. Built with Vue.js, Nest.js, and Supabase.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Vue](https://img.shields.io/badge/Vue.js-3.4-green.svg)
![Nest](https://img.shields.io/badge/Nest.js-10.3-red.svg)

## ✨ Features

### Visual & Animations
- 🎬 **Cinematic Loading Intro** - Scrapbook-style animated introduction
- 🎨 **Parallax Scrolling** - Multi-layer depth effects
- ✨ **Smooth Transitions** - Section-based scroll animations
- 🌙 **Dark Mode** - Seamless theme switching with localStorage
- 📱 **Fully Responsive** - Mobile-first design

### Sections
- 🏠 **Hero Section** - Animated profile with social media links
- 👤 **About Me** - Personal introduction with decorative elements
- 🎓 **Education** - Interactive card layout with hover effects
- 🚀 **Projects** - Auto-scrolling glassmorphism carousel
- 🎯 **Hobbies** - Icon grid with bounce animations
- 📸 **Photo Gallery** - Instagram-style posts with likes
- 📚 **Resources** - Link cards with hover animations
- 💬 **Guestbook** - Real-time messaging with backend API

### Technical Features
- 📊 **Scroll Progress** - Visual indicator at top
- 🧭 **Sticky Navigation** - Active section highlighting
- 🔄 **REST API** - Full backend integration
- 🗄️ **Database** - Supabase PostgreSQL with RLS
- 🎯 **Intersection Observer** - Efficient scroll detection
- ⚡ **Optimized Performance** - CSS transforms and lazy loading

## 🛠️ Tech Stack

### Frontend
- **Vue.js 3** - Composition API
- **Vite** - Build tool and dev server
- **Axios** - HTTP client
- **CSS3** - Animations and transitions

### Backend
- **Nest.js** - REST API framework
- **TypeScript** - Type safety
- **Supabase Client** - Database integration

### Database
- **Supabase** - PostgreSQL with Row Level Security
- **REST API** - GET and POST endpoints

## 🎨 Design System

### Color Palette
- Primary Blue: `#3B5998`
- Warm Accent (Biscoff Orange): `#B36D3B`
- Light Gray: `#D1D1D1`
- Soft White: `#F9F9F9`
- Deep Charcoal: `#2D2D2D`

### Typography
- Headers: Helvetica Bold / Arial Black
- Body: Roboto / San Francisco
- Editorial Accent: Georgia Italic

### Visual Style
- Digital scrapbook aesthetic
- Paper grain texture overlay
- Hand-drawn SVG doodles
- Floating drop shadows
- Glassmorphism cards

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn
- Supabase account (already configured)

### Installation

1. **Install Dependencies**
```bash
npm install
cd backend
npm install
cd ..
```

2. **Environment Variables**

The project is already configured with `.env` files. Verify the values:

Frontend `.env`:
```
VITE_API_URL=http://localhost:3000/api
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

Backend `backend/.env`:
```
SUPABASE_URL=your_supabase_url
SUPABASE_ANON_KEY=your_supabase_anon_key
PORT=3000
```

3. **Run Development Servers**

Frontend:
```bash
npm run dev
```
Runs on http://localhost:5173

Backend (in separate terminal):
```bash
cd backend
npm run start:dev
```
Runs on http://localhost:3000

### Build for Production

Frontend:
```bash
npm run build
```

Backend:
```bash
cd backend
npm run build
```

## 📁 Project Structure

```
personal-profile-website/
├── backend/                    # Nest.js REST API
│   ├── src/
│   │   ├── guestbook/         # Guestbook module
│   │   │   ├── guestbook.controller.ts
│   │   │   ├── guestbook.service.ts
│   │   │   ├── guestbook.module.ts
│   │   │   └── dto/
│   │   ├── supabase/          # Supabase service
│   │   │   ├── supabase.service.ts
│   │   │   └── supabase.module.ts
│   │   ├── app.module.ts
│   │   └── main.ts
│   ├── .env
│   └── package.json
├── src/                       # Vue.js frontend
│   ├── assets/
│   │   └── styles/
│   │       └── global.css
│   ├── components/
│   │   ├── LoadingIntro.vue
│   │   ├── ScrollProgress.vue
│   │   ├── ParallaxBackground.vue
│   │   ├── Navigation.vue
│   │   ├── HeroSection.vue
│   │   ├── AboutSection.vue
│   │   ├── EducationSection.vue
│   │   ├── ProjectsSection.vue
│   │   ├── HobbiesSection.vue
│   │   ├── PhotoGallery.vue
│   │   ├── ResourcesSection.vue
│   │   ├── GuestbookSection.vue
│   │   └── Footer.vue
│   ├── App.vue
│   └── main.js
├── .env
├── index.html
├── package.json
├── vite.config.js
├── SETUP.md                   # Detailed setup guide
├── DEPLOYMENT.md              # Deployment instructions
└── README.md
```

## 🎯 API Endpoints

### Guestbook API

**GET `/api/guestbook`**
- Returns all guestbook entries
- Sorted by creation date (newest first)

**POST `/api/guestbook`**
- Creates a new guestbook entry
- Request body:
```json
{
  "name": "string (max 100 chars)",
  "message": "string (max 500 chars)"
}
```

## 🗄️ Database Schema

### Guestbook Table
```sql
guestbook (
  id uuid PRIMARY KEY,
  name text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
)
```

**Row Level Security:**
- Public read access (SELECT)
- Public write access (INSERT) with validation

## 🎨 Customization

### Update Personal Info

1. **Hero Section** - `src/components/HeroSection.vue`
   - Name, title, description
   - Profile image
   - Social media links

2. **Education** - `src/components/EducationSection.vue`
   - Edit `educationData` array

3. **Projects** - `src/components/ProjectsSection.vue`
   - Edit `projects` array

4. **Hobbies** - `src/components/HobbiesSection.vue`
   - Edit `hobbies` array

5. **Gallery** - `src/components/PhotoGallery.vue`
   - Edit `photos` array

6. **Resources** - `src/components/ResourcesSection.vue`
   - Edit `resources` array

### Customize Theme

Edit `src/assets/styles/global.css`:
```css
:root {
  --primary-blue: #3B5998;
  --warm-accent: #B36D3B;
  /* Add your colors */
}
```

## 🚀 Deployment

See [DEPLOYMENT.md](DEPLOYMENT.md) for complete deployment instructions.

### Quick Deploy to Vercel

**Frontend:**
1. Push to GitHub
2. Import to Vercel
3. Add environment variables
4. Deploy

**Backend:**
1. Create new Vercel project
2. Set root directory to `backend`
3. Add environment variables
4. Deploy

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Android)

## 🔒 Security Features

- Environment variables for sensitive data
- Row Level Security on database
- CORS configuration
- Input validation
- HTTPS enforced (in production)

## 🐛 Troubleshooting

### Common Issues

**Frontend can't connect to backend:**
- Verify `VITE_API_URL` is correct
- Check backend is running on port 3000
- Review CORS settings in `backend/src/main.ts`

**Database connection failed:**
- Verify Supabase credentials in `.env`
- Check database is accessible
- Review RLS policies

**Build errors:**
```bash
# Clean install
rm -rf node_modules package-lock.json
npm install
npm run build
```

See [SETUP.md](SETUP.md) for detailed troubleshooting.

## 📚 Documentation

- [SETUP.md](SETUP.md) - Complete setup guide
- [DEPLOYMENT.md](DEPLOYMENT.md) - Deployment instructions

## 🎯 Performance

- Optimized animations using CSS transforms
- Lazy loading for images
- Intersection Observer for scroll detection
- Minimal dependencies
- CDN for images (Pexels)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

Your Name
- Website: [your-website.com](https://your-website.com)
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your Name](https://linkedin.com/in/yourprofile)

## 🙏 Acknowledgments

- Images from [Pexels](https://pexels.com)
- Icons and fonts from Google Fonts
- Built with Vue.js, Nest.js, and Supabase

---

Made with ❤️ and Vue.js