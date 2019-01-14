import React from 'react';
import Link from 'next/link';
import propTypes from 'prop-types';
import Title from '../components/styles/Title';
import ItemStyles from '../components/styles/ItemStyles';
import PriceTag from '../components/styles/PriceTag';
import formatMoney from '../lib/formatMoney';

class Item extends React.Component {
  static propTypes = {
    item: propTypes.shape({
      title: propTypes.string.isRequired,
      price: propTypes.number.isRequired,
      description: propTypes.string.isRequired,
      image: propTypes.string.isRequired,
      largeImage: propTypes.string.isRequired,
      price: propTypes.number.isRequired
    })
  };

  render() {
    const { item } = this.props;
    return (
      <ItemStyles>
        {item.image && <img src={item.image} alt={item.title} />}
        <Title>
          <Link
            href={{
              pathname: '/item',
              query: { id: item.id }
            }}>
            {item.title}
          </Link>
        </Title>
        <PriceTag>{formatMoney(item.price)}</PriceTag>
        <p>{item.description}</p>
        <div className='buttonList'>
          <Link
            href={{
              pathname: 'update',
              query: { id: item.id }
            }}>
            Edit ✏️
          </Link>
          <button>Add To Cart</button>
          <button>Delete</button>
        </div>
      </ItemStyles>
    );
  }
}

export default Item;
