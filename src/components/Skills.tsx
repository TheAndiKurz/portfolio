import { Accessor, children, Component, JSX } from "solid-js";
import SubTitle from "./common/SubTitle"
import { Theme, useThemes } from "../providers/ThemeProvider";

type Skill = {
  logo: string,
  name: string,
  from: string,
}

function Card(props: Skill) {
  return (
    <div class={`
      grid
      grid-cols-[4rem_6rem]
      grid-rows-2
      gap-2
      text-center
      items-center
      `}>

      <div class="row-span-2 w-16">
        <img src={props.logo} />
      </div>

      <div class="font-bold">
        {props.name}
      </div>

      <div>
        {props.from}
      </div>
    </div>
  );
}

function CardContainer(props: {
  children: JSX.Element
}) {
  const c = children(() => props.children);

  return (
    <div class="flex justify-around flex-wrap flex-row gap-8">
      {c()}  
    </div>
  );
}

export default function Skills() {
  const [theme, _] = useThemes();

  const skills: Accessor<Skill[]> = () => [
    {
      logo: "/skills/python.svg",
      name: "Python",
      from: ""
    },
    {
      logo: "/skills/c.svg",
      name: "C",
      from: "Uni"
    },
    {
      logo: "/skills/cpp.svg",
      name: "C++",
      from: "Uni"
    },
    {
      logo: "/skills/csharp.svg",
      name: ".NET C#",
      from: "TSG"
    },
    {
      logo: "/skills/ferris.svg",
      name: "Rust",
      from: "Uni"
    },
    {
      logo: "/skills/js.svg",
      name: "Javascript",
      from: "TSG"
    },
    {
      logo: "/skills/typescript.svg",
      name: "Typescript",
      from: "TSG"
    },
    {
      logo: "/skills/solidjs.svg",
      name: "SolidJS",
      from: ""
    },
    {
      logo: "/skills/react.svg",
      name: "React",
      from: "TSG"
    },
    {
      logo: "/skills/opengl.svg",
      name: "OpenGL",
      from: "Uni"
    },
    {
      logo: "/skills/vulkan.svg",
      name: "Vulkan",
      from: "Uni"
    },    
    {
      logo: "/skills/godot.svg",
      name: "Godot",
      from: "Uni"
    },
    {
      logo: "/skills/haskell.svg",
      name: "Haskell",
      from: "Uni"
    },
    {
      logo: "/skills/git.svg",
      name: "Git",
      from: ""
    },
    {
      logo: "/skills/linux.svg",
      name: "Linux",
      from: ""
    },
    {
      logo: `/skills/cicd${theme() === Theme.DARK ? "-white" : ""}.svg`,
      name: "CI CD",
      from: "TSG"
    }
  ];

  return (
    <>
      <SubTitle>Fähigkeiten</SubTitle>

      <CardContainer>
        { skills().map(skill => <Card {...skill} />) }
      </CardContainer>
    </>
  );
}
