export type CourseStatus = "ACTIVE" | "COMPLETED" | "CARRY_OVER";

export interface Course {
  id: string;
  code: string;
  title: string;
  status: CourseStatus;
  instructor: {
    name: string;
    avatar?: string;
  };
  attendance: number; // %
  grade?: string; // A, B+, C, F, etc
  nextClass?: {
    day: string;
    time: string;
    location: string;
  };
  alert?: {
    type: "warning" | "error";
    title: string;
    subtitle?: string;
  };
}
