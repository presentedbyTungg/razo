# RAZO - Social Media Platform

Dự án mạng xã hội được xây dựng với React (Vite) và Node.js (Express).

## 🚀 Tech Stack

### Frontend
- **React 19.2.0** - UI Framework
- **Vite 7.2.4** - Build tool
- **React Router DOM 7.11.0** - Routing
- **Font Awesome** - Icons

### Backend
- **Node.js** - Runtime
- **Express 5.2.1** - Web framework
- **CORS** - Cross-origin resource sharing

## 📁 Cấu Trúc Dự Án

```
razo/
├── client/                 # Frontend React app
│   ├── public/
│   └── src/
│       ├── components/    # React components
│       ├── pages/         # Page components
│       ├── layout/        # Layout components
│       ├── assets/        # CSS, images
│       └── main.jsx       # Entry point
│
├── server/                # Backend Express app
│   ├── controllers/       # Route controllers
│   ├── routes/           # API routes
│   ├── models/           # Database models (to be implemented)
│   ├── middlewares/      # Custom middlewares (to be implemented)
│   ├── services/         # Business logic layer (to be implemented)
│   ├── configs/          # Configuration files (to be implemented)
│   ├── app.js            # Express app setup
│   └── server.js         # Server entry point
│
├── PLAN.md               # 📋 Kế hoạch phát triển chi tiết
├── QUICK_START.md        # 🚀 Hướng dẫn bắt đầu nhanh
└── CHECKLIST.md          # ✅ Checklist theo dõi tiến độ
```

## 🔧 Installation

### Prerequisites
- Node.js >= 18.0.0
- npm hoặc yarn

### Setup

1. **Install dependencies cho client:**
   ```bash
   npm install
   ```

2. **Install dependencies cho server:**
   ```bash
   cd server
   npm install
   ```

3. **Setup environment variables:**
   - Tạo file `.env` trong `server/` (xem `.env.example`)
   - Tạo file `.env.local` trong `client/` (xem `.env.example`)

4. **Run development server:**
   
   Terminal 1 (Backend):
   ```bash
   cd server
   npm run dev
   ```
   
   Terminal 2 (Frontend):
   ```bash
   npm run dev
   ```

## 📋 Kế Hoạch Phát Triển

Dự án đang trong quá trình cải thiện. Xem các file sau để biết chi tiết:

- **[PLAN.md](./PLAN.md)** - Kế hoạch phát triển chi tiết (4 giai đoạn)
- **[QUICK_START.md](./QUICK_START.md)** - Hướng dẫn bắt đầu ngay
- **[CHECKLIST.md](./CHECKLIST.md)** - Checklist theo dõi tiến độ

### Các Giai Đoạn Chính:

1. **Giai đoạn 1: Foundation** - Fix bugs & setup environment ⏳
2. **Giai đoạn 2: Security** - Authentication & Authorization 📅
3. **Giai đoạn 3: Database & API** - Backend enhancement 📅
4. **Giai đoạn 4: Code Quality** - Optimization & best practices 📅
5. **Giai đoạn 5: Testing** - Unit, Integration & E2E tests 📅

## ⚠️ Current Status

Dự án đang ở giai đoạn đầu, có một số vấn đề cần giải quyết:

- ❌ Security issues (password plaintext, no authentication)
- ❌ Bugs cần fix (import errors, route conflicts)
- ❌ Chưa có database
- ❌ Thiếu error handling
- ⚠️ Code quality cần cải thiện

**👉 Bắt đầu với [QUICK_START.md](./QUICK_START.md) để fix các vấn đề nghiêm trọng đầu tiên!**

## 📝 Scripts

### Client
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Server
- `npm start` - Start production server
- `npm run dev` - Start development server với nodemon

## 🤝 Contributing

1. Đọc [PLAN.md](./PLAN.md) để hiểu roadmap
2. Check [CHECKLIST.md](./CHECKLIST.md) để xem tasks
3. Follow coding conventions
4. Commit với message rõ ràng

## 📄 License

ISC

---

**Last Updated:** 2024  
**Status:** 🚧 In Development
