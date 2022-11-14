import filter from '../assets/filterScreen.svg';

function FilterScreen() {
  return (
    <div className='ml-6 flex flex-col lg:flex-row lg:p-20'>
      <img alt='filterpic' className='pl-4 md:pt-20 lg:pl-60 md:pb-20' src={filter}>
      </img>
      <div className='w-50 p-4 lg:pt-60 lg:pl-60 lg:pr-40'>
        <h1 className='border-box w-90 text-left'>
          <p className='font-oswald font-bold text-6xl'> <span className='text-[#8559E3]'> Filtered</span> to your needs</p>
        </h1>
        <p className='font-roboto p-0 lg:pt-10 lg:pr-10 text-left text-3xl text-soft'>
          Filter search results to find the perfect sublease for you! we offer more than 10+ filters to find your desired <div className='inline text-[#8559E3] font-semibold'>crib</div>
        </p>
      </div>
    </div>
  )
}

export default FilterScreen;