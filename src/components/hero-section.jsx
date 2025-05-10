import SearchForm from "./search-form"
import img from "@/assets/images/image.png"
import img1 from "@/assets/images/image (1).png"
import img2 from "@/assets/images/image (2).png"

export default function HeroSection() {
  return (
    <section className="w-full px-4 md:px-8 lg:px-16 py-8 md:py-12">
      <div className="flex flex-col items-center justify-center gap-8">
        <div className="flex md:flex-row flex-col items-center justify-between w-full">
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Find Your Best Hotel for Deals</h1>
          <p className="text-gray-600 mb-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>

        </div>
          <SearchForm />
        </div>

        <div className="w-full gap-4 flex">
          <div className="col-span-2 rounded-lg overflow-hidden h-200">
            <img src={img} alt="" />
            {/* Main hotel image placeholder */}
            <div className="w-full h-full flex items-end p-4">
              <div className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-md">
                <p className="font-medium">Wagstaffe NSW, Australia</p>
              </div>
            </div>
          </div>
          <div>
          <div className="rounded-lg overflow-hidden h-74">
            <img src={img1} alt="" />
          </div>
            <div className="rounded-lg overflow-hidden h-74 pt-4">
            <img src={img2} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
