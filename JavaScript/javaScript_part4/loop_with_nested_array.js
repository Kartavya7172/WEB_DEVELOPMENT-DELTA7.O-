let array = [["ironman","spiderman","thor"],["Superman","Wonder Woman","flash"]];
for(let i=0;i<array.length;i++)
{
    console.log(`List: #${i}`);
    for(let j=0;j<array[i].length;j++)
    {
        console.log(array[i][j]);
    }
}