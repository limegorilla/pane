import Link from "next/link";
import { Button } from "~/components/ui/button";

export default function Home() {
  return (
    <div>
      hello
      <Link href="/auth/sign-in">
        {" "}
        <Button>Sign in</Button>
      </Link>
    </div>
  );
}
