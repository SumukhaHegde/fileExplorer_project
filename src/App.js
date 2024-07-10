import { useState } from "react";
import { folderStructure } from "./folderStructure";
import FolderFormat from "./component/FolderStructureContainer/FolderFormat";

function App() {
  const [explorer, setExplorer] = useState(folderStructure);
  return (
    <div className="App">
      <FolderFormat explorer={explorer} />
    </div>
  );
}

export default App;
