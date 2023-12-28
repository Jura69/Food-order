import Header from "@/components/layout/Header";
import Hero from "@/components/layout/Hero";
import HomeMenu from "@/components/layout/HomeMenu";
import SectionHeaders from "@/components/layout/SectionHeaders";

export default function Home() {
  return (
    <>
      <Hero />
      <HomeMenu />
      <section className="text-center my-16" id="about">
        <SectionHeaders subHeader={"Our story"} mainHeader={"About us"} />
        <div className="text-gray-500 max-w-2xl mx-auto mt-4 flex flex-col gap-4 text-justify">
          <p>
            Nestled in the vibrant streets of Hanoi,{" "}
            <a className="text-primary">FOOD LOVER</a>{" "} emerged as a culinary
            haven, celebrating the rich tapestry of Vietnamese cuisine. Founded
            by Chef Nguyen, the eatery became a cherished destination, blending
            tradition with modern flair. The menu, curated with a deep passion
            for food, showcased Vietnam's culinary gems, from aromatic pho to
            crispy banh mi. With an ambiance echoing warm hospitality and a
            commitment to sourcing the finest local ingredients, <a className="text-primary">FOOD LOVER</a>{" "}
            became a beloved community hub for food enthusiasts.
          </p>
          <p>
            As the journey unfolded, <a className="text-primary ">FOOD LOVER</a>{" "}
            evolved, introducing innovative dishes that paid homage to Vietnam's
            culinary legacy. The restaurant's commitment to authenticity,
            sustainability, and a deep love for the vibrant streets of Vietnam
            forged a connection between patrons and the essence of the country's
            kitchens. Join us at <a className="text-primary">FOOD LOVER</a>, where every meal is a celebration
            of Vietnam's diverse flavors and a testament to the belief that good
            food has the power to transcend borders and bring people together.
          </p>
        </div>
      </section>
      <section className="text-center my-8" id="contact">
        <SectionHeaders
          subHeader={"Don't hesitate"}
          mainHeader={"Contact us"}
        />
        <div className="mt-8">
          <a className="text-4xl text-gray-500" href="tel:0967089107">
            0967089107
          </a>
        </div>
      </section>
    </>
  );
}
