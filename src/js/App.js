import React from 'react'
import { useState,useRef,useEffect } from 'react';
import WorkingBrowser from './browser'
import styled from 'styled-components'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import HomeIcon from '@mui/icons-material/Home';


const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Container = styled.div`
  background: pink;
  width: 100%;
  height:800px;
  display:flex;
  flex-direction: row;

`;
const SqlContainer= styled.div`
  width:25%;
  height:800px;
  padding:0px;
  background:grey;
`;


const BrowserContainer= styled.div`
  width:100%;
  padding:0px;
  height:600px;
  background:white;
`;

const ExcelContainer= styled.div`
  width:100%;
  padding:0px;
  height:200px;
  background:black;
`;

const TitleContainer=styled.div`
    display:flex;
    flex-direction:row;
    
`
const UrlContainer=styled.div`
    display:flex;
    flex-direction:column;
    
`

const Text1=styled.h2`
    
`
const InputText=styled.input`
    background:#d3d3d3;
    height:20px;
`

const AnotherContainer = styled.div`
  width:80%;
  display:flex;
  flex-direction:column;
  height:1000px;
`;

function App (props) {  
  const [dimensionsOFbrowser, setDimesionsOFbrowser] = useState({ width: 0, height: 0 });
  const refContainer=useRef()
  const [url,setUrl]= useState(" ")
  useEffect(()=>{
    if(refContainer.current){
        setDimesionsOFbrowser({
            width: refContainer.current.offsetWidth,
            height:refContainer.current.offsetHeight,
        })
    }
  },[]);
  return(
  <Container>
    <SqlContainer>
      <TitleContainer>
        <ArrowBackIcon sx={{ paddingTop: 3 }}/>
        <HomeIcon sx={{ paddingTop: 3,paddingLeft:1, paddingRight:2}}/>
        <Text1 >Untitled Project</Text1>
      </TitleContainer>
      <UrlContainer>
        <span>Enter a website</span>
        <InputText placeholder="www.google.com"></InputText>
      </UrlContainer>
    </SqlContainer>
    <AnotherContainer>
      <BrowserContainer ref={refContainer}>
      {console.log(dimensionsOFbrowser.width,dimensionsOFbrowser.height)}
            <WorkingBrowser dimensionsOFbrowser={{width: dimensionsOFbrowser.width,height:dimensionsOFbrowser.height}}/>      
      </BrowserContainer>
      <ExcelContainer>
      </ExcelContainer>
    </AnotherContainer>
  </Container>
  )
};
export default App;