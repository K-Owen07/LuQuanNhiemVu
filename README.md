# Web Lữ Quán Nhiệm Vụ

Thư mục này là landing page tĩnh cho **Lữ Quán Nhiệm Vụ**, nơi giới thiệu các sub-mod/custom story mod tiếng Việt cho Bannerlord.

Hiện tại dự án đầu tiên được đặt trên trang là `LuuVongPhucQuoc`. Khi phát triển thêm mod cốt truyện khác, có thể thêm mục mới vào `index.html` mà không cần đổi tên web.

`LuuVongPhucQuoc` được giới thiệu là sub-mod/custom story mod dùng cho `YiguThreeKingdoms`, mod Tam Quốc cho Bannerlord do YiGu Studio phát triển.

Phần nội dung custom của `LuuVongPhucQuoc` do **ThanhTuan** thực hiện và sở hữu phần sáng tạo riêng gồm nhiệm vụ, hội thoại, hướng dẫn và cấu trúc cốt truyện bổ sung.

Trang cần giữ rõ tinh thần phi thương mại: mod chia sẻ miễn phí, không bán, không thu phí bắt buộc; donate chỉ là tự nguyện cho người yêu mến dự án.

## Mở thử trên máy

Mở file `index.html` bằng trình duyệt.

Nếu ảnh nền hoặc QR bị lỗi trên GitHub Pages, hãy kiểm tra repository đã upload đủ thư mục `assets` chưa. Tối thiểu nên có:

```text
assets/hero.png
assets/donate-qr-placeholder.svg
```

Logo đã được nhúng trực tiếp trong `index.html`, nên không cần file logo riêng.

Nếu vẫn lỗi ảnh sau khi đã upload, kiểm tra trực tiếp bằng cách mở các link này trên trình duyệt:

```text
https://ten-github-cua-ban.github.io/TEN_REPO/assets/hero.png
https://ten-github-cua-ban.github.io/TEN_REPO/assets/donate-qr-placeholder.svg
```

Ví dụ repo của bạn đang là `K-Owen07/LuQuanNhiemVu`, vậy link đúng phải là:

```text
https://K-Owen07.github.io/LuQuanNhiemVu/assets/hero.png
https://K-Owen07.github.io/LuQuanNhiemVu/assets/donate-qr-placeholder.svg
```

Nếu link hiện `404`, nghĩa là file chưa nằm đúng chỗ trên GitHub. Tên thư mục và file phải đúng chữ thường:

```text
assets/hero.png
assets/donate-qr-placeholder.svg
```

Không phải:

```text
Assets/Hero.png
LuuVongPhucQuoc_Web/assets/hero.png
assets/hero.PNG
```

Lưu ý: link dạng dưới đây chỉ là trang xem file trong GitHub, không phải link ảnh mà web dùng:

```text
https://github.com/K-Owen07/LuQuanNhiemVu/blob/main/assets/hero.png
```

Web GitHub Pages dùng link dạng:

```text
https://K-Owen07.github.io/LuQuanNhiemVu/assets/hero.png
```

Nếu ảnh mở được trên `github.com/.../blob/...` nhưng không mở được trên `github.io/...`, hãy kiểm tra lại:

1. Đã bật GitHub Pages trong `Settings` > `Pages` chưa.
2. Pages đang deploy từ branch `main` và thư mục `/root` chưa.
3. File `index.html`, `styles.css`, `app.js` có nằm ở gốc repo không, hay đang nằm trong thư mục con.
4. Chờ 2-5 phút sau khi commit rồi bấm `Ctrl + F5` để tải lại mạnh.

## Cập nhật link tải

Sửa file `app.js`:

```js
downloadUrl: "link Google Drive hoặc link tải mod của bạn"
yiguFixesDownloadUrl: "link Google Drive hoặc link tải YiguFixes"
```

Khuyến nghị: nén mod thành `.zip`, upload lên Google Drive, bật quyền `Anyone with the link`, rồi dán link vào `downloadUrl`.

Nếu muốn cho người chơi tải YiguFixes từ cùng trang web, nén `YiguFixes` thành `.zip`, upload lên Google Drive và dán link vào `yiguFixesDownloadUrl`.

## Cập nhật QR donate

1. Tạo ảnh QR donate thật, ví dụ `qr.jpg`.
2. Đặt vào thư mục `assets`.
3. Sửa file `app.js`:

```js
donateName: "ThanhTuan",
donateNote: "Ung ho Lu Quan Nhiem Vu",
donateQr: "assets/qr.jpg"
```

Nếu muốn nhận góp ý người chơi qua Facebook cá nhân, thay:

```js
feedbackUrl: "https://m.me/ten-facebook-cua-ban",
```

## Đưa web lên mạng

GitHub Pages có thể dùng miễn phí nếu bạn để repository ở chế độ public. Xem hướng dẫn chi tiết trong `HUONG_DAN_DANG_WEB.md`.

Tóm tắt nhanh:

1. Tạo tài khoản GitHub.
2. Tạo repository public, ví dụ `LuQuanNhiemVu`.
3. Upload toàn bộ file trong thư mục này lên repository.
4. Vào `Settings` > `Pages`.
5. Chọn `Deploy from a branch`.
6. Chọn branch `main`, thư mục `/root`.
7. Bấm `Save`.
8. Chờ vài phút, GitHub sẽ tạo link dạng:

```text
https://ten-github-cua-ban.github.io/LuQuanNhiemVu/
```
