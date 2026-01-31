export interface CurriculumItem {
  id: string; // Format: Subject-Grade-Section-Importance
  title: string;
  content: string;
  subject: 'Math' | 'Physics' | 'English' | 'Programming';
  grade: 10 | 11 | 12;
  importance: 'H' | 'M' | 'L';
}

export const curriculumData: CurriculumItem[] = [
  {
    id: 'TOAN-10-C1S1-H',
    title: 'Mệnh đề và Tập hợp',
    subject: 'Math',
    grade: 10,
    importance: 'H',
    content: `
# Chương 1: Mệnh đề và Tập hợp

## 1. Mệnh đề
Mệnh đề là một khẳng định đúng hoặc sai. Một khẳng định không thể vừa đúng vừa sai.

## 2. Tập hợp
Tập hợp là một khái niệm cơ bản của toán học. Ta thường dùng các chữ cái in hoa A, B, C... để ký hiệu tập hợp.

### Các phép toán trên tập hợp:
- Giao của hai tập hợp (A ∩ B)
- Hợp của hai tập hợp (A ∪ B)
- Hiệu của hai tập hợp (A \\ B)
- Phần bù (C_A B)
    `
  },
  {
    id: 'LY-11-C2S1-H',
    title: 'Dòng điện không đổi',
    subject: 'Physics',
    grade: 11,
    importance: 'H',
    content: `
# Chương 2: Dòng điện không đổi

## 1. Cường độ dòng điện
Đại lượng đặc trưng cho tác dụng mạnh, yếu của dòng điện.
Thức tính: I = Δq / Δt

## 2. Định luật Ôm cho toàn mạch
I = E / (R + r)
Trong đó:
- E: Suất điện động của nguồn
- R: Điện trở ngoài
- r: Điện trở trong của nguồn
    `
  },
  {
    id: 'CODE-12-C1S1-H',
    title: 'Cấu trúc dữ liệu và Giải thuật',
    subject: 'Programming',
    grade: 12,
    importance: 'H',
    content: `
# Chương 1: Danh sách liên kết

## 1. Khái niệm
Danh sách liên kết (Linked List) là một cấu trúc dữ liệu gồm một tập hợp các nút (nodes), mỗi nút chứa dữ liệu và một tham chiếu (liên kết) đến nút tiếp theo.

## 2. Các loại DSLK
- Danh sách liên kết đơn
- Danh sách liên kết đôi
- Danh sách liên kết vòng

### Ưu điểm:
- Kích thước linh hoạt
- Chèn/Xóa phần tử nhanh chóng (O(1) nếu biết vị trí)
    `
  }
];
