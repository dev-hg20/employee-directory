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

  render() {
    const { employeeState } = this.state;
    return (
      <Wrapper>
        <Title>Employee List</Title>
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
