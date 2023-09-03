import waves from "../images/waves.svg"
import { Icon } from '@iconify/react';

export default function Footer() {
  return <footer className="">
    <div className="relative flex justify-center" >
      <div className="absolute flex bottom-2 gap-2">
        <Icon className="h-logo w-logo" icon="bi:github" color="#61dbfb" />
        <Icon className="h-logo w-logo" icon="mdi:linkedin" color="#61dbfb" />
      </div>
      <img className="w-full h-full  object-cover" src={waves} alt="" />
    </div>
  </footer>
}

// style={{backgroundImage: `url(${phillipe})`}}