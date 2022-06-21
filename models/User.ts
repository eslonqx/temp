import db from "../db/mongoDB.ts";
import IUser from "../entities/IUser.ts";

const User = db.collection<IUser>("users");

export default User;
