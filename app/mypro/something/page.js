import clientPromise from "@/lib/mongodb";
import classes from "./page.module.css";

export default async function someThing() {
  const client = await clientPromise;
  const db = client.db("sample_mflix");
  const data = await db.collection("users").find({}).toArray();

  return (
    <div className={classes.title}>
      <h1>데이터임</h1>
      <h2>{JSON.stringify(data, null, 2)}</h2>
    </div>
  );
}
