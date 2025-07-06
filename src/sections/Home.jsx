export default function Home() {
  return (
    <div className="bg-gray-900 min-h-screen font-sans">
      <section className="relative min-h-screen flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full bg-[url('/Images/MainBG.jpg')] bg-cover bg-center bg-no-repeat"></div>

        {/* Black overlay */}
        <div className="absolute inset-0 bg-black opacity-80"></div>

        {/* Centered Content */}
        <div className="relative z-10 max-w-screen-xl mx-auto px-4 md:px-8">
          <div className="space-y-6 max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
              Fast AC Repair — When You
              <br />
              Need It Most.
            </h2>
            <p className="max-w-2xl mx-auto text-gray-300 text-base md:text-lg">
              Same-day service. Certified technicians.
              <br />
              100% satisfaction guarantee.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-6">
              <button className="px-6 py-3 rounded-full font-medium text-gray-900 bg-white hover:bg-gray-100 active:bg-gray-200 transition duration-150 shadow-md">
                Book a Repair
              </button>
              <button className="px-6 py-3 rounded-full font-medium text-white bg-white/10 border border-white/20 backdrop-blur-lg hover:bg-white/20 active:bg-white/30 transition duration-150 shadow-md">
                Get Estimate
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
