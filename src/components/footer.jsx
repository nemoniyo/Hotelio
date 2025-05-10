export default function Footer() {
    return (
      <footer className="w-full px-4 md:px-8 lg:px-16 py-12 bg-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center mb-4">
              <div className="h-6 w-2 bg-blue-600 mr-1"></div>
              <div className="h-6 w-2 bg-yellow-400"></div>
              <span className="ml-2 font-bold text-xl">Hotels</span>
            </div>
            <p className="text-sm text-gray-600 mb-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-blue-600">
                <span className="sr-only">Facebook</span>
                <span>📱</span>
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600">
                <span className="sr-only">Twitter</span>
                <span>📱</span>
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600">
                <span className="sr-only">Instagram</span>
                <span>📱</span>
              </a>
            </div>
          </div>
  
          <div>
            <h3 className="font-bold mb-4">Home</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-blue-600">
                  Booking
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-blue-600">
                  Facilities
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-blue-600">
                  Location
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-blue-600">
                  Contact
                </a>
              </li>
            </ul>
          </div>
  
          <div>
            <h3 className="font-bold mb-4">Help</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-blue-600">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-blue-600">
                  Help center
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-blue-600">
                  Privacy policy
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-blue-600">
                  FAQs
                </a>
              </li>
            </ul>
          </div>
  
          <div>
            <h3 className="font-bold mb-4">Get the app</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-blue-600">
                  iOS app
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-blue-600">
                  Android app
                </a>
              </li>
            </ul>
          </div>
        </div>
  
        <div className="border-t pt-8 text-center text-sm text-gray-600">
          <p>&copy; {new Date().getFullYear()} Hotels. All rights reserved.</p>
        </div>
      </footer>
    )
  }
  