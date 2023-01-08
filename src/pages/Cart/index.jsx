import { HiOutlineTrash } from 'react-icons/hi';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, decreaseCount, increaseCount } from '../../store/modules/cartSlice';
import { formatPrice } from '../../utilities';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const courses = useSelector(state => state.cart.courses);
  const dispatch = useDispatch();

  let navigate = useNavigate();

  const totalPriceHandler = () => {
    let total = 0;
    courses.forEach(item => {
      total += item.quantity * item.price;
    });

    return formatPrice(total);
  };

  return (
    <div className="cart-page py-12 md:py-16">
      <div className="flex flex-wrap flex-col lg:flex-row cart-container items-start">
        <div className="cart-left flex flex-col gap-y-9 w-full">
          <div className="overflow-auto">
            <table className="border-collapse border-spacing-0 min-w-[900px]">
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
                {courses.map(course => {
                  return (
                    <tr key={course.id}>
                      <td className="py-4 border-b border-[#0000001b] px-3">
                        <HiOutlineTrash
                          cursor="pointer"
                          size={20}
                          onClick={() => dispatch(removeFromCart(course.id))}
                        />
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
                        <span className="text-base">{course.title}</span>
                      </td>
                      <td className="py-4 border-b border-[#0000001b]">
                        <p className="text-base text-gray-500">{formatPrice(course.price)}</p>
                      </td>
                      <td className="py-4 border-b border-[#0000001b]">
                        <div class="flex items-center gap-x-3 text-sm">
                          <div
                            onClick={() => dispatch(decreaseCount({ id: course.id }))}
                            class="hover:bg-primary-color hover:text-white transition-all duration-200 ease-linear w-9 h-9 border cursor-pointer rounded-full flex items-center justify-center border-border-color"
                          >
                            <AiOutlineMinus />
                          </div>
                          <span class="text-base">{course.quantity}</span>
                          <div
                            onClick={() => dispatch(increaseCount({ id: course.id }))}
                            class="hover:bg-primary-color hover:text-white transition-all duration-200 ease-linear w-9 h-9 border cursor-pointer rounded-full flex items-center justify-center border-border-color"
                          >
                            <AiOutlinePlus />
                          </div>
                        </div>
                      </td>
                      <td className="py-4 border-b border-[#0000001b]">
                        <p className="text-base text-primary-color font-semibold">
                          {formatPrice(course.price * course.quantity)}
                        </p>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div className="flex items-center flex-col lg:flex-row gap-2">
            <input
              type="text"
              name="coupon_code"
              size="40"
              className="lg:max-w-xs w-full border border-border-color rounded bg-white py-2 px-4 outline-none"
              aria-invalid={false}
              placeholder="Mã ưu đãi"
            />

            <button className="transition-[background-color] w-full lg:w-fit duration-200 ease-linear rounded text-sm font-semibold py-3 px-5 uppercase bg-primary-color hover:bg-[#ec5727] text-white">
              Áp dụng
            </button>
          </div>
        </div>

        <div className="cart-right p-6 border-2 border-border-color flex flex-col">
          <h2 className="text-xl uppercase font-bold text-[#161616] mb-5">Cộng giỏ hàng</h2>
          <div className="mb-3 text-sm flex items-center justify-between pb-2 border-b border-[#00000013]">
            <span className="text-title-color font-medium">Tạm tính</span>
            <p className="text-gray-500">{totalPriceHandler()}</p>
          </div>
          <div className="mb-3 flex items-center justify-between">
            <span className="text-title-color font-medium text-base">Tổng</span>
            <p className="text-xl text-primary-color font-semibold">{totalPriceHandler()}</p>
          </div>
          <button
            onClick={() => navigate('/dat-hang')}
            className="w-full transition-[background-color] duration-200 ease-linear rounded text-sm font-semibold py-2.5 px-5 uppercase bg-primary-color hover:bg-[#ec5727] text-white"
          >
            Tiến hành thanh toán
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
