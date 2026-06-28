import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@mail.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Rishad Islam",
    email: "rishad@mail.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: false,
  },
  {
    name: "Rayhan Islam",
    email: "rayhan@mail.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: false,
  },
];

export default users;
