import Image from 'next/image'
import React from 'react'
import type { Metadata } from 'next'

// bài 1
const posts = [
  {
    id: 1,
    title: "aaa",
    thumbnailUrl: "red",
    image:"https://www.fmicassets.com/Damroot/Original/10001/race-red.png"
  },
  {
    id: 2,
    title: "bbb",
    thumbnailUrl: "cyan",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsh6TzTbtqzZLeIBPopIm_Bcjd6H-3OHPmDg&s"
  },
  {
    id: 3,
    title: "ccc",
    thumbnailUrl: "orange",
    image:"https://static.vecteezy.com/system/resources/thumbnails/024/358/868/small/yellow-paper-texture-pastel-color-background-illustration-eps10-vector.jpg"
  }
]

export const metadata: Metadata = {
  title: 'Danh sách bài viết', // bài 2
  description: 'học nextjs cơ bản dễ hiểu',
}

export default function page() {
  return (
    // <div>
    //   <img width={200} height={200} src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRa9QlrNDT8NNM4FHaxIYZszOl1y5h6jVnpK06DjySyIm5sEf4J" alt="" />
    //   <Image 
    //     width={200}
    //     height={200} 
    //     src={"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRa9QlrNDT8NNM4FHaxIYZszOl1y5h6jVnpK06DjySyIm5sEf4J"}
    //     alt="aaa"
    //    >
    //    </Image>

    //    <Image 
    //     width={200} 
    //     height={200} 
    //     src={"https://file1.dangcongsan.vn/data/0/images/2023/05/04/upload_2676/men-men-dac-san-voi-ten-goi-doc-la-co-huong-vi-kho-quen-cua-nguoi-mong-202305030928531319.jpg"}
    //     alt="aaa"
    //    >
    //    </Image>
    // </div>


    <div className='flex gap-2'>
      {posts.map((item: any) => {
        return (<div key={item.id} className='border border-collapse w-40 h-52'>
          <div className={`w-40 h-40 bg-${item.thumbnailUrl}-500`}>
            {/* bài 3 */}
            <Image
              width={150}
              height={150}
              src={item.image}
              alt={item.title}
              loading="lazy" // bài 4
            >
            </Image>
          </div>
          <div>{item.title}</div>
        </div>)
      })}
    </div>
  )
}
