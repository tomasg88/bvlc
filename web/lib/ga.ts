export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER;

// log the pageview with their URL
export const pageView = (url: URL): void => {
    window.gtag('config', GA_TRACKING_ID, {
        page_path: url,
    });
};

// log specific events happening.
export const pageEvent = ( 
    action: Gtag.EventNames | string, 
    { event_category, event_label, value }: Gtag.EventParams
): void => {
    window.gtag('event', action, {
        event_category,
        event_label,
        value,
    });
};
