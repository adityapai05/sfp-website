const Contact = () => {
    return (
      <section id="contact">
        <div className="mx-auto text-center my-12 w-[80%] lg:w-[75%]">
          <div className="mb-8">
            <h2 className="text-5xl font-bold mb-5">Contact</h2>
            <div className="w-24 h-1 bg-[#ff5722] mx-auto mb-12"></div>
          </div>
  
          {/* Grid Layout for Contact Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Column: Email & Newsletter */}
            <div>
              {/* Business Inquiries Card */}
              <div className="max-w-[600px] mx-auto p-10 bg-[#f5f5f5] text-black rounded-xl shadow-lg transform transition-transform duration-300 hover:translate-y-[-5px] mb-8">
                <i className="fas fa-envelope text-5xl mb-4 text-[#ff5722]"></i>
                <h3 className="text-2xl mb-2 font-bold">For Business Inquiries</h3>
                <a
                  href="mailto:sangeetapai0802@gmail.com"
                  className="text-base font-medium text-[#ff5722] hover:text-black transition-colors duration-300"
                >
                  sangeetapai0802@gmail.com
                </a>
              </div>
  
              {/* Newsletter Subscription */}
              <div className="max-w-[600px] mx-auto p-10 bg-[#f5f5f5] text-black rounded-xl shadow-lg transform transition-transform duration-300 hover:translate-y-[-5px]">
                <i className="fas fa-paper-plane text-5xl mb-4 text-[#ff5722]"></i>
                <h3 className="text-2xl mb-2 font-bold">Subscribe to Newsletter</h3>
                <p className="mb-4">Get the latest recipes and updates straight to your inbox!</p>
                <form action="#" method="POST" className="space-y-4">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ff5722]"
                    required
                  />
                  <button
                    type="submit"
                    className="w-full py-3 bg-[#ff5722] text-white rounded-md hover:bg-[#e64a19] transition-colors duration-300"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
  
            {/* Right Column: General Contact Form */}
            <div>
              {/* General Contact Form Card */}
              <div className="max-w-[600px] mx-auto p-10 bg-[#f5f5f5] text-black rounded-xl shadow-lg transform transition-transform duration-300 hover:translate-y-[-5px]">
                <i className="fas fa-comments text-5xl mb-4 text-[#ff5722]"></i>
                <h3 className="text-2xl mb-2 font-bold">Contact Us</h3>
                <form action="#" method="POST" className="space-y-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ff5722]"
                    required
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ff5722]"
                    required
                  />
                  <textarea
                    placeholder="Your Message"
                    className="w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ff5722]"
                    required
                  ></textarea>
                  <button
                    type="submit"
                    className="w-full py-3 bg-[#ff5722] text-white rounded-md hover:bg-[#e64a19] transition-colors duration-300"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Contact;
  