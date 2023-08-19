import { authMiddleware, redirectToSignIn } from "@clerk/nextjs";
import { NextResponse } from "next/server";

// eslint-disable-next-line @typescript-eslint/no-unsafe-call
export default authMiddleware({
  // "/" will be accessible to all users
  publicRoutes: ["/"],
  
  
});

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next
     * - static (static files)
     * - favicon.ico (favicon file)
     * - public folder
     * - public folder
     */
    // API Requests often use the useClerk or useAuth hooks, so we need to allow them. They should be added to publicPaths above instead to "bypass" automatic Clerk redirects.
    "/((?!static|.*\\..*|_next|favicon.ico).*)",
    "/",
  ],
};
