import { onCLS, onINP, onLCP, onFCP, onTTFB, Metric } from 'web-vitals';

type VitalReportHandler = (metric: Metric) => void;

const reportWebVitals = (onPerfEntry?: VitalReportHandler) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
      onCLS(onPerfEntry);
      onFCP(onPerfEntry);
      onINP(onPerfEntry);
      onLCP(onPerfEntry);
      onTTFB(onPerfEntry);
  }
}

export default reportWebVitals;