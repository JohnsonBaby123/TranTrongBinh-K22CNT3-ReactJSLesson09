import React from 'react'

export default function TtbCategoryList({ renderTtbCateGories, onAddNew }) {
    console.log("renderTtbCategories: ", renderTtbCateGories);
    let TtbCategoryElement = renderTtbCateGories.map((TtbCategory, index) => {
        return (
            <tr key={index}>
                <th>{index + 1}</th>
                <td>{TtbCategory.TtbId}</td>
                <td>{TtbCategory.TtbCategoryName}</td>
                <td>{TtbCategory.TtbCategoryStatus ? "Hien thi" : "Tam khoa"}</td>
            </tr>
        )
    })

    const TtbHandleAdd = ()=>{
        onAddNew(true);
    }
    return (
        <div className='container m-2'>
            <h2>Danh sach loai san pham</h2>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Ma loai</th>
                        <th>Ten loai</th>
                        <th>Trang thai</th>
                        <th>Chuc nang</th>
                    </tr>
                </thead>
                <tbody>
                    {TtbCategoryElement}
                </tbody>
            </table>
            <button className='btn btn-primary' onClick={TtbHandleAdd}>Them moi</button>
        </div>
    )
}