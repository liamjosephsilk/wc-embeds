import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'embed-youtube',
  styleUrl: 'embed-youtube.css',
  shadow: true,
})
export class EmbedYoutube {
  @Prop() youtubeid: string;
  @Prop() height: string = '315';
  @Prop() width: string = '560';

  render() {
    return (
      <div class="embed-youtube">
          <iframe
          height={this.height}
          width={this.width}
          src={`https://www.youtube.com/embed/${this.youtubeid}`}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen>
          </iframe>
        </div>
    );
  }

}
