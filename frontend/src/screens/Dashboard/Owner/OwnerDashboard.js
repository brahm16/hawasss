import React, { Component } from "react";
import { MENU_OWNER } from "../dashboardMenu/ownerMenu";
import HeaderAdmins from '../HeaderAdmins'
import MainDashboard from '../MainDashboard'
import SidebarAdmins from '../SidebarAdmins'

export default class OwnerDashboard extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          menu: MENU_OWNER,
        };
      }
    
  render() {
    return (
      <div className="bg-gray-800 font-sans leading-normal tracking-normal mt-12">
        <HeaderAdmins />

        <div className="flex flex-col md:flex-row">
          <SidebarAdmins menu={this.state.menu}  />

          <MainDashboard />
        </div>
      </div>
    );
  }
}
