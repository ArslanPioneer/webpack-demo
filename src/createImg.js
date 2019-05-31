import avatar from './icon-1@2x.jpg';
function createImg (){
    
var img =new Image();
img.src=avatar;
img.classList.add('ic');

var root=document.getElementById('root');
root.append(img);
}

export default createImg;