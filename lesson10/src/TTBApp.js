import { useEffect, useState } from 'react';
import './App.css';
import TTBCategory from './componets/TtbCategory';
import axios from "./api/TtbApi";
import TTBCategoryForm from './componets/TtbCategoryForm';


function TTBApp() {
  // lấy dữ liệu từ api
  const [TTBCategories, setTTBCategories] = useState([]);

  const getCategories = async () => {
    try {
      const TTBCateResponse = await axios.get("TTBCategory");
      setTTBCategories(TTBCateResponse.data);
    } catch (error) {
      console.log("lỗi:", error);
    }
  }

  useEffect(() => {
    getCategories();
    console.log("TTBCategories:", TTBCategories);
  }, [])

  //trạng thái form
  const [TTBCategoryIsForm, setTTBCategoryIsForm] = useState(false);
  //dữ liệu form : Add/Edit
  let TTBCategoryInit = {
    TTBId: 0,
    TTBCategoryName: "",
    TTBCategoryStatus: true,
}
  const [TTBCategoryEdit, setTTBCategoryEdit] = useState(TTBCategoryInit);
  const TTBHandleAddNew = (param) => {
    setTTBCategoryIsForm(param);
  }
  const TTBHandleCategoryCloseForm = (param) => {
    setTTBCategoryIsForm(param);
  }
  const TTBHandleCategorySubmit = (param) => {
    let id = TTBCategories[TTBCategories.length - 1].TTBId;
    console.log("Mã:", id);
    param.TTBId = id + 1;
    TTBCategories.push(param);
    setTTBCategories((prev) => {
      return [...prev];
    })
    setTTBCategoryIsForm(false);
  }
  //hàm xử lý sự kiện xóa
  const TTBhandleDelete = (TTBId)=>{
    console.log("App-Delete-TTBId:",TTBId);
    // const TTBResponse = axios.delete(`https://666c2e2e49dbc5d7145cfd4f.mockapi.io/TTBapi/TTBv1/TTBCategory/${TTBId}`);
    const TTBResponse = axios.delete(`TTBCategory/${TTBId}`);
    console.log("TTBResponse-Delete",TTBResponse);
    let TTBdelete = TTBCategories.filter(x=>x.TTBId !== TTBId);
    setTTBCategories(TTBdelete);
    console.log("Deleted:",TTBdelete);
  }
  const TTBhandleEdit =(TTBCategory)=>{
    setTTBCategoryEdit(TTBCategory);
    setTTBCategoryIsForm(true);
  }
  return (
    <div className="container border my-3">
      <h1>Tran Trong Binh - Call API</h1>

      <TTBCategory renderTTBCategories={TTBCategories}
        onAddNew={TTBHandleAddNew}
        onTTBDelete={TTBhandleDelete} 
        onTTBEdit={TTBhandleEdit}/>
      <hr />
      {
        TTBCategoryIsForm === true ? <TTBCategoryForm
          renderTTBCategory = {TTBCategoryEdit}
          oncloseForm={TTBHandleCategoryCloseForm}
          onCategorySubmit={TTBHandleCategorySubmit} /> : ""
      }

    </div>
  );
}
export default TTBApp;