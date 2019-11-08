import React from "react";
import countries from "../data/countries";

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: "",
      repeatPassword: "",
      country: "",
      gender: "female",
      agree: false
    };
  }

  componentDidMount() {
    this.username.focus();
  }

  onSubmit = event => {
    event.preventDefault();
    console.log("refs: ", this.username.value, this.password.value);
    console.log("state: ", this.state.username, this.state.password);
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
    console.log(event.target.value);
  };

  onChangeAgree = event => {
    //console.log(typeof event.target.value);
    this.setState({
      [event.target.name]: event.target.checked
      // [event.target.name]: !event.target.value not working
      // [event.target.name]: event.target.value == "true" ? false : true
    });
    console.log(
      "onChangeAgree:       ",
      "state: ",
      this.state.agree,
      "eventTargetName: ",
      event.target.name,
      "targetValue: ",
      event.target.value,
      "event.target.checked: ",
      event.target.checked
    );
  };

  getOptionsItems = items => {
    return items.map(item => (
      <option key={item.id} value={item.id}>
        {item.name}
      </option>
    ));
  };

  render() {
    {
      console.log("render");
      console.log("this.state: ", this.state.agree);
    }
    return (
      <div className="form-container card">
        <form className="form card-body">
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter username"
              ref={node => (this.username = node)}
              value={this.state.username}
              onChange={this.onChange}
              name="username"
              id="username"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter password"
              ref={node => (this.password = node)}
              value={this.state.password}
              onChange={this.onChange}
              name="password"
              id="password"
            />
          </div>
          <div className="form-group">
            <label htmlFor="repeatPassword">Repeat password</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter repeat password"
              ref={node => (this.repeatPassword = node)}
              value={this.state.repeatPassword}
              onChange={this.onChange}
              name="repeatPassword"
              id="repeatPassword"
            />
          </div>

          <div className="form-group">
            <label htmlFor="country">Country</label>
            <select
              className="form-control"
              id="country"
              name="country"
              value={this.state.country}
              onChange={this.onChange}
            >
              {this.getOptionsItems(countries)}
            </select>
          </div>

          <fieldset className="form-group">
            <div>Gender</div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                id="male"
                name="gender"
                value="male"
                checked={this.state.gender === "male"}
                onChange={this.onChange}
              />
              <label className="form-check-label" htmlFor="male">
                Male
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                id="female"
                name="gender"
                value="female"
                checked={this.state.gender === "female"}
                onChange={this.onChange}
              />
              <label className="form-check-label" htmlFor="female">
                Female
              </label>
            </div>
          </fieldset>

          <div className="form-check mb-2">
            <input
              className="form-check-input"
              type="checkbox"
              id="agree"
              name="agree"
              value={this.state.agree}
              onChange={this.onChangeAgree}
              checked={this.state.agree}
            />
            <label className="form-check-label" htmlFor="agree">
              Confirm the processing of data
            </label>
          </div>

          <button
            type="submit"
            className="btn btn-primary w-100"
            onClick={this.onSubmit}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}
