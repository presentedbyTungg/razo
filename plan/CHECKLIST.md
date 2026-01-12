# ✅ CHECKLIST - Theo Dõi Tiến Độ

## 📋 GIAI ĐOẠN 1: FOUNDATION

### Fix Bugs
- [ ] Fix import sai trong `authorize.route.js`
- [ ] Fix route trùng lặp trong `app.js`
- [ ] Fix component `logout.jsx`
- [ ] Fix hardcode render Posts trong `home.jsx`

### Environment Setup
- [ ] Tạo `.env` files (server & client)
- [ ] Install dotenv packages
- [ ] Update hardcoded URLs
- [ ] Tạo constants/api.js

### Project Structure
- [ ] Tạo thư mục `server/middlewares/`
- [ ] Tạo thư mục `server/utils/`
- [ ] Tạo thư mục `server/configs/`
- [ ] Tạo thư mục `client/src/services/`
- [ ] Tạo thư mục `client/src/hooks/`
- [ ] Tạo thư mục `client/src/utils/`
- [ ] Tạo thư mục `client/src/constants/`
- [ ] Di chuyển API calls vào services
- [ ] Tạo custom hooks cho data fetching

**Progress: 0/17** ⬜⬜⬜⬜⬜

---

## 🔐 GIAI ĐOẠN 2: SECURITY

### Password Security
- [ ] Install bcrypt/bcryptjs
- [ ] Tạo password hash utilities
- [ ] Update user data structure

### JWT Authentication
- [ ] Install jsonwebtoken
- [ ] Tạo JWT utilities (generateToken, verifyToken)
- [ ] Implement login endpoint với JWT
- [ ] Update login response (return token)

### Authentication Middleware
- [ ] Tạo auth middleware
- [ ] Protect routes với middleware
- [ ] Update routes cần authentication

### Client-side Auth
- [ ] Tạo AuthContext
- [ ] Update login component (call API)
- [ ] Store token sau login
- [ ] Update Header component với auth state
- [ ] Implement logout function

### Security Headers
- [ ] Config CORS đúng cách
- [ ] Install và config helmet
- [ ] Add security headers

**Progress: 0/17** ⬜⬜⬜⬜⬜

---

## 💾 GIAI ĐOẠN 3: DATABASE & API

### Database Setup
- [ ] Chọn database (MongoDB/PostgreSQL)
- [ ] Install database driver
- [ ] Tạo database connection config
- [ ] Handle connection errors

### Models
- [ ] Tạo User Model
- [ ] Tạo Post Model
- [ ] Tạo Comment Model (optional)
- [ ] Setup relationships

### Controllers Refactoring
- [ ] Refactor authorize controller
- [ ] Refactor post controller (CRUD)
- [ ] Implement pagination
- [ ] Add error handling

### Services Layer
- [ ] Tạo user.service.js
- [ ] Tạo post.service.js
- [ ] Tách business logic từ controllers

### Validation & Error Handling
- [ ] Install express-validator/joi
- [ ] Create validation middlewares
- [ ] Global error handler
- [ ] Error logging

**Progress: 0/18** ⬜⬜⬜⬜⬜

---

## ⚡ GIAI ĐOẠN 4: CODE QUALITY

### Client Improvements
- [ ] Tạo API service layer (axios instance)
- [ ] Tạo auth.service.js
- [ ] Tạo post.service.js
- [ ] Tạo custom hooks (useAuth, usePosts)
- [ ] Add loading states
- [ ] Add error states
- [ ] Add empty states

### State Management
- [ ] Implement AuthContext properly
- [ ] Consider state management library (optional)

### Performance
- [ ] Add React.memo
- [ ] Add useMemo/useCallback
- [ ] Code splitting với React.lazy
- [ ] Implement pagination
- [ ] Add caching strategies

### Code Quality Tools
- [ ] Update ESLint config
- [ ] Install Prettier
- [ ] Config pre-commit hooks
- [ ] Fix linting issues

### Error Boundaries
- [ ] Create ErrorBoundary component
- [ ] Wrap main app

### Documentation
- [ ] Add JSDoc comments
- [ ] Update README.md
- [ ] Add API documentation

**Progress: 0/25** ⬜⬜⬜⬜⬜

---

## 🧪 GIAI ĐOẠN 5: TESTING (Future)

### Backend Testing
- [ ] Install Jest/Mocha
- [ ] Unit tests cho controllers
- [ ] Integration tests cho routes

### Frontend Testing
- [ ] Install Vitest/React Testing Library
- [ ] Component tests
- [ ] Hook tests

### E2E Testing
- [ ] Install Cypress/Playwright
- [ ] Critical user flows tests

### CI/CD
- [ ] Setup GitHub Actions
- [ ] Config deployment

**Progress: 0/11** ⬜⬜⬜⬜⬜

---

## 📊 TỔNG KẾT

**Tổng cộng: 0/88 tasks**

- ✅ Đã hoàn thành: 0
- ⏳ Đang làm: 0  
- ⬜ Chưa làm: 88

**Tiến độ tổng thể: 0%**

---

### 📝 Ghi chú
- Tick checkbox khi hoàn thành: `- [x]`
- Update progress sau mỗi task
- Commit thường xuyên

