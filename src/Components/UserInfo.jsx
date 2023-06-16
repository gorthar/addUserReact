import React from "react";
import User from "./User";

function UserInfo({ users, deleteUser }) {
  const delUser = (user) => {
    deleteUser(user);
  };
  if (users.length == 0) {
    return (
      <div className="flex justify-center py-10 ">
        <div className="rounded shadow-2xl bg-blue-200 w-full max-w-lg  px-4 sm:px-6 lg:px-8 flex gap-2 flex-col py-4">
          <p className="text-center font-medium text-purple-600">
            Please enter a goal
          </p>
        </div>
      </div>
    );
  }
  return (
    <div className="flex justify-center py-10 ">
      <div className="rounded shadow-2xl bg-blue-200 w-full max-w-lg  px-4 sm:px-6 lg:px-8 flex gap-2 flex-col py-4">
        {users.map((user, index) => (
          <User data={user} key={index} deleteUser={delUser} />
        ))}
      </div>
    </div>
  );
}

export default UserInfo;
