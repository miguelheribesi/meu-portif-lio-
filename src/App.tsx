import { useState, useEffect, type CSSProperties, type ReactNode } from 'react';
import './App.css';
import {
  apresentacao, formacao, comoTrabalho, interesses, estudando, experiencias, projetos, competencias,
  type Projeto,
} from './data';

const FULL = 'SEJA BEM-VINDO';

function useRoute() {
  const read = () => window.location.hash.replace(/^#\/?/, '').split('/');
  const [parts, setParts] = useState<string[]>(read);
  useEffect(() => {
    const onChange = () => { setParts(read()); window.scrollTo(0, 0); };
    window.addEventListener('hashchange', onChange);
    return () => window.removeEventListener('hashchange', onChange);
  }, []);
  return { page: parts[0] || 'inicio', id: parts[1] };
}

/* ---------- Revelação em cascata ao rolar ---------- */
function useScrollReveal(page: string, id?: string) {
  useEffect(() => {
    let observer: IntersectionObserver | undefined;
    const timer = setTimeout(() => {
      observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          el.classList.add('visible');
          observer?.unobserve(el);
          // Depois da entrada, remove a classe de revelação para os hovers voltarem a responder na hora
          setTimeout(() => {
            el.classList.remove('reveal');
            el.style.transitionDelay = '';
          }, 900);
        });
      }, { threshold: 0.1 });

      document.querySelectorAll<HTMLElement>('.panel, .card, .tile').forEach((el, index) => {
        el.classList.add('reveal');
        el.style.transitionDelay = `${(index % 4) * 100}ms`;
        observer?.observe(el);
      });
    }, 100);

    return () => {
      clearTimeout(timer);
      observer?.disconnect();
    };
  }, [page, id]);
}

const Panel = ({ title, children, full }: { title: string; children: ReactNode; full?: boolean }) => (
  <article className={`panel${full ? ' full' : ''}`}>
    <h2 className="panel-title">{title}</h2>
    <div className="panel-body">{children}</div>
  </article>
);

const Chips = ({ items, cls = '' }: { items: string[]; cls?: string }) => (
  <div className={`chips ${cls}`}>{items.map((t) => <span className="chip" key={t}>{t}</span>)}</div>
);

const Head = ({ title, text, crumb }: { title: string; text?: string; crumb?: ReactNode }) => (
  <div className="page-head">
    {crumb && <p className="crumb">{crumb}</p>}
    <h2>{title}</h2>
    {text && <p>{text}</p>}
  </div>
);

function Welcome() {
  const [n, setN] = useState(0);
  useEffect(() => {
    const i = setInterval(() => setN((v) => Math.min(v + 1, FULL.length)), 90);
    return () => clearInterval(i);
  }, []);
  return (
    <p className="welcome" aria-label={FULL}>
      {FULL.slice(0, n)}<span className="cursor">_</span>
    </p>
  );
}

const Globe = () => (
  <svg className="globe" viewBox="0 0 200 200" aria-hidden="true">
    <circle cx="100" cy="100" r="90" />
    {[30, 60].map((rx) => <ellipse key={rx} cx="100" cy="100" rx={rx} ry="90" />)}
    <line x1="100" y1="10" x2="100" y2="190" />
    {[-60, -30, 0, 30, 60].map((y) => {
      const w = Math.sqrt(8100 - y * y);
      return <line key={y} x1={100 - w} y1={100 + y} x2={100 + w} y2={100 + y} />;
    })}
  </svg>
);

const Name = ({ text }: { text: string }) => <h1 className="name" data-text={text}>{text}</h1>;

function Inicio() {
  const destaque = projetos.find((p) => p.destaque);
  const atalhos: [string, string, string, string][] = [
    ['sobre', 'Sobre', 'Formação, jeito de trabalhar e áreas de interesse.', 'blue'],
    ['experiencia', 'Experiência', 'Itaú Unibanco e Will Bank.', 'white'],
    ['projetos', 'Projetos', 'Problemas reais, arquitetura e decisões técnicas.', 'white'],
    ['competencias', 'Competências', 'O que uso no trabalho, o que sei e o que estou aprendendo.', 'blue'],
  ];
  return (
    <>
      <section className="hero">
        <Globe />
        <p className="hud">
          <span className="hud-dot" /> SYS.STATUS: ONLINE &nbsp;//&nbsp; PORTFÓLIO 2026
        </p>
        <Welcome />
        <Name text="MIGUEL" />
        <Name text="HERIBERTO" />
        <p className="subtitle">Desenvolvedor · Automação e Cloud</p>
        <div className="stripe" />
        {apresentacao.map((t) => <p className="lead" key={t}>{t}</p>)}
      </section>

      <div className="grid">
        {destaque && (
          <Panel title="Projeto em destaque" full>
            <span className="tag">{destaque.status}</span>
            <h3 className="role">{destaque.titulo}</h3>
            <p>{destaque.resumo}</p>
            <Chips items={destaque.tech} />
            <p style={{ marginTop: '1.4rem' }}>
              <a className="btn" href={`#/projetos/${destaque.id}`}>Ver o projeto completo</a>
            </p>
          </Panel>
        )}
        <Panel title="Explore" full>
          <div className="cards">
            {atalhos.map(([to, t, d, c]) => (
              <a className={`card ${c}`} href={`#/${to}`} key={to}><h4>{t}</h4><p>{d}</p></a>
            ))}
          </div>
        </Panel>
      </div>
    </>
  );
}

function Sobre() {
  return (
    <div className="page">
      <Head title="Sobre mim" text="Formação, jeito de trabalhar e o que me interessa." />
      <div className="grid">
        {formacao.map((f) => (
          <Panel key={f.titulo} title={`Formação · ${f.nivel}`}>
            <h3 className="role">{f.titulo}</h3>
            <p className="meta">{f.prazo}</p>
          </Panel>
        ))}
        <Panel title="Como eu trabalho" full>
          <div className="tiles">
            {comoTrabalho.map((c) => (
              <div className="tile" key={c.t}><h4>{c.t}</h4><p>{c.d}</p></div>
            ))}
          </div>
        </Panel>
        <Panel title="Áreas de interesse" full>
          <Chips items={interesses} cls="links" />
          <h3 className="sub-title">Em estudo</h3>
          <Chips items={estudando} cls="links" />
        </Panel>
      </div>
    </div>
  );
}

function Experiencia() {
  return (
    <div className="page">
      <Head title="Experiência" text="Onde já atuei e o que fiz em cada lugar." />
      <div className="grid">
        {experiencias.map((e) => (
          <Panel key={e.id} title={e.empresa} full>
            <span className="tag alt">{e.periodo}</span>
            <h3 className="role">{e.cargo}</h3>
            <p className="meta">{e.area}</p>
            <p>{e.intro}</p>
            {e.atuacao.length > 0 && (
              <>
                <h3 className="sub-title">Atuação</h3>
                <ul>{e.atuacao.map((a) => <li key={a}>{a}</li>)}</ul>
              </>
            )}
            {e.contexto && (<><h3 className="sub-title">Contexto dos dados</h3><p>{e.contexto}</p></>)}
            <h3 className="sub-title">{e.id === 'itau' ? 'Tecnologias' : 'Ferramentas'}</h3>
            <Chips items={e.tech} />
            {e.id === 'itau' && (
              <p style={{ marginTop: '1.4rem' }}><a className="btn" href="#/projetos">Ver projetos desta experiência</a></p>
            )}
          </Panel>
        ))}
      </div>
    </div>
  );
}

function Projetos() {
  return (
    <div className="page">
      <Head title="Projetos" text="Cada projeto tem uma página própria com problema, arquitetura, decisões e contribuição." />
      <div className="cards big">
        {projetos.map((p) => (
          <a className={`card ${p.cor}`} href={`#/projetos/${p.id}`} key={p.id}>
            <span className="tag">{p.status}</span>
            <h4>{p.titulo}</h4>
            <p className="meta">{p.tipo}</p>
            <p>{p.resumo}</p>
            <Chips items={p.tech} />
          </a>
        ))}
      </div>
    </div>
  );
}

function ProjetoDetalhe({ id }: { id: string }) {
  const p: Projeto | undefined = projetos.find((x) => x.id === id);
  if (!p) {
    return (
      <div className="page">
        <Head title="Projeto não encontrado" />
        <a className="btn" href="#/projetos">Voltar aos projetos</a>
      </div>
    );
  }
  return (
    <div className="page">
      <Head crumb={<><a href="#/projetos">Projetos</a> / {p.titulo}</>} title={p.titulo} text={`${p.tipo} · ${p.status}`} />
      <div className="grid">
        <Panel title="Resumo" full><p>{p.resumo}</p><Chips items={p.tech} /></Panel>
        {p.problema && (
          <Panel title={p.problemaTitulo || 'Problema'} full>
            {p.problema.map((t) => <p key={t}>{t}</p>)}
          </Panel>
        )}
        {p.arquitetura && (
          <Panel title={p.arquiteturaTitulo || 'Arquitetura'} full>
            <div className="cards">
              {p.arquitetura.map((a) => <div className="card white" key={a.nome}><h4>{a.nome}</h4><p>{a.desc}</p></div>)}
            </div>
          </Panel>
        )}
        {p.fluxo && (
          <Panel title={p.fluxoTitulo || 'Fluxo de funcionamento'} full>
            <ol className="steps">
              {p.fluxo.map((f) => <li key={f.t}><b>{f.t}</b>{f.d}</li>)}
            </ol>
          </Panel>
        )}
        {p.decisao && <Panel title="Decisão técnica"><p>{p.decisao}</p></Panel>}
        {p.resultado && <Panel title="Resultado observado"><p>{p.resultado}</p></Panel>}
        {p.contribuicao && <Panel title="Minha contribuição" full><p>{p.contribuicao}</p></Panel>}
        <Panel title="Competências demonstradas" full><Chips items={p.competencias} /></Panel>
      </div>
      {p.nota && <p className="note">{p.nota}</p>}
      {p.confidencial && (
        <p className="note">
          Projeto de ambiente corporativo. Dados, arquivos, nomes de bases, prompts e códigos internos não são divulgados.
        </p>
      )}
      <p style={{ marginTop: '1.5rem' }}><a className="btn" href="#/projetos">Voltar aos projetos</a></p>
    </div>
  );
}

function Competencias() {
  return (
    <div className="page">
      <Head title="Competências" text="Separadas por nível de experiência, para ficar claro o que uso no trabalho e o que ainda estou aprendendo." />
      <div className="grid">
        {competencias.map((g, i) => (
          <Panel key={g.titulo} title={g.titulo} full={i === 0}>
            <p className="meta">{g.desc}</p>
            <Chips items={g.itens} />
          </Panel>
        ))}
      </div>
    </div>
  );
}

const EMAIL = 'miguelheribesi@gmail.com';
const CONTATOS: [string, string, string, string][] = [
  ['linkedin', 'LinkedIn', 'https://www.linkedin.com/in/miguel-h-silva-981b1225b', 'linkedin.com/in/miguel-h-silva-981b1225b'],
  ['github', 'GitHub', 'https://github.com/miguelheribesi', 'github.com/miguelheribesi'],
  ['email', 'E-mail', `mailto:${EMAIL}`, EMAIL],
];

function Contato() {
  const [ok, setOk] = useState(false);
  const copiar = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setOk(true);
      setTimeout(() => setOk(false), 2000);
    } catch {
      /* sem permissão para copiar */
    }
  };
  return (
    <div className="page">
      <Head title="Contato" text="Vamos conversar? Escolha um canal." />
      <Panel title="Terminal de contato" full>
        <div className="term">
          <p className="dim"><span className="prompt">▸</span> whoami</p>
          <p>miguel_heriberto · desenvolvedor</p>
          <p className="dim"><span className="prompt">▸</span> ls canais</p>
          <ul className="term-links">
            {CONTATOS.map(([k, nome, href, texto]) => (
              <li key={k}>
                <a href={href} {...(k !== 'email' ? { target: '_blank', rel: 'noreferrer' } : {})}>
                  <span className="arrow">&gt;</span><b>{nome}</b><span className="url">{texto}</span>
                </a>
              </li>
            ))}
          </ul>
          <button className="btn small" onClick={copiar}>{ok ? 'E-mail copiado ✓' : 'Copiar e-mail'}</button>
          <p className="dim"><span className="prompt">▸</span> echo mensagem</p>
          <p className="closing">
            Siga o coelho branco ou, mais simples, mande um e-mail.<br />
            Game over? Só se ninguém inserir a moeda.<span className="cursor">_</span>
          </p>
        </div>
      </Panel>
    </div>
  );
}

const NAV: [string, string, string][] = [
  ['inicio', '', 'Início'],
  ['sobre', 'sobre', 'Sobre'],
  ['experiencia', 'experiencia', 'Experiência'],
  ['projetos', 'projetos', 'Projetos'],
  ['competencias', 'competencias', 'Competências'],
  ['contato', 'contato', 'Contato'],
];
const BILL = ['PYTHON', 'AWS', 'REACT', 'AUTOMAÇÃO', 'CLOUD', 'IA APLICADA'];

function Billboard() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % BILL.length), 2400);
    return () => clearInterval(t);
  }, []);
  return (
    <div className="billboard" aria-hidden="true">
      <span className="bb-item" key={i}>{BILL[i]}</span>
    </div>
  );
}

export default function App() {
  const { page, id } = useRoute();
  useScrollReveal(page, id);

  let view: ReactNode;
  if (page === 'sobre') view = <Sobre />;
  else if (page === 'experiencia') view = <Experiencia />;
  else if (page === 'projetos') view = id ? <ProjetoDetalhe id={id} /> : <Projetos />;
  else if (page === 'competencias') view = <Competencias />;
  else if (page === 'contato') view = <Contato />;
  else view = <Inicio />;

  return (
    <div className="app">
      <div className="scanlines" />
      <header className="topbar">
        <nav>
          {NAV.map(([key, path, label], i) => (
            <a
              key={key}
              href={`#/${path}`}
              className={page === key ? 'on' : ''}
              style={{ '--i': i } as CSSProperties}
            >
              {label}
            </a>
          ))}
        </nav>
      </header>
      <Billboard />
      <main className="main">{view}</main>
      <footer className="footer">© 2026 Miguel Heriberto · Desenvolvedor</footer>
    </div>
  );
}
