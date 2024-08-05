import { NextResponse } from "next/server";


export async function POST(req, res) {
  const { email, subject, message } = await req.json();
  console.log(email, subject, message);
  
}
