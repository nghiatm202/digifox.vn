export const formatPrice = price => {
  let temp = price;
  let round = 1;

  while (temp > 1) {
    temp /= 10;
    round *= 10;
  }

  round /= 100;
  const newPrice = Math.round(price / round) * round;
  return newPrice.toLocaleString('vi', { style: 'currency', currency: 'VND' });
};

export const faqs = [
  {
    question: 'Khóa học có thời hạn sử dụng không?',
    answer:
      'Thời gian học phụ thuộc vào hình thức bạn đã mua khóa học là mua trực tiếp hay mua thông qua chương trình Membership. Nếu bạn mua trực tiếp khóa học thì thời gian sẽ là trọn đời. Nếu bạn mua theo Membership thì thời gian được tính theo gói Membership tương ứng. Gói Membership sẽ có những lợi thế riêng với việc truy cập không giới hạn nhiều tài nguyên trên DCUni.',
  },
  {
    question: 'Tôi có thể nhận ưu đãi không?',
    answer:
      'Chương trình ưu đãi được áp dụng theo chương trình của DCUni. Tùy thuộc vào từng chương trình và đối tượng khách hàng sẽ có ưu đãi khác nhau.',
  },
  {
    question: 'Tôi thanh toán qua hình thức nào?',
    answer:
      'Bạn có thể thanh toán bằng rất nhiều hình thức: chuyển khoản ngân hàng, các ứng dụng như Momo, Zalo Pay, thông qua thẻ thanh toán quốc tế Visa, Master card.',
  },
];

export const suitableForYou = [
  { id: 1, content: 'Những bạn trẻ đang bắt đầu vào con đường làm Marketing.' },
  { id: 2, content: 'Những doanh nhân trẻ muốn bắt đầu một dự án kinh doanh online của riêng mình.' },
  { id: 3, content: 'Những cá nhân hoặc tập thể đang kinh doanh online qua các nền tảng như Facebook, Google.' },
  {
    id: 4,
    content:
      'Những bạn học viên muốn tìm hiểu thêm về một kênh Social Media để gia tăng hiệu quả công việc kinh doanh.',
  },
];

export const chooseThisCourse = [
  {
    id: 1,
    content:
      'Facebook trước đây là một nền tảng hàng đầu được các cá nhân và doanh nghiệp lựa chọn để kinh doanh online. Tuy nhiên, quảng cáo Facebook ngày càng khó khăn, tình trạng khoá tài khoản, khoá fanpage, khoá tài khoản cá nhân ngày càng diễn ra thường xuyên gây ảnh hưởng đến tình hình kinh doanh của chúng ta. Và Tiktok trở thành một nền tảng thay thế tuyệt vời.',
  },
  {
    id: 2,
    content:
      ' Bạn muốn kinh doanh hiệu quả trên Tiktok nhưng chưa thực sự nắm rõ các chính sách, thuật toán nên công việc kinh doanh không đạt được hiệu quả cao.',
  },
  { id: 3, content: 'Bạn chưa biết cách thiết lập tài khoản và phải chạy quảng cáo như thế nào.' },
  {
    id: 4,
    content:
      'Bạn chưa biết được các thủ thuật để giúp cho mỗi bài quảng cáo của bạn trên Tiktok đem về được hàng nghìn đơn hàng.',
  },
  {
    id: 5,
    content:
      'Bạn không giỏi cũng không biết nhiều về kỹ thuật máy tính, nên việc chuyển đổi quảng cáo gặp nhiều khó khăn.',
  },
  {
    id: 6,
    content:
      'Bạn lúng túng vì không biết những công cụ hỗ trợ cho bạn hiệu quả trong việc sáng tạo và thiết lập các chiến dịch quảng cáo Tiktok.',
  },
];
