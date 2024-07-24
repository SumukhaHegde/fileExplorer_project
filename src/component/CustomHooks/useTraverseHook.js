const useTraverseHook = () => {
  function addDataInTheFolderStructure(
    originalFileStructure,
    folderId,
    dataToAdd,
    isFolder
  ) {
    if (originalFileStructure.id === folderId) {
      const newAddedChild = {
        id: Math.floor(Math.random() * 1000),
        folderName: dataToAdd,
        isFolder: isFolder,
        childerItems: [],
      };

      return {
        ...originalFileStructure,
        childerItems: [newAddedChild, ...originalFileStructure.childerItems],
      };
    }

    const newFileStructure = originalFileStructure.childerItems.map(
      (childItem) =>
        addDataInTheFolderStructure(childItem, folderId, dataToAdd, isFolder)
    );

    return { ...originalFileStructure, childerItems: newFileStructure };
  }

  function deleteDataInFolderStructure(originalFolderStructure, folderId) {
    const newStructure = originalFolderStructure.childerItems.filter(
      (childItem) => childItem.id !== folderId
    );

    originalFolderStructure.childerItems = newStructure;
    //return originalFolderStructure;
    deleteDataInFolderStructure(originalFolderStructure.childerItems, folderId);

    return originalFolderStructure;
  }

  return { addDataInTheFolderStructure, deleteDataInFolderStructure };
};

export default useTraverseHook;
