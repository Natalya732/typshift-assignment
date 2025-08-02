export interface Service {
  name: string;
  description: string;
}

export interface Category {
  title: string;
  services: Service[];
}

export interface Pillar {
  id: string;
  title: string;
  description: string;
  categories: Category[];
}
