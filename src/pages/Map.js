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
        <div className="flex flex-row gap-12">
          <div className="flex flex-col justify-center gap-8">
            <button className={`
                group
                bg-white px-6 py-4 rounded-xl w-96
                flex gap-4 items-center
                text-xl text-black/50 align-middle truncate
                shadow-lg hover:shadow-2xl
                transition ease-in-out hover:-translate-y-1 duration-300
            `}>
              <img src={SearchIcon} alt='searchIcon' className='h-6 group-hover:animate-wiggle' />
              Enter your location...
            </button>
            <h1 className="font-bold text-6xl">
              Search by location or on map
            </h1>
            <p className="text-2xl">
              Enter your location and find subleases through the search bar or move around the map to find subleases around the area you're looking at
            </p>
          </div>
          <div className="w-10/12 max-h-[75vh] ml-auto flex justify-center">
            <img src={MapScreen} alt="Map Screen" className="max-w-full max-h-full object-contain" />
          </div>
        </div>
      </section>
  );
};

export default Map;