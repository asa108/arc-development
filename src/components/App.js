import React from "react";
import Header from "./ui/Header";
import { ThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import theme from "./ui/Theme";

// {
//   [...new Array(120)].map(() => (
//     <div>
//       <p>Hello world</p>
//       <li>aksdhaljsdl</li>
//     </div>
//   ));
// }

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={() => <div>Hole</div>} />
          <Route exact path="/services" component={() => <div>Ser</div>} />
          <Route exact path="/customesoftware" component={() => <div>Custom software</div>} />
          <Route exact path="/mobileapps" component={() => <div>websirte</div>} />
          <Route exact path="/website" component={() => <div>contact</div>} />
          <Route exact path="/revolution" component={() => <div>revolutions</div>} />
          <Route exact path="/about" component={() => <div>about us</div>} />
          <Route exact path="/contact" component={() => <div>Hole</div>} />
          <Route exact path="/estimate" component={() => <div>Estimate</div>} />
        </Switch>
      </BrowserRouter>
      <p>hello</p>
    </ThemeProvider>
  );
}

export default App;
