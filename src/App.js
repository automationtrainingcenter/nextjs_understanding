// import Todo from "./components/Todo";
import { Route, Switch } from "react-router-dom";
import Layout from "./components/layout/Layout";
import AllMeetupsPage from "./pages/AllMeetups";
import FavouritesPage from "./pages/Favourite";
import NewMeetupPage from "./pages/NewMeetup";

function App() {
  // basic component understanding
  // return (
  //   <div>
  //     <h1>My ToDos</h1>
  //     <Todo text= "Learn React"/>
  //     <Todo text = "Learn Vue"/>
  //     <Todo text = "Learn Nextjs"/>
  //   </div>
  // );

  // routing understanding
  return (
      <Layout>
        <Switch>
          <Route path="/" exact>
            <AllMeetupsPage />
          </Route>
          <Route path="/new-meetup">
            <NewMeetupPage />
          </Route>
          <Route path="/favs">
            <FavouritesPage />
          </Route>
        </Switch>
      </Layout>
  );
}

export default App;
