import { children, JSX } from "solid-js";

export default function CardTitle(props: {
  children: JSX.Element
}) {
  const c = children(() => props.children);
  return (
    <h3 class="max-2-xs text-2xl text-amber-500 dark:text-amber-300 font-light">
      {c()}
    </h3>
  );
}
