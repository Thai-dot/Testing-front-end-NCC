// App.js
import React from "react";
import Route from "./component/Routing/Route";
import Link from "./component/Routing/Link";
import "./style/global.css";

//layout
import MainLayout from "./component/Layout/MainLayout";

// import pages
import HomePage from "./page/Home";
import ServicePage from "./page/Service";
import BlogPage from "./page/Blog";
import ContactPage from "./page/Contact";

const App = () => {
  return (
    <div className="App">
      <MainLayout>
        <Route path="/" component={HomePage} />
        <Route path="/service" component={ServicePage} />
        <Route path="/blog" component={BlogPage} />
        <Route path="/contact" component={ContactPage} />
      </MainLayout>
    </div>
  );
};

export default App;
