# 📋 KẾ HOẠCH PHÁT TRIỂN DỰ ÁN RAZO

**Ngày tạo:** 2024
**Mục tiêu:** Cải thiện bảo mật, code quality và kiến trúc dự án

---

## 🎯 TỔNG QUAN

Kế hoạch này được chia thành 4 giai đoạn chính, tập trung vào:

1. **Giai đoạn 1:** Fix bugs và cấu hình môi trường (Foundation)
2. **Giai đoạn 2:** Bảo mật và xác thực (Security)
3. **Giai đoạn 3:** Database và API (Backend)
4. **Giai đoạn 4:** Code quality và tối ưu (Enhancement)

---

## 📌 GIAI ĐOẠN 1: FOUNDATION - Fix Bugs & Setup Environment

**Ưu tiên:** CRITICAL
**Thời gian ước tính:** 2-3 ngày

### 1.1 Fix Bugs Nghiêm Trọng

- [ ] **Fix import sai trong `authorize.route.js`**

  - Thêm extension `.js` vào import
  - File: `server/routes/authorize.route.js`
- [ ] **Fix route trùng lặp trong `app.js`**

  - Xóa route `/api/get` trùng lặp
  - Sử dụng router đúng cách
  - File: `server/app.js`
- [ ] **Fix component `logout.jsx`**

  - Component đang import sai `Login`
  - Implement logic logout thực sự
  - File: `client/src/pages/logout.jsx`
- [ ] **Fix hardcode render Posts**

  - Xóa các component `Posts` bị hardcode
  - Render động từ data API
  - File: `client/src/pages/home.jsx`

### 1.2 Environment Configuration

- [ ] **Setup `.env` files**

  - Tạo `.env.example` cho cả client và server
  - Tạo `.env.local` cho development
  - Cấu hình: PORT, API_URL, JWT_SECRET, DB_CONNECTION, etc.
- [ ] **Install dotenv packages**

  - `npm install dotenv` cho server
  - Config Vite để load env vars cho client
- [ ] **Update hardcoded URLs**

  - Thay `http://localhost:3000` bằng env variables
  - Tạo file `constants/api.js` cho API endpoints
  - Files: `client/src/pages/home.jsx`, `client/src/pages/login.jsx`, `client/src/components/Posts.jsx`

### 1.3 Project Structure Improvements

- [ ] **Tạo các thư mục còn thiếu**

  - `server/utils/` - Utility functions
  - `server/middlewares/` - Custom middlewares
  - `client/src/services/` - API service layer
  - `client/src/hooks/` - Custom React hooks
  - `client/src/utils/` - Client utilities
  - `client/src/constants/` - Constants
- [ ] **Tổ chức lại cấu trúc**

  - Di chuyển API calls vào services
  - Tạo custom hooks cho data fetching
  - Tách constants ra file riêng

---

## 🔐 GIAI ĐOẠN 2: SECURITY - Authentication & Authorization

**Ưu tiên:** CRITICAL
**Thời gian ước tính:** 3-4 ngày
**Dependencies:** Giai đoạn 1

### 2.1 Password Security

- [ ] **Install bcrypt**

  - `npm install bcrypt` hoặc `bcryptjs`
  - Tạo utility functions cho hash/compare password
- [ ] **Update user data structure**

  - Thay đổi từ plaintext sang hashed passwords
  - Tạo migration script để hash existing data

### 2.2 JWT Authentication

- [ ] **Install JWT packages**

  - `npm install jsonwebtoken`
  - `npm install --save-dev @types/jsonwebtoken` (nếu dùng TypeScript)
- [ ] **Tạo JWT utilities**

  - `server/utils/jwt.js` - generateToken, verifyToken
  - Config JWT_SECRET từ env
- [ ] **Implement login endpoint**

  - Xác thực password với bcrypt
  - Generate JWT token khi login thành công
  - Return token và user info (không bao gồm password)
  - File: `server/controllers/authorize.controller.js`

### 2.3 Authentication Middleware

- [ ] **Tạo authentication middleware**

  - `server/middlewares/auth.middleware.js`
  - Verify JWT token từ request headers
  - Attach user info vào `req.user`
- [ ] **Protect routes**

  - Áp dụng middleware cho protected routes
  - Update routes cần authentication

### 2.4 Client-side Authentication

- [ ] **Tạo Auth Context**

  - `client/src/contexts/AuthContext.jsx`
  - Manage authentication state
  - Store JWT token (localStorage/sessionStorage)
- [ ] **Update login component**

  - Call API thay vì xác thực client-side
  - Store token sau khi login thành công
  - Redirect sau khi login
- [ ] **Update Header component**

  - Check authentication state từ context
  - Show/hide login button
  - Implement logout function

### 2.5 CORS & Security Headers

- [ ] **Config CORS đúng cách**

  - Chỉ allow origin từ env variable
  - Config credentials if needed
  - File: `server/app.js`
- [ ] **Add security headers**

  - Install `helmet` package
  - Config security headers
  - Prevent XSS, clickjacking, etc.

---

## 💾 GIAI ĐOẠN 3: DATABASE & API - Backend Enhancement

**Ưu tiên:** HIGH
**Thời gian ước tính:** 4-5 ngày
**Dependencies:** Giai đoạn 2

### 3.1 Database Setup

- [ ] **Chọn và setup database**

  - Option 1: MongoDB với Mongoose
  - Option 2: PostgreSQL với Sequelize/Prisma
  - Install driver packages
- [ ] **Database connection**

  - Tạo `server/configs/database.js`
  - Config connection từ env variables
  - Handle connection errors

### 3.2 Models & Schemas

- [ ] **User Model**

  - Schema: id, username, account, password (hashed), userImage, createdAt, updatedAt
  - Validation rules
  - Indexes (account should be unique)
  - File: `server/models/User.model.js`
- [ ] **Post Model**

  - Schema: id, userId, content, images, likes, comments, createdAt, updatedAt
  - Relationship với User
  - File: `server/models/Post.model.js`
- [ ] **Comment Model (Optional)**

  - Schema: id, postId, userId, content, createdAt
  - Relationships
  - File: `server/models/Comment.model.js`

### 3.3 Controllers Refactoring

- [ ] **Refactor authorize controller**

  - Sử dụng database thay vì hardcode data
  - Proper error handling
  - File: `server/controllers/authorize.controller.js`
- [ ] **Refactor post controller**

  - CRUD operations với database
  - Implement: createPost, getPosts, getPostById, updatePost, deletePost
  - Pagination cho getPosts
  - File: `server/controllers/post.controller.js`

### 3.4 API Services Layer

- [ ] **Tạo service layer**
  - `server/services/user.service.js` - User business logic
  - `server/services/post.service.js` - Post business logic
  - Tách business logic khỏi controllers

### 3.5 Validation & Error Handling

- [ ] **Install validation package**

  - `npm install express-validator` hoặc `joi`
- [ ] **Create validation middlewares**

  - Validate request body/params/query
  - Return proper error messages
- [ ] **Global error handler**

  - `server/middlewares/errorHandler.middleware.js`
  - Handle different error types
  - Return consistent error format
  - Add error logging

---

## ⚡ GIAI ĐOẠN 4: CODE QUALITY & OPTIMIZATION

**Ưu tiên:** MEDIUM
**Thời gian ước tính:** 3-4 ngày
**Dependencies:** Giai đoạn 3

### 4.1 Client-side Improvements

- [ ] **API Service Layer**

  - Tạo `client/src/services/api.js` - Axios instance với interceptors
  - Tạo `client/src/services/auth.service.js` - Auth API calls
  - Tạo `client/src/services/post.service.js` - Post API calls
- [ ] **Custom Hooks**

  - `useAuth` - Authentication logic
  - `usePosts` - Posts data fetching với React Query hoặc SWR
  - `useOnlineUsers` - Online users fetching
- [ ] **Loading & Error States**

  - Add loading spinners
  - Add error messages display
  - Add empty states
  - Update components: Home, Posts, Login

### 4.2 State Management

- [ ] **Implement Context API properly**

  - AuthContext cho authentication
  - AppContext cho global state (nếu cần)
- [ ] **Consider state management library**

  - Option: Zustand (lightweight)
  - Option: Redux Toolkit (if needed)
  - Only if Context API không đủ

### 4.3 Performance Optimization

- [ ] **React Performance**

  - Add React.memo cho components
  - useMemo, useCallback cho expensive operations
  - Code splitting với React.lazy
- [ ] **API Optimization**

  - Implement pagination
  - Add caching strategies
  - Debounce search inputs (nếu có)

### 4.4 Code Quality Tools

- [ ] **ESLint Configuration**

  - Add more rules
  - Fix existing linting issues
  - Config pre-commit hooks (husky)
- [ ] **Prettier Setup**

  - Install Prettier
  - Config format on save
  - Add .prettierrc và .prettierignore

### 4.5 Error Boundaries

- [ ] **Create Error Boundary component**
  - `client/src/components/ErrorBoundary.jsx`
  - Catch React errors
  - Display fallback UI
  - Wrap main app

### 4.6 Code Documentation

- [ ] **Add JSDoc comments**

  - Document functions và components
  - Add type hints (có thể migrate sang TypeScript sau)
- [ ] **Update README.md**

  - Project description
  - Installation instructions
  - Environment setup
  - API documentation
  - Development guide

---

## 🧪 GIAI ĐOẠN 5: TESTING & DEPLOYMENT (Future)

**Ưu tiên:** LOW
**Thời gian ước tính:** 5-7 ngày
**Dependencies:** Giai đoạn 4

### 5.1 Testing Setup

- [ ] **Backend Testing**

  - Install Jest hoặc Mocha
  - Unit tests cho controllers
  - Integration tests cho routes
  - Test authentication flow
- [ ] **Frontend Testing**

  - Install Vitest hoặc Jest + React Testing Library
  - Component tests
  - Hook tests
- [ ] **E2E Testing (Optional)**

  - Cypress hoặc Playwright
  - Critical user flows

### 5.2 CI/CD Pipeline

- [ ] **GitHub Actions**

  - Run tests on PR
  - Lint check
  - Build check
- [ ] **Deployment**

  - Setup production environment
  - Config database cho production
  - Setup monitoring/logging

---

## 📊 TRACKING PROGRESS

### Checklist Summary

- **Giai đoạn 1:** 0/12 tasks completed
- **Giai đoạn 2:** 0/15 tasks completed
- **Giai đoạn 3:** 0/15 tasks completed
- **Giai đoạn 4:** 0/18 tasks completed
- **Giai đoạn 5:** 0/8 tasks completed

**Total:** 0/68 tasks

---

## 🎯 QUY TẮC LÀM VIỆC

1. **Luôn commit sau mỗi task hoàn thành**

   - Commit message rõ ràng: `feat:`, `fix:`, `refactor:`, etc.
2. **Test sau mỗi thay đổi**

   - Manual testing ít nhất
   - Check console không có errors
3. **Review code trước khi merge**

   - Check linter không có errors
   - Code follow conventions
4. **Document changes**

   - Update README khi cần
   - Comment code phức tạp

---

## 📝 NOTES

- Ưu tiên cao nhất: Fix bugs và security issues
- Database có thể chọn MongoDB (đơn giản) hoặc PostgreSQL (mạnh mẽ hơn)
- Có thể bỏ qua Giai đoạn 5 nếu chỉ cần MVP
- TypeScript migration có thể làm sau khi codebase ổn định

---

**Last Updated:** 2024
**Next Review:** Sau khi hoàn thành Giai đoạn 1
