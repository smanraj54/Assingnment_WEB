//import React , {Component} from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {Home} from './Home';
import {CartManagement as MyCart} from './CartManagement';
import {Contacts} from './Contacts';
import {Coupons} from './Coupons';
import {Wishlist} from './Wishlist';
import {Payment} from './Payment';
import {MyAccount} from './MyAccount';
import {Invalid} from './Invalid';
import { Component } from 'react';


class  RouteLocal extends Component{
    render() {
    return(

        <div>
            <Router>
                <Switch>
                    <Route extract Path = "/" component={Home}/>
                    <Route Path = "/contacts" component={Contacts}/>
                    <Route Path = "/coupons" component={Coupons}/>
                    <Route Path = "/wishlist" component={Wishlist}/>
                    <Route Path = "/mycart" component={MyCart}/>
                    <Route Path = "/payment" component={Payment}/>
                    <Route Path = "/myaccount" component={MyAccount}/>
                    <Route component={Invalid}/>
                </Switch>
            </Router>
        </div>

    );
    }

}
export default RouteLocal;