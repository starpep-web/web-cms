import type { Schema, Attribute } from '@strapi/strapi';

export interface TeamTeamMemberCard extends Schema.Component {
  collectionName: 'components_team_team_member_cards';
  info: {
    displayName: 'TeamMemberCard';
    icon: 'user';
  };
  attributes: {
    avatar: Attribute.Media<'images'>;
    name: Attribute.String & Attribute.Required;
    email: Attribute.Email & Attribute.Required;
    occupation: Attribute.String;
    affiliations: Attribute.Text;
    website: Attribute.String;
    location: Attribute.String;
    shortCv: Attribute.RichText;
  };
}

export interface TeamTeamMemberCardGroup extends Schema.Component {
  collectionName: 'components_team_team_member_card_groups';
  info: {
    displayName: 'TeamMemberCardGroup';
    icon: 'folder';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    type: Attribute.Enumeration<['Featured', 'Simple']> &
      Attribute.Required &
      Attribute.DefaultTo<'Simple'>;
    members: Attribute.Component<'team.team-member-card', true> &
      Attribute.Required;
  };
}

export interface PublicationsSoftwarePublication extends Schema.Component {
  collectionName: 'components_publications_software_publications';
  info: {
    displayName: 'SoftwarePublication';
    icon: 'archive';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    downloadUrl: Attribute.String & Attribute.Required;
    sourceUrl: Attribute.String;
    image: Attribute.Media<'images'>;
  };
}

export interface PublicationsPublication extends Schema.Component {
  collectionName: 'components_publications_publications';
  info: {
    displayName: 'Publication';
    icon: 'file';
    description: '';
  };
  attributes: {
    citation: Attribute.RichText & Attribute.Required;
    link: Attribute.String;
  };
}

export interface PublicationsPublicationGroup extends Schema.Component {
  collectionName: 'components_publications_publication_groups';
  info: {
    displayName: 'PublicationGroup';
    icon: 'folder';
  };
  attributes: {
    title: Attribute.String;
    publications: Attribute.Component<'publications.publication', true>;
  };
}

export interface CommonTextImageColumn extends Schema.Component {
  collectionName: 'components_common_text_image_columns';
  info: {
    displayName: 'TextImageColumn';
    icon: 'layout';
    description: '';
  };
  attributes: {
    text: Attribute.RichText & Attribute.Required;
    image: Attribute.Media<'images'> & Attribute.Required;
    flip: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<false>;
  };
}

export interface CommonTextCard extends Schema.Component {
  collectionName: 'components_common_text_cards';
  info: {
    displayName: 'TextCard';
    icon: 'strikeThrough';
    description: '';
  };
  attributes: {
    text: Attribute.RichText & Attribute.Required;
    color: Attribute.Enumeration<['Secondary', 'Dark']> &
      Attribute.Required &
      Attribute.DefaultTo<'Secondary'>;
  };
}

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

export interface CommonFaq extends Schema.Component {
  collectionName: 'components_common_faqs';
  info: {
    displayName: 'FAQ';
    icon: 'question';
  };
  attributes: {
    question: Attribute.Text & Attribute.Required;
    answer: Attribute.RichText & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'team.team-member-card': TeamTeamMemberCard;
      'team.team-member-card-group': TeamTeamMemberCardGroup;
      'publications.software-publication': PublicationsSoftwarePublication;
      'publications.publication': PublicationsPublication;
      'publications.publication-group': PublicationsPublicationGroup;
      'common.text-image-column': CommonTextImageColumn;
      'common.text-card': CommonTextCard;
      'common.image-gallery': CommonImageGallery;
      'common.faq': CommonFaq;
    }
  }
}
