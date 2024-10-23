import { Route, Router } from "@solidjs/router";
import { Suspense } from "solid-js";
import Nav from "./components/Nav";
import NotFound from "./pages/[...404]";
import Home from "./pages/Home";

export default function Routing() {
  return (
    <Router
      root={props => (
        <>
          <Nav />

          <Suspense>
              <main class="text-grey-700 dark:text-gray-300 p-4">
                {props.children}
              </main>
          </Suspense>
        </>
      )}
      >
      <Route path="/" component={Home} />
      <Route path="*404" component={NotFound} />
    </Router>
  );
}
