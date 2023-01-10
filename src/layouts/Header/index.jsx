import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AiOutlineSearch, AiOutlineShoppingCart, AiOutlineUser } from 'react-icons/ai';
import { TfiMenu } from 'react-icons/tfi';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../store/modules/userSlice';
import { formatPrice } from '../../utilities';

const navigation = [
  { href: '/tat-ca-khoa-hoc', name: 'Khóa học' },
  { href: '/membership', name: 'Membership' },
  { href: '/hop-tac-giang-vien', name: 'Hợp tác giảng viên' },
  { href: '/lien-he', name: 'Liên hệ' },
];

const Header = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [showDropdownMenu, setShowDropdownMenu] = useState(false);
  const { pathname } = useLocation();
  const dispatch = useDispatch();

  let navigate = useNavigate();

  const loggedInUser = useSelector(state => state.user.current);
  const courses = useSelector(state => state.cart.courses);
  const isLoggedIn = !!loggedInUser.id;

  const logoutHandler = () => {
    const action = logout();
    dispatch(action);
  };

  const totalPriceHandler = () => {
    let total = 0;
    courses.forEach(item => {
      total += item.quantity * item.price;
    });

    return formatPrice(total);
  };

  return (
    <>
      <section
        id="overlay"
        className={`${
          showNavbar ? 'block' : 'hidden'
        } transition-[display] duration-200 ease-linear fixed top-0 left-0 w-screen h-screen bg-[#00000066] z-40`}
        onClick={() => setShowNavbar(false)}
      ></section>

      <header className="">
        <div className="bg-[#f02d00]">
          <div className="max-w-7xl mx-auto px-3">
            <div className="flex items-center justify-between py-4">
              <div className="flex items-center">
                <img
                  src="https://digifox.vn/wp-content/uploads/2022/02/saledigifox.png"
                  alt="saledigifox"
                  className="shrink-0 hidden lg:block"
                />
                <p className="text-lg text-white font-medium">Mở quyền truy cập tất cả khoá học và tài nguyên!</p>
              </div>

              <button
                onClick={() => navigate('/membership')}
                className="uppercase transition-[background-color] duration-200 ease-linear bg-white hover:bg-[#f4f4f4] text-gray-800 py-3 px-5 text-sm"
              >
                Tìm hiểu ngay Membership
              </button>
            </div>
          </div>
        </div>

        <div className="bg-[#090909] py-5">
          <div className="max-w-7xl mx-auto px-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-x-4">
                <button onClick={() => setShowNavbar(true)} className="block lg:hidden">
                  <TfiMenu color="#fff" size={24} />
                </button>

                <h1 onClick={() => navigate('/')} className="cursor-pointer font-bold text-white text-4xl">
                  DCUni.
                </h1>
              </div>

              <ul className="hidden lg:flex items-center gap-4 xl:gap-6">
                {navigation.map(({ href, name }) => {
                  return (
                    <li key={href}>
                      <Link
                        to={href}
                        className={`${
                          pathname === href ? 'text-primary-color' : 'text-white'
                        } text-base uppercase transition-[color] duration-200 ease-linear hover:text-primary-color`}
                      >
                        {name}
                      </Link>
                    </li>
                  );
                })}
              </ul>

              <div className="hidden lg:flex items-center border-2 border-border-color rounded p-2">
                <input
                  type="text"
                  className="bg-transparent outline-none text-base text-white"
                  placeholder="Search for posts"
                />
                <AiOutlineSearch color="#fff" size={16} />
              </div>

              <div className="flex items-center gap-4 text-white text-base">
                <div className="flex items-center gap-1">
                  <Link to="/gio-hang" className="relative">
                    <AiOutlineShoppingCart size={28} />
                    <span className="absolute flex text-xs items-center justify-center w-5 h-5 rounded-full bg-primary-color text-white top-[-8px] right-[-4px]">
                      {courses.length}
                    </span>
                  </Link>
                  <p className="hidden xl:block">{totalPriceHandler()}</p>
                </div>

                <div
                  className="flex items-center gap-1 relative cursor-pointer after:content-[''] after:bg-transparent after:absolute after:w-[220px] after:h-[20px] after:right-0 after:bottom-[-20px]"
                  onMouseEnter={() => setShowDropdownMenu(true)}
                  onMouseLeave={() => setShowDropdownMenu(false)}
                >
                  <Link to={isLoggedIn ? '/dashboard' : '/tai-khoan'}>
                    <AiOutlineUser size={28} />
                  </Link>

                  {isLoggedIn && <p>{loggedInUser.name}</p>}

                  {showDropdownMenu && isLoggedIn ? (
                    <div className="absolute z-20 w-[220px] shadow-md bg-white top-10 right-0">
                      <ul className="pl-4 py-2">
                        <li>
                          <Link
                            to="/dashboard"
                            className="py-2 text-[#848484] text-sm hover:text-primary-hover-color transition-[color] duration-200 ease-linear"
                          >
                            Trang tài khoản
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/gio-hang"
                            className="py-2 text-[#848484] text-sm hover:text-primary-hover-color transition-[color] duration-200 ease-linear"
                          >
                            Đơn hàng
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/membership"
                            className="py-2 text-[#848484] text-sm hover:text-primary-hover-color transition-[color] duration-200 ease-linear"
                          >
                            Membership
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/tat-ca-khoa-hoc"
                            className="py-2 text-[#848484] text-sm hover:text-primary-hover-color transition-[color] duration-200 ease-linear"
                          >
                            Khóa học
                          </Link>
                        </li>
                        <li>
                          <Link
                            onClick={logoutHandler}
                            className="py-2 text-[#848484] text-sm hover:text-primary-hover-color transition-[color] duration-200 ease-linear"
                          >
                            Đăng xuất
                          </Link>
                        </li>
                      </ul>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`${
            showNavbar ? 'translate-x-0' : 'translate-x-[-100%]'
          } fixed left-0 right-auto w-[300px] z-50 bg-white top-0 flex lg:hidden flex-col bottom-0 overflow-hidden overflow-y-auto transition-[transform] duration-200 ease-linear`}
        >
          <div className="flex items-center text-gray-500 justify-between p-5 shadow-search-input">
            <input
              type="text"
              className="bg-transparent outline-none text-base text-gray-500"
              placeholder="Search for posts"
            />
            <AiOutlineSearch color="#777" size={20} />
          </div>

          <ul>
            {navigation.map(({ href, name }) => {
              return (
                <li key={href}>
                  <Link
                    to={href}
                    onClick={() => setShowNavbar(false)}
                    className={`${
                      pathname === href ? 'text-primary-color' : 'text-gray-800'
                    } border-b border-gray-300 block py-4 px-5 uppercase text-sm font-semibold`}
                  >
                    {name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </header>
    </>
  );
};

export default Header;
