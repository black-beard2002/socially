import {
  getProfileByUsername,
  getUserLikedPosts,
  getUserPosts,
  isFollowing,
} from "@/actions/profile.action";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import ProfilePageClient from "./ProfilePageClient";

// Define interface for the page params - params is now a Promise in Next.js 15
interface ProfileParams {
  params: Promise<{
    username: string;
  }>;
}

// Add proper type for generateMetadata
export async function generateMetadata({
  params,
}: ProfileParams): Promise<Metadata> {
  const { username } = await params; // Await params
  const user = await getProfileByUsername(username);
  if (!user) return {};

  return {
    title: `${user.name ?? user.username}`,
    description: user.bio || `Check out ${user.username}'s profile.`,
  };
}

// Add proper types for the server component
async function ProfilePageServer({ params }: ProfileParams) {
  const { username } = await params; // Await params
  const user = await getProfileByUsername(username);

  if (!user) notFound();

  const [posts, likedPosts, isCurrentUserFollowing] = await Promise.all([
    getUserPosts(user.id),
    getUserLikedPosts(user.id),
    isFollowing(user.id),
  ]);

  return (
    <ProfilePageClient
      user={user}
      posts={posts}
      likedPosts={likedPosts}
      isFollowing={isCurrentUserFollowing}
    />
  );
}

export default ProfilePageServer;
