import React from 'react'

export default function InforUser() {
    const ItemOnline = JSON.parse(localStorage.getItem("userOnl") || "{}");
    console.log(ItemOnline);
    
  return (
    <div>
      <p>name : {ItemOnline.name}</p>
    </div>
  )
}
