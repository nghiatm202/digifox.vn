import { BiCheck } from 'react-icons/bi';

const SuccessfulPasswordReset = () => {
  return (
    <div className="mt-20">
      <p className="bg-[#ff5e2b] flex items-center text-white gap-x-4 py-4 px-2 mb-5">
        <BiCheck size={32} />
        <span className="text-base">Email khôi phục mật khẩu đã được gửi.</span>
      </p>

      <p className="text-base">
        Một thư email khôi phục mật khẩu đã được gửi cho địa chỉ email tài khoản của bạn, nhưng có thể sẽ mất vài phút
        để hiển thị trong Inbox của hộp thư. Vui lòng đợi ít nhất 10 phút trước khi gửi một yêu cầu khôi phục mật khẩu
        khác.
      </p>
    </div>
  );
};

export default SuccessfulPasswordReset;
