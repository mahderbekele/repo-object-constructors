// 1

function FeatureToggle(featureName, isEnabled, userGroupAccess) {
    this.featureName = featureName;
    this.isEnabled = isEnabled;
    this.userGroupAccess = userGroupAccess;
    }
    
    FeatureToggle.prototype.canAccess = function(userRole) {
    if (this.isEnabled && this.userGroupAccess.includes(userRole)) {
    return true;
    }
    else{
    return false;
    }
    };
    
    FeatureToggle.prototype.toggleFeature = function(flag) {
    this.isEnabled = flag;
    };
    
    const feature = new FeatureToggle("status active", true, ["betaTesters", "admins"]);
    function hasAccess(roles){
        roles.map(role=>{
    if (feature.canAccess(role)) {
    console.log(`${role} can access the feature.`);
    } 
    else {
    switch (role) {
    case "guests":
    case "users":
    return `${role} cannot access the feature.`
    break;
    default:
    return "Role not recognized or not permitted."
    }
    }
})
}
let roles = ["betaTesters","users"]
console.log(hasAccess(roles))


// 2 

function TimeLog(freelancerName,projectDetails,logs){
    this.freelancerName=freelancerName;
    this.projectDetails=projectDetails;
    this.logs=logs;
}

TimeLog.prototype.calculateTotalEarnings=function(){
    return this.logs.reduce((accum,log)=> accum + log.hoursWorked*this.projectDetails.hourlyRate,0)

}
const judy= new TimeLog ("JUdy", {name:"Ankole",hourlyRate:1000},[{date:"2025-02-17",hoursWorked:8},{date:"2025-02-20",hoursWorked:10}])
console.log(judy.calculateTotalEarnings())

TimeLog.prototype.filterDateByRange=function(startDate,endDate){
    return this.logs.filter(log => log.date >= startDate && log.date <= endDate);
}
console.log(judy.filterDateByRange("2025-02-17","2025-02-25"))

TimeLog.prototype.hoursExceed40=function(){
    if (this.logs.reduce((accum,log)=> accum+log.hoursWorked)>40){
        return true
    }
    else{
        return false
    }
}
console.log(judy.hoursExceed40())

// 3

function Order(customer,items,status){
    this.customer=customer,
    this.items=items,
    this.status=status
}

 Order.prototype.calculateTotalCost = function () {
    return this.items.reduce((total, item) => total + (item.quantity * item.unitPrice), 0);
 };
 Order.prototype.updateStatus = function (paymentReceived) {
    return this.calculateTotalCost()===paymentReceived ? "Paid" : "Pending";
 };
 Order.prototype.filterUrgentCategory = function () {
    switch (this.status) {
        case "Pending":
          console.log("Urgent attention needed");
          break;
        case "Paid":
          console.log("Processing order");
          break;
        default:
          console.log("No order");
          break;
      };
   
 };
 const ordering=new Order({name:"Mahder",email:"mahder@gmail.com"},
    [
        { productName: "computer", quantity: 1, unitPrice: 200000 },
        { productName: "phone", quantity: 1, unitPrice: 25000 },
        { productName: "Phone case", quantity: 1, unitPrice: 350 }
      ],"Pending" 
 );
 console.log(ordering.calculateTotalCost());
 console.log(ordering.updateStatus(15300));
 ordering.filterUrgentCategory();

 // 4 

 function Employee(id, name, performanceMetrics,feedbackList) {
    this.id = id;
    this.name = name;
    this.performanceMetrics = performanceMetrics;
    this.feedbackList =feedbackList;
 }
 Employee.prototype.calculateAverageScore = function () {
    const scores = Object.values(this.performanceMetrics);
    const totalScore = scores.reduce((sum, score) => sum + score, 0);
    return totalScore / scores.length;
 };
 Employee.prototype.getPerformanceLevel = function () {
    const averageScore = this.calculateAverageScore();
    if (averageScore >= 10) {
        return "Excellent";
    } else if (averageScore >= 5) {
        return "Good";
    } else {
        return "Needs Improvement";
    }
 };
 Employee.prototype.addFeedback = function (feedback) {
    this.feedbackList.push(feedback);
 };
 const employeeDetail=new Employee( 10459 ,"Mahder",
    {communication:5,
        efficiency:10,
    reliability:8
    },
    ["Good job", "Manage your time well","Show improvement on your leadership skills"]
 
 
 );
 employeeDetail.addFeedback("Keep it up");
 console.log(employeeDetail);
 console.log(employeeDetail.calculateAverageScore());
 console.log(employeeDetail.getPerformanceLevel());
 
 
 // 5 Build a simple e-learning system where a Course class has properties:
 //  title (string), instructor (object with name and expertise), and students
 //  (array of objects with name and completionStatus), then add prototype methods 
 // to return names of students who completed the course, count enrolled students 
 // by expertise area, and use control flow to output different messages for instructors
 //  with more or less than 5 students.

 function Course(title, instructor,students) {
    this.title = title;
    this.instructor = instructor;
    this.students =students;
 }
 Course.prototype.getCompletedStudentNames = function () {
    return this.students
        .filter(student => student.completionStatus)
        .map(student => student.name);
 };
 Course.prototype.countStudentsByExpertise= function () {
    const expertiseCounts = {};
    this.students.forEach(student => {
        const expertise = student.expertise;
        if (!expertiseCounts[expertise]) {
            expertiseCounts[expertise] = 0;
        }
        expertiseCounts[expertise]++;
    });
    return expertiseCounts;
 };
 Course.prototype.instructorMessage = function () {
    return this.students.length > 5
        ? "Your class full!"
        : "You should add more students";
 };
 const takeCourses=new Course("Frontend web Development",
    {name: "Emma", expertise: "Web Developer" },
    [
        { name: "Mahder", completionStatus: true, expertise: "Data Science" },
        { name: "Jacky", completionStatus: false, expertise: "Mobile Development" },
        { name: "Kidist", completionStatus: true, expertise: "Web Development" },
        { name: "Amanuel", completionStatus: true, expertise: "Mobile Development" },
        { name: "Mahlet", completionStatus: false, expertise: "Sotware development" }
      ]
     
     
 );
 console.log(takeCourses.instructorMessage());
 console.log(takeCourses.getCompletedStudentNames());
 console.log(takeCourses.countStudentsByExpertise());
 






