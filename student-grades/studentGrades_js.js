function calculateGrade() {

var grades = [['English',90], ['Math', 76], ['Science', 83], ['History', 65], ['Computer Science', 95]];

var averageGrade = 0;
var grade=" ";

for (var i=0; i < grades.length; i++) {
    averageGrade += grades [i][1];
    var avg = (averageGrade/grades.length);
}
    
    if (avg > 79){
        grade = "A";
       }
    else if (avg > 59){
        grade = "B";
    }
    else if (avg > 39){
        grade = "C";
    }
    else if (avg <= 40){
        grade = "D";
    }
    document.getElementById('td1').innerHTML = "Phoebe Buffet";
    document.getElementById('td2').innerHTML = grade; 
}