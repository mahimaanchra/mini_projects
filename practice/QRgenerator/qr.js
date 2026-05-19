const input = document.querySelector('#input');
const sizes = document.querySelector('#sizes');
const genBtn = document.querySelector('#genBtn');
const downBtn = document.querySelector('#downBtn');
const Qr = document.querySelector('.body');
genBtn.addEventListener('click' , ()=>{
    input.value.length>0? generateQrcode() : alert("please enter a text or Url")
})
downBtn.addEventListener('click' , ()=>{
    let img = document.querySelector(".body img");
    let imgsrc = img.getAttribute('src');
    if(img !==null){
       downBtn.setAttribute('href' , imgsrc) 
    }else{
        downBtn.setAttribute('href', `${document.querySelector('canvas').toDataURL()}`)
    }
})
sizes.addEventListener('change' , (e)=>{
    size = e.target.value;
})
function generateQrcode(){
    let size = sizes.value ;
    Qr.innerText = '';
    new QRCode(Qr,{
        text:input.value ,
        height : size,
        width: size,
colorLight: "#fff",
colorDark : "#000"


    })
}