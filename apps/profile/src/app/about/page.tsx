import Image from 'next/image';
import './about.css';

export default function About() {
  return (
    <div className="min-h-screen font-roboto font-400 text-lg leading-relaxed">
      <div className="max-w-7xl mx-auto px-10 py-8">
        {/* ── HEADER ───────────────────────────────────────────────── */}
        <div className="flex justify-between items-start mb-6">
          <div>
            <h1 className="font-roboto text-xl font-bold mb-0.5">
              Vishwajeet Wadhwa
            </h1>
            <p className="font-roboto font-400 text-lg">
              Director | Software Architect |
            </p>
            <p className="font-roboto font-400 text-lg mb-3">
              Technology leader, SaaS, Full Stack Software Development
            </p>
            <div className="font-roboto font-400 text-lg space-y-0.5 ">
              <p>Phone: +1 519 8078126</p>
              <p>
                Email:
                <a
                  href="mailto:contactvw77@gmail.com"
                  className="text-blue-600 underline"
                >
                  contactvw77@gmail.com
                </a>
              </p>
              <p className="font-roboto font-400 text-lg">
                LinkedIn:
                <a
                  href="https://www.linkedin.com/in/wadhwa-vishwajeet/"
                  className="text-blue-600 underline font-roboto font-400 text-lg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.linkedin.com/in/wadhwa-vishwajeet/
                </a>
              </p>
              <p className="font-roboto font-400 text-lg">
                Address: Ontario, Canada
              </p>
            </div>
          </div>
        </div>

        {/* ── PROFESSIONAL PROFILE ─────────────────────────────────── */}
        <Section title="Professional Profile">
          <p className="font-roboto font-400 text-lg leading-relaxed">
            Technology leader with 20+ years of comprehensive experience in
            working in various technologies and delivering high-value business
            impact solutions.
            <strong>
              Setup Digital R&amp;D team at Sapiens Technologies India from
              scratch to 50+ high-performing team members.
            </strong>
            Leading, providing technical leadership, mentoring and motivating
            team members. Passionate about exploring new technologies,
            understanding &amp; evaluating them, creating technical proposals,
            architectures, POCs &amp; using them in product development.
            Generated a patent for which I got
            <strong>patent of the year award</strong> from Samsung R&amp;D
            Institute India-Bangalore. Looking forward for an opportunity to
            learn &amp; further demonstrate my skillsets.
          </p>
        </Section>

        {/* ── TECHNICAL SKILLS ─────────────────────────────────────── */}
        <Section title="Technical Skills">
          <table className="w-full font-roboto font-400 text-lg">
            <tbody>
              <SkillRow
                label="Technologies"
                value="Node.js, Next.js, React.js TypeScript, JavaScript, Zustand, Express.js, Nest.js, Strapi (Headless CMS), StoryBook, Docker, Kubernetes, EFK, Azure APIM, HTML, Tailwind CSS, Styled-Components, React Testing Lib, Cypress, Nx build system"
              />
              <SkillRow
                label="Azure Courses"
                value="AZ-900(Azure Fundamentals), AZ-303(Microsoft Azure Solutions Architect)"
              />
              <SkillRow
                label="AI/ML"
                boldParts={['Scikit Learn,', 'TensorFlow,', 'Claude Code']}
                value={
                  <>
                    <strong>Claude Code,</strong> Claude Cowork, Copilot,
                    Gemini, Perplexity AI, <strong>Scikit Learn,</strong> NumPy,
                    Pandas, Matplotlib, <strong>TensorFlow,</strong> PyTorch,
                    Jupyter Notebook, Conda
                  </>
                }
              />
              <SkillRow label="Databases" value="Mongo DB, MySQL DB" />
              <SkillRow
                label="Identity Providers"
                value="Keycloak, Auth0, Social Logins"
              />
              <SkillRow
                label="Performance & APM Tools"
                value="Apache JMeter, Dynatrace, Datadog, Elastic APM"
              />
              <SkillRow
                label="Vulnerability & License Scan"
                value="SonarQube, Mend.io (WhiteSource), Vulnerability Calculator, Protext IP"
              />
              <SkillRow
                label="Design Tools"
                value="Draw.io, MS Visio, IcePanel"
              />
              <SkillRow label="API Documentation" value="Swagger, Redoc" />
            </tbody>
          </table>
        </Section>

        {/* ── WORK EXPERIENCE ──────────────────────────────────────── */}
        <Section title="Work Experience">
          {/* Role 1 – Sapiens North America */}
          <ExperienceBlock
            period="09/2025 – present"
            company={
              <>
                {/* <span className="text-blue-700 font-bold text-base tracking-wide">
                  SAPIENS
                </span> */}
                <Image
                  src="/sapiens.png"
                  alt="Sapiens Logo"
                  width={125}
                  height={125}
                />
                <div className="flex gap-2 mt-2 flex-wrap">
                  <Image
                    src="/sask.png"
                    alt="Sapiens Logo"
                    width={125}
                    height={125}
                  />
                  {/* <CompanyBadge
                    label="wcb"
                    color="bg-blue-800"
                    textColor="text-white"
                    subtitle="Saskatchewan Workers' Compensation"
                  /> */}
                  <Image
                    src="/luba.png"
                    alt="LUBA Logo"
                    width={100}
                    height={100}
                  />
                  {/* <CompanyBadge
                    label="LUBA"
                    color="bg-yellow-500"
                    textColor="text-black"
                    subtitle="WORKERS' COMP"
                  /> */}
                  <Image src="/sc.png" alt="LUBA Logo" width={80} height={80} />
                  {/* <CompanyBadge
                    label="wcc"
                    color="bg-gray-700"
                    textColor="text-white"
                    subtitle="sc.gov"
                  /> */}
                </div>
              </>
            }
          >
            <RoleTitle>
              Director | Software Architect,
              <a
                href="https://www.sapiens.com"
                className="text-blue-600 underline"
              >
                Sapiens North America
              </a>
              , Canada
            </RoleTitle>
            <p className="mb-1 font-medium">
              Product Development &amp; Go Live
            </p>
            <ol className="list-decimal list-inside space-y-1 font-roboto font-400 text-lg">
              <li>
                Took full technical ownership of the DigitalSuite product for
                successful go live for
                <strong>
                  Saskatchewan Workers&apos; Compensation Board (SASK WCB)
                </strong>
                <a
                  href="https://www.wcbsask.com/"
                  className="text-blue-600 underline"
                >
                  https://www.wcbsask.com/
                </a>
              </li>
              <li>
                Resolved all Penetration testing issues of SASK WCB to achieve
                100% security
              </li>
              <li>
                Improved <strong>DigitalSuite performance by 3x</strong> to have
                better customer experience for SASK WCB
              </li>
              <li>
                Actively working for LUBA Workers&apos; Comp
                <a
                  href="https://lubawc.com/"
                  className="text-blue-600 underline"
                >
                  https://lubawc.com/
                </a>
                and South Carolina Workers&apos; Compensation
                <a
                  href="https://www.wcc.sc.gov/"
                  className="text-blue-600 underline"
                >
                  https://www.wcc.sc.gov/
                </a>
              </li>
            </ol>
          </ExperienceBlock>

          {/* Role 2 – Sapiens India R&D Director */}
          <ExperienceBlock
            period="04/2022 – 09/2025"
            company={
              // <span className="text-blue-700 font-bold text-base tracking-wide">
              //   SAPIENS
              // </span>
              <Image
                src="/sapiens.png"
                alt="Sapiens Logo"
                width={125}
                height={125}
              />
            }
          >
            <RoleTitle>
              R&amp;D Director | Software Architect,
              <a
                href="https://www.sapiens.com"
                className="text-blue-600 underline"
              >
                Sapiens Technologies
              </a>
              , India
            </RoleTitle>
            <p className="mb-1 font-medium">Products Development –</p>
            <ul className="list-disc list-outside ml-4 space-y-1 font-roboto font-400 text-lg">
              <li>
                Portal Foundation(PF): Configurable portals based on
                configurations. Some of the portals developed using PF are
                Customer Portals, Agent (Broker) Portals, Workers Compensation
                Portals etc.
              </li>
              <li>
                API Composition Engine(ACE): Tool to develop &amp; publish APIs.
              </li>
              <li>
                Developed &amp; maintaining technical architecture for Portal
                Foundation connecting with CoreSuite for &quot;Life &amp;
                Pension&quot;(L&amp;P), &quot;Property &amp;
                Casualty&quot;(P&amp;C) &amp; Workers&apos; Compensation
              </li>
              <li>
                Written <strong>10+ best practices documents</strong> &amp;
                given couple of tech talks
              </li>
              <li>
                Proposed <strong>8+ ideas</strong> which are successfully
                developed &amp; commercialized/ready for commercialization in PF
                &amp; ACE
              </li>
              <li>
                <strong>Developed performance benchmarks</strong> for PF &amp;
                ACE till 50,000 users/1,000 concurrent users
              </li>
              <li>Designed RBAC/ABAC for Portal Foundation</li>
              <li>
                <strong>Enhanced portals performance by 100%</strong> for
                clients &quot;Republic Life Insurance&quot;, &quot;Hollard
                Insure&quot; &amp; many others
              </li>
              <li>
                Open source software &amp; security expert for Digital R&amp;D
                Team
              </li>
              <li>
                Collaborate with <strong>Global pre-sales</strong> &amp;
                participate in <strong>customer calls</strong>
              </li>
            </ul>
          </ExperienceBlock>

          {/* Role 3 – Sr Dev Manager */}
          <ExperienceBlock
            period="05/2019 – 03/2022"
            company={
              <Image
                src="/sapiens.png"
                alt="Sapiens Logo"
                width={125}
                height={125}
              />
            }
          >
            <RoleTitle>
              Sr. Development Manager | Tech Architect,
              <a
                href="https://www.sapiens.com"
                className="text-blue-600 underline"
              >
                Sapiens Technologies
              </a>
              , India
            </RoleTitle>
            <p className="mb-1">
              Designed &amp; Developed Agent &amp; Customer Portals for L&amp;P
              and P&amp;C
            </p>
            <ul className="list-disc list-outside ml-4 space-y-1 font-roboto font-400 text-lg">
              <li>
                <strong>Successfully commercialized</strong> P&amp;C Customer
                &amp; Agent Portals for <strong>Landkreditt Forsikring</strong>
                connected with TIA Enterprise
              </li>
              <li>
                Successfully demonstrated portals to
                <strong>
                  Hiscox Insurance, MetLife Insurance, Bangkok Insurance, BHSF
                  Insurer
                </strong>
                and many others.
              </li>
              <li>
                Technologies used are Node.js, Next.js, React.js, TypeScript,
                React Bootstrap, HTML, Nest.js, Express.js, Mongo DB, Strapi
                (Headless CMS), JSONata, Docker, Kubernetes, Azure
              </li>
            </ul>
          </ExperienceBlock>

          {/* Role 4 – Samsung */}
          <ExperienceBlock
            period="07/2007 – 05/2019"
            company={
              <Image
                src="/samsung.png"
                alt="Samsung Logo"
                width={125}
                height={125}
              />
            }
          >
            <RoleTitle>
              Senior Technical Manager,
              <a
                href="https://research.samsung.com/sri-b"
                className="text-blue-600 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Samsung R&amp;D Institute India-Bangalore
              </a>
            </RoleTitle>
            <p className="mb-1">
              Successfully designed &amp; developed many software products for
              Samsung.
            </p>
            <ul className="list-disc list-outside ml-4 space-y-1 font-roboto font-400 text-lg">
              <li>
                Contributed to the development of Car Mode 3.0 application &amp;
                Samsung Connect Auto – App &amp; OBD Dongle
              </li>
              <li>
                <strong>Successfully launched Car Mode 3.0 at IFA 2015</strong>
              </li>
              <li>Car Mode 3.0 uses Android, Java, BT &amp; Samsung KNOX</li>
              <li>
                Successfully did OS upgrade for Samsung Galaxy SIII, Samsung
                Galaxy Axiom™ devices for U.S. Cellular
              </li>
              <li>
                Designed &amp; developed JSRs (Sensor, Location, Bluetooth, NFC)
                for Samsung Tizen Platform &amp; Samsung Handset Platform.
                Technologies used are Linux, C &amp; Java.
              </li>
            </ul>
          </ExperienceBlock>

          {/* Role 5 – NEC Japan */}
          <ExperienceBlock
            period="03/2003 – 06/2007"
            company={
              <div className="flex items-center">
                <Image src="/iap.png" alt="IAP Logo" width={80} height={80} />
                <Image src="/nec.png" alt="NEC Logo" width={80} height={80} />
              </div>
            }
          >
            <RoleTitle>
              Sr. Software Engineer, IAP,
              <a
                href="https://www.nec.com"
                className="text-blue-600 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                NEC Japan
              </a>
            </RoleTitle>
            <p className="font-roboto font-400 text-lg">
              Contributed in enhancement of software for devices FOMA N902iS,
              FOMA N901iC &amp; FOMA N900iS using DOJA platform on Linux. Tech
              used are Texas Instruments Open Multimedia Applications Platform,
              Linux, C &amp; Java
            </p>
          </ExperienceBlock>

          {/* Role 6 – Sar Softech */}
          <ExperienceBlock period="09/2000 – 03/2003" company={null}>
            <RoleTitle>Software Engineer, Sar Softech</RoleTitle>
            <p className="font-roboto font-400 text-lg">
              Contributed in research on Real Time Java Virtual Machine.
              Technologies used are Linux, C &amp; Java
            </p>
          </ExperienceBlock>
        </Section>

        {/* ── EDUCATION ────────────────────────────────────────────── */}
        <Section title="Education">
          <div className="space-y-1 font-roboto font-400 text-lg">
            <div className="flex gap-6">
              <span className="w-28 shrink-0 text-gray-600">1997 – 2000</span>
              <span>
                Master of Computer Applications, IMS Ghaziabad, CCS University,
                Meerut
              </span>
            </div>
            <div className="flex gap-6">
              <span className="w-28 shrink-0 text-gray-600">1994 – 1997</span>
              <span>
                Bachelor of Science, DAV College, CCS University, Meerut
              </span>
            </div>
          </div>
        </Section>

        {/* ── PATENT & AWARDS ──────────────────────────────────────── */}
        <Section title="Patent & Awards">
          <ul className="list-disc list-outside ml-4 space-y-1 font-roboto font-400 text-lg">
            <li>
              Patent: Methods and device for controlling power transmission
              using NFC. US20140021799 A1 Application number: US 13/945,328,
              Publication date: Jan 23, 2014, Filing date: Jul 18, 2013
            </li>
            <li>
              Patent of the year award from
              <a
                href="https://research.samsung.com/sri-b"
                className="text-blue-600 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Samsung R&amp;D Institute India-Bangalore
              </a>
            </li>
            <li>
              Best Product Lead award in the team from Samsung R&amp;D Institute
              India-Bangalore
            </li>
            <li>
              Best Employee of the Month award from Samsung R&amp;D Institute
              India-Bangalore
            </li>
            <li>
              Business contribution award for Samsung Linux Platform (Tizen)
              from Samsung R&amp;D
            </li>
          </ul>
        </Section>
      </div>
    </div>
  );
}

/* ─── Helper sub-components ──────────────────────────────────────────── */

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-5">
      <h2 className="font-roboto font-400 text-lg font-bold border-b border-gray-800 pb-0.5 mb-2 tracking-wide">
        {title}
      </h2>
      {children}
    </section>
  );
}

function SkillRow({
  label,
  value,
  boldParts,
}: {
  label: string;
  value: React.ReactNode;
  boldParts?: string[];
}) {
  return (
    <tr className="align-top">
      <td className="pr-4 py-0.5 text-gray-700 w-48 shrink-0">{label}</td>
      <td className="py-0.5">{value}</td>
    </tr>
  );
}

function ExperienceBlock({
  period,
  company,
  children,
}: {
  period: string;
  company: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-4 mb-4">
      {/* Left column: date + company logo */}
      <div className="w-36 shrink-0">
        <p className="font-roboto font-400 text-base text-gray-600 mb-1">
          {period}
        </p>
        {company && <div>{company}</div>}
      </div>
      {/* Right column: role details */}
      <div className="flex-1">{children}</div>
    </div>
  );
}

function RoleTitle({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-bold font-roboto font-400 text-lg mb-1">{children}</p>
  );
}

function CompanyBadge({
  label,
  color,
  textColor,
  subtitle,
}: {
  label: string;
  color: string;
  textColor: string;
  subtitle: string;
}) {
  return (
    <div
      className={`${color} ${textColor} px-2 py-1 rounded-sm text-[10px] font-bold leading-tight`}
    >
      <div>{label.toUpperCase()}</div>
      <div className="font-normal text-[9px] opacity-80">{subtitle}</div>
    </div>
  );
}
