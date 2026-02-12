import React from "react";
import Navbar from "./Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import AboutUs from "./Components/AboutUs";
import Loader from "./Components/Loader";
import { useState, useEffect } from "react";
import JournalPortfolio from "./Components/JournalPortfolio";
import ForAuthors from "./Components/ForAuthors";
import ForReviewer from "./Components/ForReviewer";
const App = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 200); // adjust duration

    return () => clearTimeout(timer);
  }, []);
  if (loading) {
    return <Loader />;
  }
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<AboutUs />} />
        <Route path="/journals" element={<JournalPortfolio />} />
        <Route path="/for-authors" element={<ForAuthors />}></Route>
        <Route path="/for-reviewers " element={<ForReviewer />} />
        {/* <Route path="/journals" element={<JournalPortfolio />} /> */}
      </Routes>
    </div>
  );
};

export default App;
