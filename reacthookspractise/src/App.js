
import DebouncingBasic from "./Debouncing/Method1/DebouncingBasic";
import Debouncingmain from "./Debouncing/Method2/Debouncingmain";
import  LodashDebounce from "./Debouncing/Method4/LodashDebounce";
import  SearchWithDebounceCustomHook from "./Debouncing/Method3/SearchWithDebounceCustomHook";

import UseCallBack from "./UseCallBack";
import UseMemoHook from "./UseMemoHook";
import UsestateLearn from "./UsestateLearn";

function App() {
  return (
    <div className="App"> 
{/*  <UsestateLearn/> */}
  {/*  <UseCallBack/>  */}
  {/*  <UseMemoHook/> */}
  <SearchWithDebounceCustomHook/>
  {/* -------   
  <DebouncingBasic/>  
<Debouncingmain/>

 <LodashDebounce/>
*/}




    </div>
  );
}

export default App;
