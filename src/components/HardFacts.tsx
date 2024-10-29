import SubTitle from "./common/SubTitle";
import { A } from "@solidjs/router";

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

export default function HardFacts() {
  const birthday = new Date("2002-06-12");
  const address = "Moosburgstraße 3, Eyrs";
  const googleMaps = "https://www.google.com/maps/place/Via+Moosburg,+3,+39023+Oris+BZ/@46.629334,10.6486066,17z/data=!3m1!4b1!4m6!3m5!1s0x47831ffcc468c013:0xf35f907ea431a0e1!8m2!3d46.6293303!4d10.6511815!16s%2Fg%2F11c5n3zh32?entry=ttu&g_ep=EgoyMDI0MTAyNy4wIKXMDSoASAFQAw%3D%3D";
  const age = getAge(birthday);
  const dateTimeFormater = Intl.DateTimeFormat("de-DE", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
  const birthdayString = dateTimeFormater.format(birthday);

  return (<>
    <SubTitle>Hard Facts</SubTitle>

    <table class="w-full">
      <tbody>
        <tr>
          <td class="font-bold w-1/2">
            Geburtsdatum
          </td>
          <td>
            {birthdayString} <span class="whitespace-nowrap">({age} Jahre)</span>
          </td>
        </tr>
        <tr>
          <td class="font-bold w-1/2">
            Adresse
          </td>
          <td>
            <A 
              class="hover:animate-pulse"
              href={googleMaps}
            >
              {address}
            </A>
          </td>
        </tr>
      </tbody>
    </table>
  </>);
}
