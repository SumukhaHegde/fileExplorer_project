import { useState } from "react";
import { folderStructure } from "./folderStructure";
import FolderFormat from "./component/FolderStructureContainer/FolderFormat";
import useTraverseHook from "./component/CustomHooks/useTraverseHook";

function App() {
  const [explorer, setExplorer] = useState(folderStructure);

  const { addDataInTheFolderStructure } = useTraverseHook();

  const handleInsertNode = (folderId, itemData, isFolder) => {
    const newExplorer = addDataInTheFolderStructure(
      explorer,
      folderId,
      itemData,
      isFolder
    );
    setExplorer(newExplorer);
  };
  return (
    <div className="App">
      <FolderFormat explorer={explorer} handleInsertNode={handleInsertNode} />
    </div>
  );
}

export default App;
