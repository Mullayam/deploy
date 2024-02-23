import { Input } from "@/components/ui/input"
import { useState } from "react"

export function Search() {
  const [search, setSearch] = useState(false)
  return (
    <div>
      <Input
        type="search"
        onClick={() => setSearch(!search)}
        onBlur={() => setSearch(false)}
        placeholder="Search..."
        className="mx-2 md:w-[100px] lg:w-[300px] hidden lg:block"
      />     
    </div>
  )
}
