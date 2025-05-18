import { useLocation } from "react-router-dom";

const Footer = () => {
  const {pathname} = useLocation();
  return (
    <footer className={`${pathname !== '/about' && pathname !== '/contact' && 'bg-gradient-to-r from-[#d9383b] to-[#F1494C] text-gray-100'} bg-gray-50 `}>
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="https://i.ibb.co.com/VYBdzYWM/images.jpg"
                alt="MarryMatch Logo"
                className="w-10 h-10 rounded-full"
              />
              <span className="text-xl font-semibold ">Marry Match</span>
            </div>
            <p className="text-sm">
              A trusted matrimonial platform helping people discover meaningful life partners with verified biodata and secure communication.
            </p>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-4">About</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">About Us</a></li>
              <li><a href="#" className="hover:underline">Success Stories</a></li>
              <li><a href="#" className="hover:underline">Careers</a></li>
              <li><a href="#" className="hover:underline">Blog</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Help & Support</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">Contact Us</a></li>
              <li><a href="#" className="hover:underline">FAQs</a></li>
              <li><a href="#" className="hover:underline">Safety Tips</a></li>
              <li><a href="#" className="hover:underline">Payment Options</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
              <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
              <li><a href="#" className="hover:underline">Report Abuse</a></li>
            </ul>
            <div className="flex space-x-4 mt-5">
              <a href="#" aria-label="Facebook">
                <i className="fab fa-facebook text-xl hover:text-white"></i>
              </a>
              <a href="#" aria-label="Instagram">
                <i className="fab fa-instagram text-xl hover:text-white"></i>
              </a>
              <a href="#" aria-label="LinkedIn">
                <i className="fab fa-linkedin text-xl hover:text-white"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t text-gray-300 mt-10 pt-6 text-center text-sm">
          © {new Date().getFullYear()} MarryMatch. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
