import React from 'react'

const About = () => {
  return (
    <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Text Section */}
        <div>
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">About Our Shop</h2>
          <p className="text-lg text-gray-700 mb-6">
            Welcome to our online store! We are committed to bringing you the best shopping experience,
            with high-quality products, fast shipping, and excellent customer service. Whether you're
            looking for the latest fashion, top gadgets, or household essentials — we've got you covered.
          </p>
          <p className="text-md text-gray-600">
            Our mission is to make online shopping easy, reliable, and enjoyable. Thank you for choosing us!
          </p>
        </div>

        {/* Image Section */}
        <div>
          <img
            src="https://via.placeholder.com/500x350"
            alt="About us"
            className="w-full rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  )
}

export default About












