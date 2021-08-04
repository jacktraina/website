import { useEffect } from "react";

export const useOutsideClick = (ref : React.RefObject<HTMLDivElement>, callback : () => void) => {
  const handleClick = (e : any) => {
    if (ref.current && !ref.current.contains(e.target)) {
      callback && callback();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  });
};


export const getMonthYear = ( date : Date ) => {
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  try {
    const monthYear = `${months[date.getMonth()]} ${date.getFullYear()}`
    return monthYear;
  } catch {
    return ''
  }
}