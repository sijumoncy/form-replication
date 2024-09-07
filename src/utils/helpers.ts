export const findObjectByKey = (obj:any, key:string, value:any):any => {
    if(typeof obj !== 'object' || obj === null) {
        return null
    }

    if(obj.hasOwnProperty(key) && obj[key] === value) {
        return obj
    }

    if(Array.isArray(obj)) {
        for(const item of obj) {
            const result = findObjectByKey(item, key, value)
            if(result) {
                return result
            }
        }
        return null
    }

    for(const property in obj) {
        if(obj.hasOwnProperty(property)){
            const result = findObjectByKey(property, key, value)
            if(result) {
                return result
            }
        }
    }

    console.log("No Match Key-value");
    return null
    
}

