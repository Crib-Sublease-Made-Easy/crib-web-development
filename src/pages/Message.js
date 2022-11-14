import msg from '../assets/messageScreenShot.svg';

/*
  responsive when resized horizontally, also added a little hover effect when
  user hovers over the message screenshot
 */
function MessagePage() {
  return (
    <div className='bg-white flex flex-col lg:flex-row md:m-80'>
      {/* The color is  #8559E3 purple, black, white*/}
      <div className='w-50 p-10'>
        <h1 className='border-box w-96 text-left'>
          <p className='font-oswald font-bold text-6xl'> Found the <span className='text-[#8559E3]'> one</span>?</p>
        </h1>
        <p className='font-roboto pt-10 pr-10 text-left text-3xl text-soft'>
          Message the tenant with our in-house messaging tool to ask for more information
        </p>
      </div>
      <img alt='msgSS' src={msg} className='pl-20 rounded-lg drop-shadow-2xl hover:drop-shadow-sm'>
      </img>
    </div>
  )
}

export default MessagePage;