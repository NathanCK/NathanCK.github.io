import manyDevices from "./img/many-for-web-dev.jpg";
import helloWorld from "./img/hello_world.png";
import reactIcon from "./img/icons/reactjs_icon.svg";
import frontendMeme from "./img/frontend_meme.gif";

const blogs = [
  {
    date: "Apr 9th, 2021",
    current: {
      img: reactIcon,
      text: `Yes! I have brought React to this website. Now it is a 
      one-page website, and I have re-implemented all the pages using React.js 
      and JSX. 
      Also, I have bulit my little blog section here with navigation buttons for 
      switching the blogs I have written. The whole process was 
      quite fun because I had a chance to learn a completely new thing and was 
      able to apply the skill on my website. I can tell that React.js will help 
      me a lot as the website gets more and more features, tabs, and contents 
      because I can split the large sections into smaller pieces and re-use the 
      modules.`,
    },
    next: {
      img: frontendMeme,
      text: `Although React.js is useful, there are still a lot of things to do, 
      and the whole point of React.js is not just itself, but the whole communty 
      that React.js has, and of course the libraries that use React.js and are 
      used with React.js, such as, Redux, Material Kit React, and React 
      Virtualized, etc. I am going to explore the React communty and see waht 
      interesting and useful libraries I can try on my website, such as, UI 
      libraries, or libraries for animation, etc. Also, I will work on adding 
      more tabs and information about myself while making the website more 
      responsive and user friendly. If there is sometime, I may learn more 
      about CSS too because it also a huge topic.`,
    },
  },

  {
    date: "Mar 9th, 2021",
    current: {
      img: helloWorld,
      text: `This website used HTML, CSS, and Javascript as the main stacks.
                Although it heavily used CSS for the effect, including the hover
                over effect and the flipping effect, I used Javascript as a
                “simple database” to store my experience information and to
                create the HTML elements, so that it is easier to manipulate and
                work with. The project is definitely not ended yet, and it still
                has a long way to go.`,
    },
    next: {
      img: manyDevices,
      text: `This is yet a completely responsive website, which means under
                some specific resolution, especially for mobile, the website is
                not going to build well. Also, graphs are not optimized for
                mobile environments yet. Currently, I started to learn React.js
                as one of the most popular frontend framework, and I will try to
                apply what I learn on my website for a more responsive and
                better solution. Also, I am going to add more information about
                myself, so anyone can know better about me on this website.`,
    },
  },
];

export default blogs;
