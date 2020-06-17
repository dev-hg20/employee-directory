import React, { useEffect } from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import EmployeeCard from "./components/EmployeeCard";
import employees from "./employees.json";

function App() {
  const [employeeState, setEmployeeState] = React.useState({
    employees: employees,
  });

  return (
    <Wrapper>
      <Title>Employee List</Title>
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
          <a class="dropdown-item" href="#">
            Intern
          </a>
          <a class="dropdown-item" href="#">
            Engineer
          </a>
          <a class="dropdown-item" href="#">
            Manager
          </a>
        </div>
      </div>
      <button>Order by Date</button>
      {employeeState.employees.map((employee, index) => (
        <EmployeeCard
          key={index}
          name={employee.name}
          image={employee.image}
          title={employee.title}
          startdate={employee.startdate}
          telephone={employee.telephone}
          email={employee.email}
        />
      ))}
    </Wrapper>
  );
}

export default App;
