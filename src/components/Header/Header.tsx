import React, { useState } from 'react';
import Modal from 'react-modal';
import ReactPlayer from 'react-player';

import playIcon from '../../icons/play-xxl.png';
import styles from './Header.module.scss';
import { iconsArr } from './icons';
import Row from '../Row';
import { useAppSelector } from '../../hooks/changeDispatchSelectors';
import { currentMovieSelector } from '../../store/selectors';
import userImg from './user.png'

Modal.setAppElement('#root');

const Header = () => {
  const { currentMovie } = useAppSelector(currentMovieSelector);
  const [isVideoModalOpen, setVideoModalOpen] = useState(false);
  const [isInfoModalOpen, setInfoModalOpen] = useState(false);
  const [isHover,setIsHover] = useState(false);
  const enumsArr = ["Search","Home","TV Shows","Movies","Genres","Watch Later"];
  function truncate(str:string, n:number) {
    return str?.length > n ? str.slice(0, n - 1) + '...' : str;
  }

  const handleOpenVideoModal = () => {
    setVideoModalOpen(true);
  };

  const handleCloseVideoModal = () => {
    setVideoModalOpen(false);
  };

  const handleOpenInfoModal = () => {
    setInfoModalOpen(true);
  };

  const handleCloseInfoModal = () => {
    setInfoModalOpen(false);
  };
  const handleSidebarHover = () => {
    setIsHover(true)
  }
  const handleSidebarLeave = () => {
    setIsHover(false)
  }

  return (
    <header className={styles.banner} style={{ backgroundImage: `url(${currentMovie.CoverImage})` }}>



<div className={styles.sideBar} onMouseEnter={handleSidebarHover} onMouseLeave={handleSidebarLeave}>
  <div className={styles.sideBar__icons}>
    {isHover && (
        <div className={styles.userSection}>
            <img src={userImg} alt="icon" />
            <span>Daniela</span>
        </div>
    )}
    {iconsArr.map((el, id) => (
      isHover ? (
        <div className={styles.option} key={id}>
          <img src={el} alt="icon" />
          <h3>{enumsArr[id]}</h3>
        </div>
      ) : (
        <img src={el} alt="icon" key={id} />
      )
    ))}
      {isHover && (
        <div className={styles.setingsn}>
            <h3>Language</h3>
            <h3>GET HELP</h3>
            <h3>EXIT</h3>
        </div>
    )}
  </div>
</div>

      <div className={styles.content}>
        <div className={styles.banner__contects}>
          <h3 className={styles.banner__doDesc}>{currentMovie.Category}</h3>
          <h2>{currentMovie.Title}</h2>
          <span className={styles.banner__info}>{currentMovie.ReleaseYear} {currentMovie.MpaRating} {currentMovie.Duration}</span>
          <h1 className={styles.banner__description}>
            {truncate(currentMovie.Description, 160)}
          </h1>
          <div className={styles.banner__buttons}>
            <button onClick={handleOpenVideoModal} className={styles.banner__buttonP}>
              <img src={playIcon} alt="Play icon" />
              Play
            </button>
            <button onClick={handleOpenInfoModal} className={styles.banner__buttonM}>
              More info
            </button>
          </div>
        </div>
        <Row title='Trending Now' />
      </div>

      {/* Video Modal */}
      <Modal
        isOpen={isVideoModalOpen}
        onRequestClose={handleCloseVideoModal}
        contentLabel="Video Modal"
        className={styles.modal}
        overlayClassName={styles.overlay}
      >
        <ReactPlayer
          url={currentMovie.VideoUrl}
          controls
          width="100%"
          height="100%"
        />
        <button onClick={handleCloseVideoModal} className={styles.closeButton}>
          Close
        </button>
      </Modal>

      {/* Info Modal */}
      <Modal
        isOpen={isInfoModalOpen}
        onRequestClose={handleCloseInfoModal}
        contentLabel="Info Modal"
        className={styles.infoModal}
        overlayClassName={styles.overlay}
      >
    
        <h2>{currentMovie.Title}</h2>
        <p>{currentMovie.Description}</p>
        <p>{currentMovie.Date}</p>
        <p>{currentMovie.ReleaseYear}</p>
        <button onClick={handleCloseInfoModal} className={styles.closeButton}>
          Close
        </button>
      </Modal>
    </header>
  );
};

export default Header;
