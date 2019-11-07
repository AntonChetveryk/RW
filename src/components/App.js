import React from "react";
import countries from "../data/countries";

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: "",
      repeatPassword: "",
      country: ""
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

  getOptionsItems = item => {
    item.map(country => (
      <option value={item.id} key={item.id}>
        {item.name}
      </option>
    ));
  };

  render() {
    //console.log(this);
    const getOptionsCountries = countries.map(country => (
      <option value={country.id} key={country.id}>
        {country.name}
      </option>
    ));
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
