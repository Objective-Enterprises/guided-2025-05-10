import Link from "next/link"
import { FoodItem } from "../../types"
import Image from 'next/image'

export default function MenuIdPage(props: {
  id: string
  item: FoodItem
}) {
  console.log('props.item', props.item)
  const ingredients = props.item.ingredients.map(ingredient => {
    return (
      <p key={ingredient}>{ingredient}</p>
    )
  })
  return (
    <div className='dish-details-container'>
      <Link href='/menu'>Menu</Link>
      <h1>{props.id}</h1>
      <Image src={props.item.image} alt={props.item.name} width={400} height={300} />
      {ingredients}
      <p>${props.item.price}</p>
    </div>
  )
}

export const getServerSideProps = async function (context: {
  params: {
    id: string
  }
}) {
  const items = [
    {
      name: 'Burger',
      price: 10,
      image: '/images/burger.jpg',
      ingredients: ['Bun', 'Patty', 'Cheese']
    },
    {
      name: 'Pasta',
      price: 15,
      image: '/images/pasta.jpg',
      ingredients: ['Noodles', 'Sauce', 'Spices']
    },
    {
      name: 'Pizza',
      price: 20,
      image: '/images/pizza.jpg',
      ingredients: ['Crust', 'Cheese', 'Sauce']
    }
  ]
  const item = items.find(item => item.name === context.params.id)
  return {
    props: {
      id: context.params.id,
      item
    }
  }
}