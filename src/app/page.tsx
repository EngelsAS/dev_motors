import { Container } from "@/components/container";
import { Hero } from "@/components/hero";
import { Footer } from "@/components/home/footer";
import { Services } from "@/components/home/services";
import { Submenu } from "@/components/home/submenu";
import { getDataHome } from "@/utils/actions/get-data";
import { HomeProps } from "@/utils/types/home.type";
import { Phone } from "lucide-react";

export default async function Home() {
  const { object }: HomeProps = await getDataHome();
  console.log(object.title);

  return (
    <main>
      <Submenu />
      <Hero
        buttonTitle={object.metadata.cta_button.title}
        buttonUrl={object.metadata.cta_button.url}
        bannerUrl={object.metadata.banner.url}
        heading={object.metadata.heading}
        icon={<Phone size={24} color="#fff" />}
      />
      <Container>
        <Services object={object} />
        <Footer object={object} />
      </Container>
    </main>
  );
}
