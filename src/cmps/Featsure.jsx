import React, { useEffect, useState } from 'react';

export default function Featsure({title,text}) {



  return (
    <div className="featsure">
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  )
}

