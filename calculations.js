function convertToKg(lbs){
    var kgs = lbs * .45;
    return kgs.toFixed(1);
}

function getMaleMultiple(kg){
    var data = getMaleFactors();
    for(i = 0; i < data.length; i++) {
        if(data[i].key == kg) {
            return data[i].mult;
        }
    }
    return 1;
}

function getFemaleMultiple(kg){
    var data = getFemaleFactors();
    for(i = 0; i < data.length; i++) {
        if(data[i].key == kg) {
            return data[i].mult;
        }
    }
    return 1;
}

function getScore(bweight, lweight, gender){
        var kg = convertToKg(bweight);
        var multiple;
        if(gender == 'male') {
            multiple = getMaleMultiple(kg);
        }else{
            multiple = getFemaleMultiple(kg);
        }
        var score = lweight * multiple;
        return score.toFixed(4);
}
