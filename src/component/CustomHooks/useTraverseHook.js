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
  }

  return { addDataInTheFolderStructure };
};

export default useTraverseHook;
