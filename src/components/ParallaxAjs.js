import React from "react";

class ParallaxAjs extends React.Component {
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <div className="block worksBlock" id="works">
        <div className="container-fluid-content">
          <div className="titleHolder">
            <h2>I'm learning ReactJs</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci
              aut atque, inventore sunt .
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default ParallaxAjs;
