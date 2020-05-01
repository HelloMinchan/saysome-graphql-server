export const members = [
  {
    id: 0,
    name: "정민찬",
    email: "wjdalscksdle@naver.com",
    password: "123",
  },
];

export const login = (email, password) => {
  const loginedMember = members.filter(
    (member) => member.email === email && member.password === password
  );
  return loginedMember[0];
};
