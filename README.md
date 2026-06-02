# Web Lữ Quán Nhiệm Vụ

Thư mục này là landing page tĩnh cho **Lữ Quán Nhiệm Vụ**, nơi giới thiệu các sub-mod/custom story mod tiếng Việt cho Bannerlord.

Hiện tại dự án đầu tiên được đặt trên trang là `LuuVongPhucQuoc`. Khi phát triển thêm mod cốt truyện khác, có thể thêm mục mới vào `index.html` mà không cần đổi tên web.

`LuuVongPhucQuoc` được giới thiệu là sub-mod/custom story mod dùng cho `YiguThreeKingdoms`, mod Tam Quốc cho Bannerlord do YiGu Studio phát triển.

Phần nội dung custom của `LuuVongPhucQuoc` do **ThanhTuan** thực hiện và sở hữu phần sáng tạo riêng gồm nhiệm vụ, hội thoại, hướng dẫn và cấu trúc cốt truyện bổ sung.

Trang cần giữ rõ tinh thần phi thương mại: mod chia sẻ miễn phí, không bán, không thu phí bắt buộc; donate chỉ là tự nguyện cho người yêu mến dự án.

## Mở thử trên máy

Mở file `index.html` bằng trình duyệt.

## Cập nhật link tải

Sửa file `app.js`:

```js
downloadUrl: "link Google Drive hoặc link tải mod của bạn"
```

Khuyến nghị: nén mod thành `.zip`, upload lên Google Drive, bật quyền `Anyone with the link`, rồi dán link vào `downloadUrl`.

## Cập nhật QR donate

1. Tạo ảnh QR donate thật, ví dụ `donate-qr.png`.
2. Đặt vào thư mục `assets`.
3. Sửa file `app.js`:

```js
donateName: "ThanhTuan",
donateNote: "Ung ho Lu Quan Nhiem Vu",
donateQr: "assets/donate-qr.png"
```

Nếu muốn nhận góp ý người chơi qua Facebook cá nhân, thay:

```js
feedbackUrl: "https://m.me/ten-facebook-cua-ban",
```

## Đưa web lên mạng

Xem file `HUONG_DAN_DANG_WEB.md`.
