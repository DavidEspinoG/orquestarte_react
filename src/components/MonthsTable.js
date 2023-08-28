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
              {month.paid ? 
              <div className="paid-month">Pagado</div>
              :
              <div className="unpaid-month">Pendiente</div>
              }
            </td>
            <td>{month.paid ? 
              '------':
              <AddToCart month={month}/>
              }
            </td>
          </tr>
          ))}
      </tbody>
    </table>
  )
};

export default MonthsTable;