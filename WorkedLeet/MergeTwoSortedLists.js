// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]
// Example 2:

// Input: list1 = [], list2 = []
// Output: []
// Example 3:

// Input: list1 = [], list2 = [0]
// Output: [0]

 const list1 = [1,2,4], list2 = [1,3,4]
// const list1 = [], list2 = []

// 1 ji,3 ji,4 ji 5
// 2 i--1 ji,3 ji,4 ji
// 4 i--1 ji,3 ji,4 ji
//1 1 2 3 4 4
 const  MergeTwoSortedLists = (list1, list2) => {
   const temparr=[];
    for(i=0; i<list1.length;i++){
      for(ji=0; ji<list2.length;ji++){
         console.log("outside",list1[i],list2[ji]);
         if(list1[i]<=list2[ji]){
            console.log("inside",list1[i],list2[ji]);  
            // temparr.push(list1[i]);
            temparr.push(list2[ji]); 
            }
            else{
             temparr.push(list1[i]); 
            }
         }



      }
      return temparr;
   };
const answer = MergeTwoSortedLists(list1,list2);
console.log(answer);
