import heroImage from "@/assets/hero-cincodemayo.jpg";
import fiestaDrinks from "@/assets/fiesta-drinks.png";
import madMonkeyLogo from "@/assets/mad-monkey-logo.png";
import cdmLogo from "@/assets/cdm-logo.png";
import ScatteredStars from "@/components/ScatteredStars";

const HeroSection = () => {
  return (
    <section className="relative z-10 w-full min-h-[100svh] md:min-h-[85vh] flex flex-col md:flex-row border-b-4 border-divider overflow-visible">
      <ScatteredStars />
      {/* Left - Text */}
      <div className="flex-1 bg-background px-5 pt-2 pb-6 md:p-12 flex flex-col justify-center items-start border-b-4 md:border-b-0 md:border-r-4 border-divider relative">
        <img src={madMonkeyLogo} alt="Mad Monkey" className="w-28 md:w-40 mb-3 md:mb-4 z-10" style={{ filter: 'drop-shadow(1px 0 0 white) drop-shadow(-1px 0 0 white) drop-shadow(0 1px 0 white) drop-shadow(0 -1px 0 white)' }} />
        <div className="mb-0 inline-flex items-center gap-2 bg-primary text-primary-foreground font-black uppercase px-4 py-2 text-xs md:text-lg border-2 border-primary -rotate-2 z-20 rounded-sm" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}>
          May 5 — 2026
        </div>
        <img
          src={cdmLogo}
          alt="Cinco de Mayo Fiesta"
          className="w-full max-w-md md:max-w-lg -mt-16 md:-mt-20 -mb-36 md:-mb-52 z-10 drop-shadow-lg"
        />
        <p className="text-[13px] md:text-2xl font-bold mb-6 md:mb-10 max-w-xl leading-relaxed z-10">
          Tacos loaded, tequila flowing,<br />
          Poolside madness, piñatas going.<br />
          DJs loud and the bar on fire,<br />
          Mad Monkey Fiesta, taking it&nbsp;higher.
        </p>
        <a
          href="#selector"
          className="w-full md:w-auto text-center bg-primary text-primary-foreground text-lg md:text-2xl font-black uppercase px-8 py-4 md:px-12 md:py-6 border-2 border-primary hover:brightness-110 active:translate-x-1 active:translate-y-1 z-10 transition-all"
        >
          GET EARLY ACCESS
        </a>
      </div>

      {/* Right - Image */}
      <div className="flex-1 bg-background relative flex items-center justify-center min-h-[300px] md:min-h-[400px]">
        <div className="relative w-4/5 aspect-square md:aspect-auto md:h-4/5 flex items-center justify-center">
          <img
            src={heroImage}
            alt="Cinco de Mayo Party"
            className="w-full h-full object-cover border-2 border-border brutalist-shadow rotate-3"
            style={{ objectPosition: '50% 20%' }}
          />
          <div className="absolute top-4 right-4 md:top-10 md:right-10 bg-primary text-primary-foreground p-2 md:p-4 border-2 border-primary font-black text-sm md:text-xl uppercase rotate-12 shadow-lg z-20">
            🌮 ALL IN
          </div>
          <div className="absolute bottom-4 left-4 md:bottom-10 md:left-10 bg-card text-foreground p-2 md:p-4 border-2 border-border font-black text-sm md:text-xl uppercase -rotate-6 shadow-lg z-20">
            Cinco de Mayo 2026
          </div>
        </div>

        <img
          src={fiestaDrinks}
          alt="Mad Monkey Fiesta Drinks"
          className="absolute w-44 md:w-72 lg:w-96 bottom-0 right-2 md:-bottom-20 md:right-10 lg:-bottom-24 lg:right-16 z-40 animate-float drop-shadow-lg pointer-events-none"
          style={{ "--float-rotate": "3deg" } as React.CSSProperties}
        />
      </div>
    </section>
  );
};

export default HeroSection;
