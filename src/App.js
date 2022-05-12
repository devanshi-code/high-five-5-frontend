import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import LandingPage from './components/pages/LandingPage'
import LoginPage from './components/pages/LoginPage'
import RegisterPage from './components/pages/RegisterPage'
import ForgetPasswordPage from './components/pages/ForgetPasswordPage'
import HomePage from './components/pages/HomePage'
import Dashboard from './components/pages/org-dashboard/Dashboard'
import userdashboard from './components/pages/user-dashboard/Dashboard'
import Project from './components/pages/org-dashboard/project/Project'
import Create from './components/pages/org-dashboard/create/Create'


import './App.css'

export default function App() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/" component={ LandingPage } />
                    <Route path="/login" component={ LoginPage } />
                    <Route path="/register" component={ RegisterPage } />
                    <Route path="/forget-password" component={ ForgetPasswordPage } />
                    <Route path="/home" component={ HomePage } />
                    <Route path="/org-dashboard" component={ Dashboard } />
                    <Route path="/user-dashboard" component={ userdashboard } />
                    <Route path="/projects/:id" component={ Project } />
                    <Route path="/create" component={ Create } />
                </Switch>
                
            </div>
        </Router>
    )
}

