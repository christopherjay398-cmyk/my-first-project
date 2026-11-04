export function formatNaira(value:number){return new Intl.NumberFormat("en-NG",{style:"currency",currency:"NGN",maximumFractionDigits:0}).format(value)}
export function cn(...values:(string|false|undefined|null)[]){return values.filter(Boolean).join(" ")}
