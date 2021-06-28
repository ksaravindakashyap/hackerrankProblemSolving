function gradingStudents(grades) {
    for(let i=0;i<grades.length;i++)
   {
       if(grades[i]>=38)
       {
           if(grades[i]%5!==0)
           {
              let temp1 = Math.ceil( grades[i] / 5) *5
              if(temp1-grades[i]<3)
              {
                  grades[i] = temp1;
              }
           }
       }
       else 
       {
           continue;
       }
   }
   return grades
}