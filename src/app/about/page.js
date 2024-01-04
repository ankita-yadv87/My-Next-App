
import Herosection from "@/app/components/Herosection";
import { resolve } from "path";

const waitAndResolve = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 6000); // Adjust the delay as needed (in milliseconds)
    });
  };

const About = async () => {

  const para = "Embark on a cinematic journey with our handpicked selection of movies and web series, brought to you through the magic of the Netflix API. From award-winning dramas to action-packed blockbusters, our platform offers the latest and greatest in entertainment. Find your new favorite as you immerse yourself in a world of storytelling excellence. Uncover the cinematic delights that await you, right at your fingertips.";

  const headline = "Our Cinematic Odyssey";

    return (
        <Herosection title={headline} imageUrl ={"/netflix2.jpg"} para={para} />
    );
};

export default About;