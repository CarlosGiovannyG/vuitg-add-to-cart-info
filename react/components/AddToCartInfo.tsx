import React from 'react';
import { useProduct } from 'vtex.product-context';
import { useOrderForm } from 'vtex.order-manager/OrderForm'
// import Totalizers from './Totalizers';
import ButtonGroup from './ButtonGroup';
import { generateBlockClass } from '@vtex/css-handles';
import styles from './styles.css'

const AddToCartInfo = ({ blockClass }: { blockClass: string }) => {
  const productInfo = useProduct()
  const { orderForm: { items, totalizers } } = useOrderForm();
  const container = generateBlockClass(styles.container, blockClass)
  const container_item = generateBlockClass(styles.container_item, blockClass)
  const container_botom = generateBlockClass(styles.container_botom, blockClass)
  console.log("Informacion del producto", productInfo);




  return (
    <>
      <div className={container}>
        {
          items.map((item: any, index: any) => {
            console.log("Informacion del item", item);

            return (
              <div key={index} className={container_item}>
                <div>
                  <img src={item.imageUrls.at1x} alt={item.name} />
                </div>
                <div>
                  <p>{item.name}</p>
                  <p>{item.id}</p>
                  <p>{item.price / 100}</p>
                  <p>Cant: {item.quantity} </p>
                </div>
                <div>
                  <p>Tenemos: {items.length} items en tu compra</p>
                  <p>Total: {totalizers[0]?.value / 100}</p>
                </div>
              </div>
            )
          }
          )
        }
        {/* <Totalizers totalizers={totalizers} /> */}
      </div>
      <div className={container_botom}>
        <ButtonGroup />
      </div>
    </>
  )
}

export default AddToCartInfo

// ProductGroup  ==> Listado de productos
// Totalizers  ==> Valor total
// ButtonGroup  ==> Acciones
