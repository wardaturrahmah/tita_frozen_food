export default function button({ value, background, color, padding, border, radius, click }) {
  return (
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
  );
}