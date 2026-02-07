import React from "react";
import { MdMoreVert } from "react-icons/md";

const Coursecard = ({ course }: any) => {
  return (
    <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
      <td className="px-6 py-4">
        <div>
          <p className="text-sm font-bold text-slate-900 dark:text-white">
            {course.length > 0
              ? course[0].courseTitle
              : "Intro to Computer Science"}
          </p>
          <p className="text-xs font-mono text-[#0f38bd] font-semibold">
            CSC 101
          </p>
        </div>
      </td>
      <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">
        Computer Science
      </td>
      <td className="px-6 py-4">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-slate-100 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-[10px] font-bold">
            PO
          </div>
          <p className="text-sm text-slate-700 dark:text-slate-300">
            Prof. Okonjo
          </p>
        </div>
      </td>
      <td className="px-6 py-4 text-center">
        <span className="text-sm font-semibold text-slate-900 dark:text-white">
          1,240
        </span>
      </td>
      <td className="px-6 py-4 text-center">
        <span className="px-2 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-xs font-bold rounded">
          1st
        </span>
      </td>
      <td className="px-6 py-4 text-right">
        <button className="text-slate-400 hover:text-[#0f38bd] transition-colors">
          <MdMoreVert />
        </button>
      </td>
    </tr>
  );
};

export default Coursecard;
