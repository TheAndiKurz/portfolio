import { children } from "solid-js";
import type { JSX } from "solid-js"

export default function SubTitle(props: {
  children: JSX.Element
}) {
  const c = children(() => props.children);
  return (
    <h3 class="max-4-xs text-4xl text-amber-700 dark:text-amber-300 font-thin my-10">{c()}</h3>
  ); 
}
