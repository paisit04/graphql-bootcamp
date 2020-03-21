import ApolloBoost, { gql } from "apollo-boost";

const client = new ApolloBoost({
  uri: "http://graphql.test/graphql"
});

const getUsers = gql`
  query {
    users {
      id
      name
    }
  }
`;

client
  .query({
    query: getUsers
  })
  .then(response => {
    let html = "";
    response.data.users.forEach(user => {
      html += `
<div>
    <h3>${user.name}</h3>
</div> `;
    });
    document.getElementById("users").innerHTML = html;
  }).catch(err => {
    let html = "";
    err.graphQLErrors.forEach(error => {
      html += `
<div>
    <h3>Error ${error.message}</h3>
</div> `;
    });
    document.getElementById("users").innerHTML = html;
  });

