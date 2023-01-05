import MapScreen from '../assets/map-screen.png';
import SearchIcon from '../assets/search-icon.svg';

const Map = () => {
  return (
      <section className={`
          bg-brand text-white
          px-4 sm:px-8 md:px-16 lg:px-32 xl:px-64 
          h-screen 
          flex items-center justify-center
      `}>
        <div className="flex flex-col md:flex-row gap-6 md:gap-12">
          <div className="flex flex-col items-center md:items-start justify-center gap-4 md:gap-8">
            <button className={`
                group
                bg-white px-6 py-4 rounded-xl w-96
                flex gap-4 items-center order-last md:order-first
                text-xl text-black/50 align-middle truncate
                shadow-lg hover:shadow-2xl
                transition ease-in-out hover:-translate-y-1 duration-300
            `}>
              <img src={SearchIcon} alt='searchIcon' className='h-6 group-hover:animate-wiggle' />
              Enter your location...
            </button>
            <h1 className="font-bold text-5xl md:text-6xl text-center md:text-left">
              Search by location or on map
            </h1>
            <p className="text-xl md:text-2xl text-center md:text-left">
              Enter your location and find subleases through the search bar or move around the map to find subleases around the area you're looking at
            </p>
          </div>
          <div className="md:w-10/12 max-h-[45vh] md:max-h-[75vh] md:ml-auto flex justify-center">
            <img src={MapScreen} alt="Map Screen" className="max-w-full max-h-full object-contain" />
          </div>
        </div>
      </section>
  );
};

export default Map;