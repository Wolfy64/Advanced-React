import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import Error from './ErrorMessage';
import styled from 'styled-components';
import Head from 'next/head';

const SingleItemStyle = styled.div`
  max-width: 1200px;
  margin: 2rem auto;
  box-shadow: ${props => props.theme.bs};
  display: grid;
  grid-auto-columns: 1fr;
  grid-auto-flow: column;
  min-height: 800px;
  img {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }
  .details {
    margin: 3rem;
    font-size: 2rem;
  }
`;

const SINGLE_ITEM_QUERY = gql`
  query SINGLE_ITEM_QUERY($id: ID!) {
    item(where: { id: $id }) {
      id
      title
      description
      largeImage
    }
  }
`;

class SingleItem extends React.Component {
  render() {
    return (
      <Query query={SINGLE_ITEM_QUERY} variables={{ id: this.props.id }}>
        {({ error, loading, data }) => {
          if (!data) return <p>No Item Found for this id: {this.props.id}</p>;
          if (error) return <Error error={error} />;
          if (loading) return <p>Loading...</p>;
          const item = data.item;
          return (
            <SingleItemStyle>
              <Head>
                <title>Sick Fit | {item.title}</title>
              </Head>
              <img src={item.largeImage} alt={item.title} />
              <div className="details">
                <h2>Viewing: {item.title}</h2>
                <p>{item.description}</p>
              </div>
            </SingleItemStyle>
          );
        }}
      </Query>
    );
  }
}

export default SingleItem;
