import React from 'react'
import { useEffect, useState } from 'react';

export default function Dashboard() {

  const [loginUserName, setLoginUserName] = useState("");

  useEffect(() => {
    const userInfo = localStorage.getItem("user-info");
    console.log(userInfo, "user");
      if (userInfo) {
        console.log(JSON.parse(userInfo), "user");
        setLoginUserName(JSON.parse(userInfo).fullName)
      }
    }, [])
  return (
    <div>
        <h1 className=" text-center p-28 m-28 ">Welcome {loginUserName}</h1>
    </div>
  )
}
