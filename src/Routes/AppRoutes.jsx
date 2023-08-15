import React from "react";
import { Route, Routes, useParams } from "react-router-dom";
import { ServiceList } from "../pages/ServiceList";
import { FirstLoginSecond } from "../pages/FirstLoginSecond";
import { Main } from "../components/Regis--main/Main";
import { SharedLayout } from "../layouts/SharedLayout";
import { PublicPage } from "../pages/PublicPage";
import { ProfileSettings } from "../pages/ProfileSettings";
import { UserDisable } from "../components/UserDisable/UserDisable";
import { PersonalInfo } from "../components/PersonalInfo/PersonalInfo";
import { CompanyInfo } from "../components/CompanyInfo/CompanyInfo";
import { MultipleCompanyInfo } from "../components/MultipleCompanyInfo/MultipleCompanyInfo";
import { ListService } from "../components/ListService/ListService";
import { PaymentInfo } from "../components/PaymentInfo/PaymentInfo";
import { Privacy } from "../components/Privacy/Privacy";
import { PageNoteFound } from "../pages/ErrorPages/PageNotFound";
import { PrivateRoute } from "./PrivateRoute";
import { Product } from "../components/Product/Product";
import { Course } from "../components/Course/Course";
import { Article } from "../components/Article/Article";
import { VerificationPage } from "../components/VerificationPage/VerificationPage";
import { ForgetPassword } from "../components/ForgetPassword/ForgetPassword";
import { ForgetField } from "../components/ForgetPassword/ForgetField";
import { Help } from "../components/Help/Help";
import { ChooseProgram } from "../components/ChooseProgram/ChooseProgram";
import { LoginStatus } from "./LoginStatus";

export const AppRoutes = () => {
  let { token } = useParams();
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<PublicPage />} />
        <Route element={<PrivateRoute />}>
          <Route path="service" element={<ServiceList />}>
            <Route path="list" element={<ListService />} />
            <Route path="payment" element={<PaymentInfo />} />
          </Route>
          <Route path="settings" element={<ProfileSettings />}>
            <Route path="personal" element={<PersonalInfo />} />
            <Route path="company" element={<CompanyInfo />} />
            <Route path="multipleCompany" element={<MultipleCompanyInfo />} />
            <Route path="privacy" element={<Privacy />} />
            <Route path="disable" element={<UserDisable />} />
          </Route>
          <Route path="program" element={<ChooseProgram />} />
        </Route>
        <Route element={<LoginStatus />}>
          <Route path="login" element={<FirstLoginSecond />} />
          <Route path="register" element={<Main />} />
        </Route>
        <Route path="product" element={<Product />}></Route>
        <Route path="course" element={<Course />}></Route>
        <Route path="article" element={<Article />}></Route>
        <Route
          path="verification"
          element={<VerificationPage />}
          token={token}
        />
        <Route path="forgetField" element={<ForgetField />} token={token} />
        <Route path="forget" element={<ForgetPassword />}></Route>
        <Route path="help" element={<Help />} />
      </Route>
      <Route path="*" element={<PageNoteFound />} />
    </Routes>
  );
};
