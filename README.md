# 🎬 INTHEMOOD PICTURES Website

A modern company website for **INTHEMOOD PICTURES**, a small movie and series production company.  
Built with **React + Vite**, powered by **Supabase**, and deployed on **Vercel**.

---

## 🚀 Tech Stack

- **Frontend Framework**: [React](https://react.dev/) (via [Vite](https://vitejs.dev/))
- **Styling**: Vanilla CSS
- **Backend / Database**: [Supabase](https://supabase.com/) (Postgres, Auth, Storage)
- **Deployment**: [Vercel](https://vercel.com/) (CI/CD from GitHub)
- **Version Control**: [GitHub](https://github.com/)

---

## ⚙️ Getting Started (Local Development)

### 1. Clone the repository

```bash
git clone https://github.com/YOUR-USERNAME/inthemood-pictures-website.git
cd inthemood-pictures-website
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file in the project root:

```bash
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
```

⚠️ Variables must be prefixed with `VITE_` to be exposed in Vite.

### 4. Start the dev server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

---

## 📦 Deployment

This project is hosted on **Vercel**.

1. Push your repo to GitHub.
2. In [Vercel](https://vercel.com/), import the GitHub repo as a new project.
3. Add environment variables:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`
4. Deploy 🚀

---

## 🗂️ Project Structure

```
src/
 ├─ assets/             # Images, posters, logos
 ├─ components/         # Reusable components
 │   ├─ Navbar.jsx
 │   ├─ Footer.jsx
 │   ├─ ProductionCard.jsx
 │   └─ NewsCard.jsx
 ├─ pages/              # Full-page views
 │   ├─ Home.jsx
 │   ├─ About.jsx
 │   ├─ Productions.jsx
 │   ├─ News.jsx
 │   └─ Contact.jsx
 ├─ styles/             # CSS files
 │   ├─ global.css
 │   └─ components.css
 ├─ utils/              # Helper funcitons
 ├─ supabaseClient.js   # Supabase connection
 ├─ App.jsx             # Main app with routes
 └─ main.jsx            # Entry point
```

---

## 🛠️ Database Setup (Supabase)

In the Supabase SQL editor, run:

```sql
-- Productions (Movies & Series)
create table productions (
  id bigint generated always as identity primary key,
  title text not null,
  year int,
  poster_url text,
  trailer_url text,
  description text,
  category text check (category in ('Movie','Series')),
  created_at timestamp default now()
);

-- News / Updates
create table news (
  id bigint generated always as identity primary key,
  title text not null,
  body text,
  image_url text,
  published_at timestamp default now()
);
```

You can insert initial data via the Supabase Table Editor.

---

## 📌 Features

- Showcase company productions with posters, trailers, and descriptions.
- News/updates section for press releases and announcements.
- Company info & contact form.
- Supabase database for dynamic content management.
- Deployed and continuously updated via GitHub + Vercel.

---

## 📸 Roadmap

- [ ] Add Supabase storage integration for hosting movie posters & stills.
- [ ] Add authentication for admin content management.
- [ ] Add trailer embeds (YouTube/Vimeo).
- [ ] Add press-kit download section.
- [ ] Add blog-style updates.

---

## 👨‍💻 Authors

Developed by **INTHEMOOD PICTURES** with ❤️
