// import main from 'electron-reload';
import { remote } from 'electron';
import React from 'react';
const electron = require('electron');
const win=electron.remote.getCurrentWindow();
const BrowserView= electron.remote.BrowserView;

function createWindow() {  
  
  // const wind = new BrowserWindow({ width: 800, height: 600,modal:true,parent:win })

  const view = new BrowserView()
  win.setBrowserView(view)
  view.setBounds({ x: 100, y: 0, width: 800, height: 600 })
  view.webContents.loadURL('https://electronjs.org')
}

export default function App() {

  return (
    <>
      <h1>I am App Component!!!</h1>
      <button onClick={createWindow}>Notify</button>
      {/* <iframe src="https://www.youtube.com/embed/uXWycyeTeCs" srcDoc='<p>Hello from Iframe</p>' ></iframe> */}

      {/* <iframe src="https://www.w3schools.com" title="W3Schools Free Online Web Tutorials"></iframe> */}
      {/* {createWindow} */}
    </>
  )
  } 