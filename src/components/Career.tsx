import { children, JSX } from "solid-js";
import { A } from "@solidjs/router"; 
import SubTitle from "./common/SubTitle"
import CardTitle from "./common/CardTitle";

function Card(props: {
  name: string,
  url: string,
  what: string,
  abilities: string[],
  start: Date,
  end: Date | undefined,
  timeformat: (date: Date | undefined) => string,
  children: JSX.Element,
}) {
  const c = children(() => props.children);
  const sortedAbilities = props.abilities.sort((a, b) => a.localeCompare(b, "de-DE", {
    "sensitivity": "base"
  }));
  return (
    <div class={`
        grid
        grid-cols-2
        grid-rows-[repeat(4,_50px)_1fr]
        text-center
        gap-2
        my-8
      `}>

      {/* Name */}
      <div class="col-span-2">
        <A href={props.url} class="hover:animate-pulse">
          <CardTitle>
            {props.name}
          </CardTitle>
        </A>
      </div>

      {/* What */}
      <div class="col-span-2">
        {props.what}
      </div>

      {/* Time */}
      <div>
        Zeit
      </div>

      <div>
        {props.timeformat(props.start)} - {props.timeformat(props.end)}
      </div>

      {/* Abilities */}
      <div class="col-span-2">
        {sortedAbilities.join(", ")}
      </div>

      {/* Description */}
      <div class="col-span-2 text-justify">
        {c()}
      </div>
    </div>
  );
}

export default function Career() {

  const shortMonthYearFormat = (date: Date | undefined): string => {
    if (date === undefined) {
      return "";
    }

    const formatter = new Intl.DateTimeFormat("de-DE", { 
      month: "short",
      year: "numeric" 
    });

    return formatter.format(date);
  }

  const exactDateFormat = (date: Date | undefined): string => {
    if (date === undefined) {
      return "";
    }

    const formatter = new Intl.DateTimeFormat("de-DE", {
      day: "numeric",
      month: "short",
      year: "numeric"
    })

    return formatter.format(date);
  }

  return (
    <>
      <SubTitle>Berufserfahrung</SubTitle>

      <Card 
        name="Lynus"
        url="https://lynus.io/"
        what="Backend"
        abilities={["Go", "git", "Machine Learning"]}
        start={new Date("2024-11-18")}
        end={undefined}
        timeformat={exactDateFormat}
        >
        {""}
      </Card>

      <Card 
        name="TSG Solutions"
        url="https://www.tsg-solutions.com/de/"
        what="Fullstack Developer"
        abilities={["Python", "Typescript", "git", "CI-CD", "C#", ".NET"]}
        start={new Date("2022-04-01")}
        end={new Date("2024-11-15")}
        timeformat={exactDateFormat}
        >
        Während meines Bachelor Studiums habe ich bei TSG als Fullstack Developer gearbeitet. Diese Erfahrung hat mir nicht nur die technischen Fähigkeiten im Umgang mit Python, TypeScript, JavaScript und .NET mit C# vermittelt, sondern auch gezeigt, wie man effektiv im Team zusammenarbeitet. Die enge Zusammenarbeit mit meinem Team hat mich darin bestärkt, wie wichtig Kommunikation und Teamarbeit in der Softwareentwicklung sind. Durch die Arbeit an vielseitigen Projekten konnte ich Theorie und Praxis ideal verbinden und wertvolle Erfahrungen für meine berufliche Laufbahn sammeln.
      </Card>

    </>
  );
}
