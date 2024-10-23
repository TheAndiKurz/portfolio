import { createSignal, onCleanup, onMount } from "solid-js";
import SubTitle from "./common/SubTitle";

function getAge(birthday: Date) {
  const today = new Date();
  const age = today.getFullYear() - birthday.getFullYear();
  if (today.getMonth() > birthday.getMonth()) {
    return age;
  }

  if (today.getMonth() < birthday.getMonth()) {
    return age - 1;
  }

  // same month
  if (today.getDate() >= birthday.getDate()) {
    return age;
  }

  // same month day before birthday
  return age - 1;
}

export default function AboutMe() {
  const birthday = new Date("2002-06-12");
  const [age, setAge] = createSignal(getAge(birthday));
  const interval = setInterval(() => setAge(getAge(birthday)), 10000);

  onCleanup(() => clearInterval(interval));
  
  return (
    <>
      <SubTitle>Über Mich</SubTitle>

      <p class="my-2">
        Hallo, ich bin Andreas Kurz, {age()} Jahre alt und 
        ein leidenschaftlicher Softwareentwickler. 
        Schon früh habe ich meine Begeisterung für Technik und 
        Programmierung entdeckt und mein Hobby zum Beruf gemacht.
        Mit einem Bachelorabschluss in Informatik und einer stetigen 
        Neugier für neue Technologien gehe ich im Lösen von komplexen Problemen
        vollkommen auf. 
        Softwareentwicklung ist für mich nicht nur ein Beruf, sondern eine Passion,
        die mich immer wieder antreibt, Neues zu lernen und innovative Projekte 
        voranzutreiben.
      </p>
      <p class="my-2">
        Und wenn es um einen guten Witz geht, bin ich immer gerne mit dabei
         – schließlich darf der Spaß im Leben nicht zu kurz kommen!
       </p>
    </>
  );
}
