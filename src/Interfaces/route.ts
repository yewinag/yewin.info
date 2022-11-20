import React from 'react';

export interface ILayout {
  children?: string | JSX.Element | JSX.Element[];
}

export interface IRoute {
  path?: string;
  component: React.ComponentType;
  layout?: React.ComponentType<ILayout>;
  exact: boolean;
}
