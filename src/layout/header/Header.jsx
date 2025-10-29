import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import arkGroupLogo from '../../assets/ark-group-logo.png';

const Header = () => {
  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about-us' },
    { name: 'Ark Agro', path: '/ark-agro' },
    { name: 'Ark Foundation', path: '/ark-foundation' },
    { name: 'Residential Projects', path: '/residential-projects' },
    { name: 'Infra Projects', path: '/infra-projects' },
    { name: 'Careers', path: '/careers' },
    { name: 'Media', path: '/media' },
    { name: 'Blogs', path: '/blogs' },
    { name: 'Contact Us', path: '/contact-us' },
  ];

  return (
    <header className="absolute top-6 left-0 right-0 z-50 bg-transparent ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-2">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="shrink-0">
            <Link 
              to="/" 
              className="flex items-center space-x-2"
            >
              <img 
                src={arkGroupLogo} 
                alt="Ark Group Logo" 
                className="w-24 h-24 object-contain"
              />
            </Link>
          </div>

          {/* Navigation Menu */}
          <nav className="hidden md:block">
            <div className="flex items-center space-x-1 bg-white bg-opacity-90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
              {menuItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      isActive
                        ? 'bg-secondary text-white shadow-md'
                        : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="bg-white bg-opacity-90 text-gray-700 p-2 rounded-full hover:bg-opacity-100 transition-all duration-300">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;