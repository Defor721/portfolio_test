// lib/mongodb.js
import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI; // MongoDB 연결 URI는 환경 변수로 관리
const options = {};

let client;
let clientPromise;

if (!process.env.MONGODB_URI) {
  throw new Error("Please add your Mongo URI to .env.local");
}

if (process.env.NODE_ENV === "development") {
  // 개발 환경에서 클라이언트가 중복 연결되지 않도록 함
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // 프로덕션 환경에서 클라이언트를 매번 새로 생성하지 않음
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default clientPromise;
