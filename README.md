# 🏡 Rental Property Management

> **Find & List Rental Properties with Ease**

RentNest is a modern, responsive rental property marketplace built with **Next.js 16**, **TypeScript**, **Tailwind CSS**, and **shadcn/ui**. It provides a seamless experience for tenants, landlords, and administrators to browse, manage, and rent properties through a secure and user-friendly interface.

---

## 🚀 Live Demo

* **Frontend:** https://rent-nest-liart.vercel.app
* **Backend API:** https://rent-nest-server-red.vercel.app

---

## 📸 Preview

*Add screenshots or a GIF of your application here.*

---

# ✨ Key Features

## 🌍 Public Features

* Responsive modern landing page
* Featured property listings
* Property categories
* Advanced property search & filtering
* Property details page
* Loading skeletons
* Custom error pages
* Responsive navigation
* Beautiful UI built with shadcn/ui

---

## 🔐 Authentication

* User Registration
* User Login
* JWT Authentication
* Role-based authorization
* Protected routes with Next.js Middleware
* React Hook Form + Zod validation

---

## 👤 Tenant Features

* Browse rental properties
* View property details
* Submit rental requests
* Track request status
* Secure Stripe payment
* Payment success & cancel pages
* View payment history
* Leave property reviews

---

## 🏠 Landlord Features

* Dashboard overview
* Create property listings
* Update property listings
* Delete property listings
* Upload property images with Cloudinary
* Manage rental requests
* Approve or reject requests
* Earnings overview

---

## 🛡️ Admin Features

* Admin dashboard
* User management
* Ban / Unban users
* Property moderation
* Rental request monitoring
* Platform analytics

---

# 🛠️ Tech Stack

## Frontend

* Next.js 16 (App Router)
* TypeScript
* Tailwind CSS
* shadcn/ui
* TanStack Query
* React Hook Form
* Zod
* Axios
* Zustand
* Sonner
* Lucide React
* next-themes

---

## Backend

* Node.js
* Express.js
* Prisma ORM
* PostgreSQL
* JWT Authentication
* Stripe
* Cloudinary

---

# 📂 Folder Structure

```text
├── app
├── components
│   ├── home
│   ├── shared
│   ├── property
│   ├── dashboard
│   └── ui
│
├── services
├── hooks
├── lib
├── providers
├── store
├── types
├── constants
├── utils
└── middleware.ts
```

---

# 🖼️ Image Upload

RentNest uses **Cloudinary** for cloud-based image storage.

### Benefits

* Secure image hosting
* Fast CDN delivery
* Automatic optimization
* High-quality image rendering
* Scalable cloud storage

---

# 💳 Payment Gateway

RentNest integrates **Stripe Checkout** for secure online payments.

### Payment Flow

Tenant → Rental Request → Approval → Stripe Checkout → Success / Cancel → Dashboard Update

---

# 📱 Responsive Design

* Mobile
* Tablet
* Laptop
* Desktop

---

# ✅ Form Validation

All forms include:

* React Hook Form
* Zod Validation
* Inline validation messages
* Toast notifications
* API error handling

---

# 🔒 Authentication & Security

* JWT Authentication
* HTTP-only Cookies
* Middleware Route Protection
* Role-based Access Control
* Protected Dashboard Routes

---

# 🎨 UI Components

Built using **shadcn/ui** components:

* Button
* Card
* Badge
* Avatar
* Dialog
* Dropdown Menu
* Table
* Skeleton
* Form
* Input
* Textarea
* Alert Dialog
* Tabs

---

# 📊 Core Functionalities

* Property CRUD
* Rental Request Management
* Advanced Search & Filtering
* Dashboard Analytics
* Role-based Navigation
* Secure Payment Processing
* Review System

---

# ⚙️ Installation

Clone the repository:

```bash
git clone https://github.com/imranh-dev1/Rent_Nest_Frontend
git clone https://github.com/imranh-dev1/Rent_Nest_Backend
```

Go to the project folder:

```bash
cd rentnest-frontend
```

Install dependencies:

```bash
pnpm install
```

Create a `.env.local` file:

```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api

NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloud_name

NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_publishable_key
```

Run the development server:

```bash
pnpm dev
```

Open:

```text
http://localhost:3000
```

---

# 🚀 Deployment

Frontend

* Vercel

Backend

* Render / Vercel

---

# 👨‍💻 Developer

**Imran Hossain**

* GitHub: https://github.com/imranh-dev1
* LinkedIn: https://www.linkedin.com/in/imranh-dev1

---

# 📄 License

This project is developed for educational purposes as part of the **RentNest Rental Marketplace** .
