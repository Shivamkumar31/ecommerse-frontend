import React from 'react'


import {assets} from '../assets/assets/assets'  // Adjust the path according to your project structure

const Footer = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-14 my-10 mt-40 text-sm">
  {/* Section 1 */}
  <div>
    <img src={assets.logo} className="mb-5 w-32" alt="Logo" />
    <p className="w-full md:w-2/3 text-gray-500">
      Lorem ipsum dolor sit amet consectetur adipisicing elit...
    </p>
  </div>

  {/* Section 2 */}
  <div>
    <img src={assets.logo} className="mb-5 w-32" alt="Logo" />
    <p className="w-full md:w-2/3 text-gray-500">
      Lorem ipsum dolor sit amet consectetur adipisicing elit...
    </p>
  </div>

  {/* Section 3 */}
  <div>
    <img src={assets.logo} className="mb-5 w-32" alt="Logo" />
    <p className="w-full md:w-2/3 text-gray-500">
      Lorem ipsum dolor sit amet consectetur adipisicing elit...
    </p>
  </div>
</div>
);
}

export default Footer;