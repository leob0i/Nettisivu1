import Container from "@/components/container";
import Hero from "@/components/hero";
import Services from "@/components/services";
//import Portfolio from "@/components/portfolio";
import Pricing from "@/components/pricing";
import Contact from "@/components/contact";
import About from "@/components/about";
import Clients from "@/components/clients";


export default function Page() {
  return (
    <main>
      <Hero />
      <Container className="py-12 sm:py-20" id="palvelut">
        <Services />
        <Container className="py-12 sm:py-20" id="meista">
          <About />
         </Container>
      </Container>
      {/*
      <Container className="py-12 sm:py-20" id="referenssit">
        <Portfolio />
        </Container>
      */}
      <Container className="py-12 sm:py-20" id="hinnasto">
        <Pricing />
      </Container>
       <Container className="py-12 sm:py-20" id="asiakkaat">
        <Clients />
      </Container>
      <Container className="py-12 sm:py-20" id="yhteys">
        <Contact />
      </Container>
    </main>
  );
}
