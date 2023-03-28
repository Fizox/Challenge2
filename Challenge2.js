function findMajority(arr)
{   
    let n = arr.length;
    let bool= true;
    let bool2= false;
    for (let index = 0; index < array.length; index++) {
        if ((-10)**9 <= arr[i] <= 10**9) {
            continue;
        }else{
            bool=false;
            break;
        }  
        }
    if(1 <= n <= 5*10**4 && bool){
        for(let i = 0; i < n; i++) 
        {
            let count = 0;
            for(let j = 0; j < n; j++) 
                {
                if (arr[i] === arr[j]){
                    count++;
                }
                if (count>n/2) {
                    console.log("the majority elemen is"+arr[i]);
                    bool2=false;
                    break;
                }
            }
            if (bool2) {
                break;
            }
        }
    }else{
        console.log("doesn't meet the recourment")
    }
}
  
