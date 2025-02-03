import{j as t,B as e,r,S as a,x as s,c as n}from"./index-D5H8vtS1.js";import{B as x}from"./Button-Cv05lj8t.js";const d=({isDarkMode:o})=>t.jsxs(e,{sx:{width:"300px",height:"300px",background:o?"linear-gradient(45deg, #bb86fc, #3700b3)":"linear-gradient(45deg, #ff4081, #f50057)",borderRadius:"50%",position:"relative",display:"flex",justifyContent:"center",alignItems:"center",boxShadow:"0 4px 20px rgba(0, 0, 0, 0.1)"},children:[t.jsx(e,{sx:{position:"absolute",width:"50px",height:"50px",backgroundColor:o?"#000":"#fff",borderRadius:"50%",animation:"spin 1s linear infinite"}}),t.jsx(e,{sx:{position:"absolute",width:"25px",height:"25px",backgroundColor:o?"#000":"#fff",borderRadius:"50%",top:"60%",animation:"bounce 1.5s ease-in-out infinite"}}),t.jsx(e,{sx:{position:"absolute",width:"30px",height:"30px",backgroundColor:o?"#000":"#fff",borderRadius:"50%",bottom:"10%",animation:"bounce 1.5s ease-in-out infinite 0.3s"}}),t.jsx("style",{children:`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }

          @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-20px); }
          }
        `})]}),f=()=>{const{darkMode:o}=r.useContext(a),i=s();return t.jsxs(e,{sx:{display:"flex",justifyContent:"center",alignItems:"center",minHeight:"100vh",flexDirection:"column",textAlign:"center",padding:3},children:[t.jsx(n,{variant:"h1",sx:{fontSize:100,fontWeight:600,color:"#1976d2"},children:"404"}),t.jsx(n,{variant:"h6",sx:{marginBottom:2,color:"#666"},children:"Oops! The page you are looking for does not exist."}),t.jsx(d,{isDarkMode:o}),t.jsx(x,{variant:"contained",color:"primary",onClick:()=>i("/"),sx:{padding:"10px 20px",fontSize:16,fontWeight:"bold",borderRadius:2,transition:"all 0.3s","&:hover":{backgroundColor:"#1565c0"},marginTop:3},children:"Go Back to Home"})]})};export{f as default};
