import {
  Account,
  AllCourses,
  AllProducts,
  Contact,
  Home,
  LecturersCooperation,
  ForgotPassword,
  Dashboard,
  SuccessfulPasswordReset,
  CourseDetails,
  Membership,
  Lessions,
  MyCourses,
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
  {
    path: '/khoa-hoc-cua-toi',
    element: <MyCourses />,
  },
];

export default routes;
