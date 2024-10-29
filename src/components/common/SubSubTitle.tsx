import { children } from "solid-js";
import type { JSX } from "solid-js"

export default function SubSubTitle(props: {
  children: JSX.Element
}) {
  const c = children(() => props.children);
  return (
    <h3 class="max-2-xs text-3xl text-amber-600 dark:text-amber-300 font-thin my-5">{c()}</h3>
  ); 
}
