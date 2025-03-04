import React, { useState } from "react";
import "./folderFormat.css";

const FolderFormat = ({ explorer, handleInsertNode, handleDeleteNode }) => {
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
      handleInsertNode(explorer.id, e.target.value, showInput.isFolder);
      setShowInput({ ...showInput, visible: false });
    }
  };

  const handleDelete = (id) => {
    console.log("delete");
    handleDeleteNode(id);
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
            <span style={{ cursor: "pointer" }}>📂 {explorer.folderName}</span>
          </div>
          <div style={{ display: "flex", gap: "5px" }}>
            <button onClick={() => handleAddFileOrFolder(true)}>
              + folder
            </button>
            <button onClick={() => handleAddFileOrFolder(false)}>+ file</button>
            <button
              onClick={() => {
                handleDelete(explorer.id);
              }}
            >
              Delete
            </button>
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
            return (
              <FolderFormat
                key={exp.id}
                explorer={exp}
                handleInsertNode={handleInsertNode}
                handleDeleteNode={handleDeleteNode}
              />
            );
          })}
        </div>
      </div>
    );
  } else {
    return <span className="file-container">📰{explorer.folderName}</span>;
  }
};

export default FolderFormat;
