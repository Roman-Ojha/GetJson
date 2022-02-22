import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import SyntaxHighlighterStyle from "./SyntaxHighlighterStyle";
import "../styles/index.css";

const index = () => {
  return (
    <>
      <div className="UpperBar_Container">
        <nav className="NavBar_Container">
          <div className="NavBar_Title_Container">
            <h1 className="NavBar_Title_get_Letter">Get</h1>
            <h1 className="NavBar_Title_J_Letter">J</h1>
            <h1 className="NavBar_Title_son_Letter">son</h1>
          </div>
        </nav>
        <div className="Header_Container">
          <div className="Header_Container_Left_part">
            <header className="Header_Title">
              <pre className="Header_Title">
                {`Free API for testing
purpose 
get{JSON}`}
              </pre>
            </header>
            <button className="Start_Button">Start</button>
          </div>
          <div className="Header_Container_Right_part">
            <div className="Header_CodeViewer_Container">
              <SyntaxHighlighter
                className={"Header_CodeViewer"}
                language="javascript"
                style={SyntaxHighlighterStyle}
                customStyle={{
                  overflowX: "hidden",
                  borderRadius: "15px",
                }}
                useInlineStyles={{ fontSize: "1px" }}
                showLineNumbers
                lineProps={{ style: { wordWrap: "break-word" } }}
                lineProps={{
                  style: {
                    wordBreak: "break-all",
                    whiteSpace: "pre-wrap",
                  },
                }}
                wrapLines={true}
              >
                {`const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
console.log(await res.json()));`}
              </SyntaxHighlighter>
            </div>
            <div className="Header_OutputViewer_and_Get_Button_Container">
              <button className="Get_Button">Get</button>
              <SyntaxHighlighter
                className={"Header_OutputViewer"}
                language="javascript"
                style={SyntaxHighlighterStyle}
                customStyle={{ overflowX: "hidden", borderRadius: "15px" }}
                useInlineStyles={{ fontSize: "1px" }}
                showLineNumbers
                lineProps={{ style: { wordWrap: "break-word" } }}
                lineProps={{
                  style: {
                    wordBreak: "break-all",
                    whiteSpace: "pre-wrap",
                  },
                }}
                wrapLines={true}
              >
                {`{

















}`}
              </SyntaxHighlighter>
            </div>
          </div>
        </div>
      </div>
      <div className="Get_PostMethod_Container">
        <div className="GetMethod_Container">
          {/* <h1 className="GetMethod_Title">Get</h1> */}
          <div className="Id_and_Get_Button_Container">
            <input type="text" placeholder="ID" />
            <button>Get</button>
          </div>
          <SyntaxHighlighter
            className={"Method_CodeViewer_Container"}
            language="javascript"
            style={SyntaxHighlighterStyle}
            customStyle={{ overflowX: "hidden", borderRadius: "15px" }}
            useInlineStyles={{ fontSize: "1px" }}
            showLineNumbers
            lineProps={{ style: { wordWrap: "break-word" } }}
            lineProps={{
              style: {
                wordBreak: "break-all",
                whiteSpace: "pre-wrap",
              },
            }}
            wrapLines={true}
          >
            {`const res = await fetch('https://jsonplaceholder.typicode.com/todos');
console.log(await res.json()));`}
          </SyntaxHighlighter>
          <SyntaxHighlighter
            className={"Method_OutputViewer_Container"}
            language="javascript"
            style={SyntaxHighlighterStyle}
            customStyle={{ overflowX: "hidden", borderRadius: "15px" }}
            useInlineStyles={{ fontSize: "1px" }}
            showLineNumbers
            lineProps={{ style: { wordWrap: "break-word" } }}
            lineProps={{
              style: {
                wordBreak: "break-all",
                whiteSpace: "pre-wrap",
              },
            }}
            wrapLines={true}
          >
            {`{
            
            
}`}
          </SyntaxHighlighter>
        </div>
        <div className="PostMethod_Container">
          {/* <h1 className="GetMethod_Title">Get</h1> */}
          <div className="InputField_Post_Button_Container">
            <div className="InputField_Container">
              <input type="text" placeholder="UserName" />
              <input type="text" placeholder="Email" />
              <input type="text" placeholder="PhoneNumber" />
              <input type="text" placeholder="PictureURL" />
            </div>
            <button>Post</button>
          </div>
          <SyntaxHighlighter
            className={"Method_CodeViewer_Container"}
            language="javascript"
            style={SyntaxHighlighterStyle}
            customStyle={{ overflowX: "hidden", borderRadius: "20px" }}
            useInlineStyles={{ fontSize: "1px" }}
            showLineNumbers
            lineProps={{ style: { wordWrap: "break-word" } }}
            lineProps={{
              style: {
                wordBreak: "break-all",
                whiteSpace: "pre-wrap",
              },
            }}
            wrapLines={true}
          >
            {`const res = await fetch('https://jsonplaceholder.typicode.com/todos');
console.log(await res.json()));`}
          </SyntaxHighlighter>
          <SyntaxHighlighter
            className={"Method_OutputViewer_Container"}
            language="javascript"
            style={SyntaxHighlighterStyle}
            customStyle={{ overflowX: "hidden", borderRadius: "20px" }}
            useInlineStyles={{ fontSize: "1px" }}
            showLineNumbers
            lineProps={{ style: { wordWrap: "break-word" } }}
            lineProps={{
              style: {
                wordBreak: "break-all",
                whiteSpace: "pre-wrap",
              },
            }}
            wrapLines={true}
          >
            {`{
  
  



            
}`}
          </SyntaxHighlighter>
        </div>
      </div>
    </>
  );
};

export default index;