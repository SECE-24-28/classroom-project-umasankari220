import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/functionalComponents/Navbar";
import Home from "./components/functionalComponents/Home";
import About from "./components/functionalComponents/About";
import "./css/App.css";
import LearningReact from "./components/functionalComponents/LearningReact";
import LearningHooks from "./components/functionalComponents/LearningHooks";
import Contact from "./components/functionalComponents/Contact";
import Login from "./components/functionalComponents/Login";
import Signup from "./components/functionalComponents/Signup";
import UseState from "./components/functionalComponents/Hooks/UseState";
import UseEffect from "./components/functionalComponents/Hooks/UseEffect";
import UseEffectAPI from "./components/functionalComponents/Hooks/UseEffectAPI";
import UseRef from "./components/functionalComponents/Hooks/UseRef";
import UseMemo from "./components/functionalComponents/Hooks/UseMemo";
import UseCallback from "./components/functionalComponents/Hooks/UseCallback";
import FakeImageAPI from "./components/functionalComponents/Hooks/FakeImageAPI";
function App() {
  return (
    <header>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/learning-react" element={<LearningReact />}/>
          <Route path="/learning-hooks" element={<LearningHooks />}/>
          <Route path="/hooks/useState" element={<UseState />}/>
          <Route path="/hooks/useEffect" element={<UseEffect />} />
          <Route path="/hooks/useEffectAPI" element={<UseEffectAPI />} />
          <Route path="/hooks/useRef" element={<UseRef />} />
          <Route path="/hooks/useMemo" element={<UseMemo />} />
          <Route path="/hooks/useCallback" element={<UseCallback />}/>
          <Route path="/hooks/fakeAPI" element={<FakeImageAPI />}/>
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </header>
  );
}

export default App;