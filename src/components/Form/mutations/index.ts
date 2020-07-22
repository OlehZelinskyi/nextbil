import { gql } from 'apollo-boost'

export const userMutation = gql`
mutation(
  $user: SignupInput!
) {
  signup(
    input: $user
  ) {
    
    name
    email
    country
  }
}
`