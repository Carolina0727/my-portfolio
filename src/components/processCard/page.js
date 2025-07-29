import Image from "next/image";

export default function ProcessCard({ title, description, highlights = [], images = [] }) {
  return (
    <div className="backgroundPrimary rounded-2xl px-6 mx-18 text-center mb-8">
      <h2 className="playfairRegular text-xl mt-4 mb-4">{title}</h2>
      <p className="catamaran text-sm mx-auto mb-6">
        {highlightText(description, highlights)}
      </p>
      <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-6">
        {images.map((src, index) => (
          <div key={index} className="rounded-xl overflow-hidden shadow-md">
            <Image
              src={src}
              alt={`process-${index}`}
              width={400}
              height={250}
              className="rounded-xl"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

function highlightText(text, highlights) {
  const regex = new RegExp(`(${highlights.join("|")})`, "gi");
  const parts = text.split(regex);

  return parts.map((part, i) =>
    highlights.some(word => word.toLowerCase() === part.toLowerCase()) ? (
      <strong key={i} className="font-semibold">
        {part}
      </strong>
    ) : (
      <span key={i}>{part}</span>
    )
  );
}
