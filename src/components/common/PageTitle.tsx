import { children } from "solid-js";
import type { JSX } from "solid-js"

export default function PageTitle(props: {
  children: JSX.Element
}) {
  const c = children(() => props.children);
  return (
    <h1 class="text-center max-6-xs text-6xl text-amber-600 dark:text-amber-400 font-semibold uppercase my-16">{c()}</h1>
  ); 
}
