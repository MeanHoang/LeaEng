# LeaEng

LeaEng là một ứng dụng web giúp người dùng học và quản lý từ vựng tiếng Anh và nghĩa tiếng Việt. Dự án này bao gồm các chức năng như học từ vựng, xem tất cả từ vựng và thêm từ vựng mới.

## Mục lục

- [Cài đặt](#cài-đặt)
- [Sử dụng](#sử-dụng)
- [Chức năng](#chức-năng)
- [Cấu trúc dự án](#cấu-trúc-dự-án)
- [Đóng góp](#đóng-góp)

## Cài đặt

1. **Yêu cầu:**
    - [Node.js](https://nodejs.org/)
    - [MySQL](https://www.mysql.com/)

2. **Thiết lập cơ sở dữ liệu:**
    - Tạo cơ sở dữ liệu MySQL mới, ví dụ: `LeaEng`.
    - Tạo bảng `vocabulary` trong cơ sở dữ liệu.
    - Sử dụng tệp `.env` để cấu hình thông tin kết nối cơ sở dữ liệu:

        ```plaintext
        DB_HOST=localhost
        DB_USER=root
        DB_PASS=123456
        DB_NAME=LeaEng
        DB_PORT=3307
        ```

3. **Cài đặt dự án:**
    - Tải hoặc sao chép dự án về máy tính.
    - Mở terminal và chuyển đến thư mục dự án.
    - Chạy lệnh sau để cài đặt các gói cần thiết:

        ```shell
        npm install
        ```

## Sử dụng

1. **Chạy ứng dụng:**
    - Trong terminal, chạy lệnh sau để khởi động ứng dụng:

        ```shell
        npx nodemon app.js
        ```

    - Ứng dụng sẽ chạy trên cổng 3000. Mở trình duyệt và truy cập `http://localhost:3000/`.

## Chức năng

- **Trang chủ:** Truy cập các chức năng chính thông qua menu điều hướng.
- **Học từ vựng:** Truy cập trang `http://localhost:3000/learn` để học từ vựng ngẫu nhiên.
- **Xem tất cả từ vựng:** Truy cập trang `http://localhost:3000/vocabulary` để xem danh sách tất cả từ vựng.
- **Thêm từ vựng:** Truy cập trang `http://localhost:3000/add` để thêm từ vựng mới vào cơ sở dữ liệu.

## Cấu trúc dự án

```plaintext
LeaEng/
│
├── app.js
├── controllers/
│   └── vocabularyController.js
├── models/
│   └── vocabularyModel.js
├── views/
│   └── index.html
│   └── learn.html
│   └── add.html
│
├── public/
│   └── css/
│   │   └── style.css
│   └── js/
│       └── index.js
│       └── learn.js
│       └── add.js
│
├── .env
└── package.json
