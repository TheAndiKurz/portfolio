import { A, useLocation } from "@solidjs/router";

export default function Nav() {
  const location = useLocation();
  const active = (path: string) =>
    path == location.pathname ? "border-amber-500" : "border-transparent hover:border-amber-500";
  return (
    <nav class="bg-neutral-900">
      <div class="flex flex-row justify-between">
        <ul class="flex items-center p-3 text-gray-200">
          <li class={`border-b-2 ${active("/")} mx-1.5 sm:mx-6`}>
            <A href="/">
              <img src="/logo.svg" width="50px" />
            </A>
          </li>
          <li class={`border-b-2 ${active("/projects")} mx-1.5 sm:mx-6`}>
            <A href="/projects">Projects</A>
          </li>
        </ul>
        <ul class="flex items-center p-3 text-gray-200">
          <li class="mx-1.5 sm:mx-6">
            <A href="https://github.com/TheAndiKurz" target="_blank">
              <img src="/github-mark-white.svg" width="50px" />
            </A>
          </li>
        </ul>
      </div>
    </nav>
  );
}
