const post={
  username:"@Kartavya_Tonpe",
  content:"This is my #firstpost",
  likes:150,
  reposts:5,
  tags:["@apnacollege","@delta"]
};

console.log(post.tags);
console.log(post["content"]);

let name = "username";
console.log(post[name]);
//Gives undefined
console.log(post.name);