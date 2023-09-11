import { Routes, Route, useLocation } from "react-router-dom";

const AppRoutes = () => {
    const location = useLocation()
      return (
     
        <Routes location={location} key={location.pathname}>
            {/* <Route path="/menu" element={<UsersMenu />} /> */}
        </Routes>
 );
};

export default AppRoutes;