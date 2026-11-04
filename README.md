# Apex Admin Dashboard (Next.js + shadcn/ui)

A modern, production-ready admin dashboard built with **Next.js 16 (App Router)**, **Tailwind CSS v4**, and **shadcn/ui** design system components, optimized for deployment on **Vercel**.

---

## 🚀 Features

- **shadcn/ui Architecture:**
  - Full modular component structure under `src/components/ui/` (`Button`, `Card`, `Badge`, `Input`, `Table`, `Avatar`, `Separator`, `Tabs`, `Dialog`, `DropdownMenu`).
  - `cn(...)` utility helper in `src/lib/utils.ts` combining `clsx` and `tailwind-merge`.
  - Design tokens and theme variables in `src/app/globals.css`.
- **Admin Dashboard Layout:**
  - **Sidebar:** Collapsible, mobile-responsive navigation with active indicators, badges, and workspace details.
  - **Header:** Global search (`⌘K`), unread notifications dropdown, dark/light theme switcher, quick actions, and user profile menu.
  - **Stat Cards:** Key performance metrics (Total Revenue, Active Subscriptions, Sales Volume, Real-time users) with positive/negative trend indicators.
  - **Revenue Analytics:** Interactive month-by-month bar chart with hover tooltips and timeframe selectors.
  - **Recent Transactions:** Customer breakdown with avatar badges and status pills.
  - **Orders Table:** Filterable, searchable data table with status badges and dropdown action menus.
  - **Interactive Invoice Modal:** shadcn Dialog modal with form inputs and confirmation state.
- **Dark & Light Mode:** Built-in instantaneous theme switching persisted in `localStorage`.

---

## 🛠️ Getting Started

### 1. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 2. Build for Production
```bash
npm run build
npm run start
```

---

## 🎨 How to Add More shadcn Components

Because shadcn/ui gives you direct ownership of component code:
1. Inspect the official documentation: [shadcn/ui Components](https://ui.shadcn.com/docs/components)
2. Each component is a standard React component placed in `src/components/ui/<component-name>.tsx`.
3. You can customize the styles, variants, or behavior directly in the code without any restriction.

---

## 🚢 Deploying to Vercel

### Option 1: Via GitHub (Recommended)
1. Push your repository to GitHub:
   ```bash
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git branch -M main
   git push -u origin main
   ```
2. Go to [Vercel](https://vercel.com/new).
3. Import your GitHub repository.
4. Vercel automatically detects Next.js — click **Deploy**!

### Option 2: Via Vercel CLI
```bash
npx vercel
```
Follow the interactive prompts to link and deploy your site to production immediately.
