import MessageScreen from '../assets/message-screen.png';

const Message = () => {
  return (
      <section className={`
          bg-brand text-white
          px-4 sm:px-8 md:px-16 lg:px-32 xl:px-64 
          h-screen 
          flex items-center justify-center
      `}>
        <div className="flex flex-col md:flex-row gap-6 md:gap-12">
          <div className="flex flex-col justify-center gap-4 md:gap-8">
            <h1 className="font-bold text-5xl md:text-6xl text-center md:text-left">
              Found the one?
            </h1>
            <p className="text-xl md:text-2xl text-center md:text-left">
              Message the tenant with our in-house messaging tool to ask for more information
            </p>
          </div>
          <div className="md:w-10/12 max-h-[45vh] md:max-h-[75vh] md:ml-auto flex justify-center">
            <img src={MessageScreen} alt="Message Screen" className="max-w-full max-h-full object-contain" />
          </div>
        </div>
      </section>
  );
};


export default Message;