# PhysioSphere – Premium Home Physiotherapy Website

PhysioSphere is a modern, responsive website and interactive booking platform for professional home physiotherapy services across Hyderabad, Telangana, India.

## 🏥 Clinical Leadership & Team
- **Dr. Venu (B.P.T)**: Senior Physiotherapist (4+ Years Clinical Experience, 600+ Patients Treated)
- **PhysioSphere Team**: Dedicated team of 8 licensed physiotherapists serving Central, East, South, West, and North Hyderabad

## 📞 Direct Contact
- **Phone Primary**: +91 7675069960
- **Phone Secondary**: +91 9441677882
- **WhatsApp**: +91 7675069960
- **Email**: info.physiosphere.in@gmail.com / madhava2807@gmail.com / dr.venu882@gmail.com

## ✨ Features
- **Interactive Booking Engine**: Persistent CTA button on desktop and sticky bottom bar on mobile with smart service prefilling.
- **Nodemailer Email Workflows**: Instant admin notifications and customer confirmation emails without any database or authentication overhead.
- **16 Conditions & 8 Specialized Disciplines**: Comprehensive orthopedic, neurological, post-operative, and geriatric physiotherapy care.
- **Searchable Hyderabad Locations**: Real-time search across 80+ Hyderabad neighborhoods.
- **SEO & Structured Data**: Dynamic `sitemap.xml`, `robots.txt`, and `MedicalBusiness` JSON-LD schema.

## 🛠️ Tech Stack
- **Framework**: Next.js (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Email Delivery**: Nodemailer (Gmail SMTP)

## 🚀 Getting Started

### 1. Clone & Install Dependencies
```bash
git clone https://github.com/MadhavaReddy-2807/physiosphere.git
cd physiosphere
npm install
```

### 2. Configure Environment Variables
Create a `.env.local` file based on `.env.example`:
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-gmail-app-password

ADMIN_EMAIL=madhava2807@gmail.com
DOCTOR_EMAIL=dr.venu882@gmail.com
FROM_EMAIL=your-email@gmail.com
```

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for Production
```bash
npm run build
npm start
```
