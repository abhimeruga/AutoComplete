import { Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";

import { store } from "./Redux/Store/store";

import AutocompleteComponent from "./Components/AutocompleteComponent";
import Study from "./Modules/Study/Study.component";

import "./App.css";

(async () => {
  const promisify = (item, time) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(item + time);
      }, time);
    });
  };

  const a = promisify("a", 8000);
  const b = promisify("b", 4000);
  const c = promisify("c", 6000);

  // for await (let item of [a, b, c]) {
  //   console.log(item);
  // }

  Promise.all([a, b, c]).then((res) => console.log("all", res));
  Promise.race([a, b, c]).then((res) => console.log("race", res));
  //sequences
  const sequence = async () => {
    return [await a, await b, await c, 123];
  };
  console.log("seq1", sequence());
  console.log("seq2", sequence);
  sequence().then((res) => console.log(res));
})();

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Switch>
          <Route exact path="/" component={AutocompleteComponent} />
          <Route exact path="/study" component={Study} />
        </Switch>
      </div>
    </Provider>
  );
}

export default App;
