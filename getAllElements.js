export const getAllElementById = ()=>{
    const all = document.querySelectorAll("*");
    let id_elements = {};
    for(i of all){
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