import  NextAuth, { NextAuthConfig } from "next-auth";
import Github from "next-auth/providers/github";

export const config: NextAuthConfig = {
    providers:[Github({clientId: process.env.AUTH_GITHUB_ID, clientSecret:process.env.AUTH_GITHUB_SECRET})],
    basePath: "/api/auth",
    callbacks:{
        authorized({request,auth}){
            try {
                const{ pathname } = request.nextUrl;
                if(pathname === "/protected-page") return !!auth; //protected-pageはログインしないと閲覧できないように
                return true;
            } catch (err) {
                console.log(err);
            }
        },
        jwt({token,trigger,session}) {
            if(trigger === "update") token.name = session.user.name;//ユーザーが更新された時、トークンの名前をユーザーの名前にする
            return token;
        }
        //jwt=>json web talkの略。github認証が成功したら作成される。
    }
};

export const {handlers, auth, signIn, signOut} = NextAuth(config);
//handlers: apiを作る時に必要 auth:サーバーサイドでセッションを取得するときに必要