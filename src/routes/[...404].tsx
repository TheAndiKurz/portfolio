import { A } from "@solidjs/router";
import PageTitle from "../components/common/PageTitle"

export default function NotFound() {
  return (
    <>
      <PageTitle>404 - Not Found</PageTitle>
      <p class="text-center my-4">
        <A href="/" class="text-sky-600 hover:underline">
          Home
        </A>
        {" - "}
        <A href="/projects" class="text-sky-600 hover:underline">
          Projects Page
        </A>
      </p>
    </>
  );
}
