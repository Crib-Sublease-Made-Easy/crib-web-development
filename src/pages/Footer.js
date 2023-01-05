import InstagramLogo from '../assets/instagram-logo.png';
import LinkedinLogo from '../assets/linkedin-logo.png';

const Footer = () => {
  return (
      <section className={`
          bg-black text-white 
          px-8 py-10
          flex justify-end gap-12 
      `}>
        <div className="flex flex-col gap-2">
          <h2 className="font-semibold">Legal</h2>
          <a href="#">Terms and services</a>
          <a href="#">Privacy</a>
          <a href="#">Career</a>
          <a href="#">Contact us</a>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="font-semibold">Social Media</h2>
          <div className="flex gap-4">
            <a href="#"><img src={InstagramLogo} alt="Follow us on Instagram" className="w-8" /></a>
            <a href="#"><img src={LinkedinLogo} alt="Follow us on LinkedIn" className="w-8" /></a>
          </div>
        </div>
      </section>
  );
};

export default Footer;