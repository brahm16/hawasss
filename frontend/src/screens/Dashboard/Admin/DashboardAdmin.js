import React, { Component } from 'react'
import HeaderAdmins from '../HeaderAdmins'
import MainDashboard from '../MainDashboard'
import SidebarAdmins from '../SidebarAdmins'
import {MENU_USER} from "../dashboardMenu/userMenu"
import { Route, Switch } from 'react-router'
import ProfileAdmin from './ProfileAdmin'
import { MENU_ADMIN } from '../dashboardMenu/adminMenu'

export default class DashboardAdmin extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          menu:MENU_ADMIN
        };
      }
    render() {
        return (
            <div className="bg-gray-800 font-sans leading-normal tracking-normal mt-12">
                <HeaderAdmins />


                <div className="flex flex-col md:flex-row"> 
                <SidebarAdmins menu={this.state.menu} />
               



                <MainDashboard />

                </div>
            </div>
        )
    }
}
