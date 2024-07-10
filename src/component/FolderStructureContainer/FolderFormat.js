import React, { useState } from "react";
import "./folderFormat.css";

const FolderFormat = ({ explorer }) => {
  const [showRootChildern, setShowRootChildern] = useState(false);
  const [showInput, setShowInput] = useState({
    visible: false,
    isFolder: null,
  });

  const handleAddFileOrFolder = (isFolder) => {
    setShowRootChildern(true);
    setShowInput({ ...showInput, visible: true, isFolder: isFolder });
  };

  const onFileOrFolderAdd = (e) => {
    if (e.key === "Enter" && e.target.value) {
      setShowInput({ ...showInput, visible: false });
    }
  };

  if (explorer.isFolder) {
    return (
      <div>
        <div className="folder-container">
          <div
            onClick={() => {
              setShowRootChildern(!showRootChildern);
            }}
          >
            <span>📂 {explorer.folderName}</span>
          </div>
          <div style={{ display: "flex", gap: "5px" }}>
            <button onClick={() => handleAddFileOrFolder(true)}>
              + folder
            </button>
            <button onClick={() => handleAddFileOrFolder(false)}>+ file</button>
          </div>
        </div>
        {showInput.visible && (
          <div className="input-container">
            <span>{showInput.isFolder ? "📂" : "📰"}</span>
            <input
              autoFocus
              type="text"
              onKeyDown={onFileOrFolderAdd}
              onBlur={() => setShowInput({ ...showInput, visible: false })}
            ></input>
          </div>
        )}
        <div
          style={{
            display: showRootChildern ? "block" : "none",
            marginLeft: "25px",
          }}
        >
          {explorer.childerItems.map((exp) => {
            return <FolderFormat explorer={exp} />;
          })}
        </div>
      </div>
    );
  } else {
    return <span className="file-container">📰{explorer.folderName}</span>;
  }
};

export default FolderFormat;
