declare global {
  namespace JSX {
    interface IntrinsicElements {
      'md-text': {
        children?: string | number
      };
    }
  }
}

export {}
