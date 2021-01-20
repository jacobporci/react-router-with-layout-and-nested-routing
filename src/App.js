import {
  Route,
  BrowserRouter as Router,
  useRouteMatch,
} from "react-router-dom";
import "./App.css";
import Layout from "./Layout/Layout";

const TertiaryRoute = () => {
  const { path } = useRouteMatch();
  return (
    <>
      <Route exact path={path}>
        <h1>exact</h1>
      </Route>
      <Route exact path={`${path}/new`}>
        <h1>/new</h1>
      </Route>
    </>
  );
};

const InnerRoute = () => {
  const { path } = useRouteMatch();
  console.log({ path });
  return (
    <>
      <Route path={`${path}contacts`}>
        <h1>/contacts</h1>
      </Route>
      <Route path={`${path}list`}>
        <h1>/list</h1>
        <TertiaryRoute />
      </Route>
    </>
  );
};

const App = () => {
  return (
    <Router>
      <Route>
        <Layout>
          <Route path="/">
            <h1>/</h1>
            <InnerRoute />
          </Route>
          <Route path="/a">
            <h1>/a</h1>
            <InnerRoute />
          </Route>
          <Route path="/b">
            <h1>/b</h1>
            <InnerRoute />
          </Route>
        </Layout>
      </Route>
    </Router>
  );
};

export default App;
