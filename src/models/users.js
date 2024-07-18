const users = [
  {
    id: "1",
    name: "Gabriel",
    email: "gabriel@gmail.com",
    password: "123456",
    role: "admin",
  },
];

module.exports = {
  findAll: () => users,
  findById: (id) => users.find((user) => user.id === id),

  findByEmail: (email) => users.find((user) => user.email === email),

  registerUser: (name, email, password) => {
    const userAlreadyRegister = users.find((user) => user.email === email);
    if (userAlreadyRegister) return null;

    const newUser = {
      id: Math.floor(Math.random() * 999999).toString(),
      name,
      email,
      password,
      role: "stardard",
    };
    users.push(newUser);
    return newUser;
  },

  createUser: (name, email, password, role) => {
    const userAlreadyRegister = users.find((user) => user.email === email);
    if (userAlreadyRegister) return null;

    const newUser = {
      id: Math.floor(Math.random() * 999999).toString(),
      name,
      email,
      password,
      role,
    };
    users.push(newUser);
    return newUser;
  },

  deleteUser: (id) => {
    const userIndex = users.findIndex((user) => user.id === id);

    if (userIndex === -1) return null;

    const [deletedUser] = users.splice(userIndex, 1);

    return deletedUser;
  },
};
