const url = "https://icanhazdadjoke.com/"

async function getjokes(){
    try{
        //creating the header
        const config = {headers:{Accept:"text/plain"}};
        //sending the header
        let res = await axios.get(url,config);
        console.log(res.data);
    }catch(error){
        console.log(error);
    }
}