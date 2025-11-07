import React from 'react';
import Image from 'next/image';

const TrustpilotBanner = () => {
  const trustpilotAsset = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a793a9f1-4117-4bf5-9dbe-f67342e2c6d5-fxgt-com/assets/images/Group_png-11.webp";
  
  const businessUnitId = "606ddb69a67b9c00012f199d";
  const templateId = "5419b6ffb0d04a076446a9af";
  const iframeSrc = `https://widget.trustpilot.com/trustboxes/${templateId}/index.html?templateId=${templateId}&businessunitId=${businessUnitId}#locale=en-US&styleHeight=26px&styleWidth=100%&theme=light&fontFamily=Montserrat`;

  return (
    <section className="bg-[#f9fafb] border-t border-[#e5e5e5]">
      <div className="mx-auto w-full max-w-[1200px] px-4 py-8 md:px-6">
        <div className="flex flex-col items-center">
          <Image
            src={trustpilotAsset}
            alt="Trustpilot star logo"
            width={53}
            height={20}
            className="mb-4"
          />
          <div className="w-full md:w-1/2">
            <iframe
              src={iframeSrc}
              title="Trustpilot widget"
              height="26"
              className="w-full"
              style={{ border: 'none' }}
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustpilotBanner;