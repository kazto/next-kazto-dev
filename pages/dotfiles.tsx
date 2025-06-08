import Router from "next/router";
import { NextPage } from "next";

const DotfilesInstallPage: NextPage = () => {
  return <div />;
};

DotfilesInstallPage.getInitialProps = async ({ res }) => {
  const url = process.env.DOTFILES_INSTALL_SH_URL || "/";
  if (res !== undefined && typeof window === "undefined") {
    res.writeHead(302, { Location: url });
    res.end();
    return {};
  }
  Router.replace(url);
  return {};
};

export default DotfilesInstallPage;
