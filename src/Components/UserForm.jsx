import React from "react";
import { useState } from "react";

function UserForm(props) {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");
  const [error, setError] = useState(false);
  let errMessage;
  const onClickHandler = (e) => {
    e.preventDefault();
    if (userAge == "" || +userAge < 1 || isNaN(userAge)) {
      // +userAge = parseInt(userAge) aynı işi yapıyorlar
      setError(true);
      return;
    }
    props.newUser({
      name: userName,
      age: userAge,
      id: Math.random() * 100000,
    });
    setUserAge("");
    setUserName("");
    console.log(error);
    setError(false);
  };
  if (error) {
    errMessage = (
      <p className="font-medium text-red-600">
        Please check the age information!
      </p>
    );
  }
  return (
    <div className="flex justify-center py-10 ">
      <div className="rounded shadow-2xl bg-blue-200 w-full max-w-lg  px-4 sm:px-6 lg:px-8">
        <form action="" className="flex gap-2 flex-col py-4">
          <label className="font-medium text-purple-700">User Name</label>
          <input
            type="text"
            className="rounded p-1 bg-blue-50 outline-purple-500"
            value={userName}
            onChange={(event) => setUserName(event.target.value)}
          />
          <label className="font-medium text-purple-700">Age (Years)</label>
          <input
            type="text"
            className={`mb-2 rounded p-1 bg-blue-50 ${
              error ? "border-red-600" : "outline-purple-500"
            }`}
            value={userAge}
            onChange={(event) => setUserAge(event.target.value)}
          />
          <button
            className="rounded-md mb-1 p-1 font-medium text-white bg-gradient-to-r from-purple-500 to-blue-600"
            onClick={onClickHandler}
          >
            Add User
          </button>
          {error ? errMessage : ""}
        </form>
      </div>
    </div>
  );
}

export default UserForm;
