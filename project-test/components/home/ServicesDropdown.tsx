import Link from "next/link"

function ServicesDropdown() {
  return (
    <div className="p-10 grid grid-cols-4 gap-10">
      <ul className="flex  gap-4 flex-col">
        <li>
          <Link href={`/services/2`} className="text-[16px] leading-7 font-medium">Innovative Digital Solutions</Link>
        </li>
        <li>
          <Link href={`/services/2`} className="text-[16px] leading-7 font-medium">Building the Future Together</Link>
        </li>
        <li>
          <Link href={`/services/2`} className="text-[16px] leading-7 font-medium">Fast and convenient</Link>
        </li>
      </ul>
      <ul className="flex gap-4 flex-col">
        <li>
          <a href="#" className="text-[16px] leading-7 font-medium">....and Defense in All Cases</a>
        </li>
        <li>
          <a href="#" className="text-[16px] leading-7 font-medium">Banks and Financial Institutions</a>
        </li>
        <li>
          <a href="#" className="text-[16px] leading-7 font-medium">Corparate Governmance Services</a>
        </li>
        <li>
          <a href="#" className="text-[16px] leading-7 font-medium">Companies Liquidation</a>
        </li>
        <li>
          <a href="#" className="text-[16px] leading-7 font-medium">Intenral Regulation for Companies</a>
        </li>
      </ul>
      <ul className="flex gap-4 flex-col">
        <li>
          <a href="#" className="text-[16px] leading-7 font-medium">Services for Companies and Institutions</a>
        </li>
        <li>
          <a href="#" className="text-[16px] leading-7 font-medium">Arbitration</a>
        </li>
        <li>
          <a href="#" className="text-[16px] leading-7 font-medium">Intelectual Property</a>
        </li>
        <li>
          <a href="#" className="text-[16px] leading-7 font-medium">Corparate Restructring and Reorganization</a>
        </li>
      </ul>
      <ul className="flex gap-4 flex-col">
        <li>
          <a href="#" className="text-[16px] leading-7 font-medium">Establishing National and Foreign Companies</a>
        </li>
        <li>
          <a href="#" className="text-[16px] leading-7 font-medium">Commercial Agencies</a>
        </li>
        <li>
          <a href="#" className="text-[16px] leading-7 font-medium">Supporting Vision 2030</a>
        </li>
        <li>
          <a href="#" className="text-[16px] leading-7 font-medium">Estates</a>
        </li>
      </ul>
    </div>
  )
}

export default ServicesDropdown