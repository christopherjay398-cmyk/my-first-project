import {NextResponse} from "next/server";
export async function GET(){return NextResponse.json({status:"ok",app:"Zedrent frontend",mode:"frontend-demo"});}
