import { MetaProvider, Title } from "@solidjs/meta";
import PageTitle from "../components/common/PageTitle";
import AboutMe from "../components/AboutMe";
import Education from "../components/Education";
import Career from "../components/Career";
import Skills from "../components/Skills";
import Hobbies from "../components/Hobbies";

export default function Home() {
  return (
    <>
      <MetaProvider>
        <Title>Andi Kurz</Title>
      </MetaProvider>

      <PageTitle>Hallo!</PageTitle>
      <div class="flex justify-center">
        <div class="w-[42rem] mx-4 text-justify">
          <AboutMe />
          <Education />
          <Career />
          <Skills />
        </div>
      </div>
    </>
  );
}
