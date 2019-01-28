import React from "react";
class searchForm extends React.Component {
  render() {
    return (
      <form className="form-horizontal CustomForm" onSubmit={(e)=>this.props.submitHandler(e)}>
        <fieldset className="fieldset">
          <legend>Location</legend>

          <div className="control-group CustomDiv">
            <label className="control-label">Address</label>
            <div className="controls">
              <input
                id="address"
                name="address"
                type="text"
                placeholder="Address"
                className="input-xlarge CustomInput"
                value={this.props.state.address}
                onChange={(e)=>this.props.changeHandler(e)}
              />

            </div>
          </div>

          <div className="control-group CustomDiv">
            <label className="control-label">City / Town</label>
            <div className="controls">
              <input
                id="city"
                name="city"
                type="text"
                placeholder="City"
                className="input-xlarge CustomInput"
                value={this.props.state.city}
                onChange={(e)=>this.props.changeHandler(e)}
              />
            </div>
          </div>

          <div className="control-group CustomDiv">
            <label className="control-label">State / Province / Region</label>
            <div className="controls">
              <input
                id="state"
                name="state"
                type="text"
                placeholder="State / Province / Region"
                className="input-xlarge CustomInput"
                value={this.props.state.state}
                onChange={(e)=>this.props.changeHandler(e)}
              />
            </div>
          </div>

          <div className="control-group CustomDiv">
            <label className="control-label">Zip / Postal Code</label>
            <div className="controls">
              <input
                id="zip"
                name="zip"
                type="text"
                placeholder="Zip or postal code"
                className="input-xlarge CustomInput"
                value={this.props.state.zip}
                onChange={(e)=>this.props.changeHandler(e)}
              />
            </div>
          </div>
          <div className="form-group CustomButton">
            <div className="col-md-4">
              <button
                color="black"
                id="singlebutton"
                name="singlebutton"
                className="NavButton CustomNavButton"
              >
                Search!
              </button>
            </div>
          </div>
        </fieldset>
      </form>
    );
  }
}

export default searchForm;
