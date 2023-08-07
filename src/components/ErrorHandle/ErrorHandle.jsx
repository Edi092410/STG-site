import React from "react";
import { PageNoteFound } from "../../pages/ErrorPages/PageNotFound";
import { ErrorStatus400 } from "../../pages/ErrorPages/ErrorStatus400";
import { ServerErrorPage } from "../../pages/ErrorPages/ServerErrorPage";
import { GenericErrorPage } from "../../pages/ErrorPages/GenericErrorPage";
export const ErrorHandle = ({ error, resetErrorBoundary }) => {
  // <div>
  //   <h2>Something went wrong!</h2>
  //   <p>Error: {error.message}</p>
  //   <button onClick={resetErrorBoundary}>Try Again</button>
  // </div>
  switch (error?.response?.status) {
    case 500:
      return <ServerErrorPage />;
    case 400:
      return <ErrorStatus400 />;
    default:
      return <GenericErrorPage />;
  }
};
