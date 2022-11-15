import MagnifyingGlass from '../assets/magnifying-glass.png';
import House from '../assets/house.png';
import Phone from '../assets/phone-landing.svg';
import Brand from '../assets/brand.png';

const Landing = () => {
  return (
      <div className="bg-brand flex flex-col justify-center md:px-80 h-screen">
        <div className="absolute top-0 left-0 md:px-80 md:py-8 w-full">
          <div className="flex flex-row text-white gap-16 text-2xl font-medium items-center">
            <img src={Brand} alt="Crib" className="mr-auto h-16" />
            <a href="#">About</a>
            <a href="#">Features</a>
            <a href="#">Contact Us</a>
          </div>
        </div>
        <div className="flex flex-row gap-12">
          <div className="basis-3/5 flex flex-col justify-center">
            <h1 className="font-oswald font-bold text-6xl text-white">
              List and find subleases in a few clicks
            </h1>
            <p className="font-roboto pt-10 pr-10 text-left text-3xl text-white">
              Crib is a marketplace that connects tenants and subtenants.
              We make finding and listing subleases easier than ever!
            </p>
            <div className="flex flex-row gap-12 pt-14">
              <button
                  className={`
              bg-white text-4xl px-8 py-4 
              flex flex-row gap-4 items-center 
              rounded-lg drop-shadow-xl hover:drop-shadow-md
            `}
              >
                <img src={MagnifyingGlass} alt="Find" />
                Find
              </button>
              <button
                  className={`
              bg-white text-4xl px-8 py-4 
              flex flex-row gap-4 items-center 
              rounded-lg drop-shadow-xl hover:drop-shadow-md
            `}
              >
                <img src={House} alt="List" />
                List
              </button>
            </div>
          </div>
          <div className="basis-2/5 flex flex-row justify-center">
            <img src={Phone} alt="Phone" />
          </div>
        </div>
      </div>
  );
}

export default Landing;