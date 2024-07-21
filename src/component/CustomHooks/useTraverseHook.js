const useTraverseHook = () => {
  function addDataInTheFolderStructure(
    originalFileStructure,
    folderId,
    dataToAdd,
    isFolder
  ) {
    if (originalFileStructure.id === folderId) {
      originalFileStructure.childerItems.unshift({
        id: Math.floor(Math.random() * 1000),
        folderName: dataToAdd,
        isFolder: isFolder,
        childerItems: [],
      });
      return originalFileStructure;
    }

    originalFileStructure.childerItems.map((childItem) =>
      addDataInTheFolderStructure(childItem, folderId, dataToAdd, isFolder)
    );

    return originalFileStructure;
  }

  function deleteDataInFolderStructure(originalFolderStructure, folderId) {
    const newStructure = originalFolderStructure.childerItems.filter(
      (childItem) => childItem.id !== folderId
    );

    originalFolderStructure.childerItems = newStructure;
    return originalFolderStructure;
    //deleteDataInFolderStructure(originalFolderStructure.childerItems, folderId);

    //return originalFolderStructure;
  }

  return { addDataInTheFolderStructure, deleteDataInFolderStructure };
};

export default useTraverseHook;
