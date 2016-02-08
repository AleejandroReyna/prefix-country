import React, {Component} from "react"

let prefixes = {
  'Germany': '+49',
  'Poland': '+48',
  'Serbia': '+381',
  'Guatemala': '+502'
};

export default class Prefixer extends Component {

  constructor(props) {
    super(props);

    let country = this.props.initialCountry || "Poland";
    this.state = {
      country: country,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    let newCountry = e.target.value;
    this.setState({
      country: newCountry,
    });
  }

  countryItem(country, index) {
    return(
      <option value={country} key={index}>{country}</option>
    )
  }

  render() {
    let {country} = this.state
    let prefix = prefixes[country];
    return(
      <div className="form-horizontal">
        <div className="form-group">
          <label for="selectbox" className="col-sm-3 control-label">Country</label>
          <div className="col-sm-3">
            <select name="" id="selectbox" className="form-control" onChange={this.handleChange} value={country}>
              {Object.keys(prefixes).map(this.countryItem)}
            </select>
          </div>
        </div>
        <div className="form-group">
          <label for="input-text" className="col-sm-3 control-label">Phone number</label>
          <div className="col-sm-3">
            <div className="input-group">
              <span className="input-group-addon">{prefix}</span>
              <input type="text" className="form-control" id="input-text" />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
