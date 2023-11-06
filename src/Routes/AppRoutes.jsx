import React from "react";
import { Route, Routes, useParams } from "react-router-dom";
import { FirstLoginSecond } from "../pages/FirstLoginSecond";
import { Registration } from "../components/Regis--main/Registration";
import { SharedLayout } from "../layouts/SharedLayout";
import { PublicPage } from "../pages/PublicPage";
import { ProfileSettings } from "../pages/ProfileSettings";
import { UserDisable } from "../components/UserDisable/UserDisable";
import { PersonalInfo } from "../components/PersonalInfo/PersonalInfo";
import { CompanyInfo } from "../components/CompanyInfo/CompanyInfo";
import { MultipleCompanyInfo } from "../components/MultipleCompanyInfo/MultipleCompanyInfo";
import { Privacy } from "../components/Privacy/Privacy";
import { PageNoteFound } from "../pages/ErrorPages/PageNotFound";
import { PrivateRoute } from "./PrivateRoute";
import { Course } from "../components/Course/Course";
import { Article } from "../components/Article/Article";
import { VerificationPage } from "../components/VerificationPage/VerificationPage";
import { ForgetPassword } from "../components/ForgetPassword/ForgetPassword";
import { ForgetField } from "../components/ForgetPassword/ForgetField";
import { Help } from "../components/Help/Help";
import { ChooseProgram } from "../components/ChooseProgram/ChooseProgram";
import { PublicRoute } from "./PublicRoute";
import { ServicePage } from "../components/OrderList/List";
import { PaymentPage } from "../components/OrderList/List";
import { QA } from "../components/QA/QA";
import { OrderList } from "../components/OrderList/OrderList";
import { ChangePassword } from "../components/ForgetPassword/ChangePassword";

export const AppRoutes = () => {
  let { token } = useParams();
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<PublicPage />} />
        <Route element={<PrivateRoute />}>
          <Route path="settings" element={<ProfileSettings />}>
            <Route path="personal" element={<PersonalInfo />} />
            <Route path="company" element={<CompanyInfo />} />
            <Route path="multipleCompany" element={<MultipleCompanyInfo />} />
            <Route path="privacy" element={<Privacy />} />
            <Route path="disable" element={<UserDisable />} />
          </Route>
          <Route path="program" element={<ChooseProgram />} />
          <Route path="test" element={<ServicePage />}>
            <Route index element={<QA />} />
            <Route path="payment" element={<PaymentPage />} />
            <Route path="list" element={<OrderList />} />
          </Route>
        </Route>
        <Route element={<PublicRoute />}>
          <Route path="login" element={<FirstLoginSecond />} />
          <Route path="register" element={<Registration />} />
        </Route>
        <Route path="course" element={<Course />}></Route>
        <Route path="article" element={<Article />}></Route>
        <Route
          path="verification"
          element={<VerificationPage />}
          token={token}
        />
        <Route path="forgetField" element={<ForgetField />} token={token} />
        <Route path="forget" element={<ForgetPassword />}></Route>
        <Route path="changepassword" element={<ChangePassword />} />
        <Route path="help" element={<Help />} />
      </Route>
      <Route path="*" element={<PageNoteFound />} />
    </Routes>
  );
};
