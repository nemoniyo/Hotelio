import img from "@/assets/images/1.png"
import img1 from "@/assets/images/2.png"
import img2 from "@/assets/images/3.png"
import img3 from "@/assets/images/4.png"
export default function FacilitiesSection() {
    return (
      <section className="w-full px-4 md:px-8 lg:px-16 py-12">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold">Facilities & Service</h2>
          <a href="#" className="text-blue-600 text-sm">
            View All
          </a>
        </div>
  
        <p className="text-gray-600 max-w-2xl mb-8">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy.
        </p>
  
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="flex flex-col items-center text-center">
            <div className="bg-yellow-100 rounded-full p-4 mb-4">
              <div className="w-10 h-10 flex items-center justify-center">
                <img src={img} alt="" />
              </div>
            </div>
            <h3 className="font-medium mb-2">Private Workspace</h3>
            <p className="text-sm text-gray-600">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has.
            </p>
          </div>
  
          <div className="flex flex-col items-center text-center">
            <div className="bg-yellow-100 rounded-full p-4 mb-4">
              <div className="w-10 h-10 flex items-center justify-center">
              <img src={img1} alt="" />
              </div>
            </div>
            <h3 className="font-medium mb-2">Parking Area</h3>
            <p className="text-sm text-gray-600">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has.
            </p>
          </div>
  
          <div className="flex flex-col items-center text-center">
            <div className="bg-yellow-100 rounded-full p-4 mb-4">
              <div className="w-10 h-10 flex items-center justify-center">
              <img src={img2} alt="" />
              </div>
            </div>
            <h3 className="font-medium mb-2">Free WiFi</h3>
            <p className="text-sm text-gray-600">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has.
            </p>
          </div>
  
          <div className="flex flex-col items-center text-center">
            <div className="bg-yellow-100 rounded-full p-4 mb-4">
              <div className="w-10 h-10 flex items-center justify-center">
              <img src={img3} alt="" />
              </div>
            </div>
            <h3 className="font-medium mb-2">Breakfast</h3>
            <p className="text-sm text-gray-600">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has.
            </p>
          </div>
        </div>
      </section>
    )
  }
  