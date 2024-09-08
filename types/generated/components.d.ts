import type { Schema, Attribute } from '@strapi/strapi';

export interface CommonImageGallery extends Schema.Component {
  collectionName: 'components_common_image_galleries';
  info: {
    displayName: 'ImageGallery';
    icon: 'landscape';
  };
  attributes: {
    images: Attribute.Media<'images', true> & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'common.image-gallery': CommonImageGallery;
    }
  }
}
