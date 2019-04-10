function userDetails() {


var userDetails1 = [{
   "name" : "Phoebe",
   "age" :  "29",
   "gender" : "female",
   "loginAttempts":2

},
{
   "name" : "Peter",
   "age" : "32",
   "gender" : "male",
   "loginAttempts":1

},
{
   "name" : "Melinda",
   "age" : "55",
   "gender" : "female",
   "loginAttempts":4
},
{
   "name" : "Sophie",
   "age" : "27",
   "gender" : "female",
   "loginAttempts":3
},
{
   "name" : "Anna",
   "age" : "32",
   "gender" : "female",
   "loginAttempts":2
},
{
   "name" : "Rachel",
   "age" : "22",
   "gender" : "female",
   "loginAttempts":1
}];
   for (count = 0; count <6; count++) {
   
        if (userDetails1[count].loginAttempts == 3) {
         document.write("Users with 3 or more Login Attempts:")
         document.write(" <br /> ")
         document.write("Name: "+userDetails1[count].name);
         document.write(", Age: "+userDetails1[count].age);
         document.write(", Gender: "+userDetails1[count].gender  ); 
         document.write(" <br /> ")
      } 

   }

   for (count = 0; count <6; count++) {

   if (userDetails1[count].loginAttempts >3) {
      document.write("  Name: "+userDetails1[count].name);
      document.write(", Age: "+userDetails1[count].age);
      document.write(", Gender: "+userDetails1[count].gender);
      
   }
}

}