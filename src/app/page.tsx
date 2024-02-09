"use client";

import { setChonkyDefaults } from 'chonky';
import { ChonkyIconFA } from 'chonky-icon-fontawesome';
// Somewhere in your `index.ts`:
setChonkyDefaults({ iconComponent: ChonkyIconFA });
import { FullFileBrowser } from 'chonky';

export default function MyFileBrowser () {
    const files = [
    {
      "id": "qwerty123456",
      "name": "Chonky Demo",
      "isDir": true,
      "childrenIds": [
        "a9fd7c8a04db",
      ],
      "childrenCount": 1
    },
    {
      "id": "a9fd7c8a04db",
      "name": "15 nested folders",
      "isDir": true,
      "modDate": "2020-06-27T13:32:07.253Z",
      "childrenIds": [
        "e3bcade90390"
      ],
      "childrenCount": 1,
      "parentId": "qwerty123456"
    },
    {
      "id": "e3bcade90390",
      "name": "Level 1",
      "isDir": true,
      "modDate": "2020-06-27T13:32:10.805Z",
      "parentId": "a9fd7c8a04db",
    },
        {
            id: 'mcd',
            name: 'chonky-sphere-v2.png',
            thumbnailUrl: 'https://chonky.io/chonky-sphere-v2.png',
        },
    ];

    const folderChain = [
      { id: 'qwerty123456', name: 'Chonky Demo', isDir: true },
      { id: 'a9fd7c8a04db', name: '15 nested folders', isDir: true },
    ];
    return (
        <div style={{ height: 300 }}>
            <FullFileBrowser files={files} folderChain={folderChain} />
        </div>
    );
};


