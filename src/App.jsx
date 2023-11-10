// App.js
import React from "react";
import Route from "./component/Routing/Route";
import Link from "./component/Routing/Link";
import "./style/global.css";

//layout
import MainLayout from "./component/Layout/MainLayout";

// import pages
import HomePage from "./page/Home";

// Define some components to render for each page
const AboutPage = () => <div>About page</div>;
const ContactPage = () => <div>Contact page</div>;
const NotFoundPage = () => <div>Not found!!!</div>;

const App = () => {
  return (
    <div className="App">
      <MainLayout>
        <Route path="/" component={HomePage} />
        <Route path="/service" component={AboutPage} />
        <Route path="/blog" component={ContactPage} />
        <Route path="/contact" component={NotFoundPage} />
      </MainLayout>
    </div>
  );
};

export default App;
