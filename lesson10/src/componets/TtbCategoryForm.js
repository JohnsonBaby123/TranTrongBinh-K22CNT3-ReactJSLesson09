import React, { useEffect, useState } from 'react'
import axios from "../api/TtbApi";

export default function TTBCategoryForm({ oncloseForm, onCategorySubmit, renderTTBCategory }) {
    //state 
    const [TTBId, setTTBId] = useState(0);
    const [TTBCategoryName, setTTBCategoryName] = useState("");
    const [TTBCategoryStatus, setTTBCategoryStatus] = useState(true);

    useEffect(() => {
        setTTBId(renderTTBCategory.TTBId);
        setTTBCategoryName(renderTTBCategory.TTBCategoryName);
        setTTBId(renderTTBCategory.TTBCategoryStatus);
    });
    const TTBHandleClose = () => {
        oncloseForm(false);
    }
    const TTBHandleSubmit = async (event) => {
        event.preventDefault();
        if (TTBId === 0) { //thêm
            let TTBCategory = {
                TTBId: 0,
                TTBCategoryName: TTBCategoryName,
                TTBCategoryStatus: TTBCategoryStatus
            }
            await axios.post("TTBCategory", TTBCategory);
            onCategorySubmit(TTBCategory);
        } else {//sửa
            let TTBCategory = {
                TTBId: TTBId,
                TTBCategoryName: TTBCategoryName,
                TTBCategoryStatus: TTBCategoryStatus
            }
            await axios.put("TTBCategory", TTBCategory);
            onCategorySubmit(TTBCategory);
        }
    }
    return (
        <div>
            <form>
                <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1">Category Name</span>
                    <input type="text" class="form-control" name='TTBCategoryName'
                        value={TTBCategoryName}
                        onChange={(ev) => setTTBCategoryName(ev.target.value)}
                        placeholder="Category Name"
                        aria-label="Category Name" aria-describedby="basic-addon1" />
                </div>
                <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1">Category Status</span>
                    <select className='form-control'
                        name='TTBCategoryStatus'
                        value={TTBCategoryStatus}
                        onChange={(ev) => setTTBCategoryStatus(ev.target.value)}>
                        <option value={true}>Hiển Thị</option>
                        <option value={false}>Tạm Khóa</option>
                    </select>
                </div>
                <button className='btn btn-success' onClick={TTBHandleSubmit}>Ghi Lại</button>
                <button className='btn btn-danger' onClick={TTBHandleClose}>Đóng</button>
            </form>
        </div>
    )
}