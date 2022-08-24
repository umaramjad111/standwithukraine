import Aboutus from "../../components/aboutus";
import Contactview from "../../views/contact";
import Home from "../../views/home";
const customroutes = [
  {
    path: "/",
    title: "Home",
    component: Home,
  },
  {
    path: "/Home",
    title: "Home",
    component: Home,
  },
  {
    path: "/Contact",
    title: "Contact",
    component: Contactview,
  },
];

export default customroutes;
