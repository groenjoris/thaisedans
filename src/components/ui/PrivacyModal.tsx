'use client';

import { useEffect } from 'react';
import { useLocale } from 'next-intl';

interface PrivacyModalProps {
  onClose: () => void;
}

const privacyContent = {
  en: {
    title: 'Privacy Statement',
    sections: [
      {
        heading: 'General',
        text: 'Akhira Thai Dance, located in Amsterdam, The Netherlands, is responsible for the processing of personal data as described in this privacy statement.',
      },
      {
        heading: 'Personal Data We Process',
        text: 'Akhira Thai Dance processes your personal data because you use our services and/or because you provide this information to us yourself. Below is an overview of the personal data we process: first and last name, email address, telephone number.',
      },
      {
        heading: 'Purpose of Data Processing',
        text: 'Akhira Thai Dance processes your personal data for the following purposes: to handle your inquiries and requests, to contact you by phone or email if necessary to perform our services, and to inform you about changes to our services.',
      },
      {
        heading: 'Data Retention',
        text: 'Akhira Thai Dance does not store your personal data longer than is strictly necessary to achieve the purposes for which your data is collected.',
      },
      {
        heading: 'Sharing with Third Parties',
        text: 'Akhira Thai Dance does not sell your data to third parties and will only provide this to third parties if this is necessary for the execution of our agreement with you or to comply with a legal obligation.',
      },
      {
        heading: 'Cookies',
        text: 'This website does not use tracking cookies. We may use functional cookies that are necessary for the website to function properly.',
      },
      {
        heading: 'Your Rights',
        text: 'You have the right to view, correct or delete your personal data. You also have the right to withdraw any consent you have given for data processing or to object to the processing of your personal data. You can send a request for access, correction, deletion, or data transfer of your personal data, or a request to withdraw consent or object to processing, to oui@thaisedans.nl.',
      },
      {
        heading: 'Contact',
        text: 'If you have questions about this privacy statement, please contact us: Akhira Thai Dance, oui@thaisedans.nl, +31 6 48262749.',
      },
    ],
  },
  nl: {
    title: 'Privacy Statement',
    sections: [
      {
        heading: 'Algemeen',
        text: 'Akhira Thaise Dans, gevestigd in Amsterdam, Nederland, is verantwoordelijk voor de verwerking van persoonsgegevens zoals beschreven in deze privacyverklaring.',
      },
      {
        heading: 'Persoonsgegevens die wij verwerken',
        text: 'Akhira Thaise Dans verwerkt uw persoonsgegevens doordat u gebruik maakt van onze diensten en/of omdat u deze gegevens zelf aan ons verstrekt. Hieronder vindt u een overzicht van de persoonsgegevens die wij verwerken: voor- en achternaam, e-mailadres, telefoonnummer.',
      },
      {
        heading: 'Doel van gegevensverwerking',
        text: 'Akhira Thaise Dans verwerkt uw persoonsgegevens voor de volgende doeleinden: het afhandelen van uw vragen en verzoeken, u te kunnen bellen of e-mailen indien dit nodig is om onze dienstverlening uit te voeren, en u te informeren over wijzigingen van onze diensten.',
      },
      {
        heading: 'Bewaartermijn',
        text: 'Akhira Thaise Dans bewaart uw persoonsgegevens niet langer dan strikt nodig is om de doelen te realiseren waarvoor uw gegevens worden verzameld.',
      },
      {
        heading: 'Delen met derden',
        text: 'Akhira Thaise Dans verkoopt uw gegevens niet aan derden en verstrekt deze uitsluitend indien dit nodig is voor de uitvoering van onze overeenkomst met u of om te voldoen aan een wettelijke verplichting.',
      },
      {
        heading: 'Cookies',
        text: 'Deze website gebruikt geen tracking cookies. We gebruiken mogelijk functionele cookies die noodzakelijk zijn voor het goed functioneren van de website.',
      },
      {
        heading: 'Uw rechten',
        text: 'U heeft het recht om uw persoonsgegevens in te zien, te corrigeren of te verwijderen. Daarnaast heeft u het recht om uw eventuele toestemming voor de gegevensverwerking in te trekken of bezwaar te maken tegen de verwerking van uw persoonsgegevens. U kunt een verzoek tot inzage, correctie, verwijdering, gegevensoverdracht, of een verzoek tot intrekking van toestemming of bezwaar sturen naar oui@thaisedans.nl.',
      },
      {
        heading: 'Contact',
        text: 'Als u vragen heeft over deze privacyverklaring, neem dan contact met ons op: Akhira Thaise Dans, oui@thaisedans.nl, +31 6 48262749.',
      },
    ],
  },
  th: {
    title: 'นโยบายความเป็นส่วนตัว',
    sections: [
      {
        heading: 'ทั่วไป',
        text: 'Akhira Thai Dance ตั้งอยู่ใน Amsterdam ประเทศเนเธอร์แลนด์ เป็นผู้รับผิดชอบในการประมวลผลข้อมูลส่วนบุคคลตามที่อธิบายไว้ในนโยบายความเป็นส่วนตัวนี้',
      },
      {
        heading: 'ข้อมูลส่วนบุคคลที่เราประมวลผล',
        text: 'Akhira Thai Dance ประมวลผลข้อมูลส่วนบุคคลของคุณเนื่องจากคุณใช้บริการของเราและ/หรือเพราะคุณให้ข้อมูลนี้แก่เราเอง ข้อมูลที่เราประมวลผล: ชื่อ-นามสกุล, อีเมล, เบอร์โทรศัพท์',
      },
      {
        heading: 'วัตถุประสงค์',
        text: 'Akhira Thai Dance ประมวลผลข้อมูลส่วนบุคคลของคุณเพื่อจัดการคำถามและคำขอของคุณ ติดต่อคุณทางโทรศัพท์หรืออีเมลหากจำเป็น และแจ้งให้คุณทราบเกี่ยวกับการเปลี่ยนแปลงบริการของเรา',
      },
      {
        heading: 'สิทธิ์ของคุณ',
        text: 'คุณมีสิทธิ์ในการดู แก้ไข หรือลบข้อมูลส่วนบุคคลของคุณ คุณสามารถส่งคำขอไปที่ oui@thaisedans.nl',
      },
      {
        heading: 'ติดต่อ',
        text: 'หากคุณมีคำถามเกี่ยวกับนโยบายความเป็นส่วนตัวนี้ กรุณาติดต่อเรา: Akhira Thai Dance, oui@thaisedans.nl, +31 6 48262749',
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
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        className="bg-thai-cream rounded-sm max-w-2xl w-full max-h-[80vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-thai-darkest px-6 py-4 flex items-center justify-between">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-thai-gold">
            {content.title}
          </h2>
          <button
            onClick={onClose}
            className="text-thai-cream/60 hover:text-thai-cream transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="px-6 py-6 space-y-5">
          {content.sections.map((section, i) => (
            <div key={i}>
              <h3 className="font-semibold text-thai-darkest mb-1">{section.heading}</h3>
              <p className="text-thai-dark/80 text-sm leading-relaxed">{section.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
