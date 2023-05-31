import React from 'react'
import { Route, Routes } from "react-router-dom";
import { ServiceList } from "../pages/ServiceList";
import { SecondLogin } from "../pages/SecondLogin";
import { Main } from "../components/Regis--main/Main";
import { SharedLayout } from "../layouts/SharedLayout";
import { PublicPage } from "../pages/PublicPage"
import { ProfileSettings } from '../pages/ProfileSettings';
import { UserDisable } from '../components/UserDisable/UserDisable';
import { PersonalInfo } from '../components/PersonalInfo/PersonalInfo';
import { CompanyInfo } from '../components/CompanyInfo/CompanyInfo';
import { MultipleCompanyInfo } from '../components/MultipleCompanyInfo/MultipleCompanyInfo';
import { ListService } from '../components/ListService/ListService';
import { PaymentInfo } from '../components/PaymentInfo/PaymentInfo';
import { Privacy } from '../components/Privacy/Privacy';

export const AppRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<PublicPage />} />
          <Route path="login" element={<SecondLogin/>}/>
          <Route path="register" element={<Main/>}/>
          <Route path="service" element={<ServiceList/>}>
            <Route path='list' element={<ListService />} />
            <Route path='payment' element={<PaymentInfo />} />
          </Route>
          <Route path="settings" element={<ProfileSettings />}>
            <Route path='personal' element={< PersonalInfo/>} />
            <Route path='company' element={< CompanyInfo/>} />
            <Route path='multipleCompany' element={< MultipleCompanyInfo/>} />
            <Route path='privacy' element={<Privacy/>} />
            <Route path='disable' element={<UserDisable />} />
          </Route>
        </Route>
      </Routes>
  )
}
