import { MetaProvider, Title } from "@solidjs/meta";
import PageTitle from "../components/common/PageTitle";
import AboutMe from "../components/AboutMe";
import Education from "../components/Education";
import Career from "../components/Career";
import Skills from "../components/Skills";
import Hobbies from "../components/Hobbies";
import HardFacts from "../components/HardFacts";

export default function Home() {
  return (
    <>
      <MetaProvider>
        <Title>Andi Kurz</Title>
      </MetaProvider>

      <div class="flex justify-center">
        <div class="w-[42rem] mx-4 text-justify">
          <div class="min-h-[75vh] flex items-center">
            <div class="w-full flex items-center gap-4 justify-around flex-wrap">
              <div class="w-[21rem] max-w-[90vw]">
                <img src="/me/profile-pic.jpeg" />
              </div>
              <PageTitle>Hallo!</PageTitle>
              <div class="w-full text-center">
                <HardFacts />
              </div>
            </div>
          </div>

          <AboutMe />
          <Hobbies />
          <Education />
          <Career />
          <Skills />
        </div>
      </div>
    </>
  );
}
