import React, { Suspense, useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes } from "./routes";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

const FallbackLoading = () => <div>Loading...</div>;

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);


  useEffect(() => {
    const onKey = e => { if (e.key === 'Escape') setSidebarOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <Router>  
      <div className={`layout-root ${sidebarOpen ? 'sidebar-open' : ''}`}>
        <Header 
          lang="en" 
          setLang={() => {}} 
          onToggleSidebar={() => setSidebarOpen(o => !o)} 
          sidebarOpen={sidebarOpen}
          userName="John Andre"
          companyName="Storfjord AS"
        />
        
        {sidebarOpen && (
          <div 
            className="overlay" 
            role="button" 
            aria-label="Close menu overlay" 
            onClick={() => setSidebarOpen(false)} 
          />
        )}
        
        <div className="layout-body">
          <div className="sidebar-wrapper">
            <Sidebar />
          </div>
          
          <main className="content-area">
            <Suspense fallback={<FallbackLoading />}>
              <Routes>
                {routes.map((route, index) => (
                  <Route key={index} path={route.path} element={route.element} />
                ))}
              </Routes>
            </Suspense>
          </main>
        </div>
      </div>
    </Router>
  );
};

export default App;