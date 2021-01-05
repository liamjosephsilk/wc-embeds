/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface EmbedYoutube {
        "height": string;
        "width": string;
        "youtubeid": string;
    }
}
declare global {
    interface HTMLEmbedYoutubeElement extends Components.EmbedYoutube, HTMLStencilElement {
    }
    var HTMLEmbedYoutubeElement: {
        prototype: HTMLEmbedYoutubeElement;
        new (): HTMLEmbedYoutubeElement;
    };
    interface HTMLElementTagNameMap {
        "embed-youtube": HTMLEmbedYoutubeElement;
    }
}
declare namespace LocalJSX {
    interface EmbedYoutube {
        "height"?: string;
        "width"?: string;
        "youtubeid"?: string;
    }
    interface IntrinsicElements {
        "embed-youtube": EmbedYoutube;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "embed-youtube": LocalJSX.EmbedYoutube & JSXBase.HTMLAttributes<HTMLEmbedYoutubeElement>;
        }
    }
}