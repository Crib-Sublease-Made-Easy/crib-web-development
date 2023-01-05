import MagnifyingGlassIcon from '../assets/magnifying-glass-icon.svg';
import HouseCheckmarkIcon from '../assets/house-checkmark-icon.svg';
import LandingScreen from '../assets/landing-screen.png';

const buttons = [
  {
    icon: MagnifyingGlassIcon,
    text: 'Find'
  },
  {
    icon: HouseCheckmarkIcon,
    text: 'List'
  }
];

const Landing = () => {
  return (
      <section className={`
          bg-brand text-white 
          px-4 sm:px-8 md:px-16 lg:px-32 xl:px-64 
          h-screen 
          flex items-center justify-center
      `}>
        <div className="flex gap-12 justify-center">
          <div className="flex flex-col justify-center gap-8">
            <h1 className="font-bold text-6xl">
              List and find subleases in a few clicks
            </h1>
            <p className="text-2xl">
              Crib is a marketplace that connects tenants and subtenants.
              We make finding and listing subleases easier than ever!
            </p>
            <div className="flex flex-row gap-10 mt-6">
              {buttons.map(({icon, text}, i) => (
                  <button key={i} className={`
                      bg-white px-8 py-4 rounded-xl
                      flex gap-4 items-center
                      text-3xl font-semibold ${i === 0 ? 'text-brand' : 'text-black'}
                      shadow-lg hover:shadow-2xl
                      transition ease-in-out hover:-translate-y-1 duration-300
                  `}>
                    <img src={icon} alt={text} className="w-10" />
                    <p>{text}</p>
                  </button>
              ))}
            </div>
          </div>
          <div className="w-10/12 max-h-[75vh] ml-auto flex justify-center">
            <img src={LandingScreen} alt="Landing Screen" className="max-w-full max-h-full object-contain" />
          </div>
        </div>
      </section>
  );
}

export default Landing;