import map from '../assets/map.svg';
import search from '../assets/search-48.png'

function MapScreen() {
  return (
    <div className='bg-white flex flex-col lg:flex-row md:m-80'>
    {/* The color is  #8559E3 purple, black, white*/}
    <div className='w-50 p-10'>
      <div className='bg-white drop-shadow-xl hover:drop-shadow-md rounded-xl max-w-md p-4'>
        <img className='inline h-10 pr-3 hover:animate-wiggle' src={search}>
        </img>
        <h1 className='text-xl inline'>
          Enter your location...
          </h1>
      </div>
      <div className='mt-20 pt-6 '>
        <h1 className='font-oswald font-bold text-6xl'>
          Search by <span className='text-[#8559E3]'>location</span> or look through the <span className='text-[#8559E3]'>map</span>
        </h1>
      <p className='font-roboto pt-10 pr-10 text-left text-3xl'>
        Enter your location and find subleases through the search bar or move around the map to find subleases around the area you're looking at
      </p>
      </div>
    </div>
    <img src={map} className='pl-20 rounded-lg'>
    </img>
  </div>
  )
}

export default MapScreen;