import { AllCourses, AllProducts, Blog, Cart, Checkout, Contact, Home, LecturersCooperation, Account, LostPassword } from '../pages';

const routes = [
  {
    index: true,
    element: <Home />,
  },
  {
    path: '/lien-he',
    element: <Contact />,
  },
  {
    path: '/blog',
    element: <Blog />,
  },
  {
    path: '/hop-tac-giang-vien',
    element: <LecturersCooperation />,
  },
  {
    path: '/tat-ca-san-pham',
    element: <AllProducts />,
  },
  {
    path: '/tat-ca-khoa-hoc',
    element: <AllCourses />,
  },
  {
    path: '/gio-hang',
    element: <Cart />,
  },
  {
    path: '/dat-hang',
    element: <Checkout />,
  },
  {
    path: '/tai-khoan',
    element: <Account />,
  },
  {
    path: '/lost-password',
    element: <LostPassword />
  }
];

export default routes;
