const getAllUsers = async () => {
  const allUsersResponse = await fetch("https://jsonplaceholder.org/users", {
    next: {
      revalidate: 300,
    },
  });

  // if (!allUsersResponse.ok) throw new Error("Failed to fetch data");
  if (!allUsersResponse.ok) return undefined;

  return allUsersResponse.json();
};

export default getAllUsers;
