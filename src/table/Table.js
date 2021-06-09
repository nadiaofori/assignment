import React from 'react'

 function Table(props) {
    return (
        <table border="2px">
        <thead>
          <td>Username</td>
          <td>Password</td>
        </thead>
        <tbody>
          {props.data.map((data, key) => (
            <tr key={key}>
              <td>{data.username}</td>
              <td>{data.password}</td>
            </tr>
          ))}
        </tbody>
      </table>
      
    )
}

export default Table