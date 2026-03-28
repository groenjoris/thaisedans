import Image from 'next/image';

interface ContentSectionProps {
  id: string;
  title: string;
  paragraphs: string[];
  image?: string;
  image2?: string;
  imageAlt?: string;
  reverse?: boolean;
}

export default function ContentSection({
  id,
  title,
  paragraphs,
  image,
  image2,
  imageAlt = '',
  reverse = false,
}: ContentSectionProps) {
  return (
    <section id={id} className="scroll-mt-24 mb-16 last:mb-0">
      <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold text-thai-darkest mb-6">
        {title}
      </h2>

      <div
        className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8`}
      >
        <div className="flex-1 space-y-4">
          {paragraphs.map((p, i) => (
            <p key={i} className="text-thai-dark/80 leading-relaxed">
              {p}
            </p>
          ))}
        </div>

        {image && (
          <div className="flex-shrink-0 flex flex-col gap-4">
            <div className="relative w-full lg:w-72 aspect-[3/4] rounded-sm overflow-hidden">
              <Image
                src={image}
                alt={imageAlt || title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 288px"
              />
            </div>
            {image2 && (
              <div className="relative w-full lg:w-72 aspect-[4/3] rounded-sm overflow-hidden">
                <Image
                  src={image2}
                  alt={imageAlt || title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 288px"
                />
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
