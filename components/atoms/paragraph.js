export default function paragraph({
  value,
  color,
  margin,
  size,
  weight,
  marginTop,
}) {
  return (
    <p
      style={{
        color: color,
        margin: margin,
        marginTop: marginTop,
        fontSize: size,
        fontWeight: weight,
        fontStyle:"Roboto Condensed"
      }}
    >
      {value}
    </p>
  );
}