import HotelFilters from "./hotel-filters"

export default function BestHotelsSection() {
  return (
    <section className="w-full px-4 md:px-8 lg:px-16 py-12">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold">Best Quality Hotels</h2>
        <a href="#" className="text-blue-600 text-sm">
          View All
        </a>
      </div>

      <p className="text-gray-600 max-w-2xl mb-8">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      </p>

      <HotelFilters />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Hotel Card 1 */}
        <div className="rounded-lg overflow-hidden shadow-md">
          <div className="h-48 bg-gray-200">{/* Hotel image placeholder */}</div>
          <div className="p-4">
            <h3 className="font-medium mb-2 truncate">Swimming pool and beach of luxury...</h3>
            <p className="text-sm text-gray-600 mb-4">Lorem Ipsum is simply dummy text of the printing...</p>
            <div className="flex justify-between items-center">
              <div>
                <span className="font-bold">$250</span>
                <span className="text-sm text-gray-600">/night</span>
              </div>
              <button className="bg-blue-600 text-white px-4 py-1 rounded-md text-sm">Book</button>
            </div>
          </div>
        </div>

        {/* Hotel Card 2 */}
        <div className="rounded-lg overflow-hidden shadow-md">
          <div className="h-48 bg-gray-200">{/* Hotel image placeholder */}</div>
          <div className="p-4">
            <h3 className="font-medium mb-2 truncate">InterContinental Fujairah Resort Clu...</h3>
            <p className="text-sm text-gray-600 mb-4">Lorem Ipsum is simply dummy text of the printing...</p>
            <div className="flex justify-between items-center">
              <div>
                <span className="font-bold">$250</span>
                <span className="text-sm text-gray-600">/night</span>
              </div>
              <button className="bg-blue-600 text-white px-4 py-1 rounded-md text-sm">Book</button>
            </div>
          </div>
        </div>

        {/* Hotel Card 3 */}
        <div className="rounded-lg overflow-hidden shadow-md">
          <div className="h-48 bg-gray-200">{/* Hotel image placeholder */}</div>
          <div className="p-4">
            <h3 className="font-medium mb-2 truncate">Burj Al Arab - Jumeirah Street, Dub...</h3>
            <p className="text-sm text-gray-600 mb-4">Lorem Ipsum is simply dummy text of the printing...</p>
            <div className="flex justify-between items-center">
              <div>
                <span className="font-bold">$250</span>
                <span className="text-sm text-gray-600">/night</span>
              </div>
              <button className="bg-blue-600 text-white px-4 py-1 rounded-md text-sm">Book</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
