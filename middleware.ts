import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: ["/", "/login", "/register", "/api/webhook/clerk", "/shop", "/product","/myaccount","/cart"],
  ignoredRoutes: ['/api/webhook/clerk','/contact','/api/webhook/strapi'],
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
