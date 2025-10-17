import User from "@/app/model/user";
import {connectDB} from "../../lib/db.js";

export async function GET(request) {
  try {
    await connectDB();
    const users = await User.find({});
    return new Response(JSON.stringify(users), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch users", { status: 500 });
  }
}

export async function POST(request) {
  const { email } = await request.json();   
    try {
      await connectDB();
      const user = await User.create({ email });    
      return new Response(JSON.stringify(user), { status: 201 });
    } catch (error) {
        return new Response("Failed to create user", { status: 500 });
        }
}