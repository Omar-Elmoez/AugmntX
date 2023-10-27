import { Routes, Route } from "react-router-dom";
import Details from "./pages/details";
import Profiles from "./pages/profiles";
import Login from "./pages/login";
import Hire from "./pages/hire";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Profiles />}/>
      <Route path="/login" element={<Login />}/>  
      <Route path="/hire" element={<Hire />}/>  
      <Route path="/:unique_id" element={<Details />}/>
    </Routes>
    </>
  );
}
export default App;
