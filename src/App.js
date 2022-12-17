import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { SideBar, NavBar } from "./Components";
import {
  Home,
  Patients,
  Nurses,
  Employees,
  Appointments,
  Messages,
  Chats,
  ToDo,
  Login,
  SignUp,
  PasswordRecovery,
  NotFound,
} from "./Pages";
import { appContext } from "./Context/appContext.js";
import { patientsList } from "./Data/data";

function App() {
  const initialState = {
    chat: false,
    userProfile: false,
    notification: false,
  };
  const [closeMenu, setCloseMenu] = useState(true);
  const [darkthem, setDarkthem] = useState(false);
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(initialState);
  const [screenSize, setScreenSize] = useState(undefined);
  const [showPatientDetails, setShowPatientDetails] = useState(false);
  const [patientDetails, setPatientDetails] = useState(null);
  const handleClick = (clicked, action) => {
    setIsClicked({
      ...initialState,
      [clicked]: action === "open" ? true : false,
    });
  };
  useEffect(() => {
    setPatientDetails(patientsList?.[0]);
  }, []);

  return (
    <div className={darkthem && "dark"}>
      <BrowserRouter>
        <appContext.Provider
          value={{
            closeMenu,
            setCloseMenu,
            activeMenu,
            setActiveMenu,
            darkthem,
            setDarkthem,
            isClicked,
            setIsClicked,
            screenSize,
            setScreenSize,
            handleClick,
            showPatientDetails,
            setShowPatientDetails,
            patientDetails,
            setPatientDetails,
          }}
        >
          <div className=" bg-main-bg dark:bg-main-dark-bg">
            <div
              className={`flex fixed m-1 lg:m-4 rounded-2xl bg-white dark:bg-secondary-dark-bg ${
                screenSize <= 900 && "mt-4"
              }
              ${closeMenu ? " w-72" : " hidden "} duration-300 ${
                activeMenu ? "w-72 " : "w-16 md:block"
              }`}
              style={{ zIndex: "100000" }}
            >
              <SideBar />
            </div>
            <div className={`flex flex-col ${activeMenu ? "ml-72" : "ml-16"}`}>
              <div className="sticky z-50 bg-clip-padding">
                <NavBar />
              </div>
              <div className="flex min-h-full">
                <Routes>
                  {/* dashboard */}
                  <Route path="/" element={<Home />} />
                  <Route path="/dashboard" element={<Home />} />
                  {/* Users */}
                  <Route path="/patients" element={<Patients />} />
                  <Route path="/employees" element={<Employees />} />
                  {/* Apps */}
                  <Route path="/appointments" element={<Appointments />} />
                  <Route path="/messages" element={<Messages />} />
                  <Route path="/chats" element={<Chats />} />
                  <Route path="/toDo" element={<ToDo />} />
                  {/* Pages */}
                  <Route path="/login" element={<Login />} />

                  <Route
                    path="/passwordRecovery"
                    element={<PasswordRecovery />}
                  />
                  <Route path="/notFound" element={<NotFound />} />
                </Routes>
              </div>
            </div>
          </div>
        </appContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
