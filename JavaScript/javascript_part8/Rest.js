function sum(...args)
{
    for(let i=0;i<args.length;i++)
    {
       console.log(`you gave is:${args[i]}`);
    }
}

function mini(){

    console.log(arguments);
}

function sum1(...args)
{
    return args.reduce( (res,el) => res+el );
}

function min(...args){
    let mini1 = args.reduce( (res,el)=>{
        if(el<res)
        {
            return el;
        }else{
            return res;
        }
    })
    return mini1;
}