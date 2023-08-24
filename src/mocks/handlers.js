import { graphql } from 'msw'

export const handlers = [
  graphql.query('getPokemon', (_, res, ctx) => {
    return res(
      ctx.data({
        pokemon: {
          number: "025",
          name: 'Pikachu',
          attacks: {
            special: [
              {
                ability: {
                  name: 'Discharge'
                },
                type: {
                  name: 'Electric'
                },
                damage: 35
              },
              {
                ability: {
                  name: 'Thunder'
                },
                type: {
                  name: 'Electric'
                },
                damage: 100
              },
              {
                ability: {
                  name: 'Thunderbolt'
                },
                type: {
                  name: 'Electric'
                },
                damage: 55
              },
            ]
          },
        }
      }),
    )
  }),
]
