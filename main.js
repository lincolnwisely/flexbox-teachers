function Teacher(name, department, ratings) {
  this.name = name;
  this.department = department;
  this.ratings = ratings;
}

Teacher.prototype = {
  addRating: function (newRating) {
    this.ratings.push(newRating);
  },
  getAvgRating: function () {
    console.log(this.ratings);
    var total = 0;
    for(var i = 0; i < this.ratings.length; i++ ) {
      total += this.ratings[i];
      console.log(total);
    }
    console.log(this.ratings);
    var avg = (Math.round(total * 10) / 10) / this.ratings.length;
    return avg;
    console.log(avg);
  },
  rateTeacher: function() {
    var rating = parseInt(prompt("We would like you to review " + this.name + ". Please enter a rating between 0.0-5.0"));

    while (rating > 5.0 || rating < 0.0 ) {
      var rating = prompt("Sorry - please enter a rating between 0.0-5.0");
    }

    // if (rating > 5.0 || rating < 0.0 ) {
    //   var rating = prompt("Sorry - please enter a rating between 0.0-5.0");
    // }

    // else {
      console.log(rating);
      // addTeacherRating(array, rating);
      this.addRating(rating);
      // console.log(array);
      alert("Thanks for your review! " + this.name + "'s average rating is now... " +
      this.getAvgRating());
    // }
  }
}

var teacherArin = new Teacher('Arin Webber-Wisely', 'Sales', [5.0, 4.9, 4.7]);

var teacherLincoln = new Teacher('Lincoln Webber-Wisely', 'Science', [4.8, 4.6, 4.7]);

var teacherVince = new Teacher('Vince Webber-Wisely', 'Ball', [3.8, 4.0, 4.4]);

var teacherTony = new Teacher('Tony Webber-Wisely', 'Dirt', [3.8, 4.9, 4.5]);

console.log(teacherArin);
teacherArin.rateTeacher();

// console.log(teacherLincoln.name);
// console.log(teacherLincoln.department);
// console.log(teacherLincoln.ratings);
// teacherLincoln.rateTeacher();
// console.log(teacherLincoln.ratings);
//
// console.log(teacherVince.name);
// console.log(teacherVince.department);
// console.log(teacherVince.ratings);
// teacherVince.rateTeacher();
// console.log(teacherVince.ratings);
//
// var teacher = {
//   name: 'Barb Barberson',
//   ratings: [4.5, 4.0, 3.8],
//   addRating: function (newRating) {
//     this.ratings.push(newRating);
//   },
//   getAvgRating: function () {
//     console.log(this.ratings);
//     var total = 0;
//     for(var i = 0; i < this.ratings.length; i++ ) {
//       total += this.ratings[i];
//     }
//     console.log(this.ratings);
//     var avg = (Math.round(total * 10) / 10) / this.ratings.length;
//     return avg;
//     console.log(avg);
//   },
//   rateTeacher: function() {
//     var rating = parseInt(prompt("We would like you to review. Please enter a rating between 0.0-5.0"));
//
//     if (rating > 5.0 || rating < 0.0 ) {
//       var rating = prompt("Sorry - please enter a rating between 0.0-5.0");
//     }
//
//     else {
//       console.log(rating);
//       // addTeacherRating(array, rating);
//       this.addRating(rating);
//       // console.log(array);
//       alert("Thanks for your review! " + this.name + "'s average rating is now... " +
//       this.getAvgRating());
//     }
//   }
// }
// teacher.rateTeacher();
// var iprompt = parseInt(prompt('enter a year'));
// while (iprompt < 2018 || iprompt > 2023 ) {
//   ipromot = prompt('enter a year between 2018 and 2023');
// }
// do {
//   var iprompt = parseInt(prompt('enter a year'));
// }
// while(iprompt < 2018 || iprompt > 2023 );
// --------------LINCOLN'S CODE
// var avgRating = ((rating1 + rating2 + rating3) / 3);
// avgRating = Math.round( avgRating * 10 ) / 10;
// var array = [4.5, 3.0, 2.8];
// function getRatingAvg(ratingsArray) {
//   console.log(ratingsArray + 'line 28');
//   var total = 0;
//   for(var i = 0; i < ratingsArray.length; i++ ) {
//     total += ratingsArray[i];
//   }
//
//   var avg = (Math.round(total * 10) / 10) / ratingsArray.length;
//   console.log(avg + 'line 35');
//   return avg;
// }
// function addTeacherRating(ratingsArray, newRating) {
//   ratingsArray.push(newRating);
//   return ratingsArray;
// }
// function rateTeacher() {
//  var rating = parseInt(prompt("We would like you to review. Please enter a rating between 0.0-5.0"));
//
//  if (rating > 5.0 || rating < 0.0 ) {
//    var rating = prompt("Sorry - please enter a rating between 0.0-5.0");
//  }
//
//  else {
//    console.log(rating);
//    // addTeacherRating(array, rating);
//    teacher.addRating(rating);
//    // console.log(array);
//    alert("Thanks for your review! " + teacherName + "'s average rating is now... " +
//    teacher.getAvgRating());
//  }
//  // console.log(array);
// }
// rateTeacher();
// --------------END LINCOLN'S CODE


function Course(name, department, teacher, semester) {
  this.name = name,
  this.department = department,
  this.teacher = teacher,
  this.semester = semester
}

var comSci = new Course('Computer Science 101', 'Science', 'Katie Mathews', 'Summer 2018');
var gd101 = new Course('Graphic Design 101', 'Art', 'Amanda James', 'Fall 2018');
var digMar101 = new Course('Digital Marketing', "Communications", teacherLincoln, 'Spring 2019');
var playBall = new Course('Playing Ball', 'Ball', teacherVince, 'Every Day');
var noTakeBall = new Course('No Take Ball', 'Ball', teacherVince, 'Every Day');
var ballUnderCouch = new Course('Hiding Ball Under Couch', 'Ball', teacherVince, 'Every Day');
var showerBall = new Course('Shower Ball 101', 'Ball', teacherVince, 'Every Day');
var digInDirt = new Course('Digging in Dirt', 'Dirt', teacherTony, 'All Day');
var dirtInTeef = new Course('Getting Dirt in Teef', 'Dirt', teacherTony, 'All Day');
var sales101 = new Course('Sales 101', 'Marketing', teacherArin, 'Spring and Fall 2019');

var courses = [
  comSci,
  gd101,
  digMar101,
  playBall,
  noTakeBall,
  digInDirt,
  showerBall,
  ballUnderCouch,
  dirtInTeef,
  sales101
]

console.log(courses);
// Old array NO LONGER NEEDED; using Course Prototype to add to array above
// var courses = [
//   {
//     name: "Computer Science 101",
//     department: "Science",
//     teacher: {
//       name: "Katie Mathews",
//       ratings: [4.5, 4.0, 3.8]
//     },
//     semester: "Summer 2018"
//   },
//   {
//     name: "Graphic Design",
//     department: "Art",
//     teacher: {
//       name: "Amanda James",
//       ratings: [2.5, 3.0, 4.8]
//     },
//     semester: "Fall 2018"
//   },
//   {
//     name: "Digital Marketing",
//     department: "Communications",
//     teacher: {
//       name: "Lincoln Wisely",
//       ratings: [4.5, 4.0, 4.8]
//     },
//     semester: "Spring 2019"
//   },
//   {
//     name: "Chemistry",
//     department: "Science",
//     teacher: {
//       name: "Arin Webber",
//       ratings: [4.5, 4.5, 4.8]
//     },
//     semester: "Fall 2018"
//   },
//   {
//     name: "Astronomy",
//     department: "Science",
//     teacher: {
//       name: "Sigourney Weaver",
//       ratings: [4.5, 5.0, 4.8]
//     },
//     semester: "Summer 2018"
//   },
//   {
//     name: "Advertising",
//     department: "Communications",
//     teacher: {
//       name: "Marie Stevens",
//       ratings: [4.5, 4.0, 3.8]
//     },
//     semester: "Fall 2018"
//   }
// ];
// var courses = [
// ['Watercolor', 'Art'],
// ['Graphic Design', 'Art'],
// ['Biology', 'Science'],
// ['Chemistry', 'Science'],
// ['Astronomy', 'Science'],
// ['Public Relations', 'Communications'],
// ['Advertising', 'Communications'],
// ['Social Media', 'Communications'],
// ['Digital Marketing', 'Communications']
// ];

function filterCourses(courseArray) {
  var dept = prompt("Which Department are you interested in?");
  var newList = [];
  nopeCheck = 0;
  for (var i = 0; i < courseArray.length; i++) {
    if (courseArray[i].department.toLowerCase() == dept.toLowerCase()) {
      newList.push(' ' + courseArray[i].name);
    }
    else if (courseArray[i].department.toLowerCase() !== dept.toLowerCase()) {
      nopeCheck += 1;
    }
  }

  if (nopeCheck == courseArray.length) {
    alert('shucks, no courses for ' + dept);
  }
  else {
    alert("The courses available are: " + newList);
  }
}

filterCourses(courses);
console.log(courses[2].teacher.name);

function Student(name, major, avgGPA, courses) {
  this.name = name;
  this.major = major;
  this.avgGpa = avgGPA;
  this.courses = courses;
}

Student.prototype = {
  addCourse: function() {
    var newCourse = prompt('which course do you want to add?');
    this.courses.push(newCourse);
  },
  dropCourse: function() {
    var courseToDrop = prompt('which course do you want to drop?');
    for (var i = 0; i < this.courses.length; i++ ) {
      if (this.courses[i].toLowerCase() == courseToDrop.toLowerCase()) {
        this.courses.splice(i, 1);
      }
    }
  },
  changeMajor: function() {
    var newMajor = prompt("What is your new major?");
    newMajor = this.major;
  }
}

var student1 = new Student('Royal Steinbeck', 'English', 3.8, ['American Literature', 'British Literature', 'Mid-Century Science Fiction']);

console.log(student1);

student1.addCourse();
console.log(student1);




// var Student = function(gradMonth, gradYear, className, currentStatus) {
//   this.month = gradMonth;
//   this.year = gradYear;
//   this.class = className;
//   this.status = currentStatus;
// }

function whichMonth() {
  var month = prompt("Which month are you graduating?").toLowerCase();
  // var month = whichMonth.toLowerCase();
  if ( month == "may" || month == 'december' ) {
      // this.gradMonth = month;
      alert('you are graduating in ' + month);
   } else {
     var month = prompt("Which month are you graduating?").toLowerCase();
  }
    // lowercase
    // if month is not May or December, ask again
}

// function promptYear() {
//
// }

// function getYear() {
//   var whichYear = prompt("which year are you graduating?");
//   var year = parseInt(whichYear);
//   if (year < 2018) {
//     this.gradYear = year;
//     console.log('oops, enter a valid year');
//   }
//   if (year >= 2018 && year <= 2021) {
//     // this.gradYear = year;
//     console.log('you are in college now');
//   }
//  if ( year == 2018 ) {
//     console.log('2018');
//       // this.currentStatus = 'Senior';
//       welcomeCollegeStudent('Senior');
//     }
//  else if ( year == 2019 ) {
//       // this.currentStatus = 'Junior';
//       welcomeCollegeStudent('Junior');
//     }
//  else if ( year == 2020 ) {
//       // this.currentStatus = 'Sophomore';
//       welcomeCollegeStudent('sophomore');
//     }
//   else if ( year == 2021 ) {
//       // this.currentStatus = 'Freshman';
//       welcomeCollegeStudent('Freshman')
//     }
//    else {
//     // this.gradYear = year;
//     welcomeHsStudent('Freshman');
//   }
// }

var year = parseInt(prompt("which year are you graduating?"));
// console.log(typeof year);

welcomeCollegeStudent = function (studentClass) {
  alert( 'welcome, ' + studentClass );
}

welcomeHsStudent = function(studentClass) {
  alert( 'welcome, ' + studentClass );
}



function welcomeStudentsByGraduatingClass(gradYear, gradMonth, welcome) {
  gradMonth();
  if (gradYear < 2018) {
    alert('oops, enter a valid year');
  }

  if (gradYear >= 2018 && gradYear <= 2021) {
    if ( gradYear == 2018 ) {
         // this.currentStatus = 'Senior';
        welcome('senior');
        // alert ("are you excited to graduate in " + gradMonth);
       }

    else if ( gradYear == 2019 ) {
        // this.currentStatus = 'Junior';
        welcome('Junior');
      }
    else if ( gradYear == 2020 ) {
       // this.currentStatus = 'Sophomore';
       welcome('sophomore');
     }
   else if ( gradYear == 2021 ) {
       // this.currentStatus = 'Freshman';
       welcome('Freshman')
     }
  }
  // Check for HS grades
  if (gradYear >= 2021 && gradYear <= 2024) {
    if ( gradYear == 2021 ) {
         // this.currentStatus = 'Senior';
        welcome('HS Senior');
       }

    else if ( year == 2022 ) {
        // this.currentStatus = 'Junior';
        welcome('HS Junior');
        console.log(typeof gradYear);
      }
    else if ( gradYear == 2023 ) {
       // this.currentStatus = 'Sophomore';
       welcome('HS Sophomore');
     }
   else if ( gradYear == 2024 ) {
       // this.currentStatus = 'Freshman';
       welcome('HS Freshman');
     }
   }
}

welcomeStudentsByGraduatingClass(year, whichMonth, welcomeHsStudent);







//
// getYear();
//
// addTeacherRating();


// var num = 83;
// while(num !== 1) {
//     if (num % 2 == 0 ) {
//         num = num/2;
//     }else {
//       num = (num * 3) + 1;
//     }
//   console.log(num);
//  }
// console.log("It works!");
