const getAllUsers = async () => {
  const allUsersResponse = await fetch("https://jsonplaceholder.org/users");

  if (!allUsersResponse.ok) throw new Error("Failed to fetch data");

  return allUsersResponse.json();
};

export default getAllUsers;
