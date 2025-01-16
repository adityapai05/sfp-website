import React, { useState } from "react";
import emailjs from "emailjs-com"; // Import EmailJS SDK
import conf from "../conf/conf";
import appwriteService from "../appwrite/config";

const Contact = () => {
  // States for the Contact Form
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactMessage, setContactMessage] = useState("");
  const [isSubmittingContact, setIsSubmittingContact] = useState(false);
  const [submitStatusContact, setSubmitStatusContact] = useState("");

  // States for the Newsletter Subscription Form
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [isSubmittingNewsletter, setIsSubmittingNewsletter] = useState(false);
  const [submitStatusNewsletter, setSubmitStatusNewsletter] = useState("");

  // Handle Contact Form Submission
  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmittingContact(true);
    setSubmitStatusContact("");

    const formData = {
      name: contactName,
      email: contactEmail,
      message: contactMessage,
    };

    emailjs
      .send(
        conf.emailjsServiceId,
        conf.emailjsTemplateId,
        formData,
        conf.emailjsPublicKey
      )
      .then(
        (response) => {
          console.log("Message sent successfully", response);
          setSubmitStatusContact("Message sent successfully!");
          setContactName("");
          setContactEmail("");
          setContactMessage("");
        },
        (error) => {
          console.error("Failed to send message:", error);
          setSubmitStatusContact("Failed to send message. Please try again.");
        }
      )
      .finally(() => {
        setIsSubmittingContact(false);
      });
  };

  // Handle Newsletter Subscription
  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmittingNewsletter(true);
    setSubmitStatusNewsletter("");

    try {
      const response = await appwriteService.createSubscriber(newsletterEmail);

      if (response) {
        console.log("Subscriber added successfully");
        setSubmitStatusNewsletter("Thank you for subscribing!");
        setNewsletterEmail("");
      } else {
        setSubmitStatusNewsletter("Failed to subscribe. Please try again.");
      }
    } catch (error) {
      console.error("Error in subscribing:", error);
      setSubmitStatusNewsletter("Failed to subscribe. Please try again.");
    } finally {
      setIsSubmittingNewsletter(false);
    }
  };

  return (
    <section id="contact" className="pt-32 pb-12 px-8 bg-[#5cfafa]">
      {/* Heading Section */}
      <div className="mb-5 text-center">
        <h2 className="text-4xl md:text-5xl font-semibold text-[#4a2f23] mb-4">
          Get in Touch
        </h2>
        <div className="w-24 h-1 bg-[#ff5722] mx-auto mb-5"></div>
        <p className="text-lg text-[#4a2f23]">
          We'd love to hear from you! Reach out for any queries or feedback.
        </p>
      </div>

      <div className="max-w-5xl mx-auto text-center md:grid md:grid-cols-2 md:gap-8">
        {/* Left Column: Email & Newsletter */}
        <div className="mb-8 md:mb-0">
          {/* Business Inquiries Card */}
          <div className="max-w-[500px] mx-auto p-6 bg-[#ffffff] text-[#4a2f23] rounded-xl shadow-lg hover:shadow-xl transform transition-transform duration-300 hover:translate-y-[-5px] mb-8">
            <i className="fas fa-envelope text-6xl mb-4 text-[#ff5722]"></i>
            <h3 className="text-xl md:text-2xl font-semibold mb-3">
              For Business Inquiries
            </h3>
            <a
              href="mailto:sangeetapai0802@gmail.com"
              className="text-base font-medium text-[#ff5722] hover:text-black transition-colors duration-300"
            >
              sangeetapai0802@gmail.com
            </a>
          </div>

          {/* Newsletter Subscription */}
          <div className="max-w-[500px] mx-auto p-6 bg-[#ffffff] text-[#4a2f23] rounded-xl shadow-lg hover:shadow-xl transform transition-transform duration-300 hover:translate-y-[-5px]">
            <i className="fas fa-paper-plane text-6xl mb-4 text-[#ff5722]"></i>
            <h3 className="text-xl md:text-2xl font-semibold mb-3">
              Subscribe to Newsletter
            </h3>
            <p className="mb-6">
              Stay updated with our latest recipes and news!
            </p>
            {/* Newsletter Form */}
            <form onSubmit={handleSubscribe} method="POST" className="space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ff5722]"
                required
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
              />
              <button
                type="submit"
                disabled={isSubmittingNewsletter}
                className="w-full py-3 bg-[#ff5722] text-white rounded-md hover:bg-[#e64a19] transition-colors duration-300"
              >
                {isSubmittingNewsletter ? "Sending..." : "Subscribe"}
              </button>
            </form>

            {/* Display status for newsletter */}
            {submitStatusNewsletter && (
              <p
                className={`mt-4 ${
                  submitStatusNewsletter.includes("Thank you")
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                {submitStatusNewsletter}
              </p>
            )}
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="max-w-[500px] mx-auto p-8 bg-[#ffffff] text-[#4a2f23] rounded-xl shadow-lg hover:shadow-xl transform transition-transform duration-300 hover:translate-y-[-5px] min-h-[480px]">
          <i className="fas fa-comments text-6xl mb-4 text-[#ff5722]"></i>
          <h3 className="text-xl md:text-2xl font-semibold mb-3">Contact Us</h3>
          <form onSubmit={handleContactSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              value={contactName}
              onChange={(e) => setContactName(e.target.value)}
              className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ff5722]"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              value={contactEmail}
              onChange={(e) => setContactEmail(e.target.value)}
              className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ff5722]"
              required
            />
            <textarea
              placeholder="Your Message"
              value={contactMessage}
              onChange={(e) => setContactMessage(e.target.value)}
              className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ff5722]"
              required
              rows={6}
            ></textarea>
            <button
              type="submit"
              disabled={isSubmittingContact}
              className="w-full py-3 bg-[#ff5722] text-white rounded-md hover:bg-[#e64a19] transition-colors duration-300"
            >
              {isSubmittingContact ? "Sending..." : "Send Message"}
            </button>
          </form>

          {/* Display status for contact form */}
          {submitStatusContact && (
            <p
              className={`mt-4 ${
                submitStatusContact.includes("successfully")
                  ? "text-green-500"
                  : "text-red-500"
              }`}
            >
              {submitStatusContact}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
