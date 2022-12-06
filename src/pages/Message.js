import MessageScreen from '../assets/message-screen.png';

const Message = () => {
  return (
      <section className="bg-brand text-white snap-center">
        <div className="flex flex-row gap-12">
          <div className="flex flex-col justify-center gap-8">
            <h1 className="font-bold text-6xl">
              Found the one?
            </h1>
            <p className="text-2xl">
              Message the tenant with our in-house messaging tool to ask for more information
            </p>
          </div>
          <div className="w-10/12 ml-auto flex justify-center">
            <img src={MessageScreen} alt="Message Screen" />
          </div>
        </div>
      </section>
  );
};


export default Message;