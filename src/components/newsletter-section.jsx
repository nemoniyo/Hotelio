export default function NewsletterSection() {
    return (
      <section className="w-full px-4 md:px-8 lg:px-16 py-12 bg-gray-100">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Subscribe for our mailing list to get latest updates and offers
            </h2>
            <p className="text-gray-600 mb-6">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's.
            </p>
  
            <div className="flex max-w-md">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 p-3 border rounded-l-md focus:outline-none"
              />
              <button className="bg-blue-600 text-white px-6 py-3 rounded-r-md">Subscribe</button>
            </div>
          </div>
  
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="w-64 h-64 bg-gray-200 rounded-lg">{/* Newsletter image placeholder */}</div>
          </div>
        </div>
      </section>
    )
  }
  