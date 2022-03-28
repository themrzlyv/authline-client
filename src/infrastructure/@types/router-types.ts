export interface iRoute {
  path: string;
  name: string;
  exact?: boolean;
  component: React.ComponentType<any>;
}
