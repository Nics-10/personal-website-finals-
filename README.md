# Personal Profile Website

A full-stack personal portfolio website built with Vue.js, Nest.js, and Supabase.  
Designed with smooth animations, scrapbook-inspired visuals, and a modern responsive layout.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Vue](https://img.shields.io/badge/Vue.js-3-green.svg)
![Nest](https://img.shields.io/badge/Nest.js-red.svg)

---

## 🛠️ Tech Stack

### Frontend
- Vue.js 3 (Composition API)
- Vite
- Axios
- CSS3 animations

### Backend
- Nest.js
- TypeScript
- Supabase Client

### Database
- Supabase (PostgreSQL)
- REST API (GET & POST endpoints)

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn

---

## Installation

### 1. Install Dependencies

```bash
npm install
cd backend
npm install
cd ..
```

### 2. Environment Variables

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

### 3. Run Development Servers

Frontend:
```bash
npm run dev
```
Runs on: http://localhost:5173

Backend (separate terminal):
```bash
cd backend
npm run start:dev
```
Runs on: http://localhost:3000

---

## 🏗️ Production Build

Frontend:
```bash
npm run build
```

Backend:
```bash
cd backend
npm run build
```

---

## 📁 Project Structure

```
personal-profile-website/
├── backend/
│   ├── src/
│   │   ├── guestbook/
│   │   ├── supabase/
│   │   ├── app.module.ts
│   │   └── main.ts
│   ├── .env
│   └── package.json
├── src/
│   ├── assets/styles/global.css
│   ├── components/
│   ├── App.vue
│   └── main.js
├── .env
├── index.html
├── package.json
├── vite.config.js
├── SETUP.md
├── DEPLOYMENT.md
└── README.md
```

---

## 🎯 API Endpoints

### GET /api/guestbook
Returns all guestbook entries (newest first)

### POST /api/guestbook
Creates a new guestbook entry

Request body:
```json
{
  "name": "string (max 100 chars)",
  "message": "string (max 500 chars)"
}
```

---

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

Row Level Security:
- Public SELECT access
- Public INSERT access (with validation)

---

## 🐛 Troubleshooting

### Backend connection issue
- Check `VITE_API_URL`
- Ensure backend is running
- Verify CORS configuration

### Database issue
- Check Supabase credentials
- Confirm table exists
- Review RLS policies

### Clean install
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

---

## 📄 License

MIT License

---

Made with Vue.js and Nest.js