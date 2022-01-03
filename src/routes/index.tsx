import { Switch } from "react-router-dom";
import { Route } from "./Route";
import { Login } from "../pages/Login";
import { Dashboard } from "../pages/Dashboard";
import { Signup } from "../pages/Signup";
import { PageNotFound } from "../pages/PageNotFound";
import { useAuth } from "../contexts/AuthContext";

export const Routes = () => {
  const { accessToken } = useAuth();
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route component={PageNotFound} isPrivate={!!accessToken} />
    </Switch>
  );
};
