// Contas autorizadas do Afonso Contábeis.
//
// O e-mail abaixo é TÉCNICO: nunca é exibido na interface.
// Na tela de login o usuário digita apenas o nome amigável (ex.: "Afonso").
// Se a conta for criada com outro e-mail no Firebase Authentication,
// altere apenas o valor `email` aqui.
//
// Nenhuma senha é definida, salva ou exibida por este arquivo.
export const CONTAS = {
  afonso: {
    nome: "Afonso",
    email: "afonso@mascon.local",
  },
} as const;

export type UsuarioKey = keyof typeof CONTAS;

const NOMES: Record<UsuarioKey, string> = {
  afonso: CONTAS.afonso.nome,
};

/** "Afonso" -> e-mail técnico do Firebase Auth. Retorna null se não autorizado. */
export function usernameParaEmail(username: string): string | null {
  const key = username.trim().toLowerCase() as UsuarioKey;
  return key in CONTAS ? CONTAS[key].email : null;
}

/** E-mail -> nome amigável, apenas para exibição. */
export function emailParaNome(email: string | null | undefined): string {
  if (!email) return "Usuário";
  const alvo = email.trim().toLowerCase();
  const chave = (Object.keys(CONTAS) as UsuarioKey[]).find(
    (k) => CONTAS[k].email.toLowerCase() === alvo
  );
  if (chave) return NOMES[chave];
  return email.split("@")[0] ?? "Usuário";
}

/**
 * Nome para exibição do usuário autenticado.
 * Prioriza o displayName da conta; cai no mapa amigável acima.
 */
export function nomeDoUsuario(
  email: string | null | undefined,
  displayName: string | null | undefined
): string {
  const nome = displayName?.trim();
  return nome ? nome : emailParaNome(email);
}
