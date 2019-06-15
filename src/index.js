function getComponent() {
    return import(/*webpackChunkName:"lodash"*/'loadsh').then(({default:_})=>{
        var element =document.createElement('div');
        element.innerHTML=_.join(['dell','jack'],'-');
        return element;
    })
}

document.addEventListener('click',()=>{
    getComponent().then(element=>{
        document.body.appendChild(element);
    })
})