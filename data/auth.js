let users = [
  {
    id: "1",
    username: "JINKI",
    password: "12345",
    name: "JIN",
    email: "jkhsky121@gmail.com",
    url: "",
  },
];

export async function findByUsername(username) {
  return users.find((user) => user.username === username);
}

export async function createUser(user) {
  const created = { ...user, id: Date.now().toString() };
  users.push(created);
  return created.id;
}
