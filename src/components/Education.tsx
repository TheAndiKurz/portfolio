import { A } from "@solidjs/router";
import SubTitle from "./common/SubTitle";
import CardTitle from "./common/CardTitle";
import { Theme, ThemeProvider, useThemes } from "../providers/ThemeProvider";

function Card(props: {
  title: string,
  logo: string,
  url: string,
  what: string,
  start: Date,
  end: Date | undefined,
  timeformat: (date: Date | undefined) => string
}) {
  return (
    <div class={`
      grid 
      grid-cols-[40%_repeat(2,_1fr)]
      grid-rows-[50px_repeat(2,_1fr)]
      auto-rows-auto
      gap-4 
      items-center
      my-8
    `}>

      {/* Title */}
      <div class="col-span-3 text-center">
        <A href={props.url} target="_blank" class="hover:animate-pulse">
          <CardTitle>
            {props.title}
          </CardTitle>
        </A>
      </div>

      {/* Logo */}
      <div class="row-span-3 flex justify-center">
          <A href={props.url} target="_blank">
            <img src={props.logo} />
          </A>
      </div>

      {/* What I did */}
      <div class="col-span-2 text-center">
        {props.what}
      </div>

      {/* Time */}
      <div>Zeit</div>
      <div>{props.timeformat(props.start)} - {props.timeformat(props.end)}</div>
    </div>
  )
}

type LogoType = {
  uibk: string,
  osz: string,
  ms: string,
}

function getLogos(theme: Theme): LogoType {
  switch (theme) {
    case Theme.DARK:
      return { 
        uibk: "/uibk-white.svg",
        osz: "/osz-schlanders-white.svg",
        ms: "/mittelschule-schlanders-white.png",
      };
    case Theme.LIGHT:
      return { 
        uibk: "/uibk.svg",
        osz: "/osz-schlanders.svg",
        ms: "/mittelschule-schlanders.png",
      };
  }
}

export default function Education() {

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
  
  const [theme, _] = useThemes();
  const logos = () => getLogos(theme());
  
  return (
    <>
      <SubTitle>Ausbildung</SubTitle>

      <Card 
        title="Universität Innsbruck"
        logo={logos().uibk}
        url="https://uibk.ac.at"
        what="Informatik Studium"
        start={new Date("2021-10-04")}
        end={undefined}
        timeformat={shortMonthYearFormat}
        />

      <Card
        title="OSZ Schlanders"
        logo={logos().osz}
        url="https://www.osz-schlanders.it/"
        what="Matura in der Technoligischen Fachoberschule mit Schwerpunkt Maschinenbau und Mechatronik"
        start={new Date("2016-09-05")}
        end={new Date("2021-06-25")}
        timeformat={shortMonthYearFormat}
      />

      <Card
        title="Mittelschule Schlanders"
        logo={logos().ms}
        url="https://www.ssp-schlanders.it/"
        what="Mittelschulabschluss in der musikalischen Mittelschule"
        start={new Date("2013-09-05")}
        end={new Date("2016-06-30")}
        timeformat={shortMonthYearFormat}
      />

    </>
  );
}
