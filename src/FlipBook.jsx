import HTMLFlipBook from "react-pageflip";
import { useRef } from "react";
import { motion } from "framer-motion";

export default function FlipBook({ Pages }){
    const bookRef = useRef();

    const handleFlip = (e) =>{
        const currentPage = e.data;
        if(currentPage === Pages.length  - 1){
            setTimeout(()=>{
                bookRef.current.pageFlip().flip(0);
            },10000);
        }
    };
    return(
         <HTMLFlipBook
         ref={bookRef}
      width={400}
      height={600}
      showCover={true}
      className="shadow-2xl"
      onFlip={handleFlip}
    >
      {Pages.map((page, i) => (
        <div
          key={i}
          className={`p-8 font-serif leading-relaxed border border-amber-200 shadow-inner
  ${i === 0 
    ? "flex flex-col items-center justify-center text-center bg-gradient-to-br from-amber-100 to-amber-50" 
    : "bg-gradient-to-br from-amber-50 to-amber-100"
  }`}
        >
             {/* Watermark only for inner pages */}
  {i !== 0 && (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <span className="text-7xl font-extrabold text-gray-300 opacity-65 rotate-325 select-none">
        GK
      </span>
    </div>
  )}
          {
          page.title && <h2 className="text-2xl font-bold mb-4">{page.title}</h2>}
          {page.content}
          <div className="absolute bottom-2 right-4 text-xs text-gray-500">
  Page {i + 1}
</div>
        </div>
      ))}
    </HTMLFlipBook>
    )
}