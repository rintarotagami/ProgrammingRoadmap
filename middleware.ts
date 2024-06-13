export { auth as middleware } from "./auth";

//ミドルウェアを適用させるページを制限できる（正規表現ができる
// export const config = {
//     matcher:"/profile:",
// }

//逆にmiddlewareを適用しないパスの指定もできます
//https://nextjs.org/docs/app/building-your-application/routing/middleware
export const config = {
    matcher: ['/((?!auth).*)',]
};
