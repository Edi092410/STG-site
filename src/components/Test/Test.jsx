import React from "react";
import { PageNoteFound } from "../../pages/ErrorPages/PageNotFound";
import { ServerErrorPage } from "../../pages/ErrorPages/ServerErrorPage";
import { GenericErrorPage } from "../../pages/ErrorPages/GenericErrorPage";
export const Test = () => {
  const a = 40;
  return (
    <>
      <Holder page={ErrorSwitch(a)} />
      <div>CHeelooo</div>
    </>
  );
};

export const Holder = ({ page: Page }) => {
  return (
    <div className="fixed top-0 left-0">
      <Page />
    </div>
  );
};

export const ErrorSwitch = (a) => {
  switch (a) {
    case 40:
      return <PageNoteFound />;
    case 50:
      return <ServerErrorPage />;
    default:
      return <GenericErrorPage />;
  }
};
