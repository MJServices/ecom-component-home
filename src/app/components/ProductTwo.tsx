import { Inter_Tight } from "next/font/google";
import Image from "next/image";

const inter = Inter_Tight({ subsets: ["latin"] });

function ProductTwo() {
  const products = [
    { id: 1, title: "Ceramic Vase", price: "$25", imageUrl: "https://images.unsplash.com/photo-1533616688419-b7a585564566?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 2, title: "Ceramic Plate", price: "$15", imageUrl: "https://plus.unsplash.com/premium_photo-1672976877450-663683d52670?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 3, title: "Ceramic Mug", price: "$10", imageUrl: "https://plus.unsplash.com/premium_photo-1719289799351-a05299eaee54?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  ];

  return (
    <section className="px-6 py-12">
      <div
        className={`${inter.className} text-3xl md:text-4xl font-light text-zinc-600 text-start my-10 bottom-14 heading`}
      >
        Our popular products
      </div>
      <div className="flex flex-wrap justify-between">
        {products.map((product) => {
            {if(product.id == 1){
                return (
                    <div
                    key={product.id}
                    className="img-cont flex flex-col justify-center w-full sm:w-1/2 md:w-1/2 p-4"
                  >
                    <Image
                      src={product.imageUrl}
                      alt={product.title}
                      className="h-80 w-full object-cover mb-4"
                      width={700}
                      height={900}
                    />
                    <div className="text-xl font-light text-zinc-700">{product.title}</div>
                    <div className="text-md text-zinc-500">{product.price}</div>
                  </div>
                )
            }else{
                return(
                    <div
                      key={product.id}
                      className="img-cont flex flex-col justify-center w-full sm:w-1/2 md:w-1/4 p-4"
                    >
                      <Image
                        src={product.imageUrl}
                        alt={product.title}
                        className="h-80 w-72 object-cover mb-4"
                        width={700}
                        height={900}
                      />
                      <div className="text-xl font-light text-zinc-700">{product.title}</div>
                      <div className="text-md text-zinc-500">{product.price}</div>
                    </div>
                  )
            }}
            
        })}
      </div>
    </section>
  );
}

export default ProductTwo;