import React from 'react';

export default function TtbStudenlist({ renderTtbStudentList }) {
  console.log("Data:", renderTtbStudentList);
  let TtbElement = renderTtbStudentList.map((TtbStudent, index)=>{
return(
    <tr key={index}>
    <th scope="row">{index+1}</th>
    <td>{TtbStudent.nhmid}</td>
    <td>{TtbStudent.nhmname}</td>
    <td>{TtbStudent.nhmage}</td>
    <td>{TtbStudent.nhmphone}</td>
    <td>{TtbStudent.nhmemail}</td>
    <td>{TtbStudent.nhmstatus}</td>
    <td>Edit/Delete</td>
  </tr>
)
  })
  return (
    <div>
      <h2>Danh sách SV</h2>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">MSV</th>
            <th scope="col">Họ Tên</th>
            <th scope="col">Điện thoại</th>
            <th scope="col">Email</th>
            <th scope="col">Trạng thái</th>
            <th scope="col">Chức năng</th>
          </tr>
        </thead>
        <tbody>
       {TtbElement}
        </tbody>
      </table>
    </div>
  );
}
