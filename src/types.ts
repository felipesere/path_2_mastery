export type LessonType = {
    id: string,
    title: string,
    subtitle: string,
    status:  LessonStatus
    description: string,
    outputs: Outputs,
    outcomes: Outcomes,
    reading: Readings
}

export type Outputs = Array<string>
export type Outcomes = Array<string>
export type Readings = Array<string>

export type LessonStatus = "done" | "current" | "todo" | "none"
