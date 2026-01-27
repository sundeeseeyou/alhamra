export default function SectionTitle({ title, subtitle }) {
  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-center text-2xl font-semibold">{title}</h2>
      <p className="mt-3 max-w-xs text-center text-gray-500 md:max-w-lg">
        {subtitle}
      </p>
    </div>
  );
}
