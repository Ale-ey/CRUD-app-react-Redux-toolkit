import "./App.css";
import { HomeView } from "./components/HomeView";
import { BrowserRouter, Routes, Route } from "react-router";
import { CreateUser } from "./components/CreateUser";
import { UpdateUser } from "./components/UpdateUser";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeView/>}></Route>
        <Route path="/create" element={<CreateUser/>}></Route>
        <Route path="/edit/:id" element={<UpdateUser/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
