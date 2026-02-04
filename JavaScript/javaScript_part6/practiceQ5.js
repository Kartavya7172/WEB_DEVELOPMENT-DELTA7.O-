function sum(n){
    let total=0;
    for(let i=1;i<=n;i++)
    {
        total = total+i;
    }
    return total;
}
let usernum = prompt("Enter the number");
let ans = sum(usernum);
console.log(ans);