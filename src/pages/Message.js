import MessageScreen from '../assets/message-screen.png';

const Message = () => {
  return (
      <section className={`
          bg-brand text-white
          px-4 sm:px-8 md:px-16 lg:px-32 xl:px-64 
          h-screen 
          flex items-center justify-center
      `}>
        <div className="flex flex-row gap-12">
          <div className="flex flex-col justify-center gap-8">
            <h1 className="font-bold text-6xl">
              Found the one?
            </h1>
            <p className="text-2xl">
              Message the tenant with our in-house messaging tool to ask for more information
            </p>
          </div>
          <div className="w-10/12 max-h-[75vh] ml-auto flex justify-center">
            <img src={MessageScreen} alt="Message Screen" className="max-w-full max-h-full object-contain" />
          </div>
        </div>
      </section>
  );
};


export default Message;