import { auth } from "@clerk/nextjs";

export default function AccountPage({
  params,
}: {
  params: { account: string };
}) {
  const { user } = auth();

  return (
    <>
      <header>
        <h1>Welcome back, {user?.firstName}</h1>
      </header>
    </>
  );
}
