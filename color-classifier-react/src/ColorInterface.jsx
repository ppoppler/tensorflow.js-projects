import React, { Component } from "react";
import { Row, Col, Button, ButtonGroup } from "reactstrap";
import * as firebase from "firebase";
import { initializeColor } from "./randomizer";
import config from "./firebase";

var fbase = firebase.initializeApp(config);

export default class ColorInterface extends Component {
  constructor() {
    super();
    this.state = {
      colors: initializeColor()
    };
    this.changeColor = this.changeColor.bind(this);
  }

  changeColor(type) {
    this.sendData(type);
    this.setState({ colors: initializeColor() });
  }

  sendData(type) {
    const colorDatabase = firebase.database().ref("colors");
    var data = {
      r: this.state.colors[0],
      g: this.state.colors[1],
      b: this.state.colors[2],
      type: type
    };
    console.log(data);

    let color = colorDatabase.push(data, err => {
      if (err) {
        console.log(err);
      } else {
        console.log("Data saved successfully");
      }
    });
    //console.log("Firebase generated key:" + color.key);
  }

  render() {
    return (
      <div
        className="App-header"
        style={{
          background: `linear-gradient(rgb(${this.state.colors}), #353535)`
        }}
      >
        <div className="container">
          <Row>
            <Col xs={4}>
              <div
                className="color-box"
                style={{ backgroundColor: `rgb(${this.state.colors})` }}
              />
              <p>R: {this.state.colors[0]} G: {this.state.colors[1]} B: {this.state.colors[2]}</p>
            </Col>
            <Col xs={8}>
              <h1>Color Crowdsource Recognition</h1>
              <p>Using this tool, determine what type of color it is</p>
              <ButtonGroup>
                <Button
                  onClick={() => this.changeColor("Red-ish")}
                  style={{ backgroundColor: "firebrick" }}
                >
                  Red-ish
                </Button>
                <Button
                  onClick={() => this.changeColor("Green-ish")}
                  style={{ backgroundColor: "limegreen" }}
                >
                  Green-ish
                </Button>
                <Button
                  onClick={() => this.changeColor("Blue-ish")}
                  style={{ backgroundColor: "royalblue" }}
                >
                  Blue-ish
                </Button>
                <Button onClick={() => this.changeColor("Yellow-ish")}
                style={{backgroundColor: "goldenrod"}}
                >
                  Yellow-ish
                </Button>
                <Button
                  onClick={() => this.changeColor("Brown-ish")}
                  style={{ backgroundColor: "saddlebrown" }}
                >
                  Brown-ish
                </Button>
                <Button
                  onClick={() => this.changeColor("Orange-ish")}
                  style={{ backgroundColor: "orange" }}
                >
                  Orange-ish
                </Button>
                <Button 
                  onClick={() => this.changeColor("Purple-ish")}
                  style={{backgroundColor: "blueviolet"}}
                >Purple-ish</Button>
                <Button
                  onClick={() => this.changeColor("Pink-ish")}
                  style={{ backgroundColor: "violet" }}
                >
                  Pink-ish
                </Button>
                <Button
                  onClick={() => this.changeColor("Grey-ish")}
                  style={{ backgroundColor: "grey" }}
                >
                  Grey-ish
                </Button>
              </ButtonGroup>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
