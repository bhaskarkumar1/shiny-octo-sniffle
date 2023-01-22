import React,{useState,useEffect} from "react";

function Right() {
  const video1="https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/6341303c29c5340961dc9ae6_Mco-1-transcode.mp4";
  const [currentVideo, setCurrentVideo] = useState(video1);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  function handleScroll() {
    const div0 = document.getElementById("col0");

    const rect0 = div0.getBoundingClientRect();
    if (rect0.top < window.innerHeight && rect0.bottom > 0) {
      setCurrentVideo(video1);
    }

    const div1 = document.getElementById("col1");

    const rect1 = div1.getBoundingClientRect();
    if (rect1.top < window.innerHeight && rect1.bottom > 0) {
      const video2="https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/63413ff244f1dc616b7148a0_Mco-transcode.mp4";
      setCurrentVideo(video2);
    }

    const div2 = document.getElementById("col2");

    const rect2 = div2.getBoundingClientRect();
    if (rect2.top < window.innerHeight && rect2.bottom > 0) {
      const video3="https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/63455a67996ba248148c4e31_add-options%20(3)-transcode.mp4";
      setCurrentVideo(video3);
    }

  }
  



  return (
    <div className="right">
    
    

      <video key={currentVideo} width="800px" height="600px" autoPlay muted loop>

        <source
          src={currentVideo}
          type="video/mp4"
          
        />
         <source src="movie.ogg" type="video/ogg" />
       Your browser does not support the video tag.
      </video>
    </div>
    
  );
}

export default Right;
