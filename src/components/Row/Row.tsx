import { FC, useEffect, useRef } from "react";
import { IRow } from "./RowTypes";
import data from '../../data.json';
import styles from './Row.module.scss'
import { useAppDispatch } from "../../hooks/changeDispatchSelectors";
import { setCurentMovie } from "../../store/features/movieSlice";

const Row: FC<IRow> = ({ title }) => {
  const elRef = useRef<HTMLDivElement>(null);
  const dispatch = useAppDispatch();
  const addCurrent = (movie:any) => {
    dispatch(setCurentMovie(movie))
  }
  useEffect(() => {
    const el = elRef.current;
    
    if (el) {
      const onWheel = (e: WheelEvent) => {
        if (e.deltaY === 0) return;
        e.preventDefault();
        el.scrollTo({
          left: el.scrollLeft + e.deltaY * 3,
          behavior: "smooth",
        });
      };

      el.addEventListener("wheel", onWheel);

      return () => el.removeEventListener("wheel", onWheel);
    }
  }, []);

  return (
    <div className={styles.row}>
      <h2>{title}</h2>
      <div className={styles.row__posters} ref={elRef}>
        {data.TendingNow.map((movie) => (
          <img
            className={styles.row__poster}
            key={movie.Id}
            onClick={()=>addCurrent(movie)}
            src={movie.CoverImage}
            alt={movie.TitleImage}
          />
        ))}
      </div>
    </div>
  );
};

export default Row;