import { createHashRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Resume from "../Pages/Resume/Resume";
import Portfolio from "../Pages/Portfolio/Portfolio";
import Contact from "../Pages/Contact/Contact";
import App from "../App";
import Experience from "../Pages/Resume/Experience";
import Skills from "../Pages/Resume/Skills";
import Education from "../Pages/Resume/Education";
import MyWork from "../Pages/Portfolio/MyWork";
import MyService from "../Pages/Portfolio/MyService";

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "resume",
        element: <Resume />,
        children: [
          {
            path: "experience",
            element: <Experience />,
          },
          {
            path: "skills",
            element: <Skills />,
          },
          {
            path: "education",
            element: <Education />,
          },
        ],
      },
      {
        path: "portfolio",
        element: <Portfolio />,
        children: [
          {
            path: "myWork",
            element: <MyWork />,
          },
          {
            path: "myService",
            element: <MyService />,
          },
        ],
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

export default router;
