
function Task1(){

const customStyle={
    color: " "
  }
  let greet;
    const time=new Date().getHours ()
    if (time >= 0 && time < 12){
      greet="Good Morning";
      customStyle.color='red';
      <img src=" https://marketplace.canva.com/EAFKtT9BcT0/1/0/1600w/canva-pink-colorful-photo-good-morning-desktop-wallpaper-aU5XOBmjrRs.jpg " alt="content" height="200px" width="200px" />
    }
   else if(time >= 12 && time < 18){
      greet="Good Afternoon"
      customStyle.color='green'
    }
    else if (time >= 18 && time < 24){
      greet="Good Evening"
      customStyle.color='blue'
    }
  

    document.write(greet);
}


export default Task1;
