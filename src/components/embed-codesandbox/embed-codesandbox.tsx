import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'embed-codesandbox',
  styleUrl: 'embed-codesandbox.css',
  shadow: true,
})
export class EmbedCodesandbox {

  @Prop() codesanboxid: string;

  render() {
    return (
      <iframe
      src={`https://codesandbox.io/embed/${this.codesanboxid}`}
      allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
      sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
      style={{
        width: '100%',
        height: '500px',
        border: "0",
        borderRadius: '4px',
        overflow: ' hidden',
      }}
    />
    );
  }

}
