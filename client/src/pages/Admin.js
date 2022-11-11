import React from 'react';
import AdminParametersList from "../components/UI/Admin/Parameters/AdminParametersList";
import AdminBallCreate from "../components/UI/Admin/Parameters/AdminBallCreate";
import AdminBallList from "../components/UI/Admin/Parameters/AdminBallList";

const Admin = () => {
    return (
        <div>
            <div style={{display:"flex", justifyContent:"space-between"}}>
                <AdminParametersList/>
                <AdminBallCreate/>
            </div>
            <AdminBallList/>
        </div>
    );
};

export default Admin;