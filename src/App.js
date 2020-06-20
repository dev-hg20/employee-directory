import React from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import EmployeeCard from "./components/EmployeeCard";
import employeesJSON from "./employees.json";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      employeeState: employeesJSON,
    };
  }

  handleClick = (e) => {
    e.preventDefault();
    console.log("button clicked");
    const employee = this.state.employeeState;

    for (var i = 0; i < employee.length; i++) {
      // Convert startdate of each index into a Date object
      const index = employee[i];
      index.new_startdate = new Date(index.startdate);
      // Sort employees array in ascending order
      employee.sort((a, b) => (a.startdate > b.startdate ? 1 : -1));
    }
    this.setState({ employeeState: employee });
  };

  filterResults = (e) => {
    e.preventDefault();
    const filtered = employeesJSON.filter(
      (employee) => employee.title === e.target.innerHTML
    );
    console.log(filtered);
    this.setState({ employeeState: filtered });
  };

  render() {
    const { employeeState } = this.state;
    return (
      <Wrapper>
        <Title>Employee List</Title>
        {/* Order cards */}
        <h2>
          <button className="btn btn-secondary" onClick={this.handleClick}>
            Order by Date
          </button>
          {/* Filter cards */}
          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Filter by Title
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a
                className="dropdown-item"
                href="value"
                onClick={this.filterResults}
              >
                Engineer
              </a>
              <a
                className="dropdown-item"
                href="value"
                onClick={this.filterResults}
              >
                Test
              </a>
            </div>
          </div>
        </h2>
        {/* Render cards */}
        {employeeState.map((employee, index) => {
          return <EmployeeCard key={index} emp={employee} />;
        })}
        ;
      </Wrapper>
    );
  }
}
export default App;
