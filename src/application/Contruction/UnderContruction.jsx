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
                        src="/images/under-construction.webp"
                        decoding="async"
                        loading="lazy"
                        alt="under-construction"
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
                        Page Under Construction
                        </span>
                    </h1>
                </div>
            </FadeIn>
        </Container>
    );
};
export default HomeHero;
