import './App.css';
import {React,useEffect,useState} from 'react'
import axios from 'axios';
import TtbStudenlist from './components/TtbStudenlist';


function TtbApp() {

const [ttbStudenlist, setTtbStudenList]=useState([]);
const ttbGetStudent = async () => {
  try {
    const response = await axios.get("https://666a5d097013419182ceff5e.mockapi.io/api/ttbv1/ttbStudent");
    setTtbStudenList(response.data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
useEffect(() => {
  ttbGetStudent();
}, []);
  return (
    <div className="container border mt-5 p-3">
      <h2 className='text-center'>Xử lý các chức năng CRUD - Hook</h2>
      <hr/>
      <TtbStudenlist renderTtbStudentList = {ttbStudenlist}/>
    </div>
  );
}

export default TtbApp;
