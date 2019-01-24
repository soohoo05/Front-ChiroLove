import React from "react";
class searchForm extends React.Component {
  render() {
    return (
      <form class="form-horizontal CustomForm">
        <fieldset className="fieldset">
          <legend>Location</legend>

          <div class="control-group CustomDiv">
            <label class="control-label">Address</label>
            <div class="controls">
              <input
                id="address"
                name="address"
                type="text"
                placeholder="Address"
                class="input-xlarge CustomInput"
              />

            </div>
          </div>

          <div class="control-group CustomDiv">
            <label class="control-label">City / Town</label>
            <div class="controls">
              <input
                id="city"
                name="city"
                type="text"
                placeholder="City"
                class="input-xlarge CustomInput"
              />
            </div>
          </div>

          <div class="control-group CustomDiv">
            <label class="control-label">State / Province / Region</label>
            <div class="controls">
              <input
                id="region"
                name="region"
                type="text"
                placeholder="State / Province / Region"
                class="input-xlarge CustomInput"
              />
            </div>
          </div>

          <div class="control-group CustomDiv">
            <label class="control-label">Zip / Postal Code</label>
            <div class="controls">
              <input
                id="postal-code"
                name="postal-code"
                type="text"
                placeholder="Zip or postal code"
                class="input-xlarge CustomInput"
              />
            </div>
          </div>
          <div class="form-group CustomButton">
            <div class="col-md-4">
              <button
                color="black"
                id="singlebutton"
                name="singlebutton"
                class="NavButton CustomNavButton"
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
