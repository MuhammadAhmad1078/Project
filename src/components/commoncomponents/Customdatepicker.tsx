// // components/DatePicker.tsx
// import { Calendar, ChevronLeft, ChevronRight } from 'lucide-react';
// import { useState, useEffect, useRef } from 'react';

// interface DatePickerProps {
//   value?: Date | string | null;
//   onChange?: (date: Date | null) => void;
//   className?: string;
//   inputClassName?: string;
//   calendarClassName?: string;
//   headerClassName?: string;
//   dayClassName?: string;
//   selectedDayClassName?: string;
//   todayClassName?: string;
//   disabledDayClassName?: string;
//   monthButtonClassName?: string;
//   yearButtonClassName?: string;
//   weekDayClassName?: string;
//   primaryColor?: string;
//   secondaryColor?: string;
//   fontFamily?: string;
//   fontSize?: string;
//   borderRadius?: string;
//   borderColor?: string;
//   shadow?: string;
//   placeholder?: string;
//   disabled?: boolean;
//   minDate?: Date;
//   maxDate?: Date;
//   showTimePicker?: boolean;
// }

// const Customdatepicker: React.FC<DatePickerProps> = ({
//   value = null,
//   onChange,
//   className = '',
//   inputClassName = '',
//   calendarClassName = '',
//   headerClassName = '',
//   dayClassName = '',
//   selectedDayClassName = '',
//   todayClassName = '',
//   disabledDayClassName = '',
//   monthButtonClassName = '',
//   weekDayClassName = '',
//   primaryColor = 'bg-[#E2BF4B]',
//   secondaryColor = 'bg-[#E2BF4B]',
//   fontFamily = 'font-sans',
//   fontSize = 'text-[1.7vh]',
//   borderRadius = 'rounded-md',
//   borderColor = 'border border-gray-300',
//   shadow = 'shadow-md',
//   placeholder = 'Select date',
//   disabled = false,
//   minDate,
//   maxDate,
//   showTimePicker = false,
// }) => {
//   const [selectedDate, setSelectedDate] = useState<Date | null>(() => {
//     if (typeof value === 'string') return new Date(value);
//     return value || new Date();
//   });
//   const [currentMonth, setCurrentMonth] = useState<Date>(() => selectedDate || new Date());
//   const [showCalendar, setShowCalendar] = useState(false);
//   const [selectedHour, setSelectedHour] = useState<number>(selectedDate?.getHours() || 12);
//   const [selectedMinute, setSelectedMinute] = useState<number>(selectedDate?.getMinutes() || 0);
//   const [isAM, setIsAM] = useState<boolean>(selectedDate ? selectedDate.getHours() < 12 : true);
//   const datePickerRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (datePickerRef.current && !datePickerRef.current.contains(event.target as Node)) {
//         setShowCalendar(false);
//       }
//     };
//     document.addEventListener('mousedown', handleClickOutside);
//     return () => document.removeEventListener('mousedown', handleClickOutside);
//   }, []);

//   useEffect(() => {
//     const date = typeof value === 'string' ? new Date(value) : value || null;
//     setSelectedDate(date);
//     if (date) {
//       setCurrentMonth(new Date(date.getFullYear(), date.getMonth(), 1));
//       setSelectedHour(date.getHours() % 12 || 12);
//       setSelectedMinute(date.getMinutes());
//       setIsAM(date.getHours() < 12);
//     }
//   }, [value]);

//   const handleDateClick = (day: Date) => {
//     if (isDateDisabled(day)) return;
    
//     const newDate = new Date(day);
//     if (showTimePicker) {
//       newDate.setHours(isAM ? selectedHour : selectedHour + 12);
//       newDate.setMinutes(selectedMinute);
//     }
    
//     setSelectedDate(newDate);
//     onChange?.(newDate);
//     if (!showTimePicker) setShowCalendar(false);
//   };

//   const handleTimeChange = () => {
//     if (!selectedDate) return;
    
//     const newDate = new Date(selectedDate);
//     newDate.setHours(isAM ? selectedHour : selectedHour + 12);
//     newDate.setMinutes(selectedMinute);
    
//     setSelectedDate(newDate);
//     onChange?.(newDate);
//   };

//   const isDateDisabled = (date: Date) =>
//     disabled ||
//     (minDate && date < new Date(minDate.setHours(0, 0, 0, 0))) ||
//     (maxDate && date > new Date(maxDate.setHours(23, 59, 59, 999)));

//   const prevMonth = () => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
//   const nextMonth = () => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));

//   const isSameDay = (date1: Date, date2: Date) =>
//     date1.getFullYear() === date2.getFullYear() &&
//     date1.getMonth() === date2.getMonth() &&
//     date1.getDate() === date2.getDate();

//   const formatDate = (date: Date | null) => {
//     if (!date) return '';
//     let formatted = `${String(date.getMonth() + 1).padStart(2, '0')}/${String(date.getDate()).padStart(2, '0')}/${date.getFullYear()}`;
    
//     if (showTimePicker) {
//       const hours = date.getHours() % 12 || 12;
//       const minutes = String(date.getMinutes()).padStart(2, '0');
//       const ampm = date.getHours() < 12 ? 'AM' : 'PM';
//       formatted += `, ${hours}:${minutes} ${ampm}`;
//     }
    
//     return formatted;
//   };

//   const renderHeader = () => {
//     const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
//       'July', 'August', 'September', 'October', 'November', 'December'];
//     return (
//       <div className={`flex items-center justify-between px-2 py-2 ${headerClassName}`}>
//         <button onClick={prevMonth} type='button' className={`p-1 ${monthButtonClassName} ${fontSize} ${borderRadius} hover:${secondaryColor} focus:outline-none`}>
//           <ChevronLeft className="text-white w-5 h-5" />
//         </button>
//         <h2 className={`${fontSize} ${fontFamily} font-medium text-white`}>
//           {`${monthNames[currentMonth.getMonth()]} ${currentMonth.getFullYear()}`}
//         </h2>
//         <button onClick={nextMonth} type='button' className={`p-1 ${monthButtonClassName} ${fontSize} ${borderRadius} hover:${secondaryColor} focus:outline-none`}>
//           <ChevronRight className="text-white w-5 h-5" />
//         </button>
//       </div>
//     );
//   };

//   const renderDays = () => {
//     const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
//     return (
//       <div className="grid grid-cols-7 mb-1">
//         {dayNames.map((day, i) => (
//           <div key={i} className={`${weekDayClassName} ${fontSize} ${fontFamily} text-center font-medium text-white py-1`}>
//             {day}
//           </div>
//         ))}
//       </div>
//     );
//   };

//   const renderCells = () => {
//     const start = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1);
//     const end = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0);
//     const startDate = new Date(start.setDate(start.getDate() - start.getDay()));
//     const endDate = new Date(end.setDate(end.getDate() + (6 - end.getDay())));
//     const rows = [];
//     let days = [];

//     let day = new Date(startDate);
//     while (day <= endDate) {
//       for (let i = 0; i < 7; i++) {
//         const cloneDay = new Date(day);
//         const isToday = isSameDay(day, new Date());
//         const isSelected = selectedDate && isSameDay(day, selectedDate);
//         const isDisabled = isDateDisabled(day);
//         const isCurrentMonth = day.getMonth() === currentMonth.getMonth();

//         let dayClassNames = `${dayClassName} ${fontSize} ${fontFamily} text-center md:py-2 py-[6px] cursor-pointer rounded-full md:w-[35px] md:h-[35px] w-[30px] h-[30px]`;
//         if (isSelected) dayClassNames += ` ${primaryColor} text-black ${selectedDayClassName}`;
//         else if (isToday) dayClassNames += ` ${todayClassName} border border-[#E2BF4B] bg-[#E2BF4B] text-black`;
//         else dayClassNames += isCurrentMonth ? ' text-white' : ' text-gray-500';

//         if (isDisabled) dayClassNames += ` ${disabledDayClassName} cursor-not-allowed opacity-50`;
//         else dayClassNames += ' hover:bg-gray-500 hover:text-white hover:z-50';

//         days.push(
//           <div key={day.toString()} className={dayClassNames} onClick={() => !isDisabled && handleDateClick(cloneDay)}>
//             {day.getDate()}
//           </div>
//         );
//         day.setDate(day.getDate() + 1);
//       }
//       rows.push(<div key={day.toString()} className="grid grid-cols-7">{days}</div>);
//       days = [];
//     }
//     return <div className="mb-1">{rows}</div>;
//   };

//   const renderTimePicker = () => {
//     const hours = Array.from({ length: 12 }, (_, i) => i + 1);
//     const minutes = Array.from({ length: 60 }, (_, i) => i);

//     return (
//       <div className="flex flex-col ml-4 border-l border-gray-600 pl-4">
//         <div className="text-white text-center mb-2 text-[1.8vh] font-medium">Time</div>
//         <div className="flex">
//           <div className="flex-1 mr-2">
//             <div className="text-white text-center mb-1 text-[1.5vh]">Hour</div>
//             <div className="overflow-y-auto max-h-52 h-full no-scrollbar">
//               {hours.map((hour) => (
//                 <div
//                   key={hour}
//                   className={`text-center text-[1.6vh] font-normal py-1 cursor-pointer rounded ${selectedHour === hour ? 'bg-[#E2BF4B] text-black' : 'text-white hover:bg-gray-600'}`}
//                   onClick={() => {
//                     setSelectedHour(hour);
//                     handleTimeChange();
//                   }}
//                 >
//                   {String(hour).padStart(2, '0')}
//                 </div>
//               ))}
//             </div>
//           </div>
          
//           <div className="flex-1 mr-2">
//             <div className="text-white text-center mb-1 text-[1.5vh]">Minute</div>
//             <div className="overflow-y-auto max-h-52 h-full no-scrollbar">
//               {minutes.map((minute) => (
//                 <div
//                   key={minute}
//                   className={`text-center text-[1.6vh] font-normal py-1 cursor-pointer rounded ${selectedMinute === minute ? 'bg-[#E2BF4B] text-black' : 'text-white hover:bg-gray-600'}`}
//                   onClick={() => {
//                     setSelectedMinute(minute);
//                     handleTimeChange();
//                   }}
//                 >
//                   {String(minute).padStart(2, '0')}
//                 </div>
//               ))}
//             </div>
//           </div>
          
//           <div className="flex-1">
//             <div className="text-white text-center mb-1 text-[1.5vh]">AM/PM</div>
//             <div className="overflow-y-auto max-h-52 h-full no-scrollbar ">
//               <div
//                 className={`text-center text-[1.6vh] font-normal py-1 cursor-pointer rounded ${isAM ? 'bg-[#E2BF4B] text-black' : 'text-white hover:bg-gray-600'}`}
//                 onClick={() => {
//                   setIsAM(true);
//                   handleTimeChange();
//                 }}
//               >
//                 AM
//               </div>
//               <div
//                 className={`text-center text-[1.6vh] font-normal py-1 cursor-pointer rounded ${!isAM ? 'bg-[#E2BF4B] text-black' : 'text-white hover:bg-gray-600'}`}
//                 onClick={() => {
//                   setIsAM(false);
//                   handleTimeChange();
//                 }}
//               >
//                 PM
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   };

//   return (
//     <div ref={datePickerRef} className={`relative ${className}`}>
//       <div className="relative">
//         <input
//           type="text"
//           readOnly
//           value={formatDate(selectedDate)}
//           placeholder={placeholder}
//           onClick={() => !disabled && setShowCalendar(!showCalendar)}
//           className={`w-full pl-3 pr-10 py-2 h-[43px] border-0 ${inputClassName} ${borderColor} ${borderRadius} ${shadow} ${fontFamily} ${fontSize} focus:outline-none focus:ring-0 ${disabled ? 'bg-[#23262F] cursor-not-allowed' : 'bg-[#23262F] cursor-pointer'} text-white`}
//           disabled={disabled}
//         />
//         <Calendar className="w-4 absolute right-3 top-2.5 text-white pointer-events-none" />
//       </div>
//       {showCalendar && (
//         <div className={`absolute z-10 mt-1 sm:left-0 -left-[20px] border-0 ${calendarClassName} ${borderColor} ${borderRadius} ${shadow} bg-[#23262F] p-2 ${showTimePicker ? 'md:w-[350px] w-[300px]' : 'w-64'}`}>
//           <div className="flex">
//             <div className={showTimePicker ? 'w-auto' : 'w-full'}>
//               {renderHeader()}
//               {renderDays()}
//               {renderCells()}
//               <div className="flex justify-between mt-2">
//                 <button
//                   className="text-[#E2BF4B] text-[1.8vh] px-3 py-1 hover:bg-gray-700 rounded"
//                   onClick={() => {
//                     setSelectedDate(null);
//                     onChange?.(null);
//                   }}
//                 >
//                   Clear
//                 </button>
//                 <button
//                   className="text-[#E2BF4B] text-[1.8vh] px-3 py-1 hover:bg-gray-700 rounded"
//                   onClick={() => {
//                     const today = new Date();
//                     if (showTimePicker) {
//                       today.setHours(isAM ? selectedHour : selectedHour + 12);
//                       today.setMinutes(selectedMinute);
//                     }
//                     setSelectedDate(today);
//                     onChange?.(today);
//                     setCurrentMonth(new Date(today.getFullYear(), today.getMonth(), 1));
//                   }}
//                 >
//                   Today
//                 </button>
//               </div>
//             </div>
//             {showTimePicker && renderTimePicker()}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Customdatepicker;