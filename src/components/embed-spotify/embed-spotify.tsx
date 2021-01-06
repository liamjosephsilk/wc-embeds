import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'embed-spotify',
  styleUrl: 'embed-spotify.css',
  shadow: true,
})
export class EmbedSpotify {
  @Prop() spotifylink: string;
  @Prop() height: string = '380';
  @Prop() width: string = '300';

  render() {
    return (
      <div class="embed-spotify">
        <iframe src={`https://open.spotify.com/embed/${this.spotifylink}`}
        width={this.width}
        height={this.height}
        frameborder="0"
        allowtransparency="true"
        allow="encrypted-media">

        </iframe>
      </div>
    );
  }

}
