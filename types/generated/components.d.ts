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
      'team.team-member-card': TeamTeamMemberCard;
      'team.team-member-card-group': TeamTeamMemberCardGroup;
      'common.image-gallery': CommonImageGallery;
    }
  }
}
