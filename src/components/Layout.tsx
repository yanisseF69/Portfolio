import type React from 'react';
import SideBar from './SideBar';

const Layout = ({ children } : {children: React.ReactNode}) => (
  <div className="container-fluid p-0 min-vh-100">
    <div className="row g-0">

      <SideBar />

      <main className="col-12 col-lg-10">
        <div className="p-4">
          {children}
        </div>
      </main>

    </div>
  </div>
);

export default Layout;
