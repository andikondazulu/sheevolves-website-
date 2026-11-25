// Swap this for <Image src="/your-photo.jpg" ... /> when you have real photos.
export default function Placeholder({ label, className = "" }) {
  return (
    <div className={`placeholder ${className}`} role="img" aria-label={label}>
      <span>{label}</span>
    </div>
  );
}
