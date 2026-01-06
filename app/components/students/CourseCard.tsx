import {
  MdMoreVert,
  MdFolderOpen,
  MdCheckCircle,
  MdWarning,
  MdError,
} from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { Course } from "@/types/course";

interface Props {
  course: Course;
}

export default function CourseCard({ course }: Props) {
  const isCompleted = course.status === "COMPLETED";
  const isCarryOver = course.status === "CARRY_OVER";

  return (
    <div
      className={`flex flex-col bg-white dark:bg-[#1a202c] rounded-xl shadow-sm border 
      border-gray-100 dark:border-gray-800 overflow-hidden transition-shadow
      ${isCompleted ? "opacity-90" : "hover:shadow-md"}`}
    >
      {/* Header */}
      <div className="p-5 border-b border-gray-100 dark:border-gray-800 flex justify-between">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <h3 className="text-[#0f38bd] font-bold text-lg">{course.code}</h3>

            <span
              className={`px-2 py-0.5 rounded text-xs font-medium
              ${
                course.status === "ACTIVE"
                  ? "bg-emerald-50 text-emerald-700"
                  : course.status === "COMPLETED"
                  ? "bg-gray-100 text-gray-700"
                  : "bg-red-50 text-red-700"
              }`}
            >
              {course.status.replace("_", " ")}
            </span>
          </div>

          <h4 className="font-semibold text-[#111318] dark:text-white">
            {course.title}
          </h4>
        </div>

        <button className="text-gray-400 hover:text-[#0f38bd]">
          <MdMoreVert />
        </button>
      </div>

      {/* Body */}
      <div className="p-5 flex flex-col gap-4 flex-1">
        {/* Instructor */}
        <div className="flex items-center gap-3">
          <div
            className="size-8 rounded-full bg-gray-200 bg-cover bg-center"
            style={{
              backgroundImage: course.instructor.avatar
                ? `url(${course.instructor.avatar})`
                : undefined,
            }}
          />
          <div>
            <p className="text-xs text-gray-400 uppercase">Instructor</p>
            <p className="text-sm font-medium">{course.instructor.name}</p>
          </div>
        </div>

        {/* Alert / Next Class */}
        {course.alert ? (
          <div
            className={`flex gap-3 p-3 rounded-lg
            ${course.alert.type === "error" ? "bg-red-50" : "bg-amber-50"}`}
          >
            {course.alert.type === "error" ? (
              <MdError className="text-red-600 text-lg" />
            ) : (
              <MdWarning className="text-amber-600 text-lg" />
            )}
            <div>
              <p className="font-semibold">{course.alert.title}</p>
              {course.alert.subtitle && (
                <p className="text-xs text-gray-500">{course.alert.subtitle}</p>
              )}
            </div>
          </div>
        ) : course.nextClass ? (
          <div className="flex gap-3 p-3 bg-gray-50 rounded-lg">
            <SlCalender className="text-[#0f38bd] text-lg" />
            <div>
              <p className="text-xs text-gray-400">Next Class</p>
              <p className="font-semibold">
                {course.nextClass.day}, {course.nextClass.time}
              </p>
              <p className="text-xs text-gray-500">
                {course.nextClass.location}
              </p>
            </div>
          </div>
        ) : null}

        {/* Attendance & Grade */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-xs text-gray-400">Attendance</p>
            <p className="font-bold">{course.attendance}%</p>
          </div>

          <div className="text-right">
            <p className="text-xs text-gray-400">
              {isCompleted ? "Final Grade" : "Latest Grade"}
            </p>
            <p className="font-bold">{course.grade ?? "-"}</p>
          </div>
        </div>

        {isCompleted && (
          <div className="flex items-center gap-2 text-emerald-600 text-sm">
            <MdCheckCircle />
            Course Completed
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="p-4 border-t border-gray-100 dark:border-gray-800 flex gap-2">
        <button className="flex-1 bg-[#0f38bd] text-white py-2 rounded-lg">
          {isCarryOver ? "Register Now" : "View Details"}
        </button>

        {!isCarryOver && (
          <button className="aspect-square flex items-center justify-center border rounded-lg">
            <MdFolderOpen />
          </button>
        )}
      </div>
    </div>
  );
}
