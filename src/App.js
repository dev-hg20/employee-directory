import React, { useEffect } from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import EmployeeCard from "./components/EmployeeCard";
import employees from "./employees.json";

function App() {
  const [employeeState, setEmployeeState] = React.useState({
    employees: employees,
  });

  const [startDate, setStartDate] = React.useState({});
  const orderDate = employeeState.employees.sort((a, b) => b.date - a.date);

  //   useEffect(() => {
  //     console.log("render");
  //   }, [values.password]);

  return (
    <Wrapper>
      <Title>Employee List</Title>

      <button onClick={setStartDate}>Order by Date</button>

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
