const useTraverseHook = () => {
  function addDataInTheFolderStructure(
    originalFileStructure,
    folderId,
    dataToAdd,
    isFolder
  ) {
    debugger;
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

  return { addDataInTheFolderStructure };
};

export default useTraverseHook;
