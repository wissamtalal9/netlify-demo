import React, { Component } from "react";

class FormImages extends Component {
  render() {
    return (
      <section className="formSection">
        <form className={"form"}>
          <label htmlFor="horns" className="label">
            number of horns
          </label>
          <select
            name="horns"
            className="form-select select"
            aria-label="selected horns by No:"
            onChange={this.props.SelectOption}
          >
            <option value="0">selected horns by No:</option>
            <option value="1">horns:1</option>
            <option value="2">horns:2</option>
            <option value="3">horns:3</option>
          </select>
        </form>
      </section>
    );
  }
}

export default FormImages;
