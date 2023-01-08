import { Outlet } from 'react-router-dom';

const Main = () => {
  return (
    <div className="main-wrapper">
      <main className="max-w-7xl mx-auto px-3 h-full">
        <Outlet />
      </main>
    </div>
  );
};

export default Main;
