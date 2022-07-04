import Router from "next/router";
import { NextPage } from "next";

const AdjustSchedulePage: NextPage = () => {
  return <div />;
};

AdjustSchedulePage.getInitialProps = async ({ res }) => {
  const url = process.env.ADJUST_SCHEDULE_URL || "/";
  if (res !== undefined && typeof window === "undefined") {
    res.writeHead(302, { Location: url });
    res.end();
    return {};
  }
  Router.replace(url);
  return {};
};

export default AdjustSchedulePage;
