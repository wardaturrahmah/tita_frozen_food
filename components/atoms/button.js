import Link from "next/link";
export default function button({ value, background, color, padding, border, radius, click,link }) {
  return (
    <Link href={link}>
    <button
      onClick={click}
      style={{
        background: background,
        color: color,
        padding: padding,
        border: border,
        borderRadius:radius,
      }}
    >
      {value}
    </button>
    </Link>
  );
}