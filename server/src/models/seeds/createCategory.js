
exports.seed = async function (knex) {
  await knex('tb_category').insert([
    {
      category: 'Ação',
      category_description: 'Envolve uma história de protagonistas do bem contra protagonistas do mau, normalmente, usando força física para resolver seus conflitos'
    },
    {
      category: 'Aventura',
      category_description: 'É caracterizado como uma história onde um héroi enfrenta uma série de obstáculos, exibindo coragem ao enfretar situações que fogem ao cotidiano.'
    },
    {
      category: 'Comédia',
      category_description: 'É o uso de humor nas artes cênicas. Também pode estar presente em um espetáculo, história, ou até mesmo em um filme, que recorre intensivamente ao humor.'
    },
    {
      category: 'Documentário',
      category_description: 'É uma produção artística, não-ficcional, que se caracteriza principalmente pelo compromisso da exploração da realidade. Isto não significa que represente a realidade «tal como ela é»: o documentário, assim como o cinema de ficção, é uma representação parcial e subjetiva da realidade.'
    },
    {
      category: 'Docuficção',
      category_description: 'É um neologismo que designa uma obra híbrida cujo género se situa entre o documentário e a ficção. É um género que procura captar a realidade “tal como ela é” (como cinema directo ou como cinema-verdade) e que ao mesmo tempo introduz na narrativa elementos irreais ou ficcionais com o intuito de reforçar a representação do real com recurso a determinada forma de expressão artística.'
    },
    {
      category: 'Drama',
      category_description: 'É um texto ficcional, peça teatral ou filme de caráter sério, não cômico, que apresenta um desenvolvimento de fatos e circunstâncias compatíveis com os da vida real.'
    },
    {
      category: 'Espionagem',
      category_description: 'É um gênero popular desde a década de 1960. Neles predomina a intriga, a pancadaria e o mistério, pelo que foram, até bem recentemente, considerados um subgênero dos livros de ação.'
    },
    {
      category: 'Faroeste',
      category_description: 'É um gênero que representa, basicamente, o Velho Oeste dos Estados Unidos.'
    },
    {
      category: 'Fantasia Científica',
      category_description: 'É um gênero misto de narrativa que contém alguns elementos de ficção científica e fantasia. Ambos os gêneros e especialmente a fantasia, são eles mesmos pobremente definidos; consequentemente, a fantasia científica se furta ainda mais a uma definição.'
    },
    {
      category: 'Ficção científica',
      category_description: 'É um gênero de livro que utiliza a ficção científica e a ficção especulativa com base científica de fenômenos que não são totalmente aceitos pela ciência moderna.'
    },
    {
      category: 'Livros de guerra',
      category_description: 'É um gênero que de um lado se confunde com livros de ação e épicos.'
    },
    {
      category: 'Livro policial',
      category_description: 'No gênero policial, os argumentos quase sempre envolvem crimes e criminosos, policiais e detetives particulares, mafiosos e ladrões.'
    },
    {
      category: 'Romance',
      category_description: 'Podem ser definidos como aqueles cujo enredo se desenvolve em torno de um envolvimento amoroso entre os protagonistas.'
    },
    {
      category: 'Suspense',
      category_description: 'É um sentimento de incerteza ou ansiedade mediante as consequências de determinado fato, mais frequentemente referente à perceptividade da audiência em um trabalho dramático.'
    },
    {
      category: 'Terror',
      category_description: 'É um gênero que procura uma reação emocional negativa dos espectadores, ao jogar com os medos primários da audiência.'
    },
    {
      category: 'Thriller',
      category_description: 'É um gênero da literatura, filmes, jogos eletrônicos e televisão que usa o suspense, tensão e excitação como principais elementos do gênero.'
    }
  ]);
};
