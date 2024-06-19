import React, { useState } from 'react';
import axios from '../api/TtbApi';

export default function 
CategoryFrom({ onCloseForm, onCategorySubmit }) {
    const [TtbCategoryName, setTtbCategoryName] = useState("");
    const [TtbCategoryStatus, setTtbCategoryStatus] = useState(true);

    const TtbHandleClose = () => {
        onCloseForm(false);
    }

    const TtbHandleSubmit = async (event) => {
        event.preventDefault();
        let TtbCategory = {
            TtbId: 0,
            TtbCategoryName: TtbCategoryName,
            TtbCategoryStatus: TtbCategoryStatus
        };
        console.log("TtbCategory", TtbCategory);
        await axios.post("TtbCategory", TtbCategory);
    }

    return (
        <div>
            <form>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">Category Name</span>
                    <input
                        type="text"
                        className="form-control"
                        name='TtbCategoryName'
                        value={TtbCategoryName}
                        onChange={(ev) => setTtbCategoryName(ev.target.value)}
                        placeholder="Category Name"
                        aria-label="Category Name"
                        aria-describedby="basic-addon1"
                    />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon2">Category Status</span>
                    <select
                        name='TtbCategoryStatus'
                        value={TtbCategoryStatus}
                        onChange={(ev) => setTtbCategoryStatus(ev.target.value === 'true')}
                        className='form-select'
                    >
                        <option value={true}>Hien thi</option>
                        <option value={false}>Tam khoa</option>
                    </select>
                </div>
                <button className='btn btn-success' onClick={TtbHandleSubmit}>Thêm mới</button>
                <button className='btn btn-danger' onClick={TtbHandleClose}>Đóng</button>
            </form>
        </div>
    );
}