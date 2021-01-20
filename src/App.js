import {
  Route,
  BrowserRouter as Router,
  useRouteMatch,
} from "react-router-dom";
import "./App.css";
import Layout from "./Layout/Layout";

const InnerRoute = () => {
  const { path } = useRouteMatch();
  return (
    <>
      <Route path={`${path}/test2`}>
        <h1>test2</h1>
      </Route>
      <Route path={`${path}/test3`}>
        <h1>test3</h1>
      </Route>
    </>
  );
};

const App = () => {
  return (
    <Router>
      <Route>
        <Layout>
          <Route exact path="/">
            <h1>/</h1>
            <InnerRoute />
          </Route>
          <Route path="/a">
            <h1>test</h1>
            <InnerRoute />
          </Route>
          <Route path="/b">
            <h1>test</h1>
            <InnerRoute />
          </Route>
        </Layout>
      </Route>
    </Router>
  );
};

export default App;
