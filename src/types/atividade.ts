import type { Timestamp } from "firebase/firestore";

export interface Atividade {
  id: string;
  titulo: string;
  descricao: string;
  criadaPor: string; // UID do Firebase Auth (identificador técnico)
  criadaPorNome: string; // apenas exibição
  criadaEm: Timestamp;
  prazo: Timestamp;
  concluida: boolean;
  concluidaPor: string | null; // UID do Firebase Auth
  concluidaPorNome: string | null; // apenas exibição
  concluidaEm: Timestamp | null;
}

export type AtividadeInput = {
  titulo: string;
  descricao: string;
  prazo: Date;
};

export type FiltroAtividade = "todas" | "pendentes" | "atrasadas" | "concluidas";
export type OrdenacaoAtividade = "prazo-asc" | "prazo-desc" | "criadaEm-desc" | "criadaEm-asc";
