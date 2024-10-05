function BMI(weight: number, height: number){
    var BMI: number = weight/height^2.
    if(BMI < 18.5){
        return "less weight"
    }else if( BMI >= 18.5 && BMI <= 24.9){
        return "ideal"
    }else if(BMI >= 25.0 && BMI <= 29.9){
        return "overweight"
    }else if(BMI >= 30.0 && BMI <= 39.9){
        return "very overweight"
    }else if(BMI >= 39.9){
        return "obesity"
    }
}

console.log(BMI(48, 1.54));
