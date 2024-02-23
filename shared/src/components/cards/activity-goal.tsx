"use client"

import * as React from "react"
import { Minus, Plus } from "lucide-react"
 

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
 
 

export function CardsActivityGoal() {
 
  const [goal, setGoal] = React.useState(350)

  function onClick(adjustment: number) {
    setGoal(Math.max(200, Math.min(400, goal + adjustment)))
  }

  return (
    <Card>
      <CardHeader className="pb-4">
        <CardTitle className="text-base">Move Goal</CardTitle>
        <CardDescription>Set your daily activity goal.</CardDescription>
      </CardHeader>
      <CardContent className="pb-2">
        <div className="flex items-center justify-center space-x-2">
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8 shrink-0 rounded-full"
            onClick={() => onClick(-10)}
            disabled={goal <= 200}
          >
            <Minus className="h-4 w-4" />
            <span className="sr-only">Decrease</span>
          </Button>
          <div className="flex-1 text-center">
            <div className="text-5xl font-bold tracking-tighter">{goal}</div>
            <div className="text-[0.70rem] uppercase text-muted-foreground">
              Calories/day
            </div>
          </div>
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8 shrink-0 rounded-full"
            onClick={() => onClick(10)}
            disabled={goal >= 400}
          >
            <Plus className="h-4 w-4" />
            <span className="sr-only">Increase</span>
          </Button>
        </div>
        <div className="my-3 h-[60px]">
          dddd
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Set Goal</Button>
      </CardFooter>
    </Card>
  )
}