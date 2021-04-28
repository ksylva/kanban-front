export interface Kanban {
  idKanbanBoard: number;
  name: string;
  sections: Section[];
}

export interface Section {
  idSection: number;
  libelle: string;
  fiches: Card[];
}

export interface Card {
  idFiche: number;
  dateButoire: number;
  duree: number;
  lieu: string;
  url: string;
  note: string;
  user: User[];
  tags: any[];
}

export interface User {
  idUser: number;
  name: string;
  enabled: boolean;
  fiches: Card[];
}

export interface BoardInfo {
  name: string;
  sections: SectionInfo[];
}

export interface SectionInfo {
  libelle: string;
}
