import React from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import EmployeeCard from "./components/EmployeeCard";
import employeesJSON from "./employees.json";

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
    // console.log("filter working");
    const employee = this.state.employeeState;
    console.log(employee); //ARRAY of objeccts

    // for (var i = 0; i < employee.length; i++) {
    //   const index = employee[i];
    //   console.log(index);
    //   console.log(index.title);
    //   employee.filter((title) => index.title === e.target.innerHTML);
    //   console.log(e.target.innerHTML);
    // }

    employee.filter((item) => employee.title === e.target.innerHTML);
    console.log(employee.title);
    this.setState({ employeeState: employee });
  };

  render() {
    const { employeeState } = this.state;
    return (
      <Wrapper>
        <Title>Employee List</Title>
        {/* Filter cards */}
        <div class="dropdown">
          <button
            class="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Filter by Title
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            {/* TODO: Figure out event value */}
            <a class="dropdown-item" onClick={this.filterResults}>
              Engineer
            </a>
            <a class="dropdown-item" onClick={this.filterResults}>
              Test
            </a>
          </div>
        </div>
        {/* Order cards */}
        <button onClick={this.handleClick}>Order by Date</button>
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
