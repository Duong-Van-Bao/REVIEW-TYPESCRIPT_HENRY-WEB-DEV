/* TYPE ALIAS */
type StringOrNumber = string | number;
type Student = { name: string; id: StringOrNumber };

const studentDetails = (id: StringOrNumber, studentName: string): void => {
  console.log(`Student ${studentName} has is: ${id}`);
};

// studentDetails(123, "henry");
// studentDetails("456", "son");

const greet = (user: Student) =>
  console.log(`${user.name} with id ${user.id} says hello`);

greet({ name: "henry", id: "456" });
