function BMI(weight: number, height: number){
    var BMI: number = weight/ ((height/100 )^2)
    if(BMI < 18.5){
        return "less weight"
    }else if( BMI <= 24.9){
        return "ideal"
    }else if(BMI <= 29.9){
        return "overweight"
    }else if(BMI <= 39.9){
        return "very overweight"
    }else if(BMI >= 39.9){
        return "obesity"
    }
}

console.log(BMI(48, 154));
