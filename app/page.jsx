import { Button } from '@/components/ui/button';
import { FiDownload } from 'react-icons/fi';
import Typing from '@/components/Typewriter';
// components
import Social from '@/components/Social';
import Photo from '@/components/Photo';
import Stats from '@/components/Stats';

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row justify-between items-center xl:pt-8 xl:pb-24">
          {/* Career Section  */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <h1 className="h1 mb-6">
              Hey I&#39;m <br />
              <span className="text-accent">Devohn</span>
              <Typing roles={['Software Engineer', 'Full-Stack Developer']} />
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I am a software engineer with a passion for building web
              applications, full-stack development, product testing and software
              solutions.
            </p>
            {/* Social and Download Buttons */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                as="a"
                href="/assets/resume/Devohn_Hall_Resume.pdf"
                download="Devohn Hall Resume.pdf"
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/* Photo */}
          <div className=" order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
