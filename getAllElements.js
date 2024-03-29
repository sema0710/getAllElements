export const getAllElementById = ()=>{
    const all = document.querySelectorAll("*");
    let id_elements = {};
    for(let i of all){
        let id = i.id;
        if(id !== ""){
            id_elements[id] = i;
        }
    }
    return id_elements;
}

export const getAllElementByClass = ()=>{
    let class_elements = {};
    const all = document.querySelectorAll("*");
    for(let i of all){
        let Class = i.classList;
        if(Class.value !== ""){
            for(let j of Class){
                if(class_elements[j] === undefined){
                    class_elements[j] = [];
                }
                class_elements[j].push(i);
            }
        }   
    }
    return class_elements;
}

export const getAllElementByTagName = ()=>{
    let tag_elements = {};
    const all = document.querySelectorAll("*");
    for(let i of all){
        const tagName = i.tagName;
        if(!tag_elements[tagName]){
            tag_elements[tagName] = [];
        }
        tag_elements[tagName].push(i);
    }
    return tag_elements;
}