window.jQuery=function(arg){
     /* jQuery factory함수의 가장기본적인동작은 도큐먼트의 일부를 선택하는것이다.*/
    if(typeof arg == 'string'){
        //css selector 문자열
        let elementNodeList=document.querySelectorAll(arg);
        let jqueryWrapperObject={
            elementNodeList:elementNodeList,
            css:function(propertyName,propertyValue){
                for(let i=0;i<this.elementNodeList.length;i++){
                    this.elementNodeList[i].style.cssText+=`${propertyName}:${propertyValue}`;
                }
                return this;
            },
            text:function(textArg){
                if(textArg!=undefined){
                    //set text
                    for(let i=0;i<elementNodeList.length;i++){
                        elementNodeList[i].innerHTML=textArg;
                    }
                    return this;
                }else{
                    //get text
                    let returnText='';
                    for(let i=0;i<this.elementNodeList.length;i++){
                        returnText+=this.elementNodeList[i].innerHTML;
                    }
                    return returnText;
                }
            },

        };

        return jqueryWrapperObject;
    }else if(typeof arg == 'function'){
        /*
        함수일경우에는 인자로대입된함수를 
        window.onload이벤트에등록 
        */
       window.addEventListener('load',arg);
    }else if(typeof arg == 'object'){
        /*document,window,element*/
        let elementNodeList=[arg];
        let jqueryWrapperObject={
            elementNodeList:elementNodeList,
            css:function(propertyName,propertyValue){
                for(let i=0;i<this.elementNodeList.length;i++){
                    this.elementNodeList[i].style.cssText+=`${propertyName}:${propertyValue}`;
                }
                return this;
            },
            text:function(textArg){
                if(textArg!=undefined){
                    //set text
                    for(let i=0;i<elementNodeList.length;i++){
                        elementNodeList[i].innerHTML=textArg;
                    }
                    return this;
                }else{
                    //get text
                    let returnText='';
                    for(let i=0;i<this.elementNodeList.length;i++){
                        returnText+=this.elementNodeList[i].innerHTML;
                    }
                    return returnText;
                }
            },

        };

        return jqueryWrapperObject;

    }

}//end function

window.$=window.jQuery;

/**********jQuery global function*************/	
$.each=function(array,funcArg){
    for(let i=0;i<array.length;i++){
        funcArg(i,array[i]);
    }
}



