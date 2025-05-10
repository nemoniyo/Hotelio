const Navbar = () => {
    return (
      <header className="w-full bg-white py-4 px-6 md:px-10 lg:px-16 shadow-sm">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <div className="h-8 w-8 mr-2">
              <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="5" y="5" width="10" height="30" fill="#2563EB" />
                <rect x="15" y="5" width="10" height="20" fill="#EAB308" />
              </svg>
            </div>
            <span className="text-xl font-bold">Hotelo</span>
          </div>
  
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-gray-900">
              Booking
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900">
              Facilities
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900">
              About Us
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900">
              Location
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900">
              Contact
            </a>
          </nav>
  
          {/* Right side with sign in button and mobile menu */}
          <div className="flex items-center space-x-4">
            <a
              href="#"
              className="hidden md:block px-6 py-2 border border-gray-300 rounded-full text-gray-700 hover:bg-gray-50"
            >
              Sign In
            </a>
            <div className="text-gray-700">
              {/* Menu Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="4" x2="20" y1="12" y2="12"></line>
                <line x1="4" x2="20" y1="6" y2="6"></line>
                <line x1="4" x2="20" y1="18" y2="18"></line>
              </svg>
            </div>
          </div>
        </div>
      </header>
    )
  }
  
  export default Navbar
  