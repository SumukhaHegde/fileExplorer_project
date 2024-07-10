import { useState } from "react";
import FolderFormat from "./FolderFormat";
import { folderStructure } from "./folderStructure";

function App() {
  const [explorer, setExplorer] = useState(folderStructure);
  return (
    <div className="App">
      <FolderFormat explorer={explorer} />
    </div>
  );
}

export default App;
