// import LetterGlitch from "@/components/LetterGlitch";

const Hero = () => {
  return (
    <div className="relative h-screen  py-2 w-full overflow-hidden">
      {/* <div className="absolute inset-0">
        <LetterGlitch
          glitchColors={["#1a1d2e", "#5b8def", "#2d3555"]}
          glitchSpeed={50}
          centerVignette={true}
          outerVignette={false}
          smooth={true}
        />
      </div> */}

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <h1 className="text-title font-bold tracking-tight ">
          Mohammed Tamimi
        </h1>
        <p className="mt-4 text-h3 font-medium ">Computer Engineer</p>
      </div>
    </div>
  );
};

export default Hero;
