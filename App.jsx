import React, { useState } from 'react'

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <div>
      {/* Header */}
      <header className="bg-gray-800 sticky top-0 z-50">
        <nav className="text-white w-11/12 md:container mx-auto py-2 flex justify-between items-center">
          <a href="#" className="text-3xl font-bold">Home</a>

          {/* Menu */}
          <ul
            className={`menu md:flex space-x-4 absolute md:static top-14 left-0 w-full md:w-auto bg-slate-900 md:bg-transparent transition-all duration-300 ease-in ${
              menuOpen ? 'block' : 'hidden'
            }`}
          >
            <li className="px-5 py-1 hover:text-gray-500"><a href="#about">About</a></li>
            <li className="px-5 py-1 hover:text-gray-500"><a href="#portofolio">Portofolio</a></li>
            <li className="px-5 py-1 hover:text-gray-500"><a href="#services">Service</a></li>
            <li className="px-5 py-1 hover:text-red-800 md:hover:text-red-900">
              <a href="#" className="md:border-2 md:border-gray-600 md:py-1 md:px-5 md:rounded-3xl md:hover:bg-red-700 text-white">Getting Started</a>
            </li>
          </ul>

          {/* Hamburger Button (Mobile) */}
          <button
            className="hamburger-menu text-2xl text-white md:hidden"
            onClick={toggleMenu}
          >
            <i className="fa-solid fa-bars"></i>
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="bg-gray-800">
        <div className="container mx-auto text-center text-white h-screen flex items-center">
          <div className="mx-auto w-2/4">
            <h3 className="text-5xl font-bold text-center">Andika Dwi Putra</h3>
            <p className="text-gray-300 py-6 px-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit non sapiente</p>
            <a href="#" className="bg-red-800 text-white py-2 px-2 rounded-2xl hover:bg-red-700">See All Portofolio</a>
          </div>
        </div>
      </section>

      {/* Section Services */}
      <section id="services" className="bg-white text-gray-700 py-20">
        <div className="container mx-auto">
          <h3 className="text-5xl font-bold text-center mb-5">Our Services</h3>
          <p className="text-gray-400 text-center mb-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Reusable Service Item */}
            {[1, 2, 3, 4].map((_, i) => (
              <div
                key={i}
                className="flex space-x-5 py-8 px-8 bg-white rounded-xl items-start shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
                <img src="https://placehold.co/100" alt="service" />
                <div>
                  <h4 className="text-2xl font-bold mb-5">Service {i + 1}</h4>
                  <p className="text-gray-500 mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                  <a href="#" className="text-red-800">Read More</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Portofolio */}
      <section id="portofolio" className="py-20 bg-white">
        <h3 className="text-5xl font-bold text-center mb-5">Portofolio</h3>
        <p className="text-gray-700 mb-5 text-center">Lorem ipsum dolor sit.</p>

        <div className="grid grid-cols-1 md:grid-cols-4 container mx-auto gap-6">
          {[1, 2, 3, 4].map((_, i) => (
            <div key={i} className="shadow-xl hover:shadow-2xl transition-shadow duration-500">
              <a href="#">
                <img src="https://placehold.co/600x400" alt={`Portofolio ${i + 1}`} />
                <div className="py-3 px-5">
                  <h4 className="text-center font-bold">Website {i + 1}</h4>
                </div>
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Section About */}
      <section id="about" className="container mx-auto py-20">
        <div className="flex flex-col md:flex-row space-x-0 md:space-x-10 items-start">
          <img src="https://placehold.co/300" alt="about" />
          <div>
            <h3 className="text-5xl font-bold mb-5">About Me</h3>
            <p className="text-gray-500 mb-5 border-b pb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <ul className="flex space-x-5 mb-5">
              <li><a href="#"><i className="fa-brands fa-tiktok"></i> Tiktok</a></li>
              <li><a href="#"><i className="fa-brands fa-instagram"></i> Instagram</a></li>
              <li><a href="#"><i className="fa-brands fa-facebook"></i> Facebook</a></li>
              <li><a href="#"><i className="fa-brands fa-twitter"></i> Twitter</a></li>
            </ul>
            <a href="#" className="bg-red-800 text-white py-2 px-5 rounded-2xl hover:bg-red-700">Read More</a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App
