# 🐦 Aviary Birds – Kelanara FrontEnd Intern Test

Dibuat menggunakan Next.js 15 (App Router), Tailwind CSS, dan TypeScript.

## 💻 Live Website

🔗 [kelanara-aviary-bird.vercel.app](https://kelanara-aviary-bird.vercel.app/)
🔗 [Github](https://github.com/bayufadayan/kelanara-fe-test)

## 🚀 Cara Menjalankan Project (Via File Zip)

### 1. Ekstrak File Zip ini

### 2. Buka Folder di VS Code

### 3. Buka Terminal dan Jalankan Dependencies

```bash
npm install
```

### 4.0 Jalankan di mode development

```bash
npm run dev
```

### 4.1 Jalankan di mode production

```bash
npm run build
npm start
```

### 5. Buka di browser

```
http://localhost:3000
```

## 🚀 Cara Menjalankan Project (Via Github Clone)

### 1. Clone Repo ini

```bash
git clone https://github.com/bayufadayan/kelanara-fe-test.git
```

### 2. Buka di VS Code

### 3. Buka Terminal dan Jalankan Dependencies

```bash
npm install
```

### 4 Jalankan di mode development

```bash
npm run dev
```

### 5. Buka di browser

```
http://localhost:3000
```

## 📁 Struktur Folder

```
.
├── public/               # Berisi aset statis (gambar, icon, dll)
│   ├── icons/            # Icon SVG seperti hamburger dan tombol play
│   ├── images/           # Gambar carousel, hero, komunitas, dll
│   └── *.svg             # Gambar umum lainnya
│
├── src/
│   ├── app/              # File utama seperti layout, global CSS, dan halaman utama
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│
│   ├── components/       # Komponen React modular
│   │   ├── Home/         # Komponen khusus halaman utama
│   │   │   ├── Caraosel/
│   │   │   │   ├── Container/
│   │   │   │   ├── Item/
│   │   │   │   ├── Overlay/
│   │   │   │   └── index.tsx
│   │   │   ├── Community/
│   │   │   │   ├── Container/
│   │   │   │   ├── Item/
│   │   │   │   └── index.tsx
│   │   │   ├── Hero/
│   │   │   │   ├── Background/
│   │   │   │   ├── Content/
│   │   │   │   └── index.tsx
│   │   │   ├── News/
│   │   │   │   ├── Container/
│   │   │   │   ├── Item/
│   │   │   │   └── index.tsx
│   │   │
│   │   ├── Navigation/   # Komponen navigasi responsif
│   │   │   ├── HamburgerButton/
│   │   │   ├── Logo/
│   │   │   ├── MainMenu/
│   │   │   ├── MobileMenu/
│   │   │   ├── RightMenu/
│   │   │   └── index.tsx
│   │   │
│   │   └── common/       # Komponen umum reusable
│   │       ├── HomeSectionTitle/
│   │       └── SmallButton/
│
│   ├── data/             # Data statis dalam format JSON
│   │   ├── carousel.json
│   │   ├── community.json
│   │   └── news.json
│
│   └── utils/
│       └── fonts.ts      # Setup custom font
│
├── package.json
├── tsconfig.json
├── next.config.ts
├── postcss.config.mjs
├── eslint.config.mjs
└── README.md             # File ini
```

## 💡 Ketentuan Rekrutment

- ✅ Menggunakan **Next.js v15 (App Router)**
- ✅ Menggunakan **React Functional Component**
- ✅ Styling menggunakan **Tailwind CSS**
- ✅ Komponen **reusable** (seperti header, card, dll)
- ✅ Layout **responsif** (mobile & desktop)
- ✅ Embed video YouTube (https://youtu.be/YQCo9rWFgAY?si=K-IUSt2KA8ar97yW)

---

# Muhamad Bayu Fadayan
