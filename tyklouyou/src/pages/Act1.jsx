import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Act1 = () => {
  const imgContent = useRef(null);
  const img = useRef(null);
  const text = useRef(null);
  const bg = useRef(null);

  useEffect(() => {
    gsap.to(img.current , {
    scale:1.5,
    duration:8,
    scrollTrigger:{
        trigger:bg.current,
        start:"top top",
        end:"bottom bottom",
        scrub:1,
        toggleActions:"restart none none none",
        pin:true,
        scrub:1,
    }
  })
  }, []);

  return (
    <div className="act1" ref={bg}>
      <div className="img-content" ref={imgContent}>
        <div className="img" ref={img}>
          <img
            src="./assets/img/vanne/De Vannes à Locmariaquer et Port-Crouesty, week-end de charme dans le Morbihan.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="text" ref={text}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
          placeat ipsa provident quae recusandae aliquid quaerat molestiae
          facilis, reprehenderit, accusantium ipsum deleniti similique, assumenda
          dolore voluptate veniam dicta delectus repellat. Possimus esse doloremque
          eaque omnis cupiditate quod quisquam dolorum dolore illum iste debitis
          eius officia et est, magni delectus optio expedita velit. Omnis dolorum,
          totam sint tenetur voluptas tempore, repudiandae, facere harum quae nam
          eum recusandae quam debitis. Et molestiae optio sequi eligendi animi
          rerum? Provident sunt accusantium recusandae vel tempore est, dolorem
          repudiandae dolorum voluptates eveniet, quam reiciendis dicta facere
          impedit porro, totam molestias rem optio aperiam doloremque cum
          eligendi. Ducimus, enim perferendis. Quos enim hic, quia ex quo
          exercitationem asperiores officia nostrum in non laudantium ullam. Dicta
          dignissimos molestiae atque provident neque a ipsa ut delectus, modi,
          quidem nostrum facilis accusamus quibusdam eaque obcaecati reiciendis
          quaerat illo laborum, nisi in maxime? Quibusdam sapiente numquam
          reprehenderit deserunt repellendus, illum officiis cupiditate quidem
          quas! Tempora repudiandae numquam nesciunt assumenda impedit, amet
          libero accusamus alias ut ab ex consequatur dolores cum rerum odit
          architecto cupiditate sapiente cumque unde quasi animi officia optio?
          Nobis vel ipsa dolores! At quaerat vel quasi soluta numquam atque
          quibusdam voluptates ratione quod sint, eos voluptate ducimus.
        </p>
      </div>
    </div>
  );
};

export default Act1;
