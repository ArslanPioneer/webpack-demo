console.log('123')
import avatar from './icon-1@2x.jpg';
import style from './index.scss';
import './word.scss';
import createImg from './createImg';

createImg();
var img =new Image();
img.src=avatar;
img.classList.add(style.icon);

var root=document.getElementById('root');
var word =document.getElementById('word')
word.innerHTML='<div class="iconfont icon-shouye"></div>'
root.append(img);
