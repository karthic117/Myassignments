
let element1=[1,2,3,4,6,6,8];
function duplicateElementsArray(element1)

{
  let result=[];

  for(let i=0; i<element1.length;i++)
  {
        if(!result.includes(element1[i]))
        {
        result.push(element1[i]);
  }
  }
  console.log(result);
}

duplicateElementsArray(element1);
