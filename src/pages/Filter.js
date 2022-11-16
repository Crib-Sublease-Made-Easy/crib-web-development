import filter from '../assets/filterScreen.svg';

function FilterScreen() {
  return (
    <div className='bg-white flex flex-col md:flex-row gap-x-60 justify-center content-center mt-40 p-6'>
      <img alt='filterpic' className='' src={filter}>
      </img>
      <div className='w-96 pt-2'>
        <h1 className='border-box w-90 text-left'>
          <p className='font-oswald font-bold text-5xl'> <span className='text-[#8559E3]'> Filtered</span> to your needs</p>
        </h1>
        <p className='font-roboto p-0 lg:pt-10 lg:pr-10 text-left text-2xl text-soft'>
          Filter search results to find the perfect sublease for you! we offer more than 10+ filters to find your desired <div className='inline text-[#8559E3] font-semibold'>crib</div>
        </p>
      </div>
    </div>
  )
}

export default FilterScreen;