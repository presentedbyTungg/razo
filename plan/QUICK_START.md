# 🚀 QUICK START - Bắt Đầu Ngay

Hướng dẫn bước đầu để bắt đầu cải thiện dự án RAZO.

## ⚡ GIAI ĐOẠN 1 - BƯỚC ĐẦU TIÊN (Làm ngay)

### Bước 1: Fix Bugs Nghiêm Trọng (30 phút)

1. **Fix import sai**

   - File: `server/routes/authorize.route.js`
   - Sửa: `import { getUser } from "../controllers/authorize.controller";`
   - Thành: `import { getUser } from "../controllers/authorize.controller.js";`
2. **Fix route trùng lặp**

   - File: `server/app.js`
   - Xóa dòng: `app.use("/api/get", getPosts);`
   - Route `/api/posts` đã có sẵn trong `postRoutes`
3. **Fix logout component**

   - File: `client/src/pages/logout.jsx`
   - Implement logic logout thực sự (clear token, redirect, etc.)
4. **Fix hardcode Posts**

   - File: `client/src/pages/home.jsx`
   - Xóa các `<Posts />` bị duplicate
   - Giữ lại 1 instance, component sẽ tự map data

### Bước 2: Setup Environment (20 phút)

1. **Tạo file `.env` cho server**

   ```
   PORT=3000
   NODE_ENV=development
   JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
   API_URL=http://localhost:3000
   ```
2. **Tạo file `.env` cho client** (hoặc `.env.local`)

   ```
   VITE_API_URL=http://localhost:3000
   ```
3. **Install dotenv**

   ```bash
   cd razo/server
   npm install dotenv
   ```
4. **Update server.js để load env**

   ```javascript
   import 'dotenv/config';
   const PORT = process.env.PORT || 3000;
   ```
5. **Update vite.config.js để load env**

   ```javascript
   // Vite tự động load .env, chỉ cần dùng import.meta.env.VITE_API_URL
   ```

### Bước 3: Tạo Constants File (15 phút)

1. **Tạo `client/src/constants/api.js`**

   ```javascript
   const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

   export const API_ENDPOINTS = {
     POSTS: `${API_BASE_URL}/api/posts`,
     LOGIN: `${API_BASE_URL}/login/get`,
     // Thêm các endpoints khác
   };
   ```
2. **Update các file sử dụng hardcoded URLs**

   - `client/src/pages/home.jsx`
   - `client/src/pages/login.jsx`
   - `client/src/components/Posts.jsx`

### Bước 4: Tạo Folder Structure (10 phút)

Tạo các thư mục còn thiếu:

```
server/
  ├── middlewares/
  ├── utils/
  └── configs/

client/src/
  ├── services/
  ├── hooks/
  ├── utils/
  └── constants/
```

---

## 🎯 Mục Tiêu Tiếp Theo

Sau khi hoàn thành 4 bước trên, bạn sẽ có:

- ✅ Bugs nghiêm trọng đã được fix
- ✅ Environment configuration setup
- ✅ Code structure cải thiện
- ✅ Sẵn sàng cho Giai đoạn 2 (Security)

**Tiếp theo:** Bắt đầu Giai đoạn 2 - Implement Authentication & Security

---

## 📌 Lưu Ý

- Commit sau mỗi bước hoàn thành
- Test lại ứng dụng sau mỗi thay đổi
- Đọc kỹ PLAN.md để hiểu toàn bộ kế hoạch
