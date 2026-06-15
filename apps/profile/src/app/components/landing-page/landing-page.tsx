import Image from 'next/image';
import './landing-page.css';

function LandingPage() {
  return (
    <div>
      <div className="w-screen h-[84dvh] flex flex-row flex-wrap justify-center">
        <div className="mr-[20] ml-[20] mt-[50] mb-[20] pl-[5] pt-[20] ">
          <Image
            src="/profile.png"
            alt="Vishwajeet Wadhwa"
            width={450}
            height={450}
            className="md:w-115 md:h-155 object-cover rounded-xl"
          />
        </div>
        <div className="mr-[10] ml-[20] pt-[120] text-wrap max-w-6xl">
          <p className="text-4xl font-roboto font-400">Software Architect</p>
          <p className="text-lg font-roboto font-400">
            with 20+ years of experience in software architecture and full-stack
            development, I have built my career around one core belief:
            technology should create real, measurable business impact. I began
            my journey as a software engineer, working on embedded systems at
            NEC Japan and Samsung R&D Institute India-Bangalore, where I
            designed JSRs for the Tizen platform, and earned the
            <span className="font-bold"> Patent of the Year award </span>for my
            NFC power-transmission innovation.
          </p>
          <br />
          <p className="text-lg font-roboto font-400">
            Over the past several years at Sapiens, I built a Digital R&D team
            from scratch to 50+ high-performing engineers, architected
            configurable insurance portals used by global clients, and drove a
            3x performance improvement for LUBA & Saskatchewan Workers'
            Compensation Board as part of a successful enterprise product
            launch.
          </p>
          <br />
          <p className="text-lg font-roboto font-400">
            My technical toolkit spans Claude, Node.js, Next.js, React,
            TypeScript, Nest.js, Kubernetes, Azure, and AI/ML frameworks
            including TensorFlow, PyTorch, Scikit Learn, Dynatrace, Datadog, and
            SonarQube— and I continuously invest in expanding it.
          </p>
          <br />
          <p className="text-lg font-roboto font-400">
            As a Technology leader my vision is to grow further into a role
            where I can shape engineering culture & innovation, drive strategic
            technology decisions, and lead organisations through meaningful
            digital transformation — connecting deep technical expertise with
            long-term business thinking.
          </p>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
