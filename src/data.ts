export interface Experiencia {
  id: string;
  cargo: string;
  empresa: string;
  area: string;
  periodo: string;
  intro: string;
  atuacao: string[];
  contexto?: string;
  tech: string[];
}

export interface Projeto {
  id: string;
  titulo: string;
  tipo: string;
  status: string;
  cor: 'blue' | 'white' | 'green';
  destaque?: boolean;
  resumo: string;
  tech: string[];
  problemaTitulo?: string;
  problema?: string[];
  arquiteturaTitulo?: string;
  arquitetura?: { nome: string; desc: string }[];
  fluxoTitulo?: string;
  fluxo?: { t: string; d: string }[];
  decisao?: string;
  resultado?: string;
  contribuicao?: string;
  competencias: string[];
  nota?: string;
  confidencial?: boolean;
}

export interface Competencia {
  titulo: string;
  desc: string;
  itens: string[];
}

export const apresentacao = [
  'Tenho 23 anos, sou formado em Análise e Desenvolvimento de Sistemas e atualmente curso Ciência da Computação. Meu interesse está em tecnologia, desenvolvimento de software e automação de processos, com experiência prática em Python, AWS e soluções para otimizar atividades.',
  'Gosto de aprender, explorar novas tecnologias e transformar ideias em projetos. Fora do trabalho, literatura, filosofia e jogos alimentam minha curiosidade e criatividade.',
];

export const formacao = [
  { titulo: 'Ciência da Computação', nivel: 'Cursando', prazo: 'Previsão de conclusão: dezembro de 2029' },
  { titulo: 'Análise e Desenvolvimento de Sistemas', nivel: 'Concluído', prazo: 'Concluído no final de 2025' },
];

export const comoTrabalho = [
  { t: 'Entender o problema', d: 'Antes de codar, descubro o que o usuário realmente precisa.' },
  { t: 'Quebrar em etapas', d: 'Transformo pedidos grandes em passos lógicos e executáveis.' },
  { t: 'Otimizar', d: 'Corto etapas e transferências de dados que não servem para nada.' },
  { t: 'IA como apoio', d: 'Uso IA para acelerar, mas a lógica e os testes passam por mim.' },
  { t: 'Visão de negócio', d: 'Ligo a solução técnica à necessidade da área.' },
];

export const interesses = ['Engenharia de Software', 'Backend', 'Cloud Computing', 'Segurança da Informação', 'Cloud Security', 'Inteligência Artificial', 'Automação'];

export const estudando = ['Lógica e algoritmos', 'Python', 'Engenharia de software', 'APIs e backend', 'Banco de dados e SQL', 'Cloud', 'Segurança de aplicações', 'Microsoft Azure'];

export const experiencias: Experiencia[] = [
  {
    id: 'itau',
    cargo: 'Estagiário de Visibilidade Contábil',
    empresa: 'Itaú Unibanco',
    area: 'Finanças',
    periodo: 'Atual',
    intro: 'Trabalho com problemas operacionais que envolvem grandes volumes de informações, arquivos financeiros e consultas, com o objetivo de reduzir tarefas manuais.',
    atuacao: [
      'Automações em Python para processamento de informações financeiras.',
      'Leitura, filtragem e manipulação de arquivos CSV de bases de dados muito grandes, processados em grande quantidade ao mesmo tempo.',
      'Exploração e consulta de dados na AWS com Amazon S3 e Amazon Athena (SQL).',
      'Desenvolvimento de agentes com Microsoft Copilot integrados a fluxos do Power Automate.',
      'Mecanismos de busca, filtragem e consolidação de informações.',
      'Otimização de fluxos de processamento e uso de IA para facilitar a interação com processos.',
    ],
    contexto: 'Os dados costumam estar distribuídos em arquivos com estruturas variadas: períodos diferentes, classificações e máscaras distintas, nomes de colunas pouco intuitivos e informações ausentes em alguns meses. Por isso as soluções não dependem de uma estrutura rígida e padronizada.',
    tech: ['Python', 'CSV', 'AWS S3', 'Amazon Athena', 'SQL', 'Microsoft Copilot', 'Power Automate'],
  },
  {
    id: 'willbank',
    cargo: 'Aprendiz de Control Desk',
    empresa: 'Will Bank',
    area: 'Suporte e operação',
    periodo: 'Jan 2024 – Mar 2025',
    intro: 'Atuei no Control Desk, apoiando o controle da operação com planilhas, dashboards e ferramentas de atendimento.',
    atuacao: [
      'Apoio na automação de planilhas em Excel.',
      'Organização e ajuste de dashboards para acompanhar gastos, horas e indisponibilidade da operação.',
      'Acompanhamento geral das operações do Control Desk.',
      'Rotina com Intercom e Home Agent, e comunicação com as equipes pelo Slack.',
    ],
    tech: ['Intercom', 'Home Agent', 'Slack', 'Excel', 'Dashboards'],
  },
];

export const projetos: Projeto[] = [
  {
    id: 'agente-financeiro',
    titulo: 'Agente e fluxo de processamento de dados',
    tipo: 'Corporativo · Itaú Unibanco',
    status: 'Publicado internamente',
    cor: 'blue',
    destaque: true,
    resumo: 'Fluxo automático no Power Automate que condensa uma base de arquivos muito grande e a traduz, para que o agente precise apenas interpretar a resposta.',
    tech: ['Microsoft Copilot', 'Power Automate', 'IA'],
    problema: [
      'No Itaú, surgiu a necessidade de consultar uma base de dados muito grande, formada por arquivos com milhares de linhas. Usar só um agente era inviável: ele não conseguia ler uma base desse tamanho.',
      'Em vez de forçar o agente a processar tudo, foi preciso repensar como esses dados chegariam até ele.',
    ],
    arquiteturaTitulo: 'Da limitação à solução',
    arquitetura: [
      { nome: 'O limite do agente', desc: 'Identifiquei que o agente não lia a base inteira, o que tornava essa abordagem inviável para esse volume de arquivos.' },
      { nome: 'Fluxo no Power Automate', desc: 'Criei um fluxo automático que vincula e condensa a base de arquivos e traduz o resultado para um formato que o agente consegue usar.' },
      { nome: 'Agente só interpreta', desc: 'O agente deixou de processar os dados. Ele recebe o resultado já condensado e apenas interpreta a resposta para o usuário.' },
    ],
    contribuicao: 'Identifiquei a limitação, planejei a solução e construí o fluxo, definindo o que fica com o fluxo (processar e condensar os dados) e o que fica com o agente (interpretar a resposta). O objetivo era ganhar eficiência e confiabilidade.',
    competencias: ['Análise de limitações', 'Planejamento de soluções', 'Automação com Power Automate', 'Estruturação de fluxos', 'Divisão de responsabilidades', 'Integração com agentes de IA'],
    confidencial: true,
  },
  {
    id: 'automacoes-python',
    titulo: 'Automações em Python',
    tipo: 'Corporativo · Itaú Unibanco',
    status: 'Experiência prática',
    cor: 'white',
    resumo: 'Manutenção e evolução de automações que tratam e consolidam bases de dados de processos internos, com melhorias de validação e de controle de erros.',
    tech: ['Python', 'Tratamento de dados', 'Validação de dados'],
    problemaTitulo: 'Contexto',
    problema: [
      'Uma das minhas principais atividades é manter e evoluir um código que faz o tratamento extenso de uma base de dados, consolidando diferentes informações e preparando os dados para as próximas etapas do processo.',
      'Além da manutenção, desenvolvi melhorias na lógica e na estrutura dessas automações, preservando a lógica original do código.',
    ],
    arquiteturaTitulo: 'Melhorias implementadas',
    arquitetura: [
      { nome: 'Análises comparativas', desc: 'Comparação entre a base atual e bases anteriores para identificar possíveis inconsistências nos dados.' },
      { nome: 'Validações mais robustas', desc: 'Aprimoramento das checagens para aumentar a confiabilidade do processamento.' },
      { nome: 'Alertas visuais', desc: 'Pop-ups avisam quando um erro ou uma inconsistência é identificado.' },
      { nome: 'Parada em validações críticas', desc: 'A execução é interrompida quando uma validação crítica falha, permitindo analisar e corrigir antes de finalizar o processo.' },
    ],
    contribuicao: 'Não se trata de rodar scripts: entendo o processo, analiso os dados, identifico falhas e evoluo códigos que já existiam. Uso ferramentas de IA pontualmente para discutir caminhos, mas o planejamento, a lógica e as decisões são meus. Reviso cada implementação, ajusto o código manualmente quando preciso e questiono sugestões que não correspondem ao comportamento esperado.',
    competencias: ['Manutenção e evolução de código', 'Análise de dados', 'Validação de dados', 'Compreensão de processos', 'Melhorias sem alterar a lógica original'],
    confidencial: true,
  },
  {
    id: 'dados-aws',
    titulo: 'AWS Athena e S3',
    tipo: 'Corporativo · Itaú Unibanco',
    status: 'Experiência prática',
    cor: 'green',
    resumo: 'Consulta e estruturação de dados com SQL no Athena e organização de arquivos no S3, incluindo consultas em camadas que conectam várias Views.',
    tech: ['Amazon Athena', 'Amazon S3', 'SQL', 'Views'],
    problemaTitulo: 'Contexto',
    problema: [
      'No S3, organizo e gerencio as estruturas de armazenamento: criação de pastas e manipulação dos arquivos e dos dados usados nos processos.',
      'No Athena, escrevo consultas SQL e construo Views. Não uso consultas prontas: estruturo a lógica de relacionamento e de transformação dos dados.',
    ],
    arquiteturaTitulo: 'Consultas em camadas',
    arquitetura: [
      { nome: 'Views conectadas', desc: 'Cada View aplica um tratamento e alimenta a seguinte, relacionando dados de diferentes bases.' },
      { nome: 'Tratamento progressivo', desc: 'Os dados são organizados e refinados por camadas, em vez de resolver tudo em uma única consulta.' },
      { nome: 'View final', desc: 'Todas as camadas convergem para uma única View consolidada, mais estruturada e pronta para uso posterior.' },
    ],
    fluxoTitulo: 'Como as camadas se encadeiam',
    fluxo: [
      { t: 'Dados no S3', d: 'Arquivos organizados em pastas e estruturas de armazenamento.' },
      { t: 'Views de tratamento', d: 'As primeiras camadas tratam e organizam cada base.' },
      { t: 'Views de relacionamento', d: 'Camadas intermediárias conectam as bases entre si.' },
      { t: 'View final', d: 'Resultado unificado e consolidado.' },
    ],
    competencias: ['Consultas SQL no Athena', 'Estruturação e relacionamento de Views', 'Consultas em múltiplas camadas', 'Consolidação de bases diferentes', 'Organização de dados no S3'],
    confidencial: true,
  },
  {
    id: 'cotacoes',
    titulo: 'Aplicação de cotação de moedas',
    tipo: 'Projeto em Python',
    status: 'Desenvolvido',
    cor: 'white',
    resumo: 'Aplicação em Python que consulta taxas de câmbio e apresenta os valores convertidos, com atualização automática a cada minuto.',
    tech: ['Python'],
    arquiteturaTitulo: 'Como funciona',
    arquitetura: [
      { nome: 'Consulta de câmbio', desc: 'Obtém as cotações disponíveis na fonte de dados.' },
      { nome: 'Cálculo de conversões', desc: 'Processa as taxas e calcula os valores convertidos.' },
      { nome: 'Atualização a cada minuto', desc: 'Repete a consulta automaticamente para acompanhar as variações mais recentes da fonte.' },
      { nome: 'Apresentação dinâmica', desc: 'Os valores exibidos mudam conforme os dados são atualizados.' },
    ],
    competencias: ['Consulta a fontes de dados', 'Cálculo de conversões', 'Atualização periódica', 'Apresentação dinâmica de informações'],
    nota: 'Os valores acompanham a fonte consultada e são atualizados a cada minuto. Não é uma cotação instantânea nem garantidamente em tempo real.',
  },
  {
    id: 'portfolio',
    titulo: 'Meu portfólio',
    tipo: 'Projeto pessoal · Desenvolvimento web',
    status: 'Em desenvolvimento',
    cor: 'blue',
    resumo: 'Página pessoal com identidade visual própria para apresentar minha trajetória, minhas competências, experiências e projetos de forma clara.',
    tech: ['React', 'HTML', 'CSS', 'GitHub', 'Vercel'],
    arquiteturaTitulo: 'O que o projeto envolve',
    arquitetura: [
      { nome: 'Interface com React', desc: 'Páginas e seções organizadas em componentes.' },
      { nome: 'HTML e CSS', desc: 'Estruturação e estilização da interface.' },
      { nome: 'Identidade visual própria', desc: 'Paleta, tipografia e componentes pensados para dar unidade ao site.' },
      { nome: 'GitHub e Vercel', desc: 'O código será versionado no GitHub e o site publicado na Vercel.' },
    ],
    competencias: ['React', 'HTML e CSS', 'Organização de componentes', 'Identidade visual', 'Git e GitHub'],
  },
];

export const competencias: Competencia[] = [
  {
    titulo: 'Experiência prática profissional',
    desc: 'Usadas no trabalho, em problemas reais.',
    itens: ['Python', 'Lógica de programação', 'Desenvolvimento de sistemas', 'Arquivos CSV', 'Amazon S3', 'Amazon Athena', 'SQL', 'Microsoft Copilot', 'Power Automate', 'APIs', 'IA aplicada', 'Automação de processos', 'Filtragem e consolidação de dados'],
  },
  {
    titulo: 'Conhecimentos e fundamentos',
    desc: 'Base de conhecimento, em nível introdutório ou acadêmico.',
    itens: ['Redes TCP/IP', 'DNS', 'HTTPS', 'Sub-redes', 'Firewall', 'VPN', 'Git e GitHub'],
  },
  {
    titulo: 'Em desenvolvimento',
    desc: 'Estudando ou praticando agora.',
    itens: ['React', 'Vite', 'JavaScript (frontend)', 'CSS', 'Estruturas de dados e algoritmos', 'Segurança da informação', 'Cloud Security', 'Microsoft Azure', 'Arquitetura de software'],
  },
];
