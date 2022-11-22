import map from '../assets/map.svg';
import search from '../assets/search-48.png'

function MapScreen() {
  return (
    <div className='bg-white flex flex-col md:flex-row gap-x-80 justify-center content-center mt-80 p-6'>
    {/* The color is  #8559E3 purple, black, white*/}
    <div className='w-96 p-0'>
      <div className='border-box w-80 h-15 bg-white drop-shadow-xl rounded-lg p-4'>
        <img alt='searchIcon' className='inline h-9 pr-3 hover:animate-wiggle' src={search}>
        </img>
        <h1 className='text-xl inline'>
          Enter your location...
          </h1>
      </div>
      <div className='mt-20 pt-2 '>
        <h1 className='font-oswald font-bold text-6xl'>
          Search by <span className='text-[#8559E3]'>location</span> or look through the <span className='text-[#8559E3]'>map</span>
        </h1>
      <p className='font-roboto pt-10 pr-10 text-left text-2xl'>
        Enter your location and find subleases through the search bar or move around the map to find subleases around the area you're looking at
      </p>
      </div>
    </div>
    <img alt='mapIcon' src={map} className='rounded-lg'>
    </img>
  </div>
  )
}

export default MapScreen;