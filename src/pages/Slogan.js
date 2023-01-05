import Logo from '../assets/logo.svg';

const Slogan = () => {
  return (
      <section className={`
          bg-brand text-white
          px-4 sm:px-8 md:px-16 lg:px-32 xl:px-64
          h-80 
          hidden md:flex items-center justify-center
      `}>
        <img src={Logo} alt="Crib" />
        <h1 className="font-bold text-xl md:text-4xl -translate-y-2">Start saving thousands by using Crib today</h1>
      </section>
  );
};

export default Slogan;