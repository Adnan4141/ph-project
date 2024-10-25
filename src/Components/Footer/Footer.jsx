const Footer = () => {
  return (
    <div>
      <footer className="bg-[#0d0d28] text-white py-8">
        {/* Subscribe Section */}
        <div className="relative -top-28 max-w-screen-2xl mx-auto">
          <div className="border-white border-2 rounded-2xl py-3">
            <div className="bg-gradient-to-r from-blue-100 to-pink-100 p-8 text-center rounded-lg shadow-lg mx-4 sm:mx-6 md:mx-8 lg:mx-20">
              <h2 className="text-2xl font-semibold text-black">
                Subscribe to our Newsletter
              </h2>
              <p className="mt-2 text-gray-700">
                Get the latest updates and news right in your inbox!
              </p>
              <div className="mt-4 flex flex-col sm:flex-row justify-center items-center">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-2 w-full sm:w-64 rounded-t-md sm:rounded-l-md sm:rounded-r-none border border-gray-300 mb-2 sm:mb-0"
                />
                <button className="bg-gradient-to-r from-pink-400 to-yellow-400 px-6 py-2 w-full sm:w-auto rounded-b-md sm:rounded-r-md text-white font-semibold">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Content */}
        <div className="flex items-center justify-center -mt-16">
            <img src="../../../public/assets/logo-footer.png" alt="footer logo" />
          </div>
        <div className="container mx-auto mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-6 md:px-8 lg:px-20">
          {/* About Us */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-gray-400">
              We are a passionate team dedicated to providing the best services
              to our customers.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ol className="space-y-2 text-gray-400">
              <li>Home</li>
              <li>Services</li>
              <li>About</li>
              <li>Contact</li>
            </ol>
          </div>

          {/* Subscribe Again */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Subscribe</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for the latest updates.
            </p>
            <div className="flex flex-col sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 w-full sm:w-64 rounded-t-md sm:rounded-l-md sm:rounded-r-none border border-gray-300 mb-2 sm:mb-0"
              />
              <button className="bg-gradient-to-r from-pink-400 to-yellow-400 px-6 py-2 w-full sm:w-auto rounded-b-md sm:rounded-r-md text-white font-semibold">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 text-center text-gray-400 border-t border-gray-700 pt-4">
          <p>©2024 Dream XI, All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
