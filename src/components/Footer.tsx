import waves from "../images/waves.svg"
import { Icon } from '@iconify/react';

export default function Footer() {
  return (
  <footer className="w-[100%]">
    <div id="about" className=" flex justify-center" >
      <div className=" flex bottom-2 gap-2">
      </div>
      <img className="w-full h-full  object-cover" src={waves} alt="" />
    </div>
  </footer>
  )
}
{/* <Icon className="h-logo w-logo" icon="bi:github" color="#61dbfb" />
<Icon className="h-logo w-logo" icon="mdi:linkedin" color="#61dbfb" /> */}

// style={{backgroundImage: `url(${phillipe})`}}