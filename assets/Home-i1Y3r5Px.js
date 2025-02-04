import{u as y,g as b,r as f,a as j,R as k,T as v,b as w,j as e,B as u,c as s,N as g}from"./index-DleGqGdn.js";function T(i,n,t,r,h){const[o,m]=f.useState(()=>h&&t?t(i).matches:r?r(i).matches:n);return j(()=>{if(!t)return;const a=t(i),c=()=>{m(a.matches)};return c(),a.addEventListener("change",c),()=>{a.removeEventListener("change",c)}},[i,t]),o}const B={...k},x=B.useSyncExternalStore;function E(i,n,t,r,h){const o=f.useCallback(()=>n,[n]),m=f.useMemo(()=>{if(h&&t)return()=>t(i).matches;if(r!==null){const{matches:l}=r(i);return()=>l}return o},[o,i,r,h,t]),[a,c]=f.useMemo(()=>{if(t===null)return[o,()=>()=>{}];const l=t(i);return[()=>l.matches,d=>(l.addEventListener("change",d),()=>{l.removeEventListener("change",d)})]},[o,t,i]);return x(c,a,m)}function S(i={}){const{themeId:n}=i;return function(r,h={}){let o=y();o&&n&&(o=o[n]||o);const m=typeof window<"u"&&typeof window.matchMedia<"u",{defaultMatches:a=!1,matchMedia:c=m?window.matchMedia:null,ssrMatchMedia:p=null,noSsr:l=!1}=b({name:"MuiUseMediaQuery",props:h,theme:o});let d=typeof r=="function"?r(o):r;return d=d.replace(/^@media( ?)/m,""),(x!==void 0?E:T)(d,a,c,p,l)}}const L=S({themeId:v}),W="/assets/animation-DcK1cU_1.gif",C=()=>{const i=w(),n=i.palette.mode==="dark",t=L(i.breakpoints.up("md"));return e.jsxs("div",{style:{backgroundColor:n?"#121212":"#fafafa",width:"100%",minHeight:"100vh"},children:[e.jsxs(u,{display:"flex",flexDirection:t?"row":"column",alignItems:"center",justifyContent:"center",p:4,sx:{height:"100vh",background:n?"linear-gradient(76deg, #0a192f 0%, #1e3a8a 50%, #2563eb 100%)":"linear-gradient(76deg, #c2e7ff 0%, #d0c3ff 50%, #a8c7ff 100%)",color:n?"#fff":"#000",paddingLeft:{xs:"16px",sm:"32px",md:"64px"},paddingRight:{xs:"16px",sm:"32px",md:"64px"}},children:[e.jsxs(u,{flex:1,sx:{marginBottom:t?0:4,textAlign:"left"},children:[e.jsx(s,{variant:"h1",sx:{fontWeight:"bold",marginBottom:"20px"},children:"Welcome to My Portfolio"}),e.jsx(s,{variant:"h6",sx:{marginBottom:"40px"},children:"Hi, I'm Rakshit, a passionate web developer exploring the exciting world of blockchain and decentralized technologies. On this portfolio, you can discover my latest projects, learn about my skills, and dive into some of the tools I've built."}),e.jsxs(s,{variant:"body1",sx:{marginBottom:"20px"},children:["If you'd like to know more about me or my work, feel free to check out my ",e.jsx(g,{to:"/about",style:{color:"inherit",fontWeight:"bold"},children:"About"})," section or explore my ",e.jsx(g,{to:"/projects",style:{color:"inherit",fontWeight:"bold"},children:"Projects"}),"."]})]}),e.jsx(u,{flex:1,display:"flex",justifyContent:"center",sx:{maxWidth:t?"60%":"80%"},children:e.jsx(u,{component:"img",src:W,sx:{maxWidth:"100%",maxHeight:"100%",objectFit:"contain"}})})]}),e.jsxs(u,{sx:{maxWidth:"90%",mx:"auto",mt:4},children:[e.jsx(s,{variant:"h4",sx:{color:n?"#fff":"#333"},children:"Unlock the Power of Blockchain Technology"}),e.jsx(s,{variant:"body1",sx:{color:n?"#ccc":"#555",marginTop:"20px"},children:"Blockchain is not just the backbone of cryptocurrencies like Bitcoin and Ethereum—it’s a powerful, decentralized technology that is reshaping industries across the globe."}),e.jsx(s,{variant:"h6",style:{color:n?"#fff":"#333",marginTop:"20px"},children:"How Blockchain Works"}),e.jsx(s,{variant:"body1",style:{color:n?"#ccc":"#555",marginTop:"10px"},children:'At its core, blockchain is a distributed ledger that records transactions across many computers in such a way that the registered transactions cannot be altered retroactively. This is achieved through cryptographic hashing and consensus mechanisms. Each "block" in the chain contains a list of transactions, and every new block is linked to the previous one, making tampering nearly impossible.'}),e.jsx(s,{variant:"h6",style:{color:n?"#fff":"#333",marginTop:"20px"},children:"Key Benefits of Blockchain"}),e.jsx(s,{variant:"body1",style:{color:n?"#ccc":"#555",marginTop:"10px"},children:e.jsxs("ul",{style:{marginLeft:"20px"},children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Decentralization:"})," Blockchain eliminates the need for a central authority, reducing the risk of fraud and censorship."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Security:"})," Advanced cryptographic techniques ensure that data on the blockchain is secure and immutable."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Transparency:"})," All transactions are visible to users within the network, promoting trust and accountability."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Efficiency:"})," Smart contracts and blockchain-based automation can streamline processes, reducing time and cost."]})]})}),e.jsx(s,{variant:"h6",style:{color:n?"#fff":"#333",marginTop:"20px"},children:"Applications of Blockchain Technology"}),e.jsx(s,{variant:"body1",style:{color:n?"#ccc":"#555",marginTop:"10px"},children:"Blockchain’s potential extends far beyond cryptocurrency. Here are some of its most promising applications:"}),e.jsxs("ul",{style:{marginLeft:"20px",color:n?"#ccc":"#555"},children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Finance:"})," Blockchain enables secure, real-time cross-border payments and smart contracts, reducing the reliance on intermediaries."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Healthcare:"})," It can help securely store and share patient data, ensuring privacy while enhancing collaboration across medical systems."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Supply Chain:"})," Blockchain provides transparency and traceability of products, ensuring they meet quality standards and preventing fraud."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Voting Systems:"})," Blockchain can be used to create tamper-proof, transparent voting systems, increasing trust in elections."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Digital Identity:"})," Blockchain offers a secure way for individuals to manage and control their online identities, reducing the risk of data breaches."]})]}),e.jsx(s,{variant:"h6",style:{color:n?"#fff":"#333",marginTop:"20px"},children:"Challenges and Considerations"}),e.jsx(s,{variant:"body1",style:{color:n?"#ccc":"#555",marginTop:"10px"},children:"While blockchain technology holds immense promise, it also faces challenges:"}),e.jsxs("ul",{style:{marginLeft:"20px",color:n?"#ccc":"#555"},children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Scalability:"})," As blockchain networks grow, ensuring fast and efficient processing of transactions can be difficult."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Energy Consumption:"})," Some blockchain networks (like Bitcoin) require significant energy, raising environmental concerns."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Regulatory Uncertainty:"})," Governments and regulatory bodies are still determining how to handle blockchain applications, especially in finance and healthcare."]})]}),e.jsx(s,{variant:"h6",style:{color:n?"#fff":"#333",marginTop:"20px"},children:"The Future of Blockchain"}),e.jsx(s,{variant:"body1",style:{color:n?"#ccc":"#555",marginTop:"10px"},children:"The future of blockchain technology looks incredibly promising. With advancements in scalability and energy efficiency, blockchain has the potential to revolutionize industries from finance and healthcare to governance and beyond. As the technology matures, we may see more widespread adoption of blockchain-powered solutions across the globe."})]})]})};export{C as default};
