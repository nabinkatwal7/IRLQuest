import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "IRL Quest" },
    { name: "IRL Quest", content: "Welcome to IRL Quest" },
  ];
};

export default function Index() {
  return <div className="home-container-main font-primary">irl quest</div>;
}
