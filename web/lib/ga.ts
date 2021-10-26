declare global {
    interface Window {
        gtag:(a: string, b: string, c: {}) => void;
    }
}


export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS;

// log the pageview with their URL
export const pageView = (url) => {
    window.gtag('config', GA_TRACKING_ID, {
        page_path: url,
    });
};

// log specific events happening.
export const pageEvent = ({ action, category, label, value }) => {
    window.gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value,
    });
};
