"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Compass, Heart, ClipboardList, MessageCircle, UserRound } from "lucide-react";
const links=[["/buyer/home","Home",Home],["/buyer/discover","Discover",Compass],["/buyer/favorites","Saved",Heart],["/buyer/orders","Orders",ClipboardList],["/buyer/messages","Messages",MessageCircle],["/buyer/profile","Profile",UserRound]] as const;
export function BuyerNav(){const path=usePathname();return <nav className="fixed bottom-0 left-0 right-0 z-40 border-t border-emerald-100 bg-white px-2 py-2 md:sticky md:top-20 md:rounded-2xl md:border md:p-3"><div className="mx-auto flex max-w-5xl items-center justify-around md:flex-col md:items-stretch md:gap-1">{links.map(([href,label,Icon])=><Link key={href} href={href} className={`flex flex-col items-center gap-1 rounded-xl px-2 py-2 text-[10px] font-semibold md:flex-row md:gap-3 md:px-3 md:text-sm ${path===href?"bg-brand-50 text-brand-700":"text-slate-500 hover:bg-slate-50"}`}><Icon size={19}/><span>{label}</span></Link>)}</div></nav>}
