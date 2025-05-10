import logo from "@/assets/images/logo.png"
export default function Header() {
    return (
      <header className="w-full py-4 px-4 md:px-8 lg:px-16 flex items-center justify-between">
        <div className="flex items-center">
          <div className="flex items-center mr-8">
            <img src={logo} />
          </div>
  
        </div>
          <nav className="hidden md:flex space-x-6 items-center">
            <a href="#" className="text-sm font-medium">
              Booking
            </a>
            <a href="#" className="text-sm font-medium">
              Facilities
            </a>
            <a href="#" className="text-sm font-medium">
              About Us
            </a>
            <a href="#" className="text-sm font-medium">
              Location
            </a>
            <a href="#" className="text-sm font-medium">
              Contact
            </a>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm">Sign In</button>
          </nav>
  
      </header>
    )
  }
  