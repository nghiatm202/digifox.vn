import {
  Account,
  AllCourses,
  AllProducts,
  Cart,
  Checkout,
  Contact,
  Home,
  LecturersCooperation,
  ForgotPassword,
  Dashboard,
  SuccessfulPasswordReset,
  CourseDetails,
  Membership,
  Lessions,
} from '../pages';

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
    path: '/dashboard',
    element: <Dashboard />,
  },
  {
    path: '/forgot-password',
    element: <ForgotPassword />,
  },
  {
    path: '/successful-password-reset',
    element: <SuccessfulPasswordReset />,
  },
  {
    path: '/khoa-hoc/:courseId',
    element: <CourseDetails />,
  },
  {
    path: '/bai-hoc/:courseId',
    element: <Lessions />,
  },
  {
    path: '/membership',
    element: <Membership />,
  },
];

export default routes;
