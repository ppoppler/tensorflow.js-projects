import React, { Component } from "react";
import { Row, Col, Button, ButtonGroup } from "reactstrap";
import { initializeColor } from "./randomizer";



export default class ColorInterface extends Component {

    constructor(){
        super();
        this.state = {
            colors : initializeColor()
        }
        this.changeColor = this.changeColor.bind(this);
    }

    changeColor(){
        this.setState({colors : initializeColor()});
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
