import { Route, Routes, useNavigate } from "react-router-dom";
import "./css/styles.css";
import "./css/user.css";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import Navigation from "./layout/Navigation";
import { UserMainPage } from "./page/UserMainPage";
import { UserLoginFormPage } from "./page/UserLoginFormPage";
import { UserWriteFormPage } from "./page/UserWriteFormPage";
import { UserNonPage } from "./page/UserNonePage";  
import { UserViewPage } from "./page/UserViewPage";
import React, { useEffect, useState } from "react";
import * as userApi from "./api/userApi";
import * as responseStatusCode from "./api/responseStatusCode";

/*******초기값이{} 인Context객체생성후 App.js에서 export *****/
export const UserContext = React.createContext({});

function App() {
  const navigate=useNavigate();
  
  const userLogoutAction=async()=>{
    await userApi.userLogoutAction();
    setLoginStatus({
      isLogin:false,
      loginUser:{}  
   });
   navigate('/user_main');
   //window.location.href='/user_main'
  }
  const [loginStatus, setLoginStatus] = useState({
    isLogin: false,
    loginUser: {},
  });

  useEffect(() => {
    (async () => {
      const responseJsonObject = await userApi.userLoginCheck();
      //console.log(responseJsonObject);
      setLoginStatus({
        isLogin:
          responseJsonObject.status === responseStatusCode.LOGIN_SUCCESS
            ? true
            : false,
        loginUser: responseJsonObject.data,
      });
    })();
  }, []);

  return (
    <>
      <UserContext.Provider value={{ loginStatus, setLoginStatus }}>
        {/*Header.js start*/}
        <Header />
        {/*Header.js end*/}

        {/*Navigation.js start*/}
        <Navigation userLogoutAction={userLogoutAction} />
        {/*Navigation.js end*/}

        <div id="wrapper">
          <div id="content">
            <Routes>
              {/*UserContent.js start*/}
              <Route path="/" exact element={<UserMainPage />} />
              <Route path="/user_main" element={<UserMainPage />} />
              <Route path="/user_login_form" element={(!loginStatus.isLogin)?<UserLoginFormPage />:<UserMainPage/>} />
              <Route path="/user_write_form" element={(!loginStatus.isLogin)?<UserWriteFormPage />:<UserMainPage/>} />
              <Route path="/user_view/:userId" 
                  element={(loginStatus.isLogin)?
                    <UserViewPage userLogoutAction={userLogoutAction} />:<UserMainPage/>} 
                
              />
              <Route path="*" element={<UserNonPage />} />
              {/*UserContent.js end */}
            </Routes>
          </div>
        </div>
        {/*Footer.js start*/}
        <Footer />
        {/*Footer.js end*/}
      </UserContext.Provider>
    </>
  );
}
export default App;
