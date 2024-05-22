import { Suspense, lazy } from "react";

const LazyHomePage = lazy(() => import("./HomePage"));
const LazyChatPage = lazy(() => import("./ChatPage"));

export const Home = (props) => (
  <Suspense fallback={<>Loading...</>}>
    <LazyHomePage {...props} />
  </Suspense>
);
export const Chat = (props) => (
  <Suspense fallback={<>Loading...</>}>
    <LazyChatPage {...props} />
  </Suspense>
);
