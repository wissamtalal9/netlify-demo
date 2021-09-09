import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button, Col } from "react-bootstrap";

class HornedBeast extends Component {
  getHandleOpen = () => {
    let description = this.props.description;
    let title = this.props.title;
    let url = this.props.image_url;
    let horns = this.props.horns;
    this.props.handleOpen(description, title, url, horns);
  };
  constructor(props) {
    super(props);
    this.state = {
      LikeNumber: 0,
    };
  }
  likeImage = () => {
    this.setState({
      LikeNumber: this.state.LikeNumber + 1,
      // console.log('hii');
    });
  };

  render() {
    return (
      <>
        <Col>
          <Card style={{ width: "15rem" }}>
            <Card.Img
              onClick={this.likeImage}
              variant="top"
              src={this.props.image_url}
            />
            <Card.Body>
              <Card.Title>{this.props.title}</Card.Title>
              <Card.Text>
                Number Of Like This Image: {this.state.LikeNumber}
                <br />
                Description : {this.props.description}
                <br />
                keyword : {this.props.keyword}
                <br />
                horns : {this.props.horns}
              </Card.Text>
              <Button onClick={this.getHandleOpen} variant="primary">
                Open The Image
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </>
    );
  }
}

export default HornedBeast;
