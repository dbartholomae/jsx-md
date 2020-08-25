declare global {
  namespace JSX {
    interface IntrinsicElements {
      "md-raw": {
        children?: string | number;
      };
      "md-text": {
        children?: string | number;
      };
    }
  }
}

export {};
