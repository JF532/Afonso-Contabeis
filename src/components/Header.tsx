import { useAuth } from "../hooks/useAuth";
import escudoUrl from "../img/vasco-da-gama-rj.svg";

export function Header() {
  const { usuario, logout } = useAuth();

  return (
    <header className="topbar">
      <div className="topbar-inner">
        <div className="brand">
          <img src={escudoUrl} alt="Escudo" className="brand-img" />
          <div>
            <div className="brand-name">Afonso Contábeis</div>
            <div className="brand-sub">Gestão interna</div>
          </div>
        </div>

        <div className="topbar-actions">
          <span className="hello">
            Olá, <strong>{usuario?.nome ?? "Usuário"}</strong>
          </span>
          <button className="btn btn-ghost" onClick={logout}>
            Sair
          </button>
        </div>
      </div>
    </header>
  );
}
