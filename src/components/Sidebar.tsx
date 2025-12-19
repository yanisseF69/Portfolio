import React, {useState} from "react";

const HoverLink = ({children, href}: {children:React.ReactNode, href:string}) => {
    const [isHover, setIsHover] = useState(false);

    const style = {
        color: isHover ? 'DodgerBlue' : 'black',
        textDecoration: 'none',
        display: 'block',
        padding: '1rem 2rem',
        transition: 'color 0.2s'
    };

    return (
        <a href={href} style={style} onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>{children}</a>
    )
}

const SideBar = () => (
  <>
    <div className="col-12 d-lg-none bg-light p-3 border-bottom d-flex align-items-center justify-content-between">
      <span className="fw-bold">PortFolio</span>
      <button className="btn btn-outline-secondary" type="button" data-bs-toggle="offcanvas" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu">
          ☰ Menu
      </button>
    </div>

    <div className="col-12 col-lg-2 bg-light border-end offcanvas-lg offcanvas-start p-0" id="sidebarMenu" aria-labelledby="sidebarMenuLabel">
      <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="sidebarMenuLabel">Menu</h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" data-bs-target="#sidebarMenu" aria-label="Close"></button>
      </div>

      <div className="offcanvas-body d-flex flex-column p-3 h-100">
          <a href="/" className="d-none d-lg-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
              <span className="fs-4">Menu</span>
          </a>
          <hr className="d-none d-lg-block" />
          <ul className="nav nav-pills flex-column mb-auto">
              <li className="nav-item">
                  <HoverLink href="/">Home</HoverLink>
              </li>
              <li>
                  <HoverLink href="/experience">Experience</HoverLink>
              </li>
              <li>
                  <HoverLink href="/projects">Projects</HoverLink>
              </li>
              <li>
                  <HoverLink href="/personal">Personal</HoverLink>
              </li>
              <li>
                <div className="dropdown">
                    <a href="#" className="nav-link link-dark dropdown-toggle" data-bs-toggle="dropdown">
                        <strong>Resume</strong>
                    </a>
                    <ul className="dropdown-menu shadow">
                        <li><a className="dropdown-item" target="_blank" rel="noopener noreferrer" href="/CV_FERHAOUI_YANISSE.pdf">French</a></li>
                        <li><a className="dropdown-item" target="_blank" rel="noopener noreferrer" href="/RESUME_FERHAOUI_YANISSE.pdf">English</a></li>
                    </ul>
                </div>
              </li>
          </ul>
          <hr />
          <div>
            <p>Copyright © 2025 Yanisse FERHAOUI</p>
          </div>
      </div>
    </div>
  </>

);



export default SideBar;
