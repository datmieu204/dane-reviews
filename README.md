# Dane Reviews — Simple Landing Page

Trang landing page cá nhân & affiliate link tối giản dành cho **Dane Reviews**, được xây dựng dựa trên đặc tả kỹ thuật v3.0 ([dane_reviews_simple_landing_page_specs.md](./dane_reviews_simple_landing_page_specs.md)).

---

## 🌟 Đặc điểm nổi bật

- **Tối giản & Siêu nhanh:** Không sử dụng database hay backend server phức tạp; dữ liệu tải tĩnh ngay từ JSON, tối ưu chuẩn SEO và Core Web Vitals.
- **Thiết kế chuẩn thẩm mỹ (Warm Aesthetic):**
  - Màu nền ấm beige `#F3F0EB`, chữ xanh rêu đậm `#50572D`, điểm nhấn phụ `#6F7257`.
  - Font chữ thanh lịch: `Playfair Display` (tiêu đề thương hiệu) và `DM Sans` (giao diện, thông tin sản phẩm).
  - Thẻ sản phẩm bóng kính mờ (glassmorphic subtle border & shadow), hiệu ứng hover tinh tế.
- **Responsive hoàn hảo:**
  - Màn hình điện thoại (< 640px): Lưới sản phẩm 2 cột tối ưu cho trải nghiệm lướt chạm.
  - Màn hình rộng (>= 640px): Lưới 3 cột căn giữa với bề ngang tối đa 720px chuẩn phong cách Bio Link.
- **Quản lý nội dung dễ dàng:** Chủ kênh chỉ cần chỉnh sửa các file JSON và ảnh trong thư mục `public/` mà không cần đụng đến code React.

---

## 📁 Cấu trúc thư mục

```text
dane_reviews/
├── app/
│   ├── layout.tsx         # Root layout, Google Fonts (DM Sans & Playfair Display), SEO Meta
│   ├── page.tsx           # Trang chủ render dữ liệu từ JSON
│   └── globals.css        # Design System & CSS tokens hoàn chỉnh
├── components/
│   ├── ProfileHeader.tsx  # Avatar tròn, tên Dane Reviews, tiểu sử
│   ├── SocialLinks.tsx    # Biểu tượng mạng xã hội (Instagram, TikTok, Facebook, Email)
│   ├── ProductGrid.tsx    # Lưới hiển thị sản phẩm responsive
│   ├── ProductCard.tsx    # Thẻ sản phẩm (ảnh 1:1, mã TDx, tên 2 dòng, link affiliate)
│   └── Footer.tsx         # Affiliate Disclosure & Bản quyền
├── data/
│   ├── profile.json       # Cấu hình thông tin cá nhân & mạng xã hội
│   └── products.json      # Danh sách sản phẩm (mã, tên, ảnh, link, trạng thái)
├── public/
│   ├── avatar.jpg         # Ảnh đại diện cá nhân
│   └── products/          # Thư mục ảnh sản phẩm (TD1.jpg, TD2.jpg, ...)
├── types/
│   └── index.ts           # Type definitions TypeScript
├── package.json
├── tsconfig.json
├── next.config.ts
└── README.md
```

---

## 🛠 Hướng dẫn quản trị nội dung

### 1. Thêm sản phẩm mới
1. Thêm ảnh sản phẩm tỉ lệ 1:1 vào thư mục: `public/products/TD10.jpg`.
2. Mở file `data/products.json` và thêm đối tượng sản phẩm mới:
```json
{
  "code": "TD10",
  "name": "Áo sơ mi linen cổ trụ",
  "image": "/products/TD10.jpg",
  "url": "https://s.shopee.vn/link-affiliate-cua-ban",
  "active": true
}
```
3. Commit & Push lên GitHub: Vercel sẽ tự động deploy và cập nhật sản phẩm lên website ngay lập tức.

### 2. Ẩn hoặc hiển thị lại sản phẩm
Không cần xóa vĩnh viễn, bạn chỉ cần đổi trường `"active"`:
- Ẩn sản phẩm: `"active": false`
- Hiện sản phẩm: `"active": true`

### 3. Thay đổi thứ tự hiển thị
Thứ tự các sản phẩm trên web hiển thị theo đúng thứ tự trong mảng JSON của `data/products.json`. Muốn sản phẩm nào lên đầu, bạn chỉ cần di chuyển đối tượng đó lên trên cùng.

### 4. Thay đổi link Affiliate hoặc Ảnh
- Đổi link: Cập nhật trường `"url"` trong `data/products.json`.
- Đổi ảnh: Ghi đè file ảnh mới vào `public/products/TDx.jpg` cùng tên, hoặc đổi tên ảnh mới và sửa lại đường dẫn `"image"` trong JSON.

### 5. Cập nhật Avatar & Thông tin cá nhân
Chỉnh sửa file `data/profile.json`:
```json
{
  "name": "Dane Reviews",
  "bio": "Những sản phẩm mình đề xuất & phong cách sống tối giản",
  "avatar": "/avatar.jpg",
  "socials": {
    "instagram": "https://instagram.com/danereviews",
    "facebook": "https://facebook.com/danereviews",
    "tiktok": "https://www.tiktok.com/@danereviews",
    "email": "contact@danereviews.vn"
  }
}
```
*(Nếu muốn ẩn mạng xã hội nào, chỉ cần để giá trị rỗng `""` hoặc xóa trường đó).*

---

## 💻 Chạy thử nghiệm tại máy cá nhân (Local Development)

1. Cài đặt dependencies:
```bash
npm install
```

2. Chạy môi trường phát triển:
```bash
npm run dev
```
Truy cập: `http://localhost:3000`

3. Kiểm tra bản build production:
```bash
npm run build
npm run start
```

---

## 🚀 Hướng dẫn Triển khai lên Vercel

1. Đẩy mã nguồn lên kho lưu trữ GitHub của bạn:
```bash
git add .
git commit -m "feat: complete dane reviews landing page"
git push origin main
```
2. Truy cập [vercel.com](https://vercel.com) và đăng nhập bằng tài khoản GitHub.
3. Chọn **Add New...** -> **Project** -> Chọn kho lưu trữ `dane-reviews`.
4. Vercel tự động nhận diện framework **Next.js**. Nhấn **Deploy**.
5. Sau khi build xong (khoảng 30 giây), trang web sẽ hoạt động chính thức với đường dẫn dạng: `https://dane-reviews.vercel.app`.
