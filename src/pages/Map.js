import MapScreen from '../assets/map-screen.png';
import SearchIcon from '../assets/search-icon.svg';

const Map = () => {
  return (
      <section className="bg-brand text-white snap-center">
        <div className="flex flex-row gap-12">
          <div className="flex flex-col justify-center gap-8">
            <button className={`
                group
                bg-white px-6 py-4 rounded-xl w-3/5
                flex gap-4 items-center
                text-xl text-black/50 align-middle
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
          <div className="w-10/12 ml-auto flex justify-center">
            <img src={MapScreen} alt="Map Screen" />
          </div>
        </div>
      </section>
  );
};

export default Map;