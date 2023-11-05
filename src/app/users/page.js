import Link from "next/link";
import getAllUsers from "../../../lib/getallusers";

export const metadata = {
  title: "Users",
  description: "",
};

const UsersPage = async () => {
  const usersData = await getAllUsers();

  const content = (
    <section>
      <h2>
        <Link href="/">Back to Home</Link>
      </h2>
      <br />
      <ul>
        {usersData.map((user) => (
          <li key={user.id}>
            <Link
              href={`/users/${user.id}`}
            >{`${user.firstname} ${user.lastname}`}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
  return (
    <>
      <h1>List of Users Page</h1>
      {content}
    </>
  );
};

export default UsersPage;
