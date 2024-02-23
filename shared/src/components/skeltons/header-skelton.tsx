import { buttonVariants } from "@deploy/shared/components/ui/button"
import Link from "next/link"
 
export default function HeaderLoading() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-b-slate-200 bg-white dark:border-b-slate-700 dark:bg-slate-900">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        {/* { theme toggle} */}
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            <Link href={"https://github.com/shadcn/ui"} target="_blank" rel="noreferrer">
              <div
                className={buttonVariants({
                  size: "sm",
                  variant: "ghost",
                  className: "text-slate-700 dark:text-slate-400",
                })}
              >
                {/* { theme toggle} */}
                <span className="sr-only">GitHub</span>
              </div>
            </Link>
            {/* { theme toggle} */}
            <Link
              rel="noreferrer"
              href="/auth/login"
              className={`bg-neutral-50 text-transparent hover:bg-neutral-50 ${buttonVariants(
                {
                  size: "lg",
                }
              )}`}
            ></Link>
          </nav>
        </div>
      </div>
    </header>
  )
}