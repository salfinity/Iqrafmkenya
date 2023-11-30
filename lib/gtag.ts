// gtag.ts

export const GA_TRACKING_ID: string | undefined =
  process.env.NEXT_PUBLIC_GOOGLE_ID;

declare global {
  interface Window {
    gtag: (
      event: string,
      action: string,
      params: { [key: string]: any }
    ) => void;
  }
}

export const pageview = (url: string) => {
  if (GA_TRACKING_ID) {
    window.gtag("config", GA_TRACKING_ID, {
      page_path: url,
    });
  } else {
    console.error("GA_TRACKING_ID is undefined");
  }
};

interface EventParams {
  action: string;
  category: string;
  label?: string;
  value?: number;
}

export const event = ({ action, category, label, value }: EventParams) => {
  if (GA_TRACKING_ID) {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  } else {
    console.error("GA_TRACKING_ID is undefined");
  }
};
