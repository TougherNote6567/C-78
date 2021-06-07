var imagesarray=["https://i.postimg.cc/MKdhy06Z/family.jpg","https://i.postimg.cc/L6HcYQM0/grand-father.png","Indian Grandma.jpg","https://i.postimg.cc/wjMnFtMX/father.jpg","https://i.postimg.cc/bw5W5zSK/mother.jpg","https://i.postimg.cc/5ymDKL83/bro.jpg","https://i.postimg.cc/JnL6wtrd/sister.jpg"];
var namesarray=["My Ancestory Book","Satyanarayana Koya","Leela Kumari Koya","Venkata Mahesh Koya","Jahnvai Kusuma Akkineni","Gaurav Ram Koya", "Tanvi Priya Koya"];
var imagecount=0;
function next(){
   if(imagecount==7){
      imagecount=0;
   }
   document.getElementById("Parivaar").src=imagesarray[imagecount];
   document.getElementById("Naam").innerHTML=namesarray[imagecount];
   imagecount++;
}
function prev(){
   if(imagecount==0){
      imagecount=7;
   }
   --imagecount;
   document.getElementById("Parivaar").src=imagesarray[imagecount];
   document.getElementById("Naam").innerHTML=namesarray[imagecount];
}