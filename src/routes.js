import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import home from './Container/home/Index'
import orders from './Container/orders/Index'


function Routes (){
    return(
        <Router>
            <Switch>
                <Route exact path="/" component={home} />
                <Route exact path="/orders" component={orders} />
            </Switch>
        </Router>
)
}
export default Routes