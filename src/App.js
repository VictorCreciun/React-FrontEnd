import { Switch, Route } from "react-router-dom";
import Action from "./componentsCategories/Action";
import FirstPerson from "./componentsCategories/FirstPerson";
import Horror from "./componentsCategories/Horror";
import Racing from "./componentsCategories/Racing";
import Shooter from "./componentsCategories/Shooter";
import Simulation from "./componentsCategories/Simulation";
import Sport from "./componentsCategories/Sport";
import Survival from "./componentsCategories/Survival";
import Home from "./pages/Home";
import User from "./pages/User";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";
import GamesProvider from "./contexts/GamesContext";
import Wishlist from "./pages/Wishlist";
import PrivateRoute from "./components/PrivateRoute";
import { useState, useEffect } from "react";
import Admin from "./pages/Admin";
import AdminAdd from "./pages/AdminAdd";
import AdminEdit from "./pages/AdminEdit";

// const user = JSON.parse(localStorage.getItem("user"));

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  // const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");

    fetch("https://game-shop-4real.herokuapp.com/api/users/check_auth", {
      headers: {
        Authorization: token,
      },
    })
      .then((res) => {
        switch (res.status) {
          case 200:
            setIsAuthenticated(true);
            // user.role === "admin" ? setIsAdmin(true) : setIsAdmin(false);
            break;
          default:
            setIsAuthenticated(false);
            // setIsAdmin(false);
            break;
        }
      })
      .catch(console.error);
  }, []);

  const handleLogOutClick = () => {
    localStorage.removeItem("user");
    setIsAuthenticated(false);
    // setIsAdmin(false);
  };

  console.log("isAuthenticated: ", isAuthenticated);
  // console.log("isAdmin: ", isAdmin);
  // console.log("User Role: ", user.role);

  return (
    <div>
      <GamesProvider>
        <Navbar
          handleLogOutClick={handleLogOutClick}
          isAuthenticated={isAuthenticated}
          // isAdmin={isAdmin}
        />

        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route
            exact
            path="/admin"
            render={(props) => (
              <Admin
                {...props}
                // isAdmin={isAdmin}
                // isAuthenticated={isAuthenticated}
              />
            )}
          ></Route>
          <Route exact path="/admin/add" component={AdminAdd}></Route>
          <Route
            exact
            path="/admin/edit/:game_id"
            component={AdminEdit}
          ></Route>
          <Route exact path="/action" component={Action}></Route>
          <Route exact path="/first-person" component={FirstPerson}></Route>
          <Route exact path="/horror" component={Horror}></Route>
          <Route exact path="/racing" component={Racing}></Route>
          <Route exact path="/shooter" component={Shooter}></Route>
          <Route exact path="/simulation" component={Simulation}></Route>
          <Route exact path="/sport" component={Sport}></Route>
          <Route exact path="/survival" component={Survival}></Route>
          <Route
            exact
            path="/login"
            render={(props) => (
              <User {...props} setIsAuthenticated={setIsAuthenticated} />
            )}
          ></Route>
          <Route exact path="/register" component={Register}></Route>
          <PrivateRoute
            exact
            path="/wishlist"
            isAuthenticated={isAuthenticated}
            render={(props) => <Wishlist {...props} />} //render = redirect ( component={...} )
          ></PrivateRoute>
        </Switch>
      </GamesProvider>
    </div>
  );
};

export default App;
