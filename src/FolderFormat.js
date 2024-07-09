import React, { useState } from "react";
import { folderStructure } from "./folderStructure";

const FolderFormat = () => {
  const data = folderStructure[0];
  const [showInput, setShowInput] = useState(false);

  const handleAddFileOrFolder = () => {
    setShowInput(true);
  };

  return (
    <div
      onBlur={() => {
        setShowInput(false);
      }}
    >
      <div style={{ display: "flex" }}>
        {data.isFolder ? "📂" : "🗄"}
        <div>{data.folderName}</div>
        <button onClick={handleAddFileOrFolder}>Add file</button>
        <button onClick={handleAddFileOrFolder}>Add folder</button>
      </div>
      {showInput ? (
        <input
          onClick={(e) => {
            console.log(e);
            e.stopPropagation();
            setShowInput(true);
          }}
        ></input>
      ) : (
        ""
      )}
    </div>
  );
};

export default FolderFormat;
