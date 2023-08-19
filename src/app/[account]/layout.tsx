import { currentUser, redirectToSignIn } from "@clerk/nextjs";
import type { User } from "@clerk/nextjs/api";
import Navigation from "~/components/chrome/Navigation";

export default async function AccountRoot({
  children,
  params,
}: {
  params: { account: string };
  children: React.ReactNode;
}) {
  // Can user access this account?
  const user: User | null = await currentUser();

  if (!user) {
    // If no user, we'll redirect to sign in
    redirectToSignIn({ returnBackUrl: `/${params.account}` });
  }

  if (user?.username !== params.account) {
    // If user is not authorized, we'll show a message
    return <h1>Not authorized</h1>;
  }

  return (
    <>
      {children}
      <Navigation />
    </>
  );
}
