import React, { useState } from "react";

const Setting = () => {
  const [state, setState] = useState();
  const handleChange = async () => {
    console.log("调用 readFromClipboard");
    try {
      const clipboardContent =
        await window.electron.clipboard.readFromClipboard();
      setState(clipboardContent);
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <div>
      <h1>{state}</h1>
      <button onClick={handleChange}>获取剪贴板内容</button>
    </div>
  );
};

export default Setting;
