import React from "react";
import MyProfileIcon from './My-Profile-Icon.png';

function MyProfile () {

    const currentUser = JSON.parse(localStorage.getItem('logInUser'));
    const firstName=currentUser[currentUser.length-1].firstname;
    const lastName=currentUser[currentUser.length-1].lastname;
    const email=currentUser[currentUser.length-1].email;
    const department='Finance';
    const number='09123456789';

    return (
    <div>
        <div className="Profile-Info">
        <div><img className="DBEicon" src={MyProfileIcon} alt='ProfileIcon'/><br/><span className='profilename'>{firstName} {Array.from(lastName)[0]}.</span></div>
        </div>
        <div><br/></div>
        <div className="profile-geninfo-container">
            <div className="profile-desc">
                <section>Name: </section>
                <section>Email: </section>
                <section>Team:</section>
                <section>Number: </section>
            </div>
            <div className="profile-geninfo">
                <section>{firstName} {lastName}</section>
                <section>{email}</section>
                <section>{department}</section>
                <section>{number}</section>
            </div>
        </div>
        <div className="td-container">
        <div className="todoList-container">
        <div id="todo-title"><p>DELIVERABLES</p></div>
            <div className="todo-input-container">
                <input type="text" id="todo-input" placeholder="Add new task" autocomplete="off"/>
                <div className="todobtn-container"><input type="submit" className="todo-btn" value='+'/></div>
            </div>
        </div>
        </div>  
    </div>
    );
}

export default MyProfile;