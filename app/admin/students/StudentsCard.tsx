import React from "react";
import { MdMoreVert } from "react-icons/md";

type Student = {
  id: string;
  email: string;
  role: string;
  fullName: string;
  department?: string;
  userId?: string;
  level?: string;
  phoneNumber?: string;
};

const StudentsCard = ({ student }: { student: Student }) => {
  return (
    // REMOVED <tbody> FROM HERE
    <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
      <td className="px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-blue-100 overflow-hidden shrink-0 border border-slate-200 dark:border-slate-700">
            {/* Image code */}
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-900 dark:text-white">
              {student.fullName}
            </p>
            <p className="text-xs text-slate-500">{student.email}</p>
          </div>
        </div>
      </td>
      <td className="px-6 py-4">
        <span className="text-sm font-medium text-slate-700 dark:text-slate-300 font-mono">
          {student.userId}
        </span>
      </td>
      <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">
        {student.department || "N/A"}
      </td>
      <td className="px-6 py-4 text-center">
        <span className="px-2 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-xs font-bold rounded">
          {student.level || "N/A"}
        </span>
      </td>
      <td className="px-6 py-4">
        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
          Active
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

export default StudentsCard;

// stuff

{
  /* <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-3">
                              <div className="h-10 w-10 rounded-full bg-slate-200 overflow-hidden shrink-0 border border-slate-200 dark:border-slate-700">
                                <Image
                                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDK5GIWrdJ-dSBs6YqvoJXtQjk6mqLlMzN5A6p0bx_WgsnGCvpceRWsmPwnJwPfaFMtofM8_ZGtgX7TLY_AJN4GLvtr8epEx_5_j2BZ04iLjSUfUL2FmWbZKgGsnZHpOnYFjJzZ9_b2GkFnnZmjsFdyNvfZOQEEvk3Vyt6zmIMZ3R7I5b6sX3sUR47mjZH_ejZ2YuajSwQe6gVxtaI1RYQNNRNjdZ-uEX6Bkl-IpxsqshOCS1xJ46dYHKF_AlxQQ4FrmIOvt6iz8487"
                                  alt="Chioma Obi"
                                  width={40}
                                  height={40}
                                />
                              </div>
                              <div>
                                <p className="text-sm font-semibold text-slate-900 dark:text-white">
                                  Chioma Obi
                                </p>
                                <p className="text-xs text-slate-500">
                                  c.obi@uni.edu.ng
                                </p>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <span className="text-sm font-medium text-slate-700 dark:text-slate-300 font-mono">
                              U2022/LAW/122
                            </span>
                          </td>
                          <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">
                            Jurisprudence
                          </td>
                          <td className="px-6 py-4 text-center">
                            <span className="px-2 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-xs font-bold rounded">
                              300L
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                              Active
                            </span>
                          </td>
                          <td className="px-6 py-4 text-right">
                            <button className="text-slate-400 hover:text-[#0f38bd] transition-colors">
                              <MdMoreVert />
                            </button>
                          </td>
                        </tr>
                        <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-3">
                              <div className="h-10 w-10 rounded-full bg-slate-200 overflow-hidden shrink-0 border border-slate-200 dark:border-slate-700">
                                <Image
                                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuANmGfb1the58g7dAfMXUxEBOpx_UCMlmuXeCCqe_8WZirwQyLTBZQO5FK7LbrC9Fm9eSioqUhUJoV3SK8HjiZC2TJUwKdRIrD98Zd7RZkqPZVZpUuTKgGlhvopU1YPWeYWg4QwO52cDDPAQ8tXXFJlsv5dA_2s-HmlDozIKqpB8Q6OBQGiaZYXXDgWOgh-48MXgg5bVZmPNjwqka67osJICjcm_BBu_pPQFw4iwTXr3qb3d6XtSK_3irzZYoOEPK54yJKTqSKW80kH"
                                  alt="Ibrahim Musa"
                                  width={40}
                                  height={40}
                                />
                              </div>
                              <div>
                                <p className="text-sm font-semibold text-slate-900 dark:text-white">
                                  Ibrahim Musa
                                </p>
                                <p className="text-xs text-slate-500">
                                  musa.i@uni.edu.ng
                                </p>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <span className="text-sm font-medium text-slate-700 dark:text-slate-300 font-mono">
                              U2019/SCI/002
                            </span>
                          </td>
                          <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">
                            Microbiology
                          </td>
                          <td className="px-6 py-4 text-center">
                            <span className="px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-xs font-bold rounded">
                              Grad.
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400">
                              <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                              Graduated
                            </span>
                          </td>
                          <td className="px-6 py-4 text-right">
                            <button className="text-slate-400 hover:text-[#0f38bd] transition-colors">
                              <MdMoreVert />
                            </button>
                          </td>
                        </tr>
                        <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-3">
                              <div className="h-10 w-10 rounded-full bg-slate-200 overflow-hidden shrink-0 border border-slate-200 dark:border-slate-700">
                                <Image
                                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB5BbOdIjqD2gtF0Uri16a5tMrWiPHI0VYXkyANoQ9PA60AWqxIpAMluGQ3D6S8Cr4z7YqoaMcvyfyHmlaRskV20VcH9wUVA5jkctTL8sSo_O5CyOMV-zNq2mnPfSeWjXQ5rYuLt-Ca1LHV2Y4w0YeSjdPcvUSGbrj0-WhOhRxCwuDij2yMSNxBWOzih57NpPvmJWi7WekNlzdRP1ixM4DMwiUgcr7tdpd7GulCKYCLEzlvOo5_00UUjSJkX-OBQMaaJ-L0n4zlMzmL"
                                  alt="Aisha Bello"
                                  width={40}
                                  height={40}
                                />
                              </div>
                              <div>
                                <p className="text-sm font-semibold text-slate-900 dark:text-white">
                                  Aisha Bello
                                </p>
                                <p className="text-xs text-slate-500">
                                  a.bello@uni.edu.ng
                                </p>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <span className="text-sm font-medium text-slate-700 dark:text-slate-300 font-mono">
                              U2023/ART/089
                            </span>
                          </td>
                          <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">
                            History & International Studies
                          </td>
                          <td className="px-6 py-4 text-center">
                            <span className="px-2 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-xs font-bold rounded">
                              100L
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400">
                              <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                              Suspended
                            </span>
                          </td>
                          <td className="px-6 py-4 text-right">
                            <button className="text-slate-400 hover:text-[#0f38bd] transition-colors">
                              <MdMoreVert />
                            </button>
                          </td>
                        </tr>
                        <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-3">
                              <div className="h-10 w-10 rounded-full bg-slate-200 overflow-hidden shrink-0 border border-slate-200 dark:border-slate-700">
                                <Image
                                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDsapYsHdwfzy_3katSpIKIMzsezheqtPupgt099i5acO_vrdpD_81gU_IqmDdkqxiXmSKQ9rOubIMhzO2JUdTUDN_eb3kmoZLq2JX0K2j_ecrKvcxeoDi28ntAAlUCPH_AbZU2XN8uytOL7V6_ceCoJXLZvA3owtY-obROa-pdv0WpnJKdnH15bRexxaRkXrHg9oy09agYX4LaEr3LK3BTqd1g8aHJCJAjnjuRD8HnFROq8P8_-nRfxuaDc8KbDRlVi9blqO0HJ0Nl"
                                  alt="Emeka Nwosu"
                                  width={40}
                                  height={40}
                                />
                              </div>
                              <div>
                                <p className="text-sm font-semibold text-slate-900 dark:text-white">
                                  Emeka Nwosu
                                </p>
                                <p className="text-xs text-slate-500">
                                  e.nwosu@uni.edu.ng
                                </p>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <span className="text-sm font-medium text-slate-700 dark:text-slate-300 font-mono">
                              U2021/ENG/110
                            </span>
                          </td>
                          <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">
                            Mechanical Engineering
                          </td>
                          <td className="px-6 py-4 text-center">
                            <span className="px-2 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-xs font-bold rounded">
                              400L
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                              Active
                            </span>
                          </td>
                          <td className="px-6 py-4 text-right">
                            <button className="text-slate-400 hover:text-[#0f38bd] transition-colors">
                              <MdMoreVert />
                            </button>
                          </td>
                        </tr> */
}
