import { Counter } from "./components/Counter";
import { FetchData } from "./components/FetchData";
import { Home } from "./components/Home/Home";
import GPTDemo from "./components/GPT/GPTDemo";
import GPTFix from "./components/GPTFix/GPTFix";
import GPTSummarizer from "./components/GPTSummarizer/GPTSummarizer";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/counter',
    element: <Counter />
  },
  {
    path: '/fetch-data',
    element: <FetchData />
  },
  {
    path: '/gpt-demo',
    element: <GPTDemo />
  },
  {
    path: '/gpt-fix',
    element: <GPTFix />
  },
  {
    path: '/gpt-summarizer',
    element: <GPTSummarizer />
  },
];

export default AppRoutes;
