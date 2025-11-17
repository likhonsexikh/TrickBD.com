const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Follow Us</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-gray-400">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-gray-400">
                  Payment Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Trainer Support
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Report
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">About Trickbd</h3>
            <p>
              Trickbd is a technology-focused blog that provides tutorials,
              tips, and tricks on a variety of topics, including Android,
              programming, and web development.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
