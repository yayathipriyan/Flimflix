import { collection,where,query,getDocs, onSnapshot } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import db from "../../firebase"
import "./Plans.css"
import { loadStripe} from '@stripe/stripe-js'
import { useSelector } from 'react-redux'
import { selectUser } from '../../features/userSlice'
import { addDoc } from 'firebase/firestore'

const Plans = () => {
  const [products, setProducts] = useState([])
  const user = useSelector(selectUser);
  const [subscription,setSubscriptions] = useState(null);

  useEffect(()=>{
    const fetchData = async()=>{
      const q = query(collection(db,"customers",user.uid,"subscriptions"));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc)=>{
        setSubscriptions({
          role:doc.data().role,
          current_period_end:doc.data().current_period_end.seconds,
          current_period_start: doc.data().current_period_start.seconds,
        })
      })
    }
    fetchData();
  },[user.uid])

  useEffect(() => {
    const fetchData = async () => {
      const q = query(collection(db, "products"), where("active", '==', true))

      const querySnapshot = await getDocs(q);
      const products = {};

      querySnapshot.forEach(async (doc) => {
        products[doc.id] = doc.data()

        const priceQuery = collection(doc.ref, "prices");

        const priceSnap = await getDocs(priceQuery);

        priceSnap.docs.forEach((priceDoc) => {
          products[doc.id].prices = {
            priceId: priceDoc.id,
            priceData: priceDoc.data()
          }
        })
      })
      setProducts(products);
    }
    fetchData();
  }, [])

  console.log(subscription);
  const loadCheckout = async (priceId) => {
    if (priceId) { // Check if priceId is defined
      const docRef = await addDoc(collection(db, "customers", user.uid, "checkout_sessions"), {
        price: priceId,
        success_url: window.location.origin,
        cancel_url: window.location.origin,
      })

      onSnapshot(docRef, async (snapShot) => {
        const { error, sessionId } = snapShot.data();
        if (error) {
          alert(`An Error Occurred: ${error.message}`)
        }
        if (sessionId) {
          const stripe = await loadStripe("pk_live_51NnlHSSGUGQgvyeWNslaainm9oRki664HO1iyiw0yfyyIy86qrAskGZV0aj9FCgkJL9TZ6CZKWXbJVSHF48W3vYl006pYdH4k2")
          stripe.redirectToCheckout({ sessionId })
        }
      })
    }
  }


  return (
    <div className='plans'>
      {
        Object.entries(products).map(([productId, productData]) => {
          const isCurrentPackage = productData.name?.toLowerCase().includes(subscription?.role)
          return (
            <div key={productId} className={`${ isCurrentPackage && "plans-plan-disabled"} plans-plan`}>
              <div className='plans-info'>
                <h5>{productData.name}</h5>
                <h6>{productData.description}</h6>
              </div>
              <button onClick={() => !isCurrentPackage && loadCheckout(productData.prices.priceId)}>
                {isCurrentPackage ? "Current Package" :"Subscribe"}
              </button>
            </div>
          )
        })
      }
    </div>
  )
}

export default Plans
