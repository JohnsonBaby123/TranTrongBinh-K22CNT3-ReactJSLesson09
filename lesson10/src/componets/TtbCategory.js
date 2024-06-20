import React from 'react'

export default function TTBCategory({ renderTTBCategories, onAddNew, onTTBDelete, onTTBEdit }) {
    console.log("renderTTBCategories: ", renderTTBCategories);
    let TTBCategoriesElement = renderTTBCategories.map((TTBCategory, index) => {
        return (
            <tr key={index}>
                <th>{index + 1}</th>
                <td>{TTBCategory.TTBId}</td>
                <td>{TTBCategory.TTBCategoryName}</td>
                <td>{TTBCategory.TTBCategoryStatus === true ? "Hiển Thị" : "Tạm Khóa"}</td>
                <td>
                    <button className='btn btn-danger' onClick={() => TTBhandleDelete(TTBCategory.TTBId)}>Delete</button>
                    <button className='btn btn-success' onClick={() => TTBhandleEdit(TTBCategory)}>Edit</button>
                </td>
            </tr>
        )
    })
    const TTBhandleDelete = (TTBId) => {
        if (window.confirm('Bạn Có Muốn Xóa ['+TTBId+'] Không?')) {
            console.log("Delete:", TTBId);
            onTTBDelete(TTBId);
        } else {

        }
    }
    const TTBhandleEdit = (TTBCategory)=>{
        onTTBEdit(TTBCategory);
    }

    const TTBHandleAdd = () => {
        onAddNew(true);
    }
    return (
        <div className='container m-2'>
            <h2>Danh Sách Loại Sản Phẩm</h2>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Mã Loại</th>
                        <th>Tên Loại</th>
                        <th>Trạng Thái</th>
                        <th>Chức Năng</th>
                    </tr>
                </thead>
                <tbody>
                    {TTBCategoriesElement}
                </tbody>
            </table>
            <button className='btn btn-primary' onClick={TTBHandleAdd}>Thêm Mới</button>
        </div>
    )
}