import waves from "../images/waves.svg"
import { Icon } from '@iconify/react';


export default function Footer() {
  return (
  <footer id="footer" className="relative mt-20 w-[100%]">
    <div className=" outline outline-5 outline-font rounded-lg absolute right-0 left-0 bottom-24 sm:bottom-40 md:bottom-60 lg:bottom-80 mt-6 mx-6 sm:mx-20 md:mx-30 lg:mx-60 xl:mx-96">
      <form className="grid grid-cols-5 gap-3 px-3 sm:p-8 md:p-12 pb-8 pt-3 text-font">
        <div className="col-span-3 flex items-end">
           <input className=" bg-background w-full outline outline-1 outline-font rounded p-2"  type="text" name="" placeholder="Name" />
        </div>
        <div className="col-span-1"></div>
        <Icon className="col-span-1 h-full w-full rotate-6 " icon="icon-park-outline:stamp" color="#ababab" />
        <input className="col-span-3 bg-background outline outline-1 outline-font rounded p-2" type="text" name="" placeholder="Subject" />
        <div className="col-span-5 pr-1 sm:pr-4 flex items-center justify-between">
          <textarea className="resize-none w-[80%] bg-background outline outline-1 outline-font rounded p-2 " name="message" placeholder="Message"></textarea>
          <button type="submit" className="outline outline-primary w-smallBtn h-smallBtn rounded-full flex items-center justify-center">
            <Icon className="w-6 h-6" icon="bi:send" color="#61dbfb" />
          </button>
        </div>
      </form>
    </div>
    <div>
      <img className=" w-full h-full  object-cover" src={waves} alt="" />
    </div>
  </footer>
  )
}



{/* <Icon className="h-logo w-logo" icon="bi:github" color="#61dbfb" />
<Icon className="h-logo w-logo" icon="mdi:linkedin" color="#61dbfb" /> */}

{/* <h1 className="text-primary text-2xl mb-24 sm:mb-2 md:mb-0 mx-6 sm:mx-20 md:mx-30 lg:mx-40 2xl:mx-96">Get in touch! &#128075;</h1> */}
// style={{backgroundImage: `url(${phillipe})`}} 
// 
// <h1 className="text-primary text-2xl mb-24 sm:mb-2 md:mb-0 mx-6 sm:mx-20 md:mx-30 lg:mx-40 2xl:mx-96">Get in touch! &#128075;</h1>