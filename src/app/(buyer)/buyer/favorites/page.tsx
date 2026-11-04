"use client";
import {properties} from "@/lib/data";
import {PropertyCard} from "@/components/shared/PropertyCard";
import {useFavoriteStore} from "@/stores/favoriteStore";
export default function Favorites(){const ids=useFavoriteStore(s=>s.ids);const saved=properties.filter(p=>ids.includes(p.id));return <><h2 className="text-3xl font-black">Your saved properties</h2><p className="mt-2 text-slate-500">Keep your favourite places together.</p>{saved.length?<div className="mt-6 grid gap-5 lg:grid-cols-2">{saved.map(p=><PropertyCard key={p.id} property={p}/>)}</div>:<div className="surface mt-6 p-12 text-center"><h3 className="font-bold">No saved properties yet</h3><p className="mt-2 text-sm text-slate-500">Tap the heart on a property to save it here.</p></div>}</>}
