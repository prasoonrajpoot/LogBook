import React from "react";
import "./deleteEmployee.scss";
import axios from "axios";

function DeleteButton(props){

    var data = props.props;

    // console.log(props);

    const deleteClicked = async (e) => {
        e.preventDefault();
        var toSend = {email : data.idSelected};
        var response = await axios.post("/deleteEmployee", toSend);
        console.log(response);
        if(response.data == "Deleted"){
            alert("Employee Deleted Succesfully");
            data.setDeleteShow(false);
        }
    }

    return (
        <div>
            <div className="container">
                <div className="data">
                    <h3>Are you absolutely sure?</h3>
                    <p className="b1">This action cannot be undone. This will permanently delete the Employee. 
                        All the data regarding the employee such as name, contact details, department, etc. will be deleted.</p>
                </div>
                <div className="buttons">
                    <button onClick={(e) => {
                        e.preventDefault();
                        console.log("clicked")
                        data.setDeleteShow(false);
                    }}
                    id="btn1" type="button">No, Dont Delete</button>
                    <button  onClick = {deleteClicked}
                    id="btn2" type="button">Yes, Delete the Employee</button>
                </div>
            </div> 
        </div>
    )
}

export default DeleteButton;