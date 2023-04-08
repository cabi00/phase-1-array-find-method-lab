function superbowlWin(broncos){
    return broncos.find(object =>object.result === "W") ? broncos.find(object => object.result === "W").year : undefined;
    
}
    /*
 return result
result.year : undefined
*/