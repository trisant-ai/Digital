import Image from 'next/image';
import './landing-page.css';

function LandingPage() {
  return (
    <div>
      <div className="w-screen h-[80dvh] flex flex-row flex-wrap justify-center bg-blue-200">
        <div className="mr-[20] ml-[20] pt-[200] text-wrap max-w-2xl font-bold">
          <p className="text-6xl">
            Websites for Insurance Agents and Brokers Made Easy!
          </p>
          <br></br>
          <p className="text-3xl">
            Kick-start your insurance business with the website and marketing
            you need.
          </p>
        </div>
        <div className="mr-[20] ml-[20] pt-[50]">
          <Image
            src="/landingpage.png"
            alt="Landing Image"
            width={525}
            height={525}
          />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
