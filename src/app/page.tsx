export default function Home() {
  return (
    <main className="px-20 relative h-screen scroll-smooth overflow-auto">
      <nav className="sticky top-0 z-10 bg-black py-5">
        <ul className="flex py-5 gap-10">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#investors">Investors</a>
          </li>
          <li>
            <a href="#contacts">Contacts</a>
          </li>
        </ul>
      </nav>
      <div>
        <p className="text-5xl text-center">Blockchain Solutions</p>
      </div>
      <section id="about" className="mt-14">
        <p className="text-2xl">
          At Blockchain Solutions, we are dedicated to revolutionizing
          industries through the application of cutting-edge blockchain
          technology. With expertise in developing custom-built blockchain
          solutions, decentralized applications (DApps), and smart contracts, we
          empower businesses to streamline their processes, enhance security,
          and unlock unprecedented opportunities for growth
        </p>
      </section>
      <section id="services" className="mt-12">
        <p className="text-2xl">
          One of our primary objectives is to establish a groundbreaking
          e-commerce platform that fully embraces the potential of
          cryptocurrencies, particularly Bitcoin. By providing a seamless
          integration of Bitcoin as the primary currency, we aim to create a
          platform that offers unparalleled convenience, security, and
          accessibility to online shoppers worldwide.
        </p>
      </section>
      <section id="investors" className="mt-12 flex flex-col gap-6">
        <h3 className="text-4xl">Why invest in Blockchain Solutions</h3>
        <h5 className="text-2xl">
          Investing in Blockchain Solutions offers a unique opportunity to
          participate in a rapidly growing market, capitalize on the potential
          of blockchain technology, and secure high returns. Don't miss out on
          being part of the revolution. Invest in Blockchain Solutions today!
        </h5>
        <h3 className="text-4xl">Services</h3>

        <ul className="grid grid-cols-2 gap-6">
          <li className="flex-col flex ">
            <p className="font-bold text-2xl">Revolutionary Technology</p>
            <h4>
              Blockchain Solutions is at the forefront of the blockchain
              revolution.
            </h4>
          </li>
          <li className="flex flex-col">
            <p className="font-bold text-2xl">Potential for High Returns</p>
            <h4>
              The blockchain industry is experiencing rapid growth, and with
              that comes significant investment opportunities.
            </h4>
          </li>
          <li className="flex flex-col">
            <p className="font-bold text-2xl">Trusted Expertise</p>
            <h4>
              With years of experience in the blockchain industry, our team of
              experts has successfully delivered numerous blockchain projects
              across various sectors.
            </h4>
          </li>
          <li>
            <p className="font-bold text-2xl">Diversification Strategy</p>
            <h4>
              Investing in Blockchain Solutions allows you to diversify your
              investment portfolio.
            </h4>
          </li>
        </ul>
      </section>
      <footer id="contacts" className="mt-12">
        <ul className="py-4">
          <li>milo@gmail.com</li>
          <li>tel.: 1-023912-312</li>
          <li>
            LLC Blockchain Solutions, Varšavská 715/36, Vinohrady, 120 00 Praha
            2, Company ID number:195 23 441
          </li>
        </ul>
      </footer>
    </main>
  );
}
