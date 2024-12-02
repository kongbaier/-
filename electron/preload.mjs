import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld("electron", {
  clipboard: {
    readFromClipboard: () => {
      console.log("调用 readFromClipboard");
      return ipcRenderer.invoke("clipboard-read-content");
    },
  },
});
