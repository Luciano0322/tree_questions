/**
Q1. Please follow the principle (‘firstName’ + ‘lastName’ + ‘customerID’) to sort this array and print it out.
**/
export function sortUserName(users) {
  return users.sort((a, b) => {
    const userA = `${a.firstName}${a.lastName}${a.customerID}`;
    const userB = `${b.firstName}${b.lastName}${b.customerID}`;
    return userA.localeCompare(userB);
  });
}
/**
Q2. Please sort by ‘profession’ to follow the principle.
(‘systemAnalytics’ > ‘engineer’ > ‘productOwner’ > ‘freelancer’ >
‘student’’)
**/
export function sortByType(user) {
  const professionOrder = {
    'systemAnalytics': 1,
    'engineer': 2,
    'productOwner': 3,
    'freelancer': 4,
    'student': 5
  };
  return user.sort((a, b) => {
    return professionOrder[a.profession] - professionOrder[b.profession];
  });
}