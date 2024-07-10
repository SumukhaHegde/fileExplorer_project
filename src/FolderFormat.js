import React, { useState } from "react";

const FolderFormat = ({ explorer }) => {
  const [showRootChildern, setShowRootChildern] = useState(false);

  const handleAddFileOrFolder = () => {
    setShowRootChildern(true);
  };

  if (explorer.isFolder) {
    return (
      <div>
        <div style={{ display: "flex" }}>
          <div
            onClick={() => {
              setShowRootChildern(!showRootChildern);
            }}
          >
            📂 {explorer.folderName}
          </div>
          {/* <button onClick={handleAddFileOrFolder}>Add file</button>
        <button onClick={handleAddFileOrFolder}>Add folder</button> */}
        </div>
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
    return (
      <span style={{ display: "flex", flexDirection: "column" }}>
        📰{explorer.folderName}
      </span>
    );
  }
};

export default FolderFormat;
