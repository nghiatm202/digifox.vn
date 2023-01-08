import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { formatPrice } from '../../utilities';

const Checkout = () => {
  const loggedInUser = useSelector(state => state.user.current);
  const courses = useSelector(state => state.cart.courses);
  const isLoggedIn = !!loggedInUser.id;

  const totalPriceHandler = () => {
    let total = 0;
    courses.forEach(item => {
      total += item.quantity * item.price;
    });

    return formatPrice(total);
  };

  return (
    <div className="checkout-page py-12 md:py-16">
      {isLoggedIn ? null : (
        <p className="text-base mb-5 text-gray-900 font-semibold">
          Bạn đã có tài khoản?{' '}
          <Link to="/" className="text-primary-color">
            Ấn vào đây để đăng nhập
          </Link>
        </p>
      )}

      <p className="text-base mb-5 text-gray-900 font-semibold">
        Bạn có mã ưu đãi?{' '}
        <Link to="/" className="text-primary-color">
          Ấn vào đây để nhập mã
        </Link>
      </p>

      <div className="flex flex-wrap gap-9">
        <div className="flex-1">
          <h2 className="text-lg font-bold uppercase my-5">Thông tin thanh toán</h2>
          <div className="flex items-center justify-between gap-6">
            <p className="mb-7">
              <label htmlFor="checkout-first-name" className="text-title-color pb-1 block">
                Tên <span className="text-[#E01020]">*</span>
              </label>
              <input
                type="text"
                id="checkout-first-name"
                name="checkout-first-name"
                size="40"
                className="w-full border border-border-color rounded bg-white py-2 px-4 outline-none"
                aria-required={true}
                aria-invalid={false}
              />
            </p>
            <p className="mb-7">
              <label htmlFor="checkout-last-name" className="text-title-color pb-1 block">
                Họ <span className="text-[#E01020]">*</span>
              </label>
              <input
                type="text"
                id="checkout-last-name"
                name="checkout-last-name"
                size="40"
                className="w-full border border-border-color rounded bg-white py-2 px-4 outline-none"
                aria-required={true}
                aria-invalid={false}
              />
            </p>
          </div>
          <p className="mb-7">
            <label htmlFor="checkout-address" className="text-title-color pb-1 block">
              Địa chỉ <span className="text-[#E01020]">*</span>
            </label>
            <input
              type="text"
              id="checkout-address"
              name="checkout-address"
              size="40"
              className="w-full border border-border-color rounded bg-white py-2 px-4 outline-none"
              aria-required={true}
              aria-invalid={false}
              placeholder="Địa chỉ"
            />
          </p>
          <p className="mb-7">
            <label htmlFor="checkout-postcode" className="text-title-color pb-1 block">
              Mã bưu điện (tùy chọn)
            </label>
            <input
              type="text"
              id="checkout-postcode"
              name="checkout-postcode"
              size="40"
              className="w-full border border-border-color rounded bg-white py-2 px-4 outline-none"
              aria-required={true}
              aria-invalid={false}
            />
          </p>
          <p className="mb-7">
            <label htmlFor="checkout-city" className="text-title-color pb-1 block">
              Tỉnh / Thành phố <span className="text-[#E01020]">*</span>
            </label>
            <input
              type="text"
              id="checkout-city"
              name="checkout-city"
              size="40"
              className="w-full border border-border-color rounded bg-white py-2 px-4 outline-none"
              aria-required={true}
              aria-invalid={false}
            />
          </p>
          <p className="mb-7">
            <label htmlFor="checkout-phone" className="text-title-color pb-1 block">
              Số điện thoại <span className="text-[#E01020]">*</span>
            </label>
            <input
              type="tel"
              id="checkout-phone"
              name="checkout-phone"
              size="40"
              className="w-full border border-border-color rounded bg-white py-2 px-4 outline-none"
              aria-required={true}
              aria-invalid={false}
            />
          </p>
          <p className="mb-7">
            <label htmlFor="checkout-email" className="text-title-color pb-1 block">
              Địa chỉ email <span className="text-[#E01020]">*</span>
            </label>
            <input
              type="email"
              id="checkout-email"
              name="checkout-email"
              size="40"
              className="w-full border border-border-color rounded bg-white py-2 px-4 outline-none"
              aria-required={true}
              aria-invalid={false}
            />
          </p>

          <h4 className="text-lg font-bold uppercase my-5">Thông tin bổ sung</h4>
          <p>
            <label htmlFor="checkout-message" className="text-title-color pb-1 block">
              Ghi chú đơn hàng (tùy chọn)
            </label>
            <textarea
              id="checkout-message"
              name="checkout-message"
              className="w-full border border-border-color rounded bg-white py-2 px-4 outline-none min-h-[190px]"
              aria-invalid={false}
              placeholder="Ghi chú về đơn hàng, ví dụ: thời gian hay chỉ dẫn địa điểm giao hàng chi tiết hơn."
            />
          </p>
        </div>

        <div className="flex-1">
          <h3 className="text-center text-lg font-bold uppercase my-5">Đơn hàng của bạn</h3>
          <div className="py-1 px-4 mb-5 shadow-checkout-box bg-white">
            <p className="py-4 font-medium border-b border-border-color flex items-center justify-between text-base uppercase text-title-color">
              <span>Sản phẩm</span>
              <span>Tạm tính</span>
            </p>
            {courses.map(course => {
              return (
                <div className="flex items-center justify-between py-4 border-b borde-border-color">
                  <div className="flex flex-col gap-y-2 text-[#161616] text-base">
                    <span>{course.title}</span>
                    <p>
                      x <span className="font-semibold">{course.quantity}</span>
                    </p>
                  </div>
                  <p className="text-base text-gray-500">{formatPrice(course.price * course.quantity)}</p>
                </div>
              );
            })}

            <div className="flex items-center justify-between text-base py-4 border-b border-border-color">
              <span className="text-title-color font-medium">Tạm tính</span>
              <p className="text-primary-color font-semibold">{totalPriceHandler()}</p>
            </div>
            <div className="flex items-center justify-between py-4">
              <span className="text-lg text-title-color font-medium">Tổng</span>
              <p className="text-primary-color text-xl font-semibold">{totalPriceHandler()}</p>
            </div>
          </div>
          <p className="text-base text-title-color mb-4">Chuyển khoản ngân hàng</p>
          <div className="p-4 shadow-checkout-box mb-5 bg-white">
            <p className="text-base text-[#161616]">
              Chuyển khoản vào số tài khoản của DCUni với nội dung là mã đơn hàng của bạn để được xác nhận nhanh nhất.
            </p>
          </div>
          <div className="w-full h-[1px] bg-border-color mb-8"></div>
          <button className="w-full transition-[background-color] duration-200 ease-linear rounded text-sm font-semibold py-2.5 px-5 uppercase bg-primary-color hover:bg-[#ec5727] text-white">
            Đặt hàng
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
