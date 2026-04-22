'use client';

import { useEffect } from 'react';
import { useLocale } from 'next-intl';

interface PrivacyModalProps {
  onClose: () => void;
}

interface Section {
  heading: string;
  text?: string;
  items?: string[];
}

const privacyContent: Record<string, { title: string; operator: { name: string; address: string[]; email: string }; sections: Section[] }> = {
  en: {
    title: 'Privacy Policy',
    operator: {
      name: 'R. Vichayanon',
      address: ['Kaiser-Friedrich-Allee 15a', 'D-52074 Aachen'],
      email: 'info@thaisedans.nl',
    },
    sections: [
      {
        heading: '1. General Information',
        text: 'When you visit this website, certain technical information is automatically processed in order to ensure the website functions properly and remains secure. We are committed to handling your personal data carefully and in accordance with applicable data protection laws.',
      },
      {
        heading: '2. Data Collection and Processing',
        text: 'When you access this website, the web server automatically processes certain information, including:',
        items: [
          'IP address',
          'Date and time of access',
          'Browser type and version',
          'Operating system',
          'Referrer URL',
        ],
      },
      {
        heading: '3. Legal Basis for Processing',
        text: 'The processing of this data is based on Article 6(1)(f) GDPR, which allows processing where it is necessary for the purposes of a legitimate interest. Our legitimate interest is to ensure the secure, stable, and proper operation of this website.',
      },
      {
        heading: '4. Cookies',
        text: 'This website does not use cookies or similar tracking technologies.',
      },
      {
        heading: '5. Data Sharing',
        text: 'We do not share your personal data with third parties, unless this is required by law.',
      },
      {
        heading: '6. Data Retention',
        text: 'Server log data, including IP addresses, is stored only for as long as necessary to ensure the security and proper functioning of the website. After that, the data is automatically deleted.',
      },
      {
        heading: '7. Your Rights',
        text: 'Under the General Data Protection Regulation (GDPR), you have the following rights:',
        items: [
          'Right of access (Art. 15 GDPR)',
          'Right to rectification (Art. 16 GDPR)',
          'Right to erasure (Art. 17 GDPR)',
          'Right to restriction of processing (Art. 18 GDPR)',
          'Right to object to processing (Art. 21 GDPR)',
        ],
      },
      {
        heading: '8. Changes to This Privacy Policy',
        text: 'We reserve the right to update this Privacy Policy at any time in order to comply with legal requirements or to reflect changes in our services.',
      },
      {
        heading: '9. Contact',
        text: 'If you have any questions about this Privacy Policy, please contact us at info@thaisedans.nl.',
      },
    ],
  },
  nl: {
    title: 'Privacybeleid',
    operator: {
      name: 'R. Vichayanon',
      address: ['Kaiser-Friedrich-Allee 15a', 'D-52074 Aachen'],
      email: 'info@thaisedans.nl',
    },
    sections: [
      {
        heading: '1. Algemene informatie',
        text: 'Wanneer u deze website bezoekt, wordt er automatisch bepaalde technische informatie verwerkt om de goede werking en veiligheid van de website te waarborgen. Wij verwerken uw persoonsgegevens zorgvuldig en in overeenstemming met de toepasselijke privacywetgeving.',
      },
      {
        heading: '2. Gegevensverzameling en -verwerking',
        text: 'Wanneer u deze website bezoekt, verwerkt de webserver automatisch bepaalde informatie, waaronder:',
        items: [
          'IP-adres',
          'Datum en tijdstip van toegang',
          'Browsertype en -versie',
          'Besturingssysteem',
          'Verwijzende URL',
        ],
      },
      {
        heading: '3. Rechtsgrondslag voor verwerking',
        text: 'De verwerking van deze gegevens is gebaseerd op artikel 6(1)(f) AVG, dat verwerking toestaat wanneer dit noodzakelijk is voor de behartiging van gerechtvaardigde belangen. Ons gerechtvaardigde belang is het waarborgen van een veilige, stabiele en goede werking van deze website.',
      },
      {
        heading: '4. Cookies',
        text: 'Deze website maakt geen gebruik van cookies of vergelijkbare trackingtechnologieën.',
      },
      {
        heading: '5. Delen met derden',
        text: 'Wij delen uw persoonsgegevens niet met derden, tenzij dit wettelijk verplicht is.',
      },
      {
        heading: '6. Bewaartermijn',
        text: 'Serverloggegevens, inclusief IP-adressen, worden slechts bewaard zolang dit noodzakelijk is voor de veiligheid en goede werking van de website. Daarna worden de gegevens automatisch verwijderd.',
      },
      {
        heading: '7. Uw rechten',
        text: 'Op grond van de Algemene Verordening Gegevensbescherming (AVG) heeft u de volgende rechten:',
        items: [
          'Recht op inzage (art. 15 AVG)',
          'Recht op rectificatie (art. 16 AVG)',
          'Recht op verwijdering (art. 17 AVG)',
          'Recht op beperking van de verwerking (art. 18 AVG)',
          'Recht om bezwaar te maken tegen verwerking (art. 21 AVG)',
        ],
      },
      {
        heading: '8. Wijzigingen in dit privacybeleid',
        text: 'Wij behouden ons het recht voor dit privacybeleid op elk moment te wijzigen om te voldoen aan wettelijke vereisten of om veranderingen in onze diensten te weerspiegelen.',
      },
      {
        heading: '9. Contact',
        text: 'Als u vragen heeft over dit privacybeleid, kunt u contact met ons opnemen via info@thaisedans.nl.',
      },
    ],
  },
  th: {
    title: 'นโยบายความเป็นส่วนตัว',
    operator: {
      name: 'R. Vichayanon',
      address: ['Kaiser-Friedrich-Allee 15a', 'D-52074 Aachen'],
      email: 'info@thaisedans.nl',
    },
    sections: [
      {
        heading: '1. ข้อมูลทั่วไป',
        text: 'เมื่อคุณเข้าชมเว็บไซต์นี้ ข้อมูลทางเทคนิคบางอย่างจะถูกประมวลผลโดยอัตโนมัติเพื่อให้เว็บไซต์ทำงานได้อย่างถูกต้องและปลอดภัย เราให้ความสำคัญกับการดูแลข้อมูลส่วนบุคคลของคุณตามกฎหมายคุ้มครองข้อมูลที่บังคับใช้',
      },
      {
        heading: '2. การเก็บรวบรวมและประมวลผลข้อมูล',
        text: 'เมื่อคุณเข้าถึงเว็บไซต์นี้ เว็บเซิร์ฟเวอร์จะประมวลผลข้อมูลบางอย่างโดยอัตโนมัติ ได้แก่:',
        items: [
          'ที่อยู่ IP',
          'วันที่และเวลาที่เข้าถึง',
          'ประเภทและเวอร์ชันของเบราว์เซอร์',
          'ระบบปฏิบัติการ',
          'URL ที่อ้างอิง',
        ],
      },
      {
        heading: '3. ฐานทางกฎหมายในการประมวลผล',
        text: 'การประมวลผลข้อมูลนี้อ้างอิงตามมาตรา 6(1)(f) GDPR ซึ่งอนุญาตให้ประมวลผลเมื่อจำเป็นเพื่อประโยชน์อันชอบธรรม เพื่อให้เว็บไซต์นี้ทำงานได้อย่างปลอดภัยและมีเสถียรภาพ',
      },
      {
        heading: '4. คุกกี้',
        text: 'เว็บไซต์นี้ไม่ใช้คุกกี้หรือเทคโนโลยีการติดตามที่คล้ายกัน',
      },
      {
        heading: '5. การแบ่งปันข้อมูล',
        text: 'เราไม่แบ่งปันข้อมูลส่วนบุคคลของคุณกับบุคคลที่สาม เว้นแต่กฎหมายกำหนดให้ต้องทำ',
      },
      {
        heading: '6. การเก็บรักษาข้อมูล',
        text: 'ข้อมูลบันทึกเซิร์ฟเวอร์ รวมถึงที่อยู่ IP จะถูกเก็บไว้เท่าที่จำเป็นเพื่อความปลอดภัยและการทำงานที่เหมาะสมของเว็บไซต์ หลังจากนั้นข้อมูลจะถูกลบโดยอัตโนมัติ',
      },
      {
        heading: '7. สิทธิ์ของคุณ',
        text: 'ภายใต้ GDPR คุณมีสิทธิ์ดังต่อไปนี้:',
        items: [
          'สิทธิ์ในการเข้าถึงข้อมูล (มาตรา 15 GDPR)',
          'สิทธิ์ในการแก้ไขข้อมูล (มาตรา 16 GDPR)',
          'สิทธิ์ในการลบข้อมูล (มาตรา 17 GDPR)',
          'สิทธิ์ในการจำกัดการประมวลผล (มาตรา 18 GDPR)',
          'สิทธิ์ในการคัดค้านการประมวลผล (มาตรา 21 GDPR)',
        ],
      },
      {
        heading: '8. การเปลี่ยนแปลงนโยบายนี้',
        text: 'เราขอสงวนสิทธิ์ในการอัปเดตนโยบายความเป็นส่วนตัวนี้เมื่อใดก็ได้เพื่อให้สอดคล้องกับข้อกำหนดทางกฎหมาย',
      },
      {
        heading: '9. ติดต่อ',
        text: 'หากมีคำถามเกี่ยวกับนโยบายความเป็นส่วนตัวนี้ กรุณาติดต่อเราที่ info@thaisedans.nl',
      },
    ],
  },
};

export default function PrivacyModal({ onClose }: PrivacyModalProps) {
  const locale = useLocale();
  const content = privacyContent[locale as keyof typeof privacyContent] || privacyContent.en;

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    function handleEscape(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose();
    }
    window.addEventListener('keydown', handleEscape);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleEscape);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        className="bg-thai-cream rounded-sm max-w-2xl w-full max-h-[80vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-thai-darkest px-6 py-4 flex items-center justify-between">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-thai-gold">
            {content.title}
          </h2>
          <button
            onClick={onClose}
            className="text-thai-cream/60 hover:text-thai-cream transition-colors"
            aria-label="Close"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="px-6 py-6 space-y-1">
          {/* Operator block */}
          <div className="mb-6 text-sm text-thai-dark/80 leading-relaxed">
            <p className="font-semibold text-thai-darkest">{content.operator.name}</p>
            {content.operator.address.map((line, i) => (
              <p key={i}>{line}</p>
            ))}
            <a
              href={`mailto:${content.operator.email}`}
              className="text-thai-gold hover:underline"
            >
              {content.operator.email}
            </a>
          </div>

          {/* Sections */}
          {content.sections.map((section, i) => (
            <div key={i} className="pb-4">
              <h3 className="font-semibold text-thai-darkest mb-1">{section.heading}</h3>
              {section.text && (
                <p className="text-thai-dark/80 text-sm leading-relaxed">{section.text}</p>
              )}
              {section.items && (
                <ul className="mt-1 space-y-0.5 list-disc list-inside text-sm text-thai-dark/80">
                  {section.items.map((item, j) => (
                    <li key={j}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
