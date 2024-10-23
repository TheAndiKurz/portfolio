import { children, createSignal, JSX, onCleanup, onMount, Signal } from "solid-js";

export enum Theme {
  LIGHT,
  DARK,
};

const themeMedia = "(prefers-color-scheme: dark)";
function getSystemTheme(): Theme {
  if (window.matchMedia(themeMedia).matches) {
    return Theme.DARK;
  }

  return Theme.LIGHT;
}

type ThemeContextType = Signal<Theme>;
const [theme, setTheme] = createSignal(getSystemTheme());

export function ThemeProvider(props: {
  children: JSX.Element
}) {
  const c = children(() => props.children);

  const handler = (_: Event) => {
    setTheme(getSystemTheme());
  }

  onMount(() => {
    window.matchMedia(themeMedia).addEventListener("change", handler);
  });

  onCleanup(() => {
    window.matchMedia(themeMedia).removeEventListener("change", handler);
  });

  return (
    <>
      {c()}
    </>
  )
}


export function useThemes(): ThemeContextType {
  return [theme, setTheme];
}
