import { FadeIn } from '@/components/FadeIn'
import { Container } from '@/components/Container'

const HomeHero = () => {
  return (
    <Container className="py-8 text-center">
      <FadeIn
        className="container flex max-w-[64rem] h-screen flex-col items-center gap-5 text-center"
      >
        <div
          className="flex xl:justify-center">
          <img
            src="/logo.png"
            decoding="async"
            loading="lazy"
            alt="cryptonode logo"
            width="300"
            height="250"
            className="mt-1 max-w-full"
          />
        </div>
        <div
          className="flex flex-col items-center text-center"
        >
          <h1
            className="font-heading text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl !leading-[1.1] text-balance"
          >
            <span className="text-gradient_indigo-purple">
              Crypto Node
            </span>
          </h1>
          <h2 className="max-w-[42rem] leading-normal sm:text-xl sm:leading-8 text-2xl">
            Node Project          </h2>
          <div className="relative -z-10"></div>
        </div>

        <div
          className="flex flex-col items-center text-center leading-normal text-muted-foreground sm:text-xl sm:leading-8 text-balance"
        >
          Project node by indatechno.com
        </div>
      </FadeIn>
    </Container>
  );
};
export default HomeHero;
