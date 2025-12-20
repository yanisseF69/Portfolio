import type React from 'react';
import SideBar from './SideBar';

const Layout = ({ children } : {children:React.ReactNode}) => (
    <div className="container-fluid p-0" style={{ height: '100vh', overflow: 'hidden' }}>
      <div className="row h-100 g-0">

        <SideBar /> 
        
        <main className="col-12 col-lg-10 h-100" style={{ overflowY: 'auto' }}>
            <div className="p-4">
                {children}
            </div>
        </main>
        
      </div>
    </div>
  );

export default Layout;