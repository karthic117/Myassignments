
let num1=[1,2,3,4,5,6,6]
let num2 =[2,3,,7,8,6]
function arrayIntersection()

{
    let result=[];

    for(let i=0;i<num1.length;i++)
    {
      for(let j=0; j<num2.length;j++)
      {
           if(num1[i]===num2[j])
           {
              result.push(num1[i]);
              break;
           }
      }

      

    }
    console.log(result);
}

arrayIntersection(num1,num2);