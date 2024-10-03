import { lucia } from "lucia-auth";
import { MongoClientAdapter } from "@lucia-auth/adapter-mongodb";
import clientPromise from "./mongodb";

const auth = lucia({
  adapter: MongoClientAdapter(clientPromise, {
    userCollection: "users", // MongoDB에서 사용할 컬렉션 이름
    sessionCollection: "sessions", // 세션을 저장할 컬렉션 이름
  }),
  secret: process.env.LUCIA_SECRET_KEY,
  env: process.env.NODE_ENV === "production" ? "PROD" : "DEV",
});

export default auth;
