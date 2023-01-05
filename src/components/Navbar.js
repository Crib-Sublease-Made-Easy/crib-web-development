import TitledLogo from '../assets/titled-logo.svg';

const links = [
  {href: '#', text: 'About'},
  {href: '#', text: 'Features'},
  {href: '#', text: 'Contact Us'},
];

const Navbar = () => {
  return (
      <div className="bg-brand text-white flex gap-10 items-center px-4 sm:px-8 md:px-16 py-4 fixed top-0 w-full h-20">
        <a href="/" className="mr-auto">
          <img src={TitledLogo} alt="Crib Homepage" className="h-10" />
        </a>
        {links.map(({href, text}, i) => (
            <a key={i} href={href} className="font-semibold">{text}</a>
        ))}
      </div>
  );
};

export default Navbar;