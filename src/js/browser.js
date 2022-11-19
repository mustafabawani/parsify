// import DownloadIcon from '@mui/icons-material/Download';
// import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import React, { useState,useRef,useEffect } from 'react'
import Browser, { Safari } from 'react-browser-ui'
import styled from 'styled-components'
const electron = require('electron');
const win=electron.remote.getCurrentWindow();
const BrowserView= electron.remote.BrowserView;
const { Tab, Divider, AddButton } = Safari;
const Container=styled.div`
    width:100%; 
    height: 537px;
    display:flex;
    flex-direction: column;
`
function createWindow() {  
  const view = new BrowserView()
  console.log("IN")
  win.setBrowserView(view)
//   const wb=view.webContents.executeJavaScript("document.getElementById(broswserContainer)");
  view.setBounds({ x: 383, y: 96, width: 1215, height: 550 })
  view.setAutoResize({width : true,height:true,horizontal:true,vertical:true})
  view.webContents.loadURL('https://electronjs.org')
}
const Nav=styled.input`
    
    background: #d3d3d3;
    color: #ffffffad;
    width:97%
`
const TabContainer=styled.div`
padding:0
display:flex;
flex-direction: column;
`
const Navcontainer=styled.div`
    display:flex;
    flex-direction: row;
`


export default function WorkingBrowser ({dimensionsOFbrowser}) {

  const tabEnd = (
    <React.Fragment>
      <Divider />
      <AddButton />
    </React.Fragment>
  )
  return (
    <Container>            

     <TabContainer> 
      <Browser
        type={'safari'}
        showHeader={false}
        activeTabKey={'green'}
        tabEnd={tabEnd}>
        {console.log(dimensionsOFbrowser.width,dimensionsOFbrowser.height)}
        <Tab key={'green'} imageUrl={''} imageAlt={'green tab image'} title={'Green'}>
          {/* <div style={{ backgroundColor: 'green', height: '100%', width: '100%', opacity: 0.9, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <h1 style={{ color: 'white', margin: 0 }}>{'Your component here'}</h1>
          </div> */}
        </Tab>
        <Tab key={'blue'} imageUrl={''} imageAlt={'blue tab image'} title={'Blue'}>
          {/* <div style={{ backgroundColor: 'green', height: '100%', width: '100%', opacity: 0.9, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <h1 style={{ color: 'white', margin: 0 }}>{'Your component here'}</h1>
          </div> */}
        </Tab>
        
        
        
      </Browser>
      </TabContainer>
      <Navcontainer>
            {/* <ArrowBackIcon/> */}
              <Nav placeholder="type a URL" 
            //   value={url} onChange={(e)=> setUrl(e.target.value)} 
              onKeyDown={(e)=> {
                if(e.key==="Enter"){
                    console.log("HERE")
                    createWindow()
                        }
                }
                }
              autoFocus/>

            {/* <DownloadIcon/> */}
        </Navcontainer>
      </Container>
  )
}