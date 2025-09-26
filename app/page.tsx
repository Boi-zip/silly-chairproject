"use client"
import Navbar from "@/components/Navbar"
import SellingItem from "@/components/SellingItem"
import Popupcheckout from "@/components/Popupcheckout"
import { useState } from 'react'

export default function Home() {
  const [itemscart, setItemscart] = useState<
    Array<{
        text: string,
        price: number
    }>
>([]);
  const addToCart = (item: { text: string; price: number }) => {
    let price = item.price
    let text = item.text
    setItemscart((item) => [
          ...item,
          { text: text, price: price }
        ]);
  };  
  
  return (
    <div>
      <header>
        <Navbar/>
        </header>

        <main>
        <div className="sellingitems">
          <SellingItem text="Fancy office chair" price="340"
        img="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%2Fid%2FOIP.USiAakfD7Sa6dc9GPxKTbQHaHa%3Fpid%3DApi&f=1&ipt=7b1bdb1ffb202c6e22d7d9b4fbbd45320e4aef5a943484a135752ef446a753b6&ipo=images" additem={addToCart}/>

        
        <SellingItem text="Couchy chair" price="160"
        img="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP._ggTfLTKg0AMhHW2xufh-AHaHa%3Fpid%3DApi&f=1&ipt=649071f0a16fdaaf1408b3b1ad8b92719431e6e67cb7bde6288b92faf9378277&ipo=images" additem={addToCart}/>
        </div>

        <div className="sellingitems">
          <SellingItem text="Relaxing chair" price="75"
        img="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.oerxSqcLKTxOXHFYbGrbWwHaHZ%3Fpid%3DApi&f=1&ipt=c44b6ad9aed58de76fd976ccb0a663fce62d7757e5551f8f20c2c8e8e7dca2c9&ipo=images" additem={addToCart}/>

        <SellingItem text="Wood chair" price="30"
        img="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.SaNLPoCNzNDhtYwdC_QGYwHaHa%3Fpid%3DApi&f=1&ipt=5b11454585eeeb695553bbaacd2b0b9cc946fc326edce14c70b553948b69d8ec&ipo=images" additem={addToCart}/>

        </div>
        <div className="sellingitems">
          <SellingItem text="TABLEEE" price="10000"
        img="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%2Fid%2FOIP.eiWc-OtG5kwuPoStDFUOewHaHa%3Fpid%3DApi&f=1&ipt=086ff80bdebcbc928a00829ffcf8b09c7c6d372e0934956ffbef6d56f6d1e42a&ipo=images" additem={addToCart}/>

        <SellingItem text="Therapy chair" price="520"
        img="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.GbLGDCNsuxQDZgpSqXOiFAHaHa%3Fpid%3DApi&f=1&ipt=b0db3c0276ec83b32ec608b3d3320f131a06c40ce3135c7e67cfd4e6e98d742c&ipo=images" additem={addToCart}/>

        </div>

        <div className="sellingitems">
          <SellingItem text="Gaming chair" price="240"
        img="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%2Fid%2FOIP.8YHEtJklytUAi-Ts7hVxwgHaHa%3Fpid%3DApi&f=1&ipt=ce0893ca4dcd09fe1286953c4c82e73c43de64ab181e9f0034f5cf1844b88097&ipo=images" additem={addToCart}/>

        <SellingItem text="Skeleton chair" price="420"
        img="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%2Fid%2FOIP.Z5yLLW-ritzZNymPKZ1PbgHaHP%3Fpid%3DApi&f=1&ipt=97a275a90d90e16cc68d56494752cbd09bf0612249a5a0c17cf879ca9905a813&ipo=images" additem={addToCart}/>

        </div>
         <div className="sellingitems">
          <SellingItem text="Plastic chair" price="20"
        img="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%2Fid%2FOIP.h9yGeIos4OSErk-lVUlK3wHaHa%3Fpid%3DApi&f=1&ipt=ef2512b8fc8e47c65656b65cfe73155b96acc21867110fa1281a7c0ce1138791&ipo=images" additem={addToCart}/>

        <SellingItem text="Questionable chair" price="115"
        img="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%2Fid%2FOIP.W3ecfVn-KTpIz00yktm9sAHaHa%3Fpid%3DApi&f=1&ipt=46443e4ccc5505ff0f5d73693d3a02cd8078c19c4d33fd31ac17e7b9c2415799&ipo=images" additem={addToCart}/>

        </div>

        </main>
        <footer>
          <Popupcheckout items={itemscart}/>
        </footer>
    </div>
  );
}
