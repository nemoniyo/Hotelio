export default function SearchForm() {
    return (
      <div className="bg-white rounded-lg shadow-md p-4 w-full max-w-md">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="flex items-center border rounded-md p-2">
            <span className="material-icons text-gray-400 mr-2">📅</span>
            <div className="text-sm">
              <div>Jun 10 - 14</div>
            </div>
          </div>
          <div className="flex items-center border rounded-md p-2">
            <span className="material-icons text-gray-400 mr-2">👥</span>
            <div className="text-sm">
              <div>2 Guests</div>
            </div>
          </div>
        </div>
  
        <div className="flex items-center mb-4">
          <span className="material-icons text-gray-400 mr-2">📍</span>
          <input type="text" placeholder="United States" className="flex-1 p-2 border rounded-md" />
          <button className="bg-blue-600 text-white p-2 rounded-md ml-2">
            <span className="material-icons">🔍</span>
          </button>
        </div>
      </div>
    )
  }
  