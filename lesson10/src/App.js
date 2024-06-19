import './App.css';
import TtbCategoryList from './componets/TtbCategoryList.js';
import { useEffect, useState } from 'react';
import axios from './api/TtbApi.js';
import TtbCategoryFrom from './componets/TtbCategoryForm.js';

function App() {
  const [TtbCategories, setTtbCategories] = useState([]);
  
  const getCategories = async () => {
    try {
      const TtbResponse = await axios.get("TtbCategory");
      setTtbCategories(TtbResponse.data);  
    } catch (error) {
      console.log("Error: ", error);
    }
  }

  useEffect(() => {
    getCategories();
  }, []);

  const [TtbCategoryIsFrom, setTtbCategoryIsFrom] = useState(false);

  const TtbHandleAddNew = (param) => {
    setTtbCategoryIsFrom(param);

  }

  const TtbHandleCategoryCloseForm = (param) => {
    setTtbCategoryIsFrom(param);
  }

  const TtbHandleCategorySubmit = (param) => {
    let id = TtbCategories[TtbCategories.length - 1].TtbId;
    console.log("ma: ", id);
    param.TtbId = id + 1;
    TtbCategories.push(param);
    setTtbCategories((prev) => {
      return [...prev];
    })
    setTtbCategoryIsFrom(false);
  }

  return (
    <div className="container border my-3">
      <h1>Trần Trọng Bình Call API</h1>
      <TtbCategoryList renderTtbCateGories={TtbCategories} onAddNew={TtbHandleAddNew} />
      <hr />
      {
        TtbCategoryIsFrom === true ? <TtbCategoryFrom onCloseForm={TtbHandleCategoryCloseForm} onCategorySubmit={TtbHandleCategorySubmit} /> : ""
      }
      
    </div>
  );
}

export default App;