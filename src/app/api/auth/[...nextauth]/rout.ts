//[...nextauth]の意味: apiのエンドポイントの拡張のようなもの
// "/api/auth/calback"
// "/api/auth/calback/provider"
//のようなauth/以降のapiを全て叩いてくれる

import { handlers } from "auth";

export const {GET, POST} = handlers;