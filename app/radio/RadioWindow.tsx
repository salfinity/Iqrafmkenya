import Image from "next/image";
import RadioButton from "./RadioButton"

function RadioWindow() {
  const imageWidth = 400; // Set a reasonable width for your images
  const imageHeight = 600; 
  
  return (
   <div className="relative container box-border border-4 border-slate-500 items-center 
    grid grid-cols-4 gap-4 max-w-5xl md:max-w-6xl mx-auto overflow-clip cursor-pointer bg-slate-300 dark:bg-slate-700">
     <div className="absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" >
     <RadioButton />
     </div>
     <div className="w-full rounded m-0 scale-150 dark:scale-125 hover:shadow-xl
       transition-all duration-200 ease-in-out">
           <Image 
           layout="fixed"
           width={imageWidth}
           height={imageHeight}
           objectFit="cover"
           src="/radiowindow/aqsaday.jpeg"
           alt="image"
           />
           <div className='absolute inset-0 bg-black opacity-0 dark:opacity-30 z-50'></div>
       </div>
       {/* <div className="w-full rounded m-2 scale-125 dark:scale-125 blur-xl dark:blur-none hover:shadow-xl */}
       {/* transition-all duration-200 ease-in-out"> */}
         <div className="w-full h-auto rounded m-0 scale-125 dark:scale-125 hover:shadow-xl
       transition-all duration-200 ease-in-out">
           <Image 
           layout="fixed"
           width={imageWidth}
           height={imageHeight}
           objectFit="cover"
           src="/radiowindow/madinanight.jpeg"
           alt="image"
           />

           <div className='absolute inset-0 bg-black opacity-70 dark:opacity-0 z-50'></div>
       </div>
       <div className="w-full rounded m-0 scale-150 dark:scale-125 hover:shadow-xl
       transition-all duration-200 ease-in-out">
           <Image 
           layout="fixed"
           width={imageWidth}
           height={imageHeight}
           objectFit="cover"
           src="/radiowindow/madinaday.jpeg"
           alt="image"
          />
          <div className='absolute inset-0 bg-black opacity-0 dark:opacity-30 z-50'></div>
       </div>
       {/* <div className="w-full rounded scale-125 ml-auto dark:scale-125 blur-sm dark:blur-none hover:shadow-xl
       transition-all duration-200 ease-in-out"> */}
           <div className="w-full rounded m-0 scale-125 dark:scale-125 hover:shadow-xl
       transition-all duration-200 ease-in-out">
        <Image 
           layout="fixed"
           width={imageWidth}
           height={imageHeight}
           objectFit="cover"
           src="/radiowindow/aqsanight.jpeg"
           alt="image"
           />
           <div className='absolute inset-0 bg-black opacity-70 dark:opacity-0 z-50'></div>
       </div>
     </div>
  )
}

export default RadioWindow
