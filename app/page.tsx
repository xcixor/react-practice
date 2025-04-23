import Hero from "@/components/hero";
import HeroClass from "@/components/hero.class";

export default function Home() {
  return (
    <Hero
      title="Welcome to Our Site"
      subtitle="Discover amazing products and services"
      imageUrl="/hero.jpg"
      ctaText="Get Started"
      ctaLink="#" 
    />
    // <HeroClass
    //   title="Welcome to Our Site"
    //   subtitle="Discover amazing products and services"
    //   imageUrl="/hero.jpg"
    //   ctaText="Get Started"
    //   ctaLink="#"
    // />
  );
}
