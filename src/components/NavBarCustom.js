import React, { Component } from "react";
export class NavBarCustom extends Component {
  render() {
    return (
      <>
        <header>
          <a href="#home" class="logo">
            Doing Labs
          </a>
          <div id="menu-bar"></div>
          <nav class="navbar">
            <a href="#home">home</a>
            <a href="#Lab01">Lab01</a>
            <a href="#Lab01">Lab02</a>
            <a href="#Lab01">Lab03</a>
            <a href="#Lab01">Lab04</a>
            <a href="#Lab01">Lab05</a>
          </nav>
        </header>
      </>
    );
  }
}

export default NavBarCustom;
