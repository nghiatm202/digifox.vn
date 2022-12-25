import { HiOutlineTrash } from 'react-icons/hi';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const Cart = () => {
  return (
    <div className="cart-page py-12 md:py-16">
      <div className="flex flex-wrap cart-container items-start">
        <div className="cart-left flex flex-col gap-y-9">
          <table className="w-full">
            <thead>
              <tr>
                <th className="pb-3 border-b border-[#00000013]"></th>
                <th className="pb-3 border-b border-[#00000013]"></th>
                <th className="text-left uppercase pb-3 border-b border-[#00000013]">Sản phẩm</th>
                <th className="text-left uppercase pb-3 border-b border-[#00000013]">Giá</th>
                <th className="text-left uppercase pb-3 border-b border-[#00000013]">Số lượng</th>
                <th className="text-left uppercase pb-3 border-b border-[#00000013]">Tạm tính</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="py-4 border-b border-[#0000001b] px-3">
                  <HiOutlineTrash cursor="pointer" size={20} />
                </td>
                <td className="py-4 border-b border-[#0000001b]">
                  <p className="overflow-hidden w-32 h-20 rounded">
                    <img
                      src="https://digifox.vn/wp-content/uploads/2019/12/banner-khoa-hoc-google-ads-860x484.jpg"
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </p>
                </td>
                <td className="py-4 border-b border-[#0000001b]">
                  <span className="text-sm">Khóa học Google Ads Search: Sở hữu doanh thu bền vững</span>
                </td>
                <td className="py-4 border-b border-[#0000001b]">
                  <p className="text-sm text-gray-500">
                    650.000<span>đ</span>
                  </p>
                </td>
                <td className="py-4 border-b border-[#0000001b]">
                  <div class="flex items-center gap-x-3 text-sm">
                    <div class="hover:bg-primary-color hover:text-white transition-all duration-200 ease-linear w-9 h-9 border cursor-pointer rounded-full flex items-center justify-center border-border-color">
                      <AiOutlineMinus />
                    </div>
                    <span class="count">1</span>
                    <div class="hover:bg-primary-color hover:text-white transition-all duration-200 ease-linear w-9 h-9 border cursor-pointer rounded-full flex items-center justify-center border-border-color">
                      <AiOutlinePlus />
                    </div>
                  </div>
                </td>
                <td className="py-4 border-b border-[#0000001b]">
                  <p className="text-base text-primary-color font-semibold">
                    650.000<span>đ</span>
                  </p>
                </td>
              </tr>
            </tbody>
          </table>

          <div className="flex items-center gap-x-2">
            <input
              type="text"
              name="coupon_code"
              size="40"
              className="max-w-xs w-full border border-border-color rounded bg-white py-2 px-4 outline-none"
              aria-invalid={false}
              placeholder="Mã ưu đãi"
            />

            <button className="transition-[background-color] duration-200 ease-linear rounded text-sm font-semibold py-3 px-5 uppercase bg-primary-color hover:bg-[#ec5727] text-white">
              Áp dụng
            </button>
          </div>
        </div>

        <div className="cart-right p-6 border-2 border-border-color flex flex-col">
          <h2 className="text-xl uppercase font-bold text-[#161616] mb-5">Cộng giỏ hàng</h2>
          <div className="mb-3 text-sm flex items-center justify-between pb-2 border-b border-[#00000013]">
            <span className="text-title-color font-medium">Tạm tính</span>
            <p className="text-gray-500">
              650.000<span>đ</span>
            </p>
          </div>
          <div className="mb-3 flex items-center justify-between">
            <span className="text-title-color font-medium text-base">Tổng</span>
            <p className="text-xl text-primary-color font-semibold">
              650.000<span>đ</span>
            </p>
          </div>
          <button className="w-full transition-[background-color] duration-200 ease-linear rounded text-sm font-semibold py-2.5 px-5 uppercase bg-primary-color hover:bg-[#ec5727] text-white">
            Tiến hành thanh toán
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
