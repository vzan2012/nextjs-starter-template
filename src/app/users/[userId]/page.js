import { Suspense } from "react";
import getUser from "../../../../lib/getUser";
import getUserPosts from "../../../../lib/getUserPosts";
import UserPosts from "./components/UserPosts";

const UserPage = async ({ params }) => {
  const userData = getUser(params.userId);
  const userPostsData = getUserPosts(params.userId);

  //   const [user, userPosts] = await Promise.all([userData, userPostsData]);

  const user = await userData;

  return (
    <>
      <h2>{user.firstname + " " + user.lastname}</h2>
      <Suspense fallback={<h2>Loading ...</h2>}>
        {/* <UserPosts posts={userPosts} /> */}
        <UserPosts promise={userPostsData} />
      </Suspense>
    </>
  );
};

export default UserPage;
