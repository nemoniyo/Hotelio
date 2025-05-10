export default function TestimonialSection() {
    return (
      <section className="w-full px-4 md:px-8 lg:px-16 py-12">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/2 rounded-lg overflow-hidden h-80 bg-gray-200">
            {/* Testimonial image placeholder */}
          </div>
  
          <div className="w-full md:w-1/2 bg-yellow-300 rounded-lg p-8 flex flex-col justify-center">
            <div className="mb-4">
              <span className="text-3xl">⭐</span>
            </div>
            <p className="text-lg italic mb-6">
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the."
            </p>
            <div>
              <p className="font-medium">— Name</p>
            </div>
          </div>
        </div>
      </section>
    )
  }
  