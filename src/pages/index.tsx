"use client";

import React from 'react';
import { useEffect, useState } from 'react';
import WithEvanderLayout from "../components/DefaultLayout.tsx"

const App=()=>{

  return (
    <div className=" m-2 p-2">
        Page Home
    </div>
  );
}

App.layout = WithEvanderLayout;
export default App;