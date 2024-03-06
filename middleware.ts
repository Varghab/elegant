import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: ["/", "/login", "/register", "/api/webhook/clerk"],
  ignoredRoutes: ['/api/webhook/clerk','/contact'],
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
