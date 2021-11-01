import React, { useContext } from "react";
import { Redirect, Switch, Route } from "react-router";
import { Context } from "..";
import { CHAT_ROUTE, LOGIN_ROUTE } from "../consts";
import { privateRoutes, publicRoutes } from "../routes";
import {useAuthState} from "react-firebase-hooks/auth"


export default function AppRouter(props) {
    const {auth} = useContext(Context);
    const [user] = useAuthState(auth);
    return user ? 
    (
        <Switch>
            {
                privateRoutes.map( ({path, Component}) => <Route key = {path} path = {path} component = {Component} exact = {true} />)
            }
            <Redirect to = {CHAT_ROUTE} />
        </Switch>
    )
    :
    (
        <Switch>
            {
                publicRoutes.map( ({path, Component}) => <Route key = {path} path = {path} component = {Component} exact = {true} />)
            }
            <Redirect to = {LOGIN_ROUTE} />
        </Switch>
    )
}