import type React from 'react';
import Sidebar from './Sidebar';

const Layout = ({ children } : {children:React.ReactNode}) => {
  return (
    <div className="d-lg-flex" style={{ minHeight: '100vh' }}>
      
      <Sidebar />

      <main className="flex-grow-1 p-4 bg-light">
        {children}
      </main>
      
    </div>
  );
};

export default Layout;