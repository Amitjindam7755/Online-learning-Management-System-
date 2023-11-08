function loadCourseList(){
    const courseData = {
         title: "Introduction to Web Development",
         instructor: "Manny Velazquez",
         description:"Learn the basics of web development.",
    };
    const courseList = document.getElementById("course-list");
    const courseElement = document.createElement("div");
    courseElement.className ="course";
    courseElement.innerHTML ='<h2> ${courseData.title} </h2>'
    '<p> instructor;  ${courseData.instructor} </p>'
    '<p> ${courseData.description} </p>'
    '<button onclick="enrollIncourse("${courseData.title}");">Enroll</button>'
    courseList.appendChild(courseElement);
}
function enrollIncourse(courseTitle){
    alert('Enrolled in the course: ${courseTitle}');
}
window.onload = loadCourseList;
document.getElementById("enrollment-form").addEventListener("submit",function(event) {
    event.preventDefault();
    const fullName = document.getElementById("full-name").value;
    const email = document.getElementById("email").value;
    const selectedcourse= document.getElementById("course").value;
 console.log("Full Name: " + fullName);
 console.log("Email: " + email);
 console.log("Selected Course: " + selectedcourse);
});