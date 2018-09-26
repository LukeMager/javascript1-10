//write first method
function sleep_in(weekday,vacation) {
    if(weekday == false || vacation == true){
        return true;
    } else {
        return false;
    }
}


//write second method
function monkey_trouble(a_smile, b_smile) {
    if(a_smile == b_smile == true || false){
        return true;
    } else {
        return false;
    }
}

//write third method
function string_times(string, n) {
    if (n == 0) {
        return "";
    }
    var result = string;
    for (var i = 0; i < n - 1; i++) {
        result += string;
    }
    return result;
}

//write fourth method
function front_times(string, n){
    string = string.substring(0,3);
    if (n == 0) {
        return "";
    }
    var result = string;
    for (var i = 0; i < n - 1; i++) {
        result += string;
    }
    return result;
}

//write fifth method
function string_bits(string){
    var letter = string.charAt();
    for(var i = 2; i < string.length; i+=2){
        letter += string.charAt(i);
    }
    return letter;
}

//write sixth method
function caughtSpeeding(speed, birthday){
    if(speed <= 60 || speed <= 65 && birthday == true){
        return 0;
    }
    if((61 <= speed && speed <= 80) || (66 <= speed && speed <= 85) && birthday == true){
        return 1;
    }
    if(speed >= 81 && birthday == false){
        return 2;
    }
}

//write seventh method
function fizz_buzz(number){
    if(number % 3 != 0 && number % 5 != 0){
        return number + "!";
    }
    if(number % 3 == 0 && number % 5 != 0){
        return "Fizz";
    }
    if(number % 3 != 0 && number % 5 == 0){
        return "Buzz";
    }
    if(number % 3 == 0 && number % 5 == 0){
        return "FizzBuzz";
    }
}

//write eighth method
function teaParty(tea, candy){
    if(tea < 5 || candy < 5) {
        return 0;
    }
    if((tea >= 5 && candy >= 5) && (Math.max(tea, candy) < 2*Math.min(tea, candy))){
        return 1;
    }
    if((tea >= 5 && candy >= 5) && (Math.max(tea, candy) >= 2*Math.min(tea, candy))){
        return 2;
    }
}

//write ninth method
function blackjack(firstInt, secondInt){
    if(firstInt <= 21 && secondInt <=21){
        return Math.max(firstInt, secondInt);
    }
    if(firstInt <=21 && secondInt > 21){
        return firstInt;
    }
    if(secondInt <=21 && firstInt > 21){
        return secondInt;
    }
    if(firstInt > 21 && secondInt > 21){
        return 0;
    }
}

//write tenth method
function loneSum(firstInt, secondInt, thirdInt){
    if(firstInt != secondInt && firstInt != thirdInt && secondInt != thirdInt){
        return firstInt + secondInt + thirdInt;
    }
    if(firstInt == secondInt && firstInt == thirdInt){
        return 0;
    }
    if(firstInt == secondInt && firstInt != thirdInt){
        return thirdInt;
    }
    if(firstInt == thirdInt && firstInt != secondInt){
        return secondInt;
    }
    if(thirdInt == secondInt && thirdInt != firstInt){
        return firstInt;
    }
}

//function runs on click and outputs test cases you create to page
function tester() {
    document.getElementById("output").innerHTML += sleep_in(true, false);
    document.getElementById("output").innerHTML += monkey_trouble(true, false);
    document.getElementById("output").innerHTML += string_times("Hi", 4);
    document.getElementById("output").innerHTML += front_times("Hello", 4);
    document.getElementById("output").innerHTML += string_bits("Hi");
    document.getElementById("output").innerHTML += caughtSpeeding(70, true);
    document.getElementById("output").innerHTML += fizz_buzz(5);
    document.getElementById("output").innerHTML += teaParty(5,10);
    document.getElementById("output").innerHTML += blackjack(19,21);
    document.getElementById("output").innerHTML += loneSum(1,2,3);
}
