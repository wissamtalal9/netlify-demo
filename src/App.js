import React, { Component } from "react";

import Main from "./components/Main";
import Footer from "./components/footer";
import NavBarCustom from "./components/NavBarCustom";

import BsModal from "./components/BsModal";

import "./components/css/style.css";
import FormImages from "./components/FormImages";
import imagesData from "./components/images.json";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      title: "",
      description: "",
      image_url: "",
      horns: "",
      dataState: imagesData,
      filteredData: imagesData,
      NumberOfHorns: "",
    };
  }
  handleClose = () => {
    this.setState({
      showModal: false,
    });
  };
  handleOpen = (description, title, image_url, horns) => {
    this.setState({
      showModal: true,
      description: description,
      title: title,
      image_url: image_url,
      horns: horns,
    });
  };
  SelectOption = (event) => {
    let NumberOfHorns = event.target.value;
    console.log(NumberOfHorns);

    this.setState({
      NumberOfHorns: NumberOfHorns,
      filteredData: this.state.dataState.filter((element) => {
        if (NumberOfHorns == element.horns) {
          return element;
        }
      }),
    });
  };
  render() {
    return (
      <>
        <NavBarCustom />
        <FormImages />
        <Main
          handleOpen={this.handleOpen}
          filteredData={this.state.filteredData}
        />
        <BsModal
          handleClose={this.handleClose}
          showModal={this.state.showModal}
          description={this.state.description}
          title={this.state.title}
          image_url={this.state.image_url}
          horns={this.state.horns}
        />
        <Footer />
      </>
    );
  }
}

export default App;
