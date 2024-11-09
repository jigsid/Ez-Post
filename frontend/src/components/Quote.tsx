export const Quote = () => {
  return (
    <div className="h-screen w-full relative overflow-hidden bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white flex items-center justify-center">
      <div className="absolute inset-0 bg-cover bg-center opacity-50 bg-[url('/images/your-scene.jpg')]"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/60 to-black opacity-80"></div>

      <div className="relative z-10 max-w-xl text-center px-6">
        <h1 className="text-5xl font-bold leading-snug text-shadow-lg animate-fade-in">
          "Inspiration lies in every story shared."
        </h1>
        <p className="text-lg font-light mt-4 opacity-80 animate-fade-in">
          - Discover voices from around the world
        </p>
      </div>

      <div className="absolute w-16 h-16 bg-blue-500 rounded-lg opacity-20 animate-glow z-10 top-1/4 left-1/3 transform rotate-45 shadow-xl"></div>
      <div className="absolute w-24 h-24 bg-purple-500 rounded-full opacity-15 animate-glow z-10 top-2/3 right-1/4 transform rotate-45 shadow-2xl"></div>
      <div className="absolute w-18 h-18 bg-gradient-to-r from-pink-500 to-yellow-500 rounded-lg opacity-25 animate-glow z-10 bottom-1/4 left-1/2 transform rotate-45 shadow-lg"></div>

      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 opacity-70 hover:opacity-100 transition-opacity duration-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-12 h-12 text-white animate-bounce"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 4v16m8-8H4"
          />
        </svg>
      </div>
    </div>
  );
};
