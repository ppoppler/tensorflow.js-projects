import React, { Component } from "react";
import { Row, Col, Button, ButtonGroup } from "reactstrap";
import * as firebase from "firebase";
import { initializeColor } from "./randomizer";
import config from "./firebase";
  

var fbase = firebase.initializeApp(config);

export default class ColorInterface extends Component {

    constructor(){
        super();
        this.state = {
            colors : initializeColor()
        }
        this.changeColor = this.changeColor.bind(this);
        this.sendData = this.sendData.bind(this);
    }

    changeColor(){
        this.setState({colors : initializeColor()});
    }

    sendData(){
        const colorDatabase = fbase.database.ref('colors');
    }
  render() {
    return (
      <div className="container">
        <Row>
          <Col xs={4}>
            <div
              className="color-box"
              style={{ backgroundColor: `rgb(${this.state.colors})` }}
            />
          </Col>
          <Col xs={8}>
            <h1>Color Crowdsource Regonition</h1>
            <p>Using this tool, determine what type of color it is</p>
            <ButtonGroup>
              <Button onClick={this.changeColor} style={{backgroundColor: "firebrick"}}>Red-ish</Button>
              <Button onClick={this.changeColor} style={{backgroundColor: "limegreen"}}>Green-ish</Button>
              <Button onClick={this.changeColor} style={{backgroundColor: "royalblue"}}>Blue-ish</Button>
              <Button onClick={this.changeColor} style={{backgroundColor:"saddlebrown"}}>Brown-ish</Button>
              <Button onClick={this.changeColor} style={{backgroundColor:"orange"}}>Orange-ish</Button>
              <Button onClick={this.changeColor} style={{backgroundColor:"pink"}}>Pink-ish</Button>
              <Button onClick={this.changeColor} style={{backgroundColor:"grey"}}>Grey-ish</Button>
            </ButtonGroup>
          </Col>
        </Row>
      </div>
    );
  }
}
