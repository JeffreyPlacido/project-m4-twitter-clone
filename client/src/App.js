import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Bookmarks from "../src/Components/Bookmarks";
import HomeFeed from "../src/Components/HomeFeed";
import Notifications from "../src/Components/Notifications";
import Profile from "../src/Components/Notifications";
import TweetDetails from "../src/Components/TweetDetails";
import SideBar from "../src/Components/SideBar";

const App = () => {
  return (
    <Router>
      <SideBar></SideBar>
      <Switch>
        <Route exact path="/">
          <HomeFeed />
        </Route>
        <Route exact path="/notifications">
          <Notifications />
        </Route>
        <Route path="/bookmarks">
          <Bookmarks />
        </Route>
        <Route exact path="/tweet/:tweetID">
          <TweetDetails />
        </Route>
        <Route exact path="/:profileId">
          <Profile />
        </Route>
      </Switch>
    </Router>
  );
};
export default App;

// / (home route)
// /notifications (notifications route. We won't be building this view, but let's add the route anyway.)
// /bookmarks (another route we won't do much with)
// /tweet/:tweetId (tweet route)
// /:profileId (profile route)
