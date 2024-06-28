const ContactForm: React.FC = () => {
    return (
      <section id="contact" className="flex flex-col items-center p-8 bg-white rounded-lg shadow-md">
        <header className="text-2xl font-bold mb-4">Contact</header>
        <form id="form" method="post" action="https://www.freecodecamp.com/email-submit" className="w-full max-w-lg">
          <label htmlFor="name" className="block text-gray-700">Name</label>
          <input type="text" id="name" placeholder="Your Name" required className="w-full p-2 mt-1 mb-4 border rounded-lg" />
          <label htmlFor="email" className="block text-gray-700">Email</label>
          <input id="email" type="email" placeholder="Enter your email" required className="w-full p-2 mt-1 mb-4 border rounded-lg" />
          <label htmlFor="phone" className="block text-gray-700">Phone Number</label>
          <input id="phone" type="tel" placeholder="(123) 456-7890" required className="w-full p-2 mt-1 mb-4 border rounded-lg" />
          <input type="submit" id="submit" value="Submit" className="px-4 py-2 bg-yellow-500 text-gray-800 rounded-lg cursor-pointer hover:bg-orange-500 hover:text-white transition" />
        </form>
      </section>
    );
  };
  
  export default ContactForm;
  