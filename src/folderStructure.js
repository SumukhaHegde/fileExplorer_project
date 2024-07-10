export const folderStructure = {
  id: 1,
  folderName: "Root",
  isFolder: true,
  childerItems: [
    {
      id: 1.1,
      folderName: "public",
      isFolder: true,
      childerItems: [],
    },
    {
      id: 1.2,
      folderName: "src",
      isFolder: true,
      childerItems: [
        {
          id: 1.21,
          folderName: "App.js",
          isFolder: false,
          childerItems: [],
        },
        {
          id: 1.22,
          folderName: "index.html",
          isFolder: false,
          childerItems: [],
        },
        {
          id: 1.23,
          folderName: "index.css",
          isFolder: false,
          childerItems: [],
        },
      ],
    },
    {
      id: 1.3,
      folderName: "Package.json",
      isFolder: false,
      childerItems: [],
    },
    {
      id: 1.4,
      folderName: "PackageLock.json",
      isFolder: false,
      childerItems: [],
    },
  ],
};
