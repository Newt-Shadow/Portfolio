import { content } from "../Content";
import Services from "./Services";
import Skills from "./Skills";

const Hero = () => {
  const { hero } = content;

  return (
    <section id="home" className="overflow-hidden" >
      <div className="min-h-screen relative flex flex-col-reverse md:flex-row md:items-end justify-center items-center" style={{paddingTop:"1rem"}}>
        {/* Background and Title */}
        <div
          data-aos="slide-left"
          data-aos-delay="1200"
          className="absolute h-full w-full md:w-4/12 top-0 right-0 bg-primaryLinear bottom-0 -z-10"
        >
          <h1 className="rotate-90 absolute top-[30%] right-[-15%] md:right-[-15%] text-[#EAF2FA] text-2xl md:text-4xl">

            <span className="text-dark_primary"></span>
          </h1>
        </div>

        {/* First Column */}
        <div className="pb-16 px-6 pt-5" data-aos="fade-down">
          <h2 className="text-3xl md:text-5xl">{hero.title}</h2>
          <br />
          <div className="flex justify-end md:justify-start">
            <a
              href="https://drive.google.com/file/d/1HyWZyo3GGQG5wS4vEDE1AHMCyYELLTWR/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn">{hero.btnText}</button>
            </a>
          </div>

          <div className="flex flex-col gap-10 mt-10">
            {hero.hero_content.map((content, i) => (
              <div
                key={i}
                data-aos="fade-down"
                data-aos-delay={i * 300}
                className={`flex items-center w-full md:w-80 gap-5 ${i === 1 ? "flex-row-reverse text-right" : ""
                  }`}
              >
                <h3 className="font-Paprika text-3xl md:text-5xl">
                  {content.count}
                </h3>
                <p className="text-base md:text-lg">{content.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Second Column (Image) */}
        <div className="w-full md:w-auto md:h-[37rem] h-64">
          <img
            src={hero.image}
            data-aos="slide-up"
            alt="..."
            className="h-full w-full object-contain"
          />
        </div>
      </div>

      <Skills />
      <Services />
    </section>
  );
};

export default Hero;
