
import Index from "../Pages/Home/Index";
import About from "../Pages/About/Index";
// import Tages from "../Pages/Tages/Index";
// import Authors from "../Pages/Authors";
import Projects from "../Pages/Projects";
// import MemberShip from "../Pages/Membership/Index";
// import Contact from "../Pages/Contact";
// import Account from "../Pages/Account";
import Error404 from "../Pages/Error404";
// import SignUp from "../Pages/SignUp";
// import SignIn from "../Pages/SignIn";
// import Single from "../Pages/Single/Index";
// import Author from "../Pages/Author";
// import Tag from "../Pages/Tag";


const routes = [
    { path: "/", component: <Index /> },
    { path: "/index", component: <Index /> },
    { path: "/home", component: <Index /> },
    { path: "/about", component: <About /> },
    // { path: "/tags", component: <Tages /> },
    // { path: "/authors", component: <Authors /> },
    { path: "/projects", component: <Projects /> },
    // { path: "/membership", component: <MemberShip /> },
    // { path: "/contact", component: <Contact /> },
    // { path: "/account", component: <Account /> },
    { path: '/404', component: <Error404 /> },
    // { path: "/sign-up", component: <SignUp /> },
    // { path: "/sign-in", component: <SignIn /> },
    // { path: "/single", component: <Single /> },
    // { path: "/Author", component: <Author /> },
    // { path: "/tag", component: <Tag /> }
];

export {
    routes
}