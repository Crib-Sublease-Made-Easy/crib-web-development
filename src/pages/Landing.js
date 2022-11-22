import MagnifyingGlass from '../assets/magnifying-glass.png';
import House from '../assets/house.png';
import Phone from '../assets/phone-landing.svg';
import Brand from '../assets/brand.png';

const Landing = () => {
  return (
      <div className="bg-brand flex flex-col justify-center px-10 md:px-20 2xl:px-80 h-fit">
        <div className="absolute top-0 left-0 px-4 2xl:px-80 mt-4 w-full">
          <div className="flex flex-row text-white gap-16 text-lg font-medium items-center">
            <img src={Brand} alt="Crib" className="mr-auto h-16" />
            <a href="#">About</a>
            <a href="#">Features</a>
            <a href="#">Contact Us</a>
          </div>
        </div>
        <div className="flex flex-row gap-12 my-36">
          <div className="basis-3/5 flex flex-col justify-center">
            <h1 className="font-oswald font-bold text-5xl 2xl:text-6xl text-white">
              List and find subleases in a few clicks
            </h1>
            <p className="font-roboto pt-10 pr-10 text-left text-lg 2xl:text-2xl text-white">
              Crib is a marketplace that connects tenants and subtenants.
              We make finding and listing subleases easier than ever!
            </p>
            <div className="flex flex-row gap-2 lg:gap-10 pt-14">
              <button
                  className={`
              bg-white text-2xl 2xl:text-4xl px-4 lg:px-8 py-2 lg:py-4 
              flex flex-row gap-2 lg:gap-4 items-center 
              rounded-lg drop-shadow-xl hover:drop-shadow-md
            `}
              >
                <img src={MagnifyingGlass} alt="Find" className="w-7 lg:w-10" />
                Find
              </button>
              <button
                  className={`
              bg-white text-2xl 2xl:text-4xl px-4 lg:px-8 py-2 lg:py-4 
              flex flex-row gap-2 lg:gap-4 items-center 
              rounded-lg drop-shadow-xl hover:drop-shadow-md
            `}
              >
                <img src={House} alt="List" className="w-7 lg:w-10" />
                List
              </button>
            </div>
          </div>
          <div className="basis-2/5 flex flex-row justify-center items-center">
            <img src={Phone} alt="Phone" className="h-[70vh]" />
          </div>
        </div>
      </div>
  );
}

export default Landing;