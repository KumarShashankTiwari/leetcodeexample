import './App.css';

function App() {

//  const onSubmit = () =>{

//   // console.log("onSubmit");
//  }

var button=document?.querySelector('button');

 var div=document?.querySelector('div');

 var body=document?.querySelector('body');

 button?.addEventListener('click',(event)=>{
  event.stopImmediatePropagation();
  console.log("I am cllicking button");
 });
 button?.addEventListener('click',(event)=>{
  event.stopPropagation();
  console.log("I am cllicking button 1");
 });

  div?.addEventListener('click',()=>{
  console.log("I am cllicking div");
 });

body?.addEventListener('click',()=>{
  console.log("I am cllicking body");
 });


 
  return (
    <div className="App">
    
   
     <button > On click</button>

     </div>
  );
}

export default App;
