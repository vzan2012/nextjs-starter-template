import { Suspense } from "react";
import getUser from "../../../../lib/getUser";
import getUserPosts from "../../../../lib/getUserPosts";
import UserPosts from "./components/UserPosts";

export const generateMetadata = async ({ params }) => {
  const userData = getUser(params.userId);
  const user = await userData;

  return {
    title: `${user.firstname} ${user.lastname}`,
    description: `This page is about the user - ${user.firstname} ${user.lastname}`,
  };
};

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
