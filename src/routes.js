import Dashboard from "views/Dashboard.js";
import Account from "views/Account.js";
import Bots from "views/Bots";
import Api from "views/Api.js";
import Team from "views/Team.js";
import Upgrade from "views/Upgrade.js";

var dashRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "design_app",
    component: <Dashboard />,
    layout: "/admin",
  },
  {
    path: "/Bots",
    name: "Bots",
    icon: "business_globe",
    component: <Bots />,
    layout: "/admin",
  },
  {
    path: "/Team",
    name: "Team",
    icon: "users_circle-08",
    component: <Team />,
    layout: "/admin",
  },
  {
    path: "/Account",
    name: "Account",
    icon: "ui-1_bell-53",
    component: <Account />,
    layout: "/admin",
  },
  {
    path: "/Api",
    name: "Api",
    icon: "files_paper",
    component: <Api />,
    layout: "/admin",
  },
{
    path: "/user-page",
    name: "Logout",
    icon: "objects_key-25",
    // component: <UserPage />,
    layout: "/admin",
  },

  {
    pro: true,
    path: "/upgrade",
    name: "Upgrade to PRO",
    icon: "objects_spaceship",
    component: <Upgrade />,
    layout: "/admin",
  },
];
export default dashRoutes;
