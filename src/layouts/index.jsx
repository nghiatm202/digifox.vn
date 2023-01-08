import { Outlet, useLocation } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';

const Layout = () => {
  const location = useLocation();

  return (
    <div className="App">
      {location.pathname.includes('/khoa-hoc/') ? (
        <>
          <Header />
          <div className="main-wrapper">
            <main className="w-full h-full">
              <Outlet />
            </main>
          </div>
          <Footer />
        </>
      ) : (
        <>
          <Header />
          <Main />
          <Footer />
        </>
      )}
    </div>
  );
};

export default Layout;
