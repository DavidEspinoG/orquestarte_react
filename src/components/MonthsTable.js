import React from "react";
import '../styles/MonthsTable.css';
import AddToCart from "./AddToCart";

const MonthsTable = ({months}) => {
  return (
    <table className="months-table">
      <thead>
        <tr>
          <td>Mes</td>
          <td>Status</td>
          <td>Acción</td>
        </tr>
      </thead>
      <tbody>
          {months.map((month) => (
          <tr key={month.id}>
            <td>
              {month.name}
            </td>
            <td>
              {month.paid ? <div>Pagado</div> : <div>Por pagar</div>}
            </td>
            <td><AddToCart /></td>
          </tr>
          ))}
      </tbody>
    </table>
  )
};

export default MonthsTable;