import { FoodItem } from "../../types"
import Image from 'next/image'
import Link from "next/link"

export default function MenuPage (props: {
  items: FoodItem[]
}) {
  console.log('props.items', props.items)
  const items = props.items.map(item => {
    const href = `/menu/${item.name}`
    return (
      <Link href={href}>
        <div className='menu-item' key={item.name}>
          <h2>{item.name}</h2>
          <h3>${item.price}</h3>
          <Image src={item.image} alt={item.name} height={200} width={300} />
        </div>
      </Link>
    )
  })
  return (
    <div className='container'>
      <h1>Menu</h1>
      {items}
    </div>
  )
}

export const getServerSideProps = async function () {
  return {
    props: {
      items: [
        {
          name: 'Burger',
          price: 10,
          image: '/images/burger.jpg'
        },
        {
          name: 'Pasta',
          price: 15,
          image: '/images/pasta.jpg'
        },
        {
          name: 'Pizza',
          price: 20,
          image: '/images/pizza.jpg'
        }
      ]
    }
  }
}