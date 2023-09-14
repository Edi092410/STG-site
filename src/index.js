import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthProvider";
import { Loading } from "./components/Loading/Loading";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorHandle } from "./components/ErrorHandle/ErrorHandle";
import { OrderProvider } from "./context/OrderProvider";
import { ProgramProvider } from "./context/ProgramProvider";
import { CompanyProvider } from "./context/CompanyProvider";
import { TimeFilterProvider } from "./context/TimeFilterProvider";
import { PaymentProvider } from "./context/PaymentProvider";
import { LoginPathProvider } from "./context/LoginPathProvider";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ErrorBoundary fallbackRender={ErrorHandle}>
      <Suspense fallback={<Loading />}>
        <AuthProvider>
          <OrderProvider>
            <ProgramProvider>
              <CompanyProvider>
                <TimeFilterProvider>
                  <PaymentProvider>
                    <LoginPathProvider>
                      <BrowserRouter>
                        <App />
                      </BrowserRouter>
                    </LoginPathProvider>
                  </PaymentProvider>
                </TimeFilterProvider>
              </CompanyProvider>
            </ProgramProvider>
          </OrderProvider>
        </AuthProvider>
      </Suspense>
    </ErrorBoundary>
  </React.StrictMode>
);
