import React, { FC, ReactElement } from 'react';
import { GA_TRACKING_ID } from 'lib/ga';

export const GoogleScriptHeaderTag: FC = (): ReactElement => (
  <>
    {/* Global Site Tag (gtag.js) - Google Analytics */}
    <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />
    <script
      id="gtag-init"
      dangerouslySetInnerHTML={{
        __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${GA_TRACKING_ID}', {
                        page_path: window.location.pathname,
                    });
                `,
      }}
    />
  </>
);

export const GoogleNoScriptBodyTag: FC = (): ReactElement => (
  <noscript
    dangerouslySetInnerHTML={{
      __html: `
            <iframe 
                src="https://www.googletagmanager.com/ns.html?id=${GA_TRACKING_ID}"
                height="0" width="0" style="display:none;visibility:hidden"
            ></iframe>`,
    }}
  />
);
