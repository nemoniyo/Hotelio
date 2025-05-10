export default function LuxuryHotelsSection() {
    return (
      <section className="w-full px-4 md:px-8 lg:px-16 py-12">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/2 rounded-lg overflow-hidden h-80 bg-gray-200">
            {/* Luxury hotel image placeholder */}
          </div>
  
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Finest Luxury Hotels & Resort</h2>
            <p className="text-gray-600 mb-6">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </p>
  
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="text-center">
                <p className="text-2xl font-bold">120K+</p>
                <p className="text-sm text-gray-600">Square Feet</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold">110K+</p>
                <p className="text-sm text-gray-600">Happy Clients</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold">20K+</p>
                <p className="text-sm text-gray-600">Active Hotels</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold">8Y+</p>
                <p className="text-sm text-gray-600">Company Year</p>
              </div>
            </div>
  
            <button className="bg-blue-600 text-white px-6 py-3 rounded-md">Explore More</button>
          </div>
        </div>
      </section>
    )
  }
  