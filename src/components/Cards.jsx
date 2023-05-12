import React from 'react'
import { Card } from './Card'
import img1 from "../assets/rp2.jpg"
import img2 from '../assets/p1.png'
import img3 from '../assets/p2.jpg'
import img4 from '../assets/p3.jpg'

export const Cards = () => {
  return (
    <div className='main-body px-[18%] py-[3%]'>
        <Card title="AI + RPA is what we do" desc="Future-Proof your business. Drive efficiency, profitability and deliver on customer experience" image={img1} button="AI + RPA Automation" link="https://www.xivtech.io./services/AIandRPAautomation"/>
        <Card title="Make Bolder Choices" desc="Future-Proof your business. Drive efficiency, profitability and deliverDigital focused strategies to realize market-changing ideas on customer experience" image={img2} button="Build Better Apps" link="https://www.xivtech.io./services/enterprise-apps"/>
        <Card title="Innovate with Speed" desc="Create higher quality software, deliver on customer expectations and business goals" image={img3} button="DevOps" link="https://www.xivtech.io./services/delivery-pipeline-automation"/>
        <Card title="Embrace Cloud" desc="With Cloud-First accelerate innovation and optimize performance" image={img4} button="Cloud Services" link="https://www.xivtech.io./services/cloud"/>
    </div>
  )
}
