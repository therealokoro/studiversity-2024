const institute = [
  {
    $formkit: "cinput",
    name: "name",
    label: "Name",
    placeholder: "Enter the institute name here",
    validation: "required"
  },
  {
    $formkit: "cinput",
    name: "shortname",
    label: "Shortname",
    placeholder: "Enter the institute's shortname here",
    validation: "required"
  },
  {
    $formkit: "cselect",
    name: "type",
    label: "Type",
    options: ["University", "Polytechnic"],
    placeholder: "Select the institute's type here",
    validation: "required"
  },
  {
    $formkit: "cfile",
    name: "file",
    label: "Logo",
    placeholder: "Select an image as the institute's logo",
    accept: "images"
  }
]

const faculty = [
  {
    $formkit: "cinput",
    name: "name",
    label: "Name",
    placeholder: "Enter the faculty's name here",
    validation: "required"
  }
]

const department = [
  {
    $formkit: "cinput",
    name: "name",
    label: "Name",
    placeholder: "Enter the department's name here",
    validation: "required"
  }
]

const course = [
  {
    $formkit: "cinput",
    name: "title",
    label: "Course Title",
    placeholder: "Enter the course title here",
    validation: "required"
  },
  {
    $formkit: "cinput",
    name: "courseCode",
    label: "Course Code",
    placeholder: "Enter the course code here",
    validation: "required"
  },
  {
    $formkit: "cselect",
    name: "level",
    label: "Level",
    options: ["100", "200"],
    placeholder: "Select the course level here",
    validation: "required"
  },
  {
    $formkit: "cselect",
    name: "semester",
    label: "Semester",
    options: ["First", "Second"],
    placeholder: "Select the course semester here",
    validation: "required"
  }
]

const admin = [
  {
    $formkit: "cinput",
    name: "name",
    label: "Name",
    placeholder: "Enter the admin's fullname name here",
    validation: "required"
  },
  {
    $formkit: "cinput",
    ctype: 'email',
    name: "email",
    label: "Email Address",
    placeholder: "Enter the admin's email address here",
    validation: "required|email"
  }
]

export const formSchemas = {
  institute,
  faculty,
  department,
  course,
  admin
}
