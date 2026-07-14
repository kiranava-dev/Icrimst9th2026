import { Component, type ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

/** Prevents a WebGL/3D scene failure from crashing the whole page — falls back to no 3D layer. */
export class SceneErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: unknown) {
    console.warn('Scientific 3D scene failed to render, falling back to 2D background layers.', error);
  }

  render() {
    if (this.state.hasError) return null;
    return this.props.children;
  }
}
