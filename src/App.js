import { useEffect, useState } from "react";
import { folderStructure } from "./folderStructure";
import FolderFormat from "./component/FolderStructureContainer/FolderFormat";
import useTraverseHook from "./component/CustomHooks/useTraverseHook";

function App() {
  const [explorer, setExplorer] = useState(folderStructure);

  const { addDataInTheFolderStructure, deleteDataInFolderStructure } =
    useTraverseHook();

  const handleInsertNode = (folderId, itemData, isFolder) => {
    const newExplorer = addDataInTheFolderStructure(
      folderId,
      itemData,
      isFolder
    );
    //setExplorer(newExplorer);
  };

  const handleDeleteNode = (folderId) => {
    const newExplorer = deleteDataInFolderStructure(explorer, folderId);
    setExplorer(newExplorer);
  };

  // useEffect(() => {
  //   setDupExplorer(explorer);
  // }, [explorer]);

  return (
    <div className="App">
      <FolderFormat
        explorer={explorer}
        handleInsertNode={handleInsertNode}
        handleDeleteNode={handleDeleteNode}
      />
    </div>
  );
}

export default App;
