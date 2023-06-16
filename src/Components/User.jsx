import React from "react";

function User({ data, deleteUser }) {
  const delUser = () => {
    deleteUser(data);
  };
  return (
    <div>
      <div
        className="m-1 border-solid border-2 border-purple-500 rounded cursor-pointer"
        onClick={delUser}
      >
        <p className="text-center font-medium text-blue-700">
          {data.name}, {data.age}
        </p>
      </div>
    </div>
  );
}

export default User;
