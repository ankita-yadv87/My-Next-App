import Herosection from "@/app/components/Herosection";

const Page = () => {
  const headline = "Unleash the Cinematic Magic with Netflix Delights"
  const para = "Discover the best in entertainment with our Netflix-powered platform. From award-winning dramas to blockbuster hits, explore the latest movies and web series curated just for you. Your next favorite awaits—start streaming now."
    return (
        <>
          <Herosection title={headline} imageUrl={"/netflix.png"} para={para} />
        </>
    );
};

export default Page;